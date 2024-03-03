import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Code from "./Code.png";

const BlogNav  = () => {

    const myStyle = {
        color: "black",
        backgroundColor: "rgb(255, 165, 0)",
        padding: "10px",
        fontFamily: "Sans-Serif",
        fontweight: "bold",
        margin: "5px"
        };

        const data = {
            color: "white",
            fontweight: "bold",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            margin: "5px"
        };

        const alg = {
            color: "darkred",
            fontweight: "bold",
            backgroundColor: "green",
            padding: "10px",
            margin: "5px"
        };

        const com = {
            color: "darkblue",
            fontweight: "bold",
            backgroundColor: "grey",
            padding: "10px",
            margin: "5px"
        };

        const Tech = {
            color: "white",
            fontweight: "bold",
            padding: "5px",
            margin: "5px",
        };

    return (
        <div>
            <Navbar style={{backgroundColor:"black"}}>
                <img src={Code} className="code"  alt="" loading='lazy' />
                    <Navbar.Brand href="#home" style={Tech}>Tech Blog</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#" className="rounded" style={myStyle}>
                        JavaScript
                        </Nav.Link>
                        <Nav.Link href="#" className="rounded" style={data}>
                            Data Structure
                        </Nav.Link>
                        <Nav.Link href="#" className="rounded" style={alg}>
                            Algorithm
                        </Nav.Link>
                        <Nav.Link href="#" className="rounded" style={com}>
                            Computer Network
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="ml-auto" />
                        </Form>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default BlogNav;