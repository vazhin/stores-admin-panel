import React from 'react';
import { Dropdown } from 'react-bootstrap';

const OrderByDropdown = () => {
  return (
    <Dropdown className="mr-3">
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Order By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Name</Dropdown.Item>
        <Dropdown.Item href="#">Date Created</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default React.memo(OrderByDropdown);
