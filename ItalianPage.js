import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const ItalianPage = () => {
  const italianData = [
    {
      id: 1,
      image: "Italian cuisine image URL 1",
      title: 'Italian Dish 1',
      description: 'Description of Italian Dish 1.'
    },
    {
      id: 2,
      image: "Italian cuisine image URL 2",
      title: 'Italian Dish 2',
      description: 'Description of Italian Dish 2.'
    },
    // Add more Italian dishes as needed
  ];

  return (
    <div>
      <h2>Italian Cuisine</h2>
      <div className="card-container">
        {italianData.map((dish) => (
          <div key={dish.id}>
            <Card style={{ width: '18rem', height: '37rem' }}>
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.title}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Link to={`/italian/${dish.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

