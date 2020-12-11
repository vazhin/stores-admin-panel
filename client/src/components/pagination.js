import React from 'react';
import { ButtonToolbar, Pagination } from 'react-bootstrap';

const TablePagination = () => {
  return (
    <ButtonToolbar
      className="justify-content-between align-items-center mt-3"
      aria-label="Toolbar with Button groups"
    >
      <p>Showing 5 of 7</p>

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis disabled />

        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>

        <Pagination.Ellipsis disabled />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </ButtonToolbar>
  );
};

export default TablePagination;
