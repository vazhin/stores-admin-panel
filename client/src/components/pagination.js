import React from 'react';
import { ButtonToolbar, Pagination } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../redux/actions';
import db from '../services/dataService';

const TablePagination = ({ table }) => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const retrieveItems = async (table, pageNum) => {
    try {
      const response = await db.getAll(table, pageNum);
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

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
            {data.pageNum - 2 >= 1 && (
              <>
                <Pagination.Item onClick={() => retrieveItems(table, 1)}>
                  {1}
                </Pagination.Item>
                <Pagination.Ellipsis disabled />
              </>
            )}

            {data.pageNum > 1 && (
              <Pagination.Item
                onClick={() => retrieveItems(table, data.pageNum - 1)}
              >
                {data.pageNum - 1}
              </Pagination.Item>
            )}
            <Pagination.Item active>{data.pageNum}</Pagination.Item>
            {data.pageCount > data.pageNum && (
              <Pagination.Item
                onClick={() => retrieveItems(table, data.pageNum + 1)}
              >
                {data.pageNum + 1}
              </Pagination.Item>
            )}

            {data.pageNum + 2 <= data.pageCount && (
              <>
                <Pagination.Ellipsis disabled />
                <Pagination.Item
                  onClick={() => retrieveItems(table, data.pageCount)}
                >
                  {data.pageCount}
                </Pagination.Item>
              </>
            )}
          </Pagination>
        </ButtonToolbar>
      )}
    </>
  );
};

export default TablePagination;
