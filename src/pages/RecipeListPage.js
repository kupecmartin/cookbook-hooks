import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";

import {api} from "../api";

import {RecipeList} from "../components/RecipeList/RecipeList";
import {Paginator} from "../components/Paginator/Pagination";
import {SearchBar} from "../components/RecipeComponents/SearchBar";

export const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [isChecked, setIsChecked] = useState(false);
  const [searchString, setSearchString] = useState("");

  //getting data from api
  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const response = await api.get("/recipes");
      setRecipes(response.data);
      setError(response.problem);
      setIsLoading(false);

    };

    fetchRecipes().then(r => recipes);
  }, [recipes]);


  //searchInput handler
  const handleInputChange = event => {
    setSearchString(event.target.value);
  };
  //checkbox handler
  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };

  //Filter recipes
  const filterRecipes = recipe => {
    const {title, preparationTime} = recipe;
    const isInTimeFrame = !isChecked || preparationTime < 30;
    const containsSearchString =
      title.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
    return isInTimeFrame && containsSearchString;
  };

  const filteredRecipes = recipes && recipes.filter(filterRecipes);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const lengthOfFilteredRecipes = filteredRecipes.length;

  //Get current Recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <Container>
      <h3 style={{marginTop: "15px"}}>
        Nájdených {lengthOfFilteredRecipes} receptov
      </h3>
      <SearchBar
        value={searchString}
        isChecked={isChecked}
        onInputChange={handleInputChange}
        onCheckboxChange={handleCheckboxChange}
        recipesLength={lengthOfFilteredRecipes}
      />
      < RecipeList
        isLoading={isLoading}
        error={error}
        recipes={currentRecipes}
      />
      <Paginator
        recipesPerPage={recipesPerPage}
        lengthOfFilteredRecipes={lengthOfFilteredRecipes}
        paginate={paginate}
        currentPage={currentPage}
        indexOfLastRecipe={indexOfLastRecipe}
      />
    </Container>
  );
};


