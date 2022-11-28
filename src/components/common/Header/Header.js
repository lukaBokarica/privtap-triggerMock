import React from "react";
import "./Header.css";
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    Trigger mock
                </Navbar.Brand>
            </Container>
        </Navbar>
    );

}

export default Header;
