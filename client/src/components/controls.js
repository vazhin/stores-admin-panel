import React from 'react';
import {
  ButtonToolbar,
  Dropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';
import CreateItemModal from './modal';

const TableControls = ({ table }) => {
  const [modalShow, setModalShow] = React.useState(false);

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
            <Dropdown.Item href="#">Name</Dropdown.Item>
            <Dropdown.Item href="#">Date Created</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        + Add Item
      </Button>

      <CreateItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        table={table}
        mode={'add'}
      />
    </ButtonToolbar>
  );
};

export default TableControls;
