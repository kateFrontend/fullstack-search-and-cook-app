import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import AddRecipeForm from '../components/newRecipe/AddRecipeForm'
import {
    createFetchRecipe,
    getRecipeById,
    getRecipes,
} from '../api/common.service'
import styled from 'styled-components'

function AddRecipe(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/addrecipe', {
            mode: 'cors',
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [])

    const handleCreateRecipe = (e) => {
        e.preventDefault()
        const { name, description, ingredients, instructions } = e.target
        createFetchRecipe({
            name: name.value,
            description: description.value,
            ingredients: ingredients.value,
            instructions: instructions.value,
        })
    }

    return (
        <div>
            <Title>Create&Cook</Title>
            <SubTitle>Still in work!!!!!</SubTitle>
            <form onSubmit={handleCreateRecipe}>
                <div>
                    <label htmlFor="name">Recipe Title:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Add a recipe name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description"></textarea>
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea id="ingredients" name="ingredients"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="instructions">Recipe Directions:</label>
                    <textarea name="instructions"></textarea>
                </div>

                <Button type="submit">Create Recipe</Button>
                <Button type="button">Cancel</Button>
            </form>
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
