import React from "react";
import PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";

import {RecipeListItem} from "./RecipeListItem";
import {LoadingAnimation} from "../common/LoadingAnimation";
import {ErrorAlert} from "../common/ErrorAlert";


export function RecipeList(props) {
  const {recipes, isLoading, error} = props;

  if (isLoading) {
    return <LoadingAnimation/>;
  }

  if (error) {
    return <ErrorAlert/>;
  }

  return (
    <Container>
      <Row style={{marginTop: "15px"}}>
        {recipes.map(recipe => {
          const {_id, title, preparationTime, slug, sideDish} = recipe;
          return (
            <RecipeListItem
              key={_id}
              title={title}
              time={preparationTime}
              slug={slug}
              sideDish={sideDish}
            />
          );
        })}
      </Row>
    </Container>
  );
}

RecipeList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  recipes: PropTypes.array.isRequired,
  error: PropTypes.string
};
