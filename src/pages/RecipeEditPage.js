import React from 'react';
import {Jumbotron} from "react-bootstrap";
import {Link} from "react-router-dom";


export const RecipeEditPage = () => {

  return (
    <Jumbotron>
      <h4>Editujeme</h4>
      <p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go to Home Page
        </Link>
      </p>
    </Jumbotron>
  );
};

