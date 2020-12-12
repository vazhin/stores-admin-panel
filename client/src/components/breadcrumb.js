import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const TableBreadCrumb = ({ table }) => {
  return (
    <Breadcrumb>
      {table === 'stores' && (
        <Breadcrumb.Item active href="/stores">
          Stores
        </Breadcrumb.Item>
      )}

      {table === 'categories' && (
        <>
          <Breadcrumb.Item href="/stores">Stores</Breadcrumb.Item>
          <Breadcrumb.Item active href="/categories">
            Categories
          </Breadcrumb.Item>
        </>
      )}

      {table === 'products' && (
        <>
          <Breadcrumb.Item href="/stores">Stores</Breadcrumb.Item>
          <Breadcrumb.Item href="/categories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active href="/products">
            Products
          </Breadcrumb.Item>
        </>
      )}
    </Breadcrumb>
  );
};

export default TableBreadCrumb;
