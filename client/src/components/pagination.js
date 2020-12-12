import React from 'react';
import { ButtonToolbar, Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TablePagination = ({ table }) => {
  const data = useSelector((state) => state.data);

  return (
    <>
      {data.items && (
        <ButtonToolbar
          className="align-items-center mt-3"
          aria-label="Toolbar with Button groups"
        >
          <h6 className="mr-4">
            Page {data.pageNum} of {data.pageCount}
          </h6>
          <Pagination>
            {data.pageNum >= 4 && (
              <>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis disabled />
              </>
            )}

            {data.pageNum !== 1 && (
              <Pagination.Item>{data.pageNum - 1}</Pagination.Item>
            )}
            <Pagination.Item active>{data.pageNum}</Pagination.Item>
            {data.pageCount > data.pageNum && (
              <Pagination.Item>{data.pageNum + 1}</Pagination.Item>
            )}

            {data.pageNum + 2 !== data.pageCount && (
              <Pagination.Ellipsis disabled />
            )}
            <Pagination.Item>{data.pageCount}</Pagination.Item>
          </Pagination>
        </ButtonToolbar>
      )}
    </>
  );
};

export default TablePagination;
