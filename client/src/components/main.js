import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DataTable from './table';
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
            <TableBreadCrumb />
            <TableControls />
            <DataTable />
            <TablePagination />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
