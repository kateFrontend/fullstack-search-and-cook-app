import Loading from '../components/Loader'
import { useState, useEffect  } from "react";
import { useParams, Link } from 'react-router-dom'
import MyRecipesComponent from './MyRecipesComponent';

const SingleRecipe = () => {

    const { id } = useParams();
    //const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null)

    const getSingleRecipe = async () => {
        const response = await fetch(`https://www.edamam.com/#!/Specific_Recipe_Info/get_api_recipes_v2_${id}`)
        const data = await response.json();
        setRecipe(data.hits)
    }

    useEffect(() => {
        getSingleRecipe()
    },[])

    return(
        <section className="section">
        <div className="recipes-center">
        {recipe.map(element => (
          <MyRecipesComponent
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients = {element.recipe.ingredientLines}
          id = {element.recipe.id}
      />
    ))}
        </div>
      </section>
    )
}

export default SingleRecipe;

//`https://www.edamam.com/#!/Specific_Recipe_Info/get_api_recipes_v2_${id}`