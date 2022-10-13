import { useState } from 'react'

import AddRecipeForm from '../components/AddRecipeForm'
import styled from 'styled-components'

function AddRecipe(props) {

  const [showForm, setShowForm] = useState(false)

/*   function onCreateRecipe(recipe) {
    props.AddRecipe(recipe)
  } */

 function onCreateNewRecipe() {
  setShowForm(true);
 }

 function onCancelNewRecipe() {
  setShowForm(false);
 }

  return (
    <div>
      <Title>Create&Cook</Title>
{/*       <Title>This section is not finished yet!Will be done in the few days!</Title> */}
{/*       <AddRecipeForm/> */}
      {!showForm && <Button onClick={onCreateNewRecipe}>Create Recipe</Button>}
      {showForm && <AddRecipeForm addRecipe={onCreateNewRecipe} onCancel={onCancelNewRecipe} />}
      </div>
  )
}









const Title = styled.h1`
display: flex;
justify-content: center;
margin-top: 10rem;
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10rem auto;
padding: 2rem 10rem;
`

export default AddRecipe
 



