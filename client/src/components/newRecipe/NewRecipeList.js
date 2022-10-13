import React from 'react'

function NewRecipeList(props) {
console.log(props.recipe)

  return (
    <div>
        <ul>
            <li
                name={item[0].recipeName}
                description={item[0].recipeDescription}
                ingredients={item[0].recipeIngredients}
                instructions={item[0].recipeInstructions}
                >
            </li>
        </ul>
    </div>
  )
}

export default NewRecipeList