import { Link } from 'react-router-dom'

function MyRecipesComponent({label, id, image, calories}) {
    return(
        <div className="recipe">
            <div className="img-container">
                <img src={image}/>
            </div>
            <div className="recipe-footer">
                <h3>{label}</h3>
                <h4>{calories.toFixed()} calories</h4>
                <Link to='/search/:id' className='btn btn-primary btn-details'>details</Link>
            </div>

        </div>
    )
}

export default MyRecipesComponent;


