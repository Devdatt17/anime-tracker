import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardImg,
    Button,
    Pagination,
    PaginationLink,
    PaginationItem


} from 'reactstrap'

const AnimeList = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="list-container">
            <Pagination size="lg">
                <PaginationItem>
                    <PaginationLink
                        first
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        previous
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        last
                    />
                </PaginationItem>
            </Pagination>
            {
                numbers.map(item => (
                    <Card className="m-4" color="secondary">
                        <CardBody className="card-align">
                            <CardImg style={{ 'width': '50px', 'height': '50px' }} src={"https://freepngimg.com/thumb/anime/9-2-anime-png-hd-thumb.png"} alt="anime image" />
                            <CardTitle className="m-3" tag="h5">Card title</CardTitle>
                            <CardText className="m-3">The Image width and all of that is a temporary setup. It will be replaced with the according to the design requirement.</CardText>
                            <Button color="primary">
                                <Link className="link" to="/anime">View Details</Link>
                            </Button>
                        </CardBody>
                    </Card>
                ))
            }
        </div >

    )
}

export default AnimeList
