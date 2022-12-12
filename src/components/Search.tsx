import { Container, Row, Col, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

function Search() {
    const notify = () => toast.success('Here is your toast.');
    return (
        <Row>
            <Col>1 of 3</Col>
            <Col>
                <Container className='pt-5'>
                    <Button onClick={notify}>toast success!</Button>
                    <Toaster />
                </Container>
            </Col>
            <Col>3 of 3</Col>
        </Row>
    );
}

export default Search;