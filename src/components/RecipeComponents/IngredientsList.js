import React, {useState} from "react";
import {Table, Form, Alert} from "react-bootstrap";


export const IngredientsList = props => {
  const [eater , setEater] = useState(props.servingCount);
  const {ingredients} = props;

  const amountPerEater = eater/props.servingCount;

  const inputChangeHandler = (event) => {
    setEater(event.target.value);
  };

  if (!ingredients || !ingredients.length) {
    return <Alert>Žádné ingredience.</Alert>;
  }

  return (
    <div>
    <Form display="flex" mb={2}>
      <Form.Group controlId="exampleForm.SelectCustomSizeSm">
      <Form.Label >Počet porcí</Form.Label>
        <Form.Control
          type="number"
          value={!eater ? '' : eater}
          onChange={inputChangeHandler}
          min={1}
        />
      </Form.Group>
    </Form>
    <Table className="table-hover"  >
      <thead>
      <tr>
        <th>Ingrediencia</th>
        <th>Množstvo</th>
      </tr>
      </thead>
      <tbody>
      {ingredients.map(ingredient => {
        const {_id: id, isGroup, name, amount, amountUnit} = ingredient;
        if (isGroup) {
          return (
            <tr key={id}>
              <td> {name}</td>
            </tr>
          );
        }
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount * amountPerEater} {amountUnit}</td>
          </tr>
        );
      })}
      </tbody>
    </Table>
    </div>
  );
};
