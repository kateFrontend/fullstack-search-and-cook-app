import React from 'react'
import styled from 'styled-components'

function AddRecipeForm() {
  return (

    <>
    <div>

<Form action="/submit-recipe" method="post">

{/*  add image  */}

  <div>
    <label for="recipeImage">Recipe Title:</label>
    <input type="text" name="recipeTitle" placeholder="Nachos"/>
  </div>

{/* add title */}

  <div>
    <label for="addRecipeTitle">Recipe Image:</label>
    <input type="text" name="recipeImage" placeholder="'http://..."/>
  </div>

{/* add description  */}
  <div class="form-group">
    <label for="addRecipeDescription">Description:</label>
    <textarea name="recipeDesc" rows="3"></textarea>
  </div>


{/*  ingredients  */}
<div>
    <label for="addRecipeIngredients">Ingredients:</label>
    <div>
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
    </div> 
    <textarea id="lineForAddedIngredient" name="recipeIngredients" rows="3" readonly></textarea>      
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