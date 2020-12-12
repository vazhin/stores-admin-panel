import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import db from '../services/dataService';

const CreateItemForm = ({ table, mode, itemClicked }) => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const formData = new FormData();
  const previousId = useSelector((state) => state.previousId);
  const data = useSelector((state) => state.data);

  const itemClickedData = data.items.find(
    (item) => item.id === parseInt(itemClicked)
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      await db.create(formData, table);
      history.go(0);
    }

    setValidated(true);
  };

  switch (table) {
    case 'stores':
      formData.append('name', '');
      formData.append('logo', '');
      break;

    case 'categories':
      formData.append('name', '');
      formData.append('image', '');
      formData.append('storeId', previousId);
      break;

    case 'products':
      formData.append('name', '');
      formData.append('price', '');
      formData.append('quantity', '');
      formData.append('image', '');
      formData.append('categoryId', previousId);
      break;

    default:
      break;
  }

  const fields = [];
  for (var key of formData.keys()) {
    fields.push(key);
  }

  return (
    <>
      {fields.length !== 0 && (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {fields.map((field, i) =>
            ['logo', 'image'].includes(field) ? (
              <Form.Group key={i}>
                <Form.Label>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Form.Label>
                <Form.File id="formcheck-api-custom" custom>
                  <Form.File.Input
                    required
                    onChange={(e) => formData.set(field, e.target.files[0])}
                  />
                  <Form.File.Label>Choose Image</Form.File.Label>
                  <Form.Control.Feedback type="invalid">
                    You must upload an image
                  </Form.Control.Feedback>
                </Form.File>
              </Form.Group>
            ) : (
              <>
                {['storeId', 'categoryId'].includes(field) ? (
                  <p key={i} />
                ) : (
                  <Form.Group key={i} controlId="validationCustom01">
                    <Form.Label>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder={`${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`}
                      onChange={(e) => formData.set(field, e.target.value)}
                      defaultValue={
                        itemClickedData ? itemClickedData[field] : ''
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      The {field} must not be empty
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              </>
            )
          )}

          <Button type="submit">Add Item</Button>
        </Form>
      )}
    </>
  );
};

export default CreateItemForm;
