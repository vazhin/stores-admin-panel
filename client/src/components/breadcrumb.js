import React from 'react';
import { useHistory } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const TableBreadCrumb = ({ table }) => {
  let history = useHistory();

  return (
    <Breadcrumb>
      {table === 'stores' && (
        <Breadcrumb.Item active href="/stores">
          Stores
        </Breadcrumb.Item>
      )}

      {table === 'categories' && (
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

      {table === 'products' && (
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
