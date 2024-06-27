import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import nyImage from './Images/City2.jpeg'; 
import parisImage from './Images/City3.jpeg';
import londonImage from './Images/City4.jpeg';
import tokyoImage from './Images/City1.jpeg';

const tours = [
    {
        city: 'NEW YORK',
        tour: 'New York Bridge Tour',
        imgSrc: nyImage,
    },
    {
        city: 'PARIS',
        tour: 'Paris Lights Tour',
        imgSrc: parisImage,
    },
    {
        city: 'LONDON',
        tour: 'London Royal Palace Tour',
        imgSrc: londonImage,
    },
    {
        city: 'TOKYO',
        tour: 'Tokyo Sushi Tour',
        imgSrc: tokyoImage,
    },
];

const Tours = () => {
    return (
        <Container>
            <Row>
                {tours.map((tour, index) => (
                    <Col key={index} md={3}>
                        <Card className="card-custom">
                            <Card.Img variant="top" src={tour.imgSrc} className="card-img-top-custom" />
                            <Card.Body>
                                <Card.Title>{tour.city}</Card.Title>
                                <Card.Text>{tour.tour}</Card.Text>
                                <Button variant="primary">Info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tours;
