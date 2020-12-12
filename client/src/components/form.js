import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateItemForm = ({ table }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  const fields = [];

  switch (table) {
    case 'stores':
      fields.push('name', 'logo');
      break;
    case 'categories':
      fields.push('name', 'image');
      break;
    case 'products':
      fields.push('name', 'price', 'quantity', 'image');
      break;
    default:
      break;
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {fields.map((field, i) =>
        ['logo', 'image'].includes(field) ? (
          <Form.Group>
            <Form.Label>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Form.Label>
            <Form.File id="formcheck-api-custom" custom>
              <Form.File.Input required />
              <Form.File.Label>Choose Image</Form.File.Label>
              <Form.Control.Feedback type="invalid">
                You must upload an image
              </Form.Control.Feedback>
            </Form.File>
          </Form.Group>
        ) : (
          <Form.Group controlId="validationCustom01">
            <Form.Label>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}`}
              // defaultValue="Mark"
            />
            <Form.Control.Feedback type="invalid">
              The {field} must not be empty
            </Form.Control.Feedback>
          </Form.Group>
        )
      )}

      <Button type="submit">Add Item</Button>
    </Form>
  );
};

export default CreateItemForm;
