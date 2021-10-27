import React from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const AnimeDetails = () => {
    return (
        <div>
            <Container className="px-4 pt-4" fluid>
                <Row>
                    <Col className="anime-details" xs="12">
                        <Col className="anime-bg"></Col>
                        <Col className="anime-text">
                            <h1>To the end of the world for you</h1>
                            <p>This is a drama, romance and comedy anime with little bit of slice of life aspect to it.</p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AnimeDetails
