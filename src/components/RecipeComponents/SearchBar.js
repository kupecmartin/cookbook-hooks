import React from "react";
import PropTypes from "prop-types";
import {Form, Col, Row} from "react-bootstrap";

export function SearchBar(props) {
  const {value, isChecked, onInputChange, onCheckboxChange} = props;
  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Form.Control
          // style={{width: "auto", textAlign: "center"}}
          type="text"
          value={value}
          onChange={onInputChange}
          placeholder="Zadajte názov receptu"
        />
      </Form.Group>
        <Form.Group controlId="formTime">
          <Form.Check
            type="checkbox"
            checked={isChecked}
            onChange={onCheckboxChange}
            inline label="Čas prípravy do 30 minút"
          />
        </Form.Group>
       </Form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  value: "",
  isChecked: false
};
