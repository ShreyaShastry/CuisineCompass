import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './recipeSection.css';

export const RecipeSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipeData=[
    {
      "id": 1,
      "image":"https://media.istockphoto.com/id/1360197541/photo/banner-hummus-of-their-chickpeas-in-a-wooden-plate-vegetarian-food.jpg?s=1024x1024&w=is&k=20&c=IR5mn4Y-cDCyxvv_-vogIGw15rf6PS7963bmNTUB190=",
      "title":"Vegan Hummus",
      "text":"Vegan hummus is a creamy and flavorful dip made from blended chickpeas, tahini, olive oil, lemon juice, garlic, and spices, offering a plant-based alternative to traditional hummus recipes.",
      "ingredients": [
        "1 can (15 ounces) chickpeas, drained and rinsed",
        "2 cloves garlic, minced",
        "3 tablespoons tahini",
        "2 tablespoons lemon juice",
        "2 tablespoons olive oil",
        "1/2 teaspoon ground cumin",
        "Salt to taste",
        "2 tablespoons water (optional, for desired consistency)",
        "Chopped fresh parsley, for garnish"
      ],
      "instructions": [
        "In a food processor, combine chickpeas, garlic, tahini, lemon juice, olive oil, cumin, and salt.",
        "Blend until smooth, scraping down sides as needed.",
        "If necessary, add water to achieve desired consistency.",
        "Transfer hummus to a serving bowl, garnish with chopped parsley, and drizzle with additional olive oil if desired.",
        "Serve with pita bread, vegetables, or crackers."
      ]
    },
    {
      "id": 2,
      "image":"https://media.istockphoto.com/id/529669952/photo/guacamole-dip.jpg?s=612x612&w=0&k=20&c=1XGvTwDaZgd-czRd5W0JyxV18U1_bs-HCeo6TWSE7K0=",
      "title":"Guacamole",
      "text":"Guacamole is a creamy dip made from mashed avocados mixed with chopped onions, tomatoes, cilantro, lime juice, and spices. It offers a fresh and zesty flavor, perfect for dipping tortilla chips or spreading on sandwiches.",
      "ingredients": [
        "3 ripe avocados",
        "1 small red onion, finely diced",
        "2 roma tomatoes, diced",
        "1 jalapeno pepper, seeded and minced",
        "1/4 cup chopped fresh cilantro",
        "2 tablespoons lime juice",
        "Salt to taste",
        "Tortilla chips, for serving"
      ],
      "instructions": [
        "Cut avocados in half, remove pits, and scoop flesh into a mixing bowl.",
        "Mash avocados with a fork until smooth or chunky, depending on preference.",
        "Add diced onion, tomatoes, jalapeno, cilantro, lime juice, and salt. Mix well.",
        "Adjust seasoning to taste, adding more salt or lime juice if desired.",
        "Cover guacamole with plastic wrap, pressing it directly onto the surface to prevent browning, and refrigerate for at least 30 minutes before serving.",
        "Serve with tortilla chips."
      ]
    },
    {
      "id": 3,
      "image":"https://media.istockphoto.com/id/470194982/photo/homemade-healthy-caprese-salad.jpg?s=612x612&w=0&k=20&c=1sTMtn65YQy9StLHvqnxFt3-OaE0OOHMbTZEF7oXKE0=",
      "title":"Caprese Salad",
      "text":"Caprese salad features layers of sliced tomatoes, fresh mozzarella cheese, and basil leaves drizzled with balsamic glaze and olive oil. This Italian classic showcases the harmony of flavors between ripe tomatoes, creamy cheese, and aromatic basil.",
      "ingredients": [
        "2 large ripe tomatoes, sliced",
        "1 pound fresh mozzarella cheese, sliced",
        "1/4 cup fresh basil leaves",
        "2 tablespoons extra virgin olive oil",
        "1 tablespoon balsamic vinegar (optional)",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Arrange tomato and mozzarella slices on a serving platter, alternating them and overlapping slightly.",
        "Tuck fresh basil leaves between the tomato and mozzarella slices.",
        "Drizzle with olive oil and balsamic vinegar (if using).",
        "Season with salt and pepper to taste.",
        "Let the salad sit for a few minutes to allow flavors to meld before serving."
      ]
    },
    {
      "id": 4,
      "image":"https://media.istockphoto.com/id/1191891580/photo/stuffed-bell-peppers-with-meat-and-vegetables-added-making-a-savory-dish.jpg?s=612x612&w=0&k=20&c=7FzQtpf2hH6Eh6UwbUhzsmVwE7sMAv93fV4N467Um7c=",
      "title":"Stuffed Bell Peppers",
      "text":"Stuffed bell peppers are vibrant and flavorful, featuring bell peppers filled with a savory mixture of cooked rice, black beans, corn, onions, and spices, topped with melted cheese or tomato sauce. They offer a hearty and satisfying dish that can be customized with various ingredients to suit different tastes and dietary preferences",
      "ingredients": [
        "4 large bell peppers, any color",
        "1 cup cooked quinoa",
        "1 can (15 ounces) black beans, drained and rinsed",
        "1 cup corn kernels",
        "1 cup diced tomatoes",
        "1/2 cup diced red onion",
        "1/2 cup chopped fresh cilantro",
        "1 teaspoon ground cumin",
        "1 teaspoon chili powder",
        "Salt and pepper to taste",
        "1 cup shredded vegan cheese (optional)"
      ],
      "instructions": [
        "Preheat oven to 375°F (190°C).",
        "Cut the tops off the bell peppers and remove seeds and membranes.",
        "In a large bowl, combine cooked quinoa, black beans, corn, tomatoes, red onion, cilantro, cumin, chili powder, salt, and pepper.",
        "Spoon the quinoa mixture into each bell pepper until they are filled to the top.",
        "If using vegan cheese, sprinkle it on top of the stuffed peppers.",
        "Place stuffed peppers in a baking dish and cover with aluminum foil.",
        "Bake for 25-30 minutes, or until peppers are tender.",
        "Remove foil and bake for an additional 5 minutes to melt the cheese, if using.",
        "Serve hot."
      ]
    },
    {
      "id": 5,
      "title":"Vegetable Spring Rolls",
      "image":"https://media.istockphoto.com/id/1365711168/photo/asian-deep-fried-spring-roll-filling-with-tofu-cabbage-carrot-and-glass-noodle.jpg?s=612x612&w=0&k=20&c=C6uQ2ZNbgKpvK8N23n3qPUS6dIvGcJHHtSFXZc93Fg8=",
      "text":"Vegetable spring rolls are light and crispy appetizers filled with a colorful assortment of julienned vegetables such as carrots, cucumbers, bell peppers, and lettuce, wrapped in rice paper. They are often served with a savory dipping sauce, offering a refreshing and healthy snack option.",
      "ingredients": [
        "8-10 spring roll wrappers",
        "2 cups shredded lettuce",
        "1 cucumber, julienned",
        "1 carrot, julienned",
        "1 bell pepper, julienned",
        "1/4 cup fresh mint leaves",
        "1/4 cup fresh cilantro leaves",
        "1/4 cup chopped peanuts (optional)",
        "1/4 cup rice vermicelli noodles, cooked according to package instructions",
        "Sweet chili sauce or peanut sauce, for dipping"
      ],
      "instructions": [
        "Prepare a large bowl of warm water.",
        "Dip one spring roll wrapper into the water for a few seconds until it becomes pliable.",
        "Lay the wrapper flat on a clean surface.",
        "Place a small handful of shredded lettuce in the center of the wrapper.",
        "Top with cucumber, carrot, bell pepper, mint leaves, cilantro leaves, chopped peanuts (if using), and a small amount of cooked rice vermicelli noodles.",
        "Fold the sides of the wrapper over the filling, then tightly roll it up from the bottom, tucking in the sides as you go.",
        "Repeat with remaining wrappers and filling.",
        "Serve vegetable spring rolls with sweet chili sauce or peanut sauce for dipping."
      ]
    }
  ]

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  return (
    <>
      <div className="outer-box" id="recipe">
        <h2 style={{fontFamily: "Open Sans",
    fontStyle: "italic"}}>Recipe Section</h2>
        <div className="card-container">
          {recipeData.map((recipe) => (
            <div key={recipe.id}>
              <Card style={{ width: '18rem', height: '37rem' }}>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body >
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>{recipe.text}</Card.Text>
                  <Button  onClick={() => handleRecipeClick(recipe)}>Click for Recipe</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>{selectedRecipe ? selectedRecipe.title : ''}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div>
    <img src={selectedRecipe ? selectedRecipe.image : ''} alt={selectedRecipe ? selectedRecipe.title : ''} style={{ maxWidth: '100%', height: 'auto' }} />

      <h4>Ingredients:</h4>
      <ul>
        {selectedRecipe ? selectedRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        )) : ''}
      </ul>
      <h4>Instructions:</h4>
      <ol>
        {selectedRecipe ? selectedRecipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        )) : ''}
      </ol>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
  </Modal.Footer>
</Modal>

    </>
  );
};

