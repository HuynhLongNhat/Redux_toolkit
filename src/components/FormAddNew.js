import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const FormAddNew = () => {
    return (<>
        <Container>
            <Container>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" c>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>

        </Container>

    </>);
}

export default FormAddNew;