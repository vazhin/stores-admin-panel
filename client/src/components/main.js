import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import StoreTable from './storeTable';
import CategoryTable from './categoryTable';
import ProductTable from './productTable';
import TableControls from './controls';
import TableBreadCrumb from './breadcrumb';
import TablePagination from './pagination';

const Main = () => {
  return (
    <main
      className="d-flex justify-content-center align-items-center px-lg-5 px-0"
      style={{ height: '100vh' }}
    >
      <Container fluid>
        <Row>
          <Col>
            <Switch>
              <Route path="/categories">
                <TableBreadCrumb table={'categories'} />
                <TableControls table={'categories'} />
                <CategoryTable />
                <TablePagination table={'categories'} />
              </Route>

              <Route path="/products">
                <TableBreadCrumb table={'products'} />
                <TableControls table={'products'} />
                <ProductTable />
                <TablePagination table={'products'} />
              </Route>

              <Route path="/">
                <TableBreadCrumb table={'stores'} />
                <TableControls table={'stores'} />
                <StoreTable />
                <TablePagination table={'stores'} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
