import React from 'react';
import {
  ButtonToolbar,
  Dropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';

const TableControls = () => {
  return (
    <ButtonToolbar
      className="justify-content-between mb-3"
      aria-label="Toolbar with Button groups"
    >
      <div className="d-flex">
        <Dropdown className="mr-3">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Order By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>

      <Button variant="primary"> + Add Item</Button>
    </ButtonToolbar>
  );
};

export default TableControls;
