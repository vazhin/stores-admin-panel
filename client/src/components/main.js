import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import ProductsPage from './pages/products';
import CategoriesPage from './pages/categories';
import StoresPage from './pages/stores';

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
              <Route path="/categories/:storeId" component={CategoriesPage} />
              <Route path="/products/:categoryId" component={ProductsPage} />
              <Route path="/" component={StoresPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default React.memo(Main);
