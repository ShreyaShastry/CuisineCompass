import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import { CuisineSection } from "./components/CuisineSection";
import { DietarySection } from "./components/DietarySection";
import { RecipeSection } from "./components/RecipeSection";
export default function App() {
  return (
    <div className="app-container">
    <BrowserRouter>   
    <Header />
    <RecipeSection id="recipe"/>
    <CuisineSection id="cuisine"/>
    <DietarySection id="dietary"/>   
    </BrowserRouter>
    </div>
  );
}
