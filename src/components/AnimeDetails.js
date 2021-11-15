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

const AnimeDetails = () => {
    const [dropDownOpen, setDropDownOpen] = React.useState(false);

    const toggle = () => { setDropDownOpen(!dropDownOpen) }

    return (
        <>
            <Container className="my-4 mb-0 anime-details" fluid="xl">
                <Col>
                    <Row className="br-light anime-bg">

                    </Row>

                    <Row className="anime-text bg-light text-dark">
                        <Col xs="2"></Col>
                        <Col xs="8">
                            <h1 className="text-center">To the moon for you</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque soluta, eum eos quibusdam vero, ipsum veniam facere eaque laudantium recusandae harum, ducimus tempora voluptatum consectetur libero mollitia. Non, quibusdam?
                                Voluptatem, ducimus consectetur et molestias beatae non iste? Beatae et illo dolorum dolore mollitia fuga perferendis laudantium quae dolores? Nostrum officiis deserunt aliquam amet rerum aspernatur ipsa fuga laudantium porro?
                                Ullam quod consequatur voluptas distinctio accusantium est tempore. Rem iusto quis ipsa itaque consequuntur fugiat amet, ex et blanditiis a modi adipisci nihil debitis id incidunt deleniti enim. Soluta, sit!
                                Nam, molestias! Magni quidem, esse quos et ea, nostrum alias incidunt quasi aut sint tempore rem.
                                <br />
                                <br />
                                Aliquam suscipit accusantium ullam inventore nulla laboriosam. Nulla, alias aspernatur rerum officiis ab labore?
                                Culpa nihil corrupti vel cupiditate impedit, pariatur odio libero tempore facere aliquam ipsa, quaerat veritatis quos autem natus eligendi dolores tempora nobis neque nostrum. Amet ipsa magni quas molestias debitis!
                                Numquam corrupti odit totam, sapiente minima voluptas suscipit quod eos nihil consequatur tenetur quibusdam illo porro tempora cumque dolore harum, earum, optio soluta enim. Obcaecati itaque sunt ut fugit doloremque!
                                Reiciendis quaerat beatae architecto quas quisquam incidunt laboriosam deserunt tempore officiis dicta enim laudantium inventore magni mollitia minus corporis eligendi vel molestias, voluptates eos blanditiis porro cupiditate eveniet? Autem, reiciendis!
                                Consequuntur architecto ullam quasi quibusdam enim qui ratione ipsa, voluptates excepturi, sint amet impedit nisi sit aliquam esse ipsum, corporis numquam. Eligendi, maiores voluptatem? Illum suscipit sunt fugiat iure maxime?
                                Laboriosam alias nisi molestias corrupti velit, maiores sit illum veniam deserunt. Molestias vero deserunt hic, consequuntur saepe laboriosam, eligendi iusto dolor dolorum quas consequatur, ipsa doloribus pariatur accusantium maiores sapiente!
                                <br />
                                <br />
                                Aut, vitae unde, minima, perspiciatis nihil consequuntur rem voluptatum tempore fugiat delectus ipsa atque id. Excepturi dignissimos culpa quidem facilis ipsam eos possimus non odio, aperiam magni beatae exercitationem ipsum?
                            </p>

                            <Col className="border py-3 edit-text">
                                <h5>Do you want to edit it out ?</h5>
                                <Button className="m-2 bg-primary text-white" onClick={toggle}>
                                    Edit the description
                                </Button>
                            </Col>


                            {
                                dropDownOpen ?
                                    <Col className="border rounded p-3 my-4">
                                        <Form className="text-left" xs="12">
                                            <FormGroup>
                                                <Label for="title">Anime Name</Label>
                                                <Input
                                                    placeholder="Anime name...."
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="title">Anime Description</Label>
                                                <Input
                                                    placeholder="Add description...."
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                        </Form>
                                        <Button className="mt-3 mb-2 bg-primary">Update description</Button>
                                        <Button className="mt-3 mb-2 m-4 bg-danger align">Delete description</Button>
                                    </Col> : <></>
                            }

                        </Col>
                        <Col xs="2"></Col>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default AnimeDetails
