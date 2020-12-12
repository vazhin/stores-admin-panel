import React from 'react';
import { ButtonToolbar, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/actions';

const TablePagination = ({ table }) => {
  const data = useSelector((state) => state.data);

  return (
    <ButtonToolbar
      className="justify-content-between align-items-center mt-3"
      aria-label="Toolbar with Button groups"
    >
      <p>Showing 8 of {data.pageNum}</p>

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
