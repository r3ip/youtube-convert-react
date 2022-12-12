import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

function Search() {
    const notify = () => toast.success('Here is your toast.');
    return (
        <Row>
            <Col>
            </Col>
            <Col xs={8}>
                <Container className='pt-5'>
                    <Form>
                            <Form.Group as={Row} className="mb-3 justify-content-center mx-auto" controlId="formPlaintextEmail">
                                <Col sm="6">
                                <Form.Control type="text" placeholder="URL Youtube" />
                                </Col>
                                <Col sm="2">
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">MP3</option>
                                            <option value="2">MP4</option>
                                            <option value="3">FLV</option>
                                        </Form.Select>
                                </Col>
                                <Col sm="3">
                                    <Button className='w-50' onClick={notify}>OK</Button>
                                    <Toaster />
                                </Col>
                            </Form.Group> 
                            
                    </Form>
                </Container>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Search;