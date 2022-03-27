import React from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const AddNewAnime = () => {

    return (
        <Container className='bg-light'>
            <Col>
                <Row className="bg-light addnewanime-size addnewanime-bg text-dark">
                    <Col className="m-auto p-4 bg-light bg-opacity-75" xs="8">
                        <Form>
                            <FormGroup>
                                <Label for="title">Anime Name</Label>
                                <Input
                                    placeholder="Enter the text"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Anime Image URL</Label>
                                <Input
                                    placeholder="Enter the URL"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">Anime Name</Label>
                                <Input
                                    placeholder="Enter the description"
                                    type="textarea"
                                />
                            </FormGroup>
                            <Button className="mt-3 mb-2 bg-primary">Add this to the list</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default AddNewAnime
