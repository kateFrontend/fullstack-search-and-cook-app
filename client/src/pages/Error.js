import { Link } from 'react-router-dom'
import image from '../assets/error.png'
import styled from 'styled-components'

const Error = () => {
    return (
        <section className="error-page section">
            <div className="error-container">
                <Img src={image} alt="error" />
                <h1> nothing interesting here!</h1>
                <Link to="/" className="btn btn-primary">
                    back home
                </Link>
            </div>
        </section>
    )
}

const Img = styled.img`
    width: 500px;
`

export default Error
