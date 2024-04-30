// ChinesePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const ChinesePage = () => {
  const chineseData = [
    {
      id: 1,
      image: "https://natashaskitchen.com/wp-content/uploads/2020/08/Kung-Pao-Chicken-2.jpg",
      title: "Kung Pao Chicken",
      text: "Kung Pao Chicken is a classic Chinese dish with chicken, peanuts, vegetables, and chili peppers."
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlJonvJaJH5clqsRPxtq3Twnkb1zJDgtHxQ&s",
      title: "Mapo Tofu",
      text: "Mapo Tofu is a spicy and flavorful Chinese dish made with tofu, minced meat, and chili bean paste."
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPO6cYyTTS_8jsMwzWVQvXTF879bZ0oRxmQ&s",
      title: "Dumplings",
      text: "Dumplings are a popular Chinese dish consisting of dough wrapped around a filling, often meat or vegetables, and then steamed, boiled, or fried."
    },
    
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lTYiX0uU84WYbwqhuYJJYuBImu8d3slCuQ&s",
      title: "Peking Duck",
      text: "Peking Duck is a famous Chinese dish characterized by its crispy skin and tender meat, often served with pancakes, scallions, and hoisin sauce."
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQca5OgcydhNKUVfsAMKtCIe6RlvjNI5j4l9w&s",
      title: "Hot and Sour Soup",
      text: "Hot and Sour Soup is a popular Chinese soup with a spicy and tangy flavor, typically made with tofu, mushrooms, bamboo shoots, and eggs."
    },
    
  ];
  
  

  return (
    <div>
      <h2>Chinese Cuisine</h2>
      <div className="card-container">
        {chineseData.map((recipe) => (
          <div key={recipe.id}>
            <Card style={{ width: '18rem', height: '37rem' }}>
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.text}</Card.Text>
                <Link to={`/chinese/${recipe.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

