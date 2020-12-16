import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const TableBreadCrumb = () => {
  let history = useHistory();
  const page = useSelector((state) => state.page);

  return (
    <Breadcrumb>
      {page === 'stores' && <Breadcrumb.Item active>Stores</Breadcrumb.Item>}

      {page === 'categories' && (
        <>
          <Breadcrumb.Item onClick={() => history.goBack()}>
            Stores
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Categories</Breadcrumb.Item>
        </>
      )}

      {page === 'products' && (
        <>
          <Breadcrumb.Item onClick={() => history.push('/')}>
            Stores
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => history.goBack()}>
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

export default React.memo(TableBreadCrumb);
