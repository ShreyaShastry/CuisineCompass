import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './recipeSection.css';


const dietaryData = [
  {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqv0IDwe1FSCrGywvGQcKDb5yuxtRJzb54g&usqp=CAU",
      title: "Vegetarian",
      text: "Vegetarian diets exclude meat, poultry, and fish. Some vegetarians may also exclude other animal-derived products such as eggs and dairy."
  },
  {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KWVfpD5pw_EA1BP77uQzhgcTK39JgzMjjw&usqp=CAU",
      title: "Vegan",
      text: "Vegan diets exclude all animal products, including meat, poultry, fish, eggs, dairy, and honey. Vegans also typically avoid products derived from animals, such as gelatin and certain additives."
  },
  {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY40zMHUo0qkhuJ9WuxOMHnG58CnxmLo8v8A&usqp=CAU",
      title: "Gluten-Free",
      text: "Gluten-free diets exclude gluten, a protein found in wheat, barley, rye, and their derivatives. This diet is essential for people with celiac disease or gluten sensitivity."
  },
  {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJvXXPU5MM3jkAB3wotJr1xcRVsX70xgNGQ&usqp=CAU",
      title: "Keto",
      text: "Keto diets are high in fat and low in carbohydrates, with moderate protein intake. This diet aims to induce a state of ketosis, where the body burns fat for fuel."
  }
];


export const DietarySection=()=>{
  return (
      <>
      <div className="outer-box" id="diet">
      <h2>Search by Diets</h2>
      <div className="card-container">
      
      {dietaryData.map((recipe) => (
          <div>
              <Card style={{ width: '18rem', height:'30rem' }} key={recipe.id}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>
                {recipe.text}
              </Card.Text>
              <Button variant="primary">Click for more</Button>
            </Card.Body>
          </Card>
          </div>
          
          
        ))}
      </div>
      </div>
     </> 
     
    );
}
