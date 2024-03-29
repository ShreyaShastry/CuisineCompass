import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './recipeSection.css';


const recipeData=[
    {
        id:1,
        image:"https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-07eccbf/www.jaypeehotels.com/blog/wp-content/uploads/2020/09/chinese-1.jpg",
        title:'Chinese',
        text:'Chinese cuisine is diverse and complex, with eight distinct regional styles: Cantonese, Szechuan, Hunan, Zhejiang, Shandong, Anhui and Fujian. '
    },
    {
        id:2,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ66Jy5E2c-UFiz-TjZMt_smeruqopzCXiLA&usqp=CAU",
        title:'Italian',
        text:'Italian cuisine is a Mediterranean cuisine that includes ingredients, recipes, and cooking techniques developed in Italy since Roman times. Italian cuisine is known for its quality ingredients, simplicity of dishes, and variety of tastes.'
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulhHsR4CL2XQlZL_-rTHtYgyaeQQw6MoVKw&usqp=CAU",
        title:'Thai',
        text:'Thai cuisine is all about strong spicy flavors that incorporate sweet, sour, and hot elements.'
    },
    {
        id:4,
        title:'Indian',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIvCmBJr9Gb4sau0WobkMJYVZvBDtYurzLw&usqp=CAU",
        text:'Indian cuisine consists of a great variety of food, ranging from Mughlai to Andhra, from Bengali to Rajasthani to various other local cuisines'
    },


]

export const CuisineSection=()=>{
  return (
      <>
      <div className="outer-box" id="cuisine">
      <h2>Search by Cuisines</h2>
      <div className="card-container">
      
      {recipeData.map((recipe) => (
          <div>
              <Card style={{ width: '18rem', height:'37rem' }} key={recipe.id}>
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
