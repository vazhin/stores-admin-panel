import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  );
};

export default React.memo(SearchBox);
