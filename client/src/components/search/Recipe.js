import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({image, name, id, category, cuisine}) => {
  return (
    <article className='recipe'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='recipe-footer'>
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{cuisine}</p>
        <Link to={`/search/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

export default Recipe