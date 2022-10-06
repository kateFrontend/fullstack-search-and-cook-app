import { useEffect, useState  } from "react";
import video from './food.mp4'
import MyRecipesComponent from "./MyRecipesComponent";

function Search() {

  //require('dotenv').config();
  //const { MY_ID, MY_KEY } = process.env;

  const MY_ID = "283804bc";
  const MY_KEY = "44df5d8ce99e2d1964773b6c56e228e2"; 

  const getResponse = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
   // console.log(response)
    const data = await response.json();
    setMyRecipes(data.hits)
  }

  const[mySearch, setMySearch] = useState('');
  const[myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('') 

  useEffect(() => {
    getResponse();
  },[wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => { // to prevent the page from reloading
    e.preventDefault();
    setWordSubmitted(mySearch)
  }


  return (
    <div>
      <div>
        {/* <h1 className="section-title">Find a Recipe</h1> */}
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        </div>
      <div className="search">
        <form className='search-form' onSubmit={finalSearch}>
          <div className="form-control">
            <label htmlFor="name">
              search your favorite meal
            </label> 
          <input placeholder="Search" onChange={myRecipeSearch} value={mySearch}>
          </input>
          </div>
        </form>
      </div>
      <section className="section">
        <div className="recipes-center">
        {myRecipes.map(element => (
          <MyRecipesComponent
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients = {element.recipe.ingredientLines}
      />
    ))}
        </div>
      </section>
    </div>

  );
}

export default Search;
