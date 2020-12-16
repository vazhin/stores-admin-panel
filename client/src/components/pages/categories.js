import React, { useEffect } from 'react';
import DataTable from './table';
import TableBreadCrumb from '../table-navigation-controls/breadcrumb';
import TablePagination from '../table-navigation-controls/pagination';
import TableControls from '../table-controls/controls';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setPage, setPreviousId } from '../../redux/actions';
import db from '../../services/dataService';
import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { storeId } = useParams();

  useEffect(() => {
    retrieveItems();

    // eslint-disable-next-line
  }, []);

  const retrieveItems = async () => {
    try {
      const store = await db.getById(storeId, 'stores');
      const response = await db.getAllById(
        storeId,
        'stores',
        data.pageNum ? data.pageNum : 1
      );
      dispatch(setPreviousId(store.data.id));
      dispatch(setData(response.data));
      dispatch(setPage('categories'));
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

export default React.memo(CategoriesPage);
