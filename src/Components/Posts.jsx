import React from "react";
import Posts1 from "./Post1";
import Posts2 from "./Post2";
import Posts3 from "./Post3";
import Posts4 from "./Post4";
import { Container, Row, Col } from "react-bootstrap";

const Posts = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="mb-4 mt-4">
                    <Posts1 />
                </Col>
                <Col md={10} className="mt-4">
                    
                </Col>
                <Col md={8} className="mb-4">
                    <Posts2 />
                </Col>
                <Col md={8} className="mb-4">
                    <Posts3 />
                </Col>
                <Col md={8} className="mb-4">
                    <Posts4 />
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;





