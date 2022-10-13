// This section is not finished yet!
// Backend is done. Need to connect with frontend. 
// I do everything myself and will add comments to everything!

import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const AddRecipeForm = (props) => {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [ingredients, setIngredients] = useState('');
const [instructions, setInstructions] = useState('');
const [error, setError] = useState(null);


const { handleAdd } = props;

/* const createRecipe = (e) => {
 e.preventDefault()

} */



  return (
    <>
    <div>

<Form /* onSubmit={createRecipe} */>
  <div>
    <label for="name">Recipe Title:</label>
    <input type="text" name="name" placeholder="Add a recipe name" onChange={(e) => setName(e.target.value)}/>
  </div>

  <div class="form-group">
    <label for="description">Description:</label>
    <textarea name="description" onChange={(e) => setDescription(e.target.value)}></textarea>
  </div>


<div>
    <label for="ingredients">Ingredients:</label>
    <textarea id="ingredients" name="ingredients" onChange={(e) => setIngredients(e.target.value)}></textarea>      
</div>

  
  <div class="form-group">
    <label for="instructions">Recipe Directions:</label>
    <textarea name="instructions" onChange={(e) => setInstructions(e.target.value)}></textarea>
  </div>

{/*   <input id="submit" type="submit" value="Submit This Recipe!" onClick={() => handleAdd(name, description, ingredients, instructions)}/> */}

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