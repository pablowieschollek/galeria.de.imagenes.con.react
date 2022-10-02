import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards= (props) => {
  return (
    <div className='cardcontainer'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className='img' src= {props.src} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.text}
            </Card.Text>
            <Button variant="primary" className='btn'>Comprar</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default Cards;