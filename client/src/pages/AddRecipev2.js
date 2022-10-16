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
            {/*             <SubTitle>Still in work!!!!!</SubTitle>
             */}{' '}
            <Form onSubmit={handleCreateRecipe}>
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
                    <textarea name="ingredients"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="instructions">Recipe Directions:</label>
                    <textarea name="instructions"></textarea>
                </div>
                <Button type="submit">Create Recipe</Button>
            </Form>
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
    margin: 2rem auto;
    padding: 1rem 10rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    border: none;
    transition: all 0.3s linear;
    background: var(--primaryColor);
    color: #fff;
    &:hover {
        background: var(--primaryYellow);
        color: var(--primaryColor);
    }
`

const Form = styled.form`
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    label {
        display: block;
        margin: 1rem 0 0 0;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 0.25rem;
        color: var(--primaryColor);
    }

    input {
        border-radius: var(--mainBorderRadius);
        padding: 0.5rem;
        font-size: 1.2rem;
        border: 1px solid var(--primaryColor);
        border-bottom: 2px solid var(--primaryColor);
        box-shadow: var(--lightShadow);
    }

    textarea {
        border-radius: var(--mainBorderRadius);
        padding: 0.5rem;
        height: 100px;
        font-size: 1.2rem;
        border: 1px solid var(--primaryColor);
        border-bottom: 2px solid var(--primaryColor);
        box-shadow: var(--lightShadow);
    }

`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5rem;
`

export default AddRecipe
