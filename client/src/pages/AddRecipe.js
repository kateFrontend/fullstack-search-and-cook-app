import { useState, useEffect } from 'react'

import AddRecipeForm from '../components/newRecipe/AddRecipeForm'
import styled from 'styled-components'

function AddRecipe(props) {

  const [showForm, setShowForm] = useState(false)

 function onCreateNewRecipe() {
  setShowForm(true);
 }

 function onCancelNewRecipe() {
  setShowForm(false);
 }

function onFetchRecipe (recipe) {
  fetch("http://localhost:8000/api/addrecipe/", {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err);
})
 } 

  return (
    <div>
      <Title>Create&Cook</Title>
      <SubTitle>Still in work!!!!!</SubTitle>
      {!showForm && <Button onClick={onCreateNewRecipe}>Create New Recipe</Button>}
      {showForm && <AddRecipeForm addRecipe={onCreateNewRecipe} onCancel={onCancelNewRecipe} onCreateRecipe={onFetchRecipe} />}
      </div>
  )
}



const Title = styled.h1`
display: flex;
justify-content: center;
margin-top: 10rem;
`

const SubTitle = styled.h1`
display: flex;
justify-content: center;
margin-top: 5rem;
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10rem auto;
padding: 2rem 10rem;
`

export default AddRecipe
 



