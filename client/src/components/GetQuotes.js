import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function GetQuotes() {
    const [quote, setQuote] = useState('')

    useEffect(() => {
        fetch('http://api.quotable.io/random')
            .then((res) => res.json())
            .then((quote) => {
                setQuote(quote.content)
            })
    }, [])

    let fetchNewQuote = () => {
        fetch('http://api.quotable.io/random')
            .then((res) => res.json())
            .then((quote) => {
                setQuote(quote.content)
            })
    }
    return (
        <Wrapper>
            <div>
                <h2>{quote}</h2>
            </div>
            <button onClick={fetchNewQuote}>be inspired</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 65%;

    div h2 {
        margin-top: 3rem;
        text-transform: capitalize;
        font-weight: 400;
    }

    button {
        text-transform: uppercase;
        background: var(--primaryColor);
        color: #fff;
        width: 200px;
        padding: 0.75rem 0.75rem;
        letter-spacing: 0.1rem;
        display: inline-block;
        font-weight: 400;
        transition: all 0.3s linear;
        margin-top: 2rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        &:hover {
            background: var(--primaryYellow);
            color: var(--primaryColor);
        }
    }
`

export default GetQuotes
