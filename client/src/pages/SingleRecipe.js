import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const SingleRecipe = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function getRecipe() {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                const data = await response.json()
                console.log(data)
                if (data.meals) {
                    const {
                        strMeal: name,
                        strMealThumb: image,
                        strCategory: category,
                        strArea: cuisine,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                    } = data.meals[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                    ]
                    const newRecipe = {
                        name,
                        image,
                        category,
                        cuisine,
                        instructions,
                        ingredients,
                    }
                    setRecipe(newRecipe)
                } else {
                    setRecipe(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getRecipe()
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (!recipe) {
        return
        ;<h2 className="section-title">no recipes to display</h2>
    } else {
        const { name, image, category, cuisine, instructions, ingredients } =
            recipe
        return (
            <section className="section recipe-section">
                <div className="recipe-item">
                    <img src={image} alt={name}></img>
                    <div className="recipe-info">
                        <h2 className="recipe-title">{name}</h2>
                        <div className="recipe-div">
                            <p>
                                <span className="recipe-item-data">name :</span>{' '}
                                {name}
                            </p>
                            <p>
                                <span className="recipe-item-data">
                                    category :
                                </span>{' '}
                                {category}
                            </p>
                            <p>
                                <span className="recipe-item-data">
                                    cuisine :
                                </span>{' '}
                                {cuisine}
                            </p>
                        </div>
                        <p>
                            <span className="recipe-item-data">
                                instructions :
                            </span>{' '}
                            {instructions}
                        </p>
                        <p>
                            <span className="recipe-item-data">
                                ingredients :
                            </span>
                            {ingredients.map((item, index) => {
                                return item ? (
                                    <span key={index}> {item}</span>
                                ) : null
                            })}
                        </p>
                    </div>
                    <Link to="/search" className="btn btn-primary btn-recipe">
                        back to search
                    </Link>
                </div>
            </section>
        )
    }
}

export default SingleRecipe

//const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
