import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const ThaiPage = () => {
  const thaiData = [
    {
      id: 1,
      image: "Thai cuisine image URL 1",
      title: 'Thai Dish 1',
      description: 'Description of Thai Dish 1.'
    },
    {
      id: 2,
      image: "Thai cuisine image URL 2",
      title: 'Thai Dish 2',
      description: 'Description of Thai Dish 2.'
    },
    // Add more Thai dishes as needed
  ];

  return (
    <div>
      <h2>Thai Cuisine</h2>
      <div className="card-container">
        {thaiData.map((dish) => (
          <div key={dish.id}>
            <Card style={{ width: '18rem', height: '37rem' }}>
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.title}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Link to={`/thai/${dish.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}


