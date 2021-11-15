import React from 'react'
import {
    Container,
    Col,
    Row,
    Jumbotron
} from 'reactstrap'
//import AnimeImage from '';
import AnimeList from './AnimeList'
const MainPage = () => {
    
    return (
        <div>
            <Jumbotron className=" main-container" fluid>
                <Container fluid>
                    <h1 className="display-2 text-center" >
                        Welcome weeb-kun to the anime tracker app
                    </h1>
                </Container>
            </Jumbotron>

            <Container className="list-container">
                <Row>
                    <Col className="p-4" xs="12">
                        <h3>Upcomming anime list</h3>
                        <AnimeList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage
