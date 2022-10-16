import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRecipeById, updateRecipe } from '../../api/common.service'

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
                // navigate('/addrecipe')
                window.location.reload()
            })
            .catch((e) => console.error(e))
    }

    return (
        <>
            <h1>Update Recipe</h1>
            <form onSubmit={handleUpdateRecipe}>
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
            </form>
        </>
    )
}
