import React, {useState, useEffect} from "react";
import {Container} from "react-bootstrap";

import {api} from "../api";

import { RecipeDetail } from "../components/RecipeDetail/RecipeDetail";

export const RecipeDetailPage = (props) => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //getting data from api
  useEffect(() => {
    const {params} = props.match || {};
    const {slug} = params || {};
    const fetchRecipe = async () => {
      setIsLoading(true);
      const response = await api.get(`/recipes/${slug}`);
      setRecipe(response.data);
      setError(response.problem);
      setIsLoading(false);
    };

    fetchRecipe().then(r => recipe);
  }, [/*props.match,recipes*/]);

  return (
    <Container>
      <RecipeDetail
        recipe={recipe}
        isLoading={isLoading}
        error={error}
      />
    </Container>
  );
};


