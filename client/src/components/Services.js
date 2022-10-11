import { FaSearch} from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { Link } from "react-router-dom"



const Services = () => {
  return (
    <div className="serv-section">
      <h1 className='about-title'>our services</h1>
    <section className='el-section'>

      <div className="element">
      <Link to='/search'>
        <FaSearch className='icons'/>
        <h3 className="el-title">Search Recipes</h3>
        </Link>
      </div>

      <div className="element">
      <Link to='/buy'>
        <FaShoppingCart className='icons'/>
        <h3 className="el-title">Buy&Cook</h3>
        </Link>
      </div>

      <div className="element">
      <Link to='/addrecipe'>
        <GiCookingPot className='icons big'/>
        <h3 className="el-title">Add recipe</h3>
        </Link>
      </div>

    </section>

    </div>
  )
}

export default Services