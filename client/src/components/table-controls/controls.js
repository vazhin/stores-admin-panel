import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import CreateItemModal from '../modals/modal';
import OrderByDropdown from './orderByDropdown';
import SearchBox from './searchBox';

const TableControls = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar
      className="justify-content-between mb-3"
      aria-label="Toolbar with Button groups"
    >
      <div className="d-flex">
        <OrderByDropdown />
        <SearchBox />
      </div>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        + Add Item
      </Button>

      <CreateItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        mode={'add'}
      />
    </ButtonToolbar>
  );
};

export default React.memo(TableControls);
