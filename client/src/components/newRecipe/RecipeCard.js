import { useNavigate } from 'react-router-dom'
import { deleteRecipeById } from '../../api/common.service'
import styled from 'styled-components'

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
        <Wrapper>
            <Card key={key}>
                <h2>{name}</h2>
                <p>
                    <span>Description: </span>
                    {description}
                </p>
                <p>
                    <span>Ingredients: </span>
                    {ingredients}
                </p>
                <p>
                    <span>Instructions: </span>
                    {instructions}
                </p>
            </Card>
            <Buttons>
                <button onClick={() => navigate(`/update/${_id}`)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </Buttons>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 650px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    border-radius: 2rem;
    border: 2px solid var(--primaryColor);
    border-bottom: 2px solid var(--primaryColor);
    box-shadow: var(--lightShadow);
    background: #fff;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;

    p {
        font-size: 1.1rem;
    }

    p span {
        color: var(--primaryColor);
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: underline;
    }
`

const Buttons = styled.div`
    width: 300px;
    margin: 50px 30px;
    display: flex;
    justify-content: space-between;

    button {
        padding: 7px 50px;
        background: var(--primaryColor);
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: bold;
        transition: all 0.3s linear;
        &:hover {
            background: var(--primaryYellow);
            color: var(--primaryColor);
        }
    }
`

export default RecipeCard
