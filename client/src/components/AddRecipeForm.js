import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components'

function AddRecipeForm() {
/* 
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    ingredients:'',
    instructions:''
  })

  const { title, description, ingredients, instructions } = formData; */

/*   onchange()

  onsubmit() */

  return (

    <>
    <div>

<Form>

{/*  add image  */}

  <div>
    <label for="title">Recipe Title:</label>
    <input type="text" name="title" placeholder="Add a recipe name"/>
  </div>


{/*   <div>
    <label for="addRecipeTitle">Recipe Image:</label>
    <input type="text" name="recipeImage" placeholder="'http://..."/>
  </div> */}

{/* add description  */}
  <div class="form-group">
    <label for="addRecipeDescription">Description:</label>
    <textarea name="description" rows="3"></textarea>
  </div>


{/*  ingredients  */}
<div>
    <label for="lineForAddedIngredient">Ingredients:</label>
{/*     <div>
      <select id="addRecipeMeasurement">
        <option>1/8</option>
        <option>1/4</option>
        <option>1/2</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <select id="addRecipeIngredientsID">
        <option>Teaspoon</option>
        <option>Tablespoon</option>
        <option>Cup</option>
        <option>Pinch</option>
        <option>Dash</option>
      </select>
      <input type="input" id="ingredientInputBox" placeholder="'ie: butter'"/>
      <input id="addIngredientBttn" type="submit" value="+"/>
    </div>  */}
    <textarea id="lineForAddedIngredient" name="ingredients" rows="3" readonly></textarea>      
</div>

  
{/*  Instructions/Directions  */}
  <div class="form-group">
    <label for="instructions">Recipe Directions:</label>
    <textarea name="instructions" rows="3"></textarea>
  </div>
{/*  Submit  */}
  <input id="submitButtonAddRecipeFinal" type="submit" value="Submit This Recipe To Your Box!"/>
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
margin: 0 auto;
`

export default AddRecipeForm