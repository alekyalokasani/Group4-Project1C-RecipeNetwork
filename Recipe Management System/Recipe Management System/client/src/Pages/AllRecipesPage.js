import React, { useState, useEffect } from "react";
import { allRecipes } from "../apiCalls/recipes";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/cardStyling.css";

const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  useEffect(() => {
    allRecipes().then((data) => {
      if (data.err) {
        console.log(data.err);
      } else {
        setRecipes(data);
      }
    });
  }, []);
  return (
    <Col>
      <h3 style={{ textAlign: "center" }}>All recipes</h3>
      <Row>
        {recipes
          ? recipes.map((recipe, index) => (
              <Card
                className='my-3 p-3 rounded'
                style={{ width: "18rem", margin: "2em", background: "#F2F7FA" }}
              >
                <Link to={`recipe/${recipe.recipe_id}`}>
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60'
                    style={{ matgin: "0 auto" }}
                  />
                </Link>

                <Link to={`recipe/${recipe.recipe_id}`}>
                  <Card.Title>
                    <strong>{recipe.recipe_title}</strong>
                  </Card.Title>
                </Link>

                <Card.Text className='ingrediants'>
                  Ingrediants:{recipe.recipe_ingredients}
                </Card.Text>
                <Card.Text>posted by:{recipe.name}</Card.Text>
              </Card>
            ))
          : undefined}
      </Row>
    </Col>
  );
};

export default AllRecipesPage;
