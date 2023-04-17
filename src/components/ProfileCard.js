import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ProfileCard = ({ userData }) => {
    const { name, title, location, skills, interests, imageUrl } = userData;

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>{location}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <ListGroup variant="flush">
            {interests.map((interest, index) => (
                      <ListGroup.Item key={index}>{interest}</ListGroup.Item>
            ))}

        </ListGroup>
      </Card.Body>

      <Card.Body>
        <Card.Title>Interests</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Interest 1</ListGroup.Item>
          <ListGroup.Item>Interest 2</ListGroup.Item>
          <ListGroup.Item>Interest 3</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
