// This section is not finished yet!
// Backend is done. Need to connect with frontend. 

import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const AddRecipeForm = (props) => {

const [recipeName, setName] = useState('');
const [recipeDescription, setDescription] = useState('');
const [recipeIngredients, setIngredients] = useState('');
const [recipeInstructions, setInstructions] = useState('');
//const [error, setError] = useState(null);


function nameInputHandler(e){
  setName(e.target.value)
}

function descriptionInputHandler(e){
  setDescription(e.target.value)
}

function ingredientsInputHandler(e){
  setIngredients(e.target.value)
}

function instructionsInputHandler(e){
  setInstructions(e.target.value)
}


const createRecipeHandler = (e) => {
  e.preventDefault();
  let recipe = {
    name: recipeName,
    description: recipeDescription,
    ingredients: recipeIngredients,
    instructions: recipeInstructions
  }

  setName('');
  setDescription('');
  setIngredients('');
  setInstructions('');

  console.log(recipe)
}

  return (
    <>
    <div>

<Form onSubmit={createRecipeHandler}>
  <div>
    <label for="name">Recipe Title:</label>
    <input type="text" name="name" placeholder="Add a recipe name" value={recipeName} onChange={nameInputHandler}/>
  </div>

  <div class="form-group">
    <label for="description">Description:</label>
    <textarea name="description" value={recipeDescription} onChange={descriptionInputHandler}></textarea>
  </div>


<div>
    <label for="ingredients">Ingredients:</label>
    <textarea id="ingredients" name="ingredients" value={recipeIngredients} onChange={ingredientsInputHandler}></textarea>      
</div>

  
  <div class="form-group">
    <label for="instructions">Recipe Directions:</label>
    <textarea name="instructions" value={recipeInstructions} onChange={instructionsInputHandler}></textarea>
  </div>

<Button type='submit'>Create Recipe</Button>
<Button type='button' onClick={props.onCancel}>Cancel</Button>
</Form>
</div> 
    </>
  )
}

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 450px;
margin: 10rem auto;
`

const Button = styled.button`
padding: 1rem 10rem;
margin-top: 1rem;
`

export default AddRecipeForm