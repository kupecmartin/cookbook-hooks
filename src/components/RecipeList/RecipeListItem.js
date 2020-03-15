import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Col, Card} from "react-bootstrap";

//mozno iny format kvoli velkosti
import Image from "../../assets/foodplaceholder.jfif";

import {Title} from "../RecipeComponents/Title";
import {SideDish} from "../RecipeComponents/SideDish";
import {TimeConversion} from "../RecipeComponents/TimeConversion";

export const RecipeListItem = (props) => {
  const {slug, title, sideDish, time} = props;

  return (

    <Col xs="12" sm="6" md="4" lg="3" className="recipe" >
      <Link to={`/recipe/${slug}`} >
        <Card text="info" border="secondary" >
          <Card.Img variant="top" src={Image}/>
          <Card.Header>
            <Title title={title}/>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {sideDish ?
                <SideDish sideDish={sideDish}/>
                : "Podávané bez prílohy"}
            </Card.Text>
            <Card.Text>
              <TimeConversion
                time={time}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

RecipeListItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

RecipeListItem.defaultProps = {
  time: 0
};
