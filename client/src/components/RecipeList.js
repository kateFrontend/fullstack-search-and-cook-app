import React from 'react'
import Recipe from './Recipe'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const RecipeList = () => {
  const { recipes, loading } = useGlobalContext();
  //console.log(recipes)

  if(loading) {
    return <Loading/>
  }
  if(recipes.length < 1 ){
    return(
      <h2 className='section-title'>
      no recipes matched your search criteria
    </h2>
    )
}

  return (
    <section className='section'>
      <h2 className='section-title'>most popular recipes</h2>
      <div className='recipes-center'>
        {recipes.map((item) => {
          return <Recipe key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default RecipeList