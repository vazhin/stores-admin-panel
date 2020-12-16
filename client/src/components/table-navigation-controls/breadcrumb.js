import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const TableBreadCrumb = () => {
  let history = useHistory();
  const page = useSelector((state) => state.page);

  return (
    <Breadcrumb>
      {page === 'stores' && (
        <Breadcrumb.Item active href="/stores">
          Stores
        </Breadcrumb.Item>
      )}

      {page === 'categories' && (
        <>
          <Breadcrumb.Item
            href="/stores"
            onClick={() => history.push('/stores')}
          >
            Stores
          </Breadcrumb.Item>
          <Breadcrumb.Item active href="/categories">
            Categories
          </Breadcrumb.Item>
        </>
      )}

      {page === 'products' && (
        <>
          <Breadcrumb.Item
            href="/stores"
            onClick={() => history.push('/stores')}
          >
            Stores
          </Breadcrumb.Item>
          <Breadcrumb.Item active href="/categories">
            Categories
          </Breadcrumb.Item>
          <Breadcrumb.Item active href="/products">
            Products
          </Breadcrumb.Item>
        </>
      )}
    </Breadcrumb>
  );
};

export default TableBreadCrumb;
