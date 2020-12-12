import React from 'react';
import { ButtonToolbar, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../redux/actions/actions';

const TablePagination = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const pageCount = useSelector((state) => state.pageCount);
  const itemCount = useSelector((state) => state.itemCount);
  const items = useSelector((state) => state.items);

  return (
    <ButtonToolbar
      className="justify-content-between align-items-center mt-3"
      aria-label="Toolbar with Button groups"
    >
      <p>Showing 8 of {itemCount}</p>

      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis disabled />

        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>

        <Pagination.Ellipsis disabled />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </ButtonToolbar>
  );
};

export default TablePagination;
