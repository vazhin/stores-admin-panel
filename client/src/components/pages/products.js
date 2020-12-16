import React, { useEffect } from 'react';
import DataTable from './table';
import TableBreadCrumb from '../table-navigation-controls/breadcrumb';
import TablePagination from '../table-navigation-controls/pagination';
import TableControls from '../table-controls/controls';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setPage, setPreviousId } from '../../redux/actions';
import db from '../../services/dataService';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { categoryId } = useParams();

  useEffect(() => {
    retrieveItems();

    // eslint-disable-next-line
  }, []);

  const retrieveItems = async () => {
    try {
      const category = await db.getById(categoryId, 'categories');
      const products = await db.getAllById(
        categoryId,
        'categories',
        data.pageNum ? data.pageNum : 1
      );
      dispatch(setPreviousId(category.data.id));
      dispatch(setData(products.data));
      dispatch(setPage('products'));
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

export default React.memo(ProductsPage);
