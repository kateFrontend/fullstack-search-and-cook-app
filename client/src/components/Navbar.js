import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getUsers, getUserByEmail, createUser } from '../api/common.service'
import axios from 'axios'

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
        useAuth0()
    const isUser = isAuthenticated && user

    useEffect(() => {
        const { email, name, nickname, picture } = user || {}

        if (email) {
            getUserByEmail(email)
                .then((res) => {
                    if (res.status === 404) {
                        createUser({
                            userEmail: email,
                            name,
                            nickname,
                            picture,
                        })
                            .then((res) => console.log(res))
                            .catch((e) => console.error(e))
                    } else {
                        console.log('User not found')
                    }
                })
                .catch((e) => console.error(e))
        }
    }, [user])

    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <h2 className="logo">Search&Cook</h2>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Container>
                            {isUser && user.picture && (
                                <img src={user.picture} alt={user.name} />
                            )}
                            {isUser && user.name && (
                                <h4>
                                    Welcome,{' '}
                                    <strong>{user.name.toUpperCase()}</strong>
                                </h4>
                            )}
                            {isUser ? (
                                <button
                                    onClick={() => {
                                        logout({
                                            returnTo: window.location.origin,
                                        })
                                    }}
                                >
                                    logout
                                </button>
                            ) : (
                                <button onClick={loginWithRedirect}>
                                    login
                                </button>
                            )}
                        </Container>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const Container = styled.div`
    display: flex;

    img {
        width: 35px !important;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        margin: 20px;
    }

    h4 {
        margin-top: 25px;
    }

    button {
        background: transparent;
        border: transparent;
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        color: black;
        cursor: pointer;
        margin-left: 20px;
    }
`

export default Navbar
