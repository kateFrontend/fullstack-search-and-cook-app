import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddRecipeForm from '../components/newRecipe/AddRecipeForm'
import { useAuth0 } from '@auth0/auth0-react'
import { createRecipe, getRecipeById, getRecipes } from '../api/common.service'
import { getRecipesByUser } from '../api/common.service'
import ListRecipes from '../components/newRecipe/ListRecipes'
import styled from 'styled-components'

function AddRecipe(props) {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState([])
    const { user } = useAuth0()

    useEffect(() => {
        getRecipesByUser(user.email)
            .then((res) => setData(res.data.result))
            .catch((e) => console.error(e))
    }, [user])

    const handleCreateRecipe = (e) => {
        e.preventDefault()
        const { name, description, ingredients, instructions } = e.target
        console.log(formData)

        createRecipe({
            userEmail: user.email,
            name: name.value,
            description: description.value,
            ingredients: ingredients.value,
            instructions: instructions.value,
        })
            .then(() => {
                e.target.reset()
            })
            .catch((e) => console.error(e))
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
            </form>
            <List>{<ListRecipes data={data} />}</List>
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

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 5rem;
`

export default AddRecipe
