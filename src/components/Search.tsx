import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search() {
  return (
      <Row>
        <Col>1 of 3</Col>
        <Col>
        <Container> todo </Container>
        </Col>
        <Col>3 of 3</Col>
      </Row>
  );
}

export default Search;