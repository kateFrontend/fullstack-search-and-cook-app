import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
          <div className='nav-center'>
            <Link to='/'>
              <h2 className='logo'>Search&Cook</h2>
            </Link>
            <ul className='nav-links'>
            <li>
                <Link to='/addrecipe'>Add Recipe</Link>
              </li>
              <li>
                <Link to='/search'>Search</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>
    
        </nav>
      )
    }

export default Navbar;