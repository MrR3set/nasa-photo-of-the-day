import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Nasa photo of the day!</h1>
          <p className="lead">Fetching the data out of the NASA Apod api!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;