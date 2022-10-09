import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import styled from "styled-components";
import loginImg from './login.jpg';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='cooking' />
        <h1>Search&Cook</h1>
        <button className='btn' onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
    text-transform: capitalize;
    font-size: 3rem;
  }

  .btn {
  text-transform: uppercase;
  background: hsl(185, 62%, 45%);
  color: hsl(186, 100%, 94%);
  padding: 0.375rem 0.75rem;
  letter-spacing:  0.1rem;
  display: inline-block;
  font-weight: 400;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
}
.btn:hover {
  background: hsl(184, 80%, 74%);
  color: hsl(185, 91%, 17%);
}
`;