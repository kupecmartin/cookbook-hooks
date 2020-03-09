import React from "react";
import "../../App.css";


//Center Paginator
const style={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
 };

export const Paginator = ({
    recipesPerPage,
    lengthOfFilteredRecipes,
    paginate,
    currentPage,
    indexOfLastRecipe
}) => {
  const pageNumbers = [];

  for(let i =1; i <= Math.ceil(lengthOfFilteredRecipes / recipesPerPage );i++) {
      pageNumbers.push(i);
  }

  let lastPage = Math.ceil(lengthOfFilteredRecipes/recipesPerPage);

  return (
  <div>
    <ul className="pagination" style={style}>
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <a onClick={() => paginate(number)} className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
    <span style={style}>Strana {currentPage} z {lastPage}</span>
  </div >
  );
}


