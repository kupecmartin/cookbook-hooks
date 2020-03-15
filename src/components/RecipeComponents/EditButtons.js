import {Button} from "react-bootstrap";
import React from "react";

export const EditButtons = props => {
  const {slug} = props;

  return (
    <div className="m-auto" >
      <Button href={`/recipe-edit/${slug}`}>
        Upraviť
      </Button>{' '}
      <Button variant="danger" size="md">
        Zmazať
      </Button>
    </div>
  );
};

