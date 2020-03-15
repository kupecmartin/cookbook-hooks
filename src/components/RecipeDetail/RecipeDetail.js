import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Container, Row, Col, Media, Button} from "react-bootstrap";

import {LoadingAnimation} from "../common/LoadingAnimation";
import {ErrorAlert} from "../common/ErrorAlert";
import {TimeConversion} from "../RecipeComponents/TimeConversion";
import {EditButtons} from "../RecipeComponents/EditButtons";
import {DirectionsList} from "../RecipeComponents/DirectionsList";
import {IngredientsList} from "../RecipeComponents/IngredientsList";
import {RecipeFooter} from "../RecipeComponents/RecipeFooter";
// import {Title} from "../RecipeComponents/Title";
// import {SideDish} from "../RecipeComponents/SideDish";



/**
 * @return {null}
 */
export const RecipeDetail = (props) => {
  const {isLoading, recipe, error} = props;
  const {
    directions,
    ingredients,
    lastModifiedDate,
    preparationTime,
    servingCount,
    sideDish,
    slug,
    title
  } = recipe || {};

  if (error) {
    return <ErrorAlert/>;
  }

  if (isLoading) {
    return <LoadingAnimation/>;
  }

  if (!directions) {
    return null;
  }

  return (
    <div>
      <Media>
      <Media.Body style={{marginTop: "15px"}}>
        <h5>{title}</h5>
        <p>
          <TimeConversion
            time={preparationTime}
          />
        </p>
      </Media.Body>
       <EditButtons
          slug={slug}
       />

      </Media>
      <Container>
        <Row>
          <Col>
            <IngredientsList
              servingCount={servingCount}
              ingredients={ingredients}
            />
            <RecipeFooter
              lastModifiedDate={lastModifiedDate}
            />
          </Col>
          <Col>
            <DirectionsList
              directions={directions}
            />
            <div>
              Odporúčaná príloha: {sideDish ? sideDish
              : "Podávané bez prílohy"}
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

RecipeDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  recipe: PropTypes.object,
  error: PropTypes.string

};

