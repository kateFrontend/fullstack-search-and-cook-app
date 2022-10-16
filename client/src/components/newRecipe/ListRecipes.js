import React from 'react'
import RecipeCard from './RecipeCard'

function ListRecipes({ data }) {
    return data.length ? (
        data.map((item) => <RecipeCard key={item._id} recipe={item} />)
    ) : (
        <h3>You don't have recipes yet!</h3>
    )
}

export default ListRecipes
