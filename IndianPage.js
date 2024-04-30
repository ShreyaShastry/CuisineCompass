import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const IndianPage = () => {
  const indianData = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrP8drT4T7aNJ00DDl6ybJsye66kFHdkw2w&s",
      title: 'Butter Chicken',
      description: 'A popular Indian dish made with tender chicken cooked in a rich and creamy tomato-based sauce.'
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uogDMcfXVkf6C6TsARH0EIZbS1gK3P6GCw&s",
      title: 'Palak Paneer',
      description: 'A nutritious Indian dish made with spinach (palak) and Indian cottage cheese (paneer), cooked with spices and cream.'
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8UJ7V5-srXU9LlGP0GdMK3xBMZ9lhAVBXQ&s",
      title: 'Chicken Biryani',
      description: 'A flavorful Indian rice dish made with basmati rice, marinated chicken, and a blend of aromatic spices.'
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWExvCnVaJaHT4jbBeJeXqUBYyQlrrWCigeg&s",
      title: 'Chole Bhature',
      description: 'A popular North Indian dish consisting of spicy chickpeas (chole) served with deep-fried bread (bhature).'
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44e3sJ6f6pEq5VTikmYQ0z5DjGHCwbznt7w&s",
      title: 'Paneer Tikka Masala',
      description: 'A classic Indian vegetarian dish made with marinated paneer cooked in a creamy tomato-based sauce with spices.'
    }
  ];
  

  return (
    <div>
      <h2>Indian Cuisine</h2>
      <div className="card-container">
        {indianData.map((dish) => (
          <div key={dish.id}>
            <Card style={{ width: '18rem', height: '37rem' }}>
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.title}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <Link to={`/indian/${dish.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

