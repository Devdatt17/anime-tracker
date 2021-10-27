import React from 'react'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Input,
    InputGroupAddon,
    InputGroup
} from 'reactstrap'

const AnimeNavbar = () => {
    return (
        <Navbar color="dark" dark className="mr-auto p-3">
            <NavbarBrand href="/">Anime Tracker</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink>
                        <InputGroup>
                            <Input type="text" placeholder="Search anime" />
                            <InputGroupAddon addonType="prepend">
                                <Button color="primary" size="md">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Button color="primary" size="md">Anime List</Button>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Button color="primary" size="md">Sign In</Button>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default AnimeNavbar
