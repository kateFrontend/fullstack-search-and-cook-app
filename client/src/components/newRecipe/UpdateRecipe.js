import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRecipeById, updateRecipe } from '../../api/common.service'
import styled from 'styled-components'

export default function UpdateRecipe() {
    const [data, setData] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getRecipeById(id).then((res) => setData(res.result))
    }, [id])

    const handleUpdateRecipe = (e) => {
        e.preventDefault()
        const { name, description, ingredients, instructions } = e.target

        updateRecipe({
            _id: id,
            ...data,
            name: name.value,
            description: description.value,
            ingredients: ingredients.value,
            instructions: instructions.value,
        })
            .then(() => {
                navigate('/addrecipe')
                window.location.reload()
            })
            .catch((e) => console.error(e))
    }

    return (
        <>
            <Title>Update Recipe</Title>
            <Form onSubmit={handleUpdateRecipe}>
                <div>
                    <label htmlFor="name">Recipe Title:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Add a recipe name"
                        defaultValue={data && data.name}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        defaultValue={data && data.description}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        defaultValue={data && data.ingredients}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="instructions">Recipe Directions:</label>
                    <textarea
                        name="instructions"
                        defaultValue={data && data.instructions}
                    ></textarea>
                </div>
                <button type="submit">Update Recipe</button>
            </Form>
        </>
    )
}

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 10rem;
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

    button {
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
    }
`
