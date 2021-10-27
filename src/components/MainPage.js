import React from 'react'
import {
    Container,
    Col,
    Row,
    Jumbotron,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardImg,
    Button,
} from 'reactstrap'
//import AnimeImage from '';
const MainPage = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
                        {
                            numbers.map(item => (
                                <Card className="m-4" color="secondary">
                                    <CardBody className="card-align">
                                    <CardImg style={{ 'width':'50px', 'height':'50px' }} src={"https://freepngimg.com/thumb/anime/9-2-anime-png-hd-thumb.png"} alt="anime image"/>
                                        <CardTitle className="m-3" tag="h5">Card title</CardTitle>
                                        <CardText className="m-3">The Image width and all of that is a temporary setup. It will be replaced with the according to the design requirement.</CardText>
                                        <Button color="primary">View Details</Button>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage
