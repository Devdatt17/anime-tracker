import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap'

const AnimeFooter = () => {
    return (
        <Navbar color="dark" dark className="p-2">
                <NavbarBrand href="/">&copy; 2021 | Devdatt Pandit</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink>
                            <Button style={{ 'borderRadius':'100%' }} color="primary" size="md">G</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Button style={{ 'borderRadius':'100%' }} color="primary" size="md">Fb</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Button style={{ 'borderRadius':'100%' }} color="primary" size="md">Tw</Button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
    )
}

export default AnimeFooter
