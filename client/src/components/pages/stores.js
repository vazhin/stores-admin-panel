import React, { useEffect } from 'react';
import DataTable from './table';
import TableBreadCrumb from '../table-navigation-controls/breadcrumb';
import TablePagination from '../table-navigation-controls/pagination';
import TableControls from '../table-controls/controls';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setPage } from '../../redux/actions';
import db from '../../services/dataService';

const StoresProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    retrieveItems();

    // eslint-disable-next-line
  }, []);

  const retrieveItems = async () => {
    try {
      const response = await db.getAll(
        'stores',
        data.pageNum ? data.pageNum : 1
      );
      dispatch(setData(response.data));
      dispatch(setPage('stores'));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TableBreadCrumb />
      <TableControls />
      <DataTable />
      <TablePagination />
    </>
  );
};

export default React.memo(StoresProducts);
