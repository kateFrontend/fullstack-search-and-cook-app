import { useNavigate } from 'react-router-dom'
import { deleteRecipeById } from '../../api/common.service'

function RecipeCard(props) {
    const navigate = useNavigate()
    const { key, name, description, ingredients, instructions, _id } =
        props.recipe

    const handleDelete = () => {
        deleteRecipeById(_id)
            .then((res) => {
                if (res.status === 200) {
                    console.log('Recipe successfully deleted')
                }
            })
            .catch((e) => console.error(e))
        window.location.reload()
        // navigate('/addrecipe')
    }

    return (
        <>
            <article key={key}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{ingredients}</p>
                <p>{instructions}</p>
            </article>
            <div>
                <button onClick={() => navigate(`/update/${_id}`)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default RecipeCard
