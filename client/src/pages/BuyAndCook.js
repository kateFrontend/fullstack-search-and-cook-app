import React, { useState, useEffect } from 'react'
import IngredientsList from '../components/buy/IngredientsList'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaCheckSquare } from 'react-icons/fa'

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')))
    } else {
        return []
    }
}

function BuyAndCook() {
    const [name, setName] = useState('')
    const [list, setList] = useState(getLocalStorage())
    const [isEditing, setIsEditing] = useState(false)
    const [editID, setEditID] = useState(null)
    const MySwal = withReactContent(Swal)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            MySwal.fire({
                title: <strong>Attention!</strong>,
                html: <i>please enter value!</i>,
                icon: 'warning',
            })
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name }
                    }
                    return item
                })
            )
            setName('')
            setEditID(null)
            setIsEditing(false)
            MySwal.fire({
                title: <strong>Good job!</strong>,
                html: <i>value changed!</i>,
                icon: 'success',
            })
        } else {
            const newItem = { id: new Date().getTime().toString(), title: name }

            setList([...list, newItem])
            setName('')
        }
    }

    const clearList = () => {
        MySwal.fire({
            title: <strong>Items removed!</strong>,
            icon: 'error',
        })
        setList([])
    }
    const removeItem = (id) => {
        MySwal.fire({
            title: <strong>Item removed!</strong>,
            icon: 'error',
        })
        setList(list.filter((item) => item.id !== id))
    }
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <Section>
            <BuyForm onSubmit={handleSubmit}>
                {alert.show &&
                    MySwal.fire({
                        title: <strong>Item removed!</strong>,
                        icon: 'error',
                    })}

                <h3>Buy&Cook</h3>
                <FormControl>
                    <input
                        type="text"
                        placeholder="what ingredients do you need to buy, ex.: tomatoes"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <SubmitButton type="submit">
                        <FaCheckSquare />
                    </SubmitButton>
                </FormControl>
            </BuyForm>
            {list.length > 0 && (
                <Container>
                    <IngredientsList
                        items={list}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                    <ClearButton onClick={clearList}>clear items</ClearButton>
                </Container>
            )}
        </Section>
    )
}

const Section = styled.div`
    padding: 5rem 0;
    width: 100vw;
    margin: 0 auto;
    max-width: 80rem;
    margin-top: 8rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    padding: 2rem;

    &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

const BuyForm = styled.form`
    h3 {
        color: var(--primaryColor);
        margin-bottom: 1.5rem;
        text-align: center;
        font-size: 2.5rem;
    }
`

const FormControl = styled.div`
    display: flex;
    justify-content: center;

    input {
        padding: 1rem;
        border-radius: 0.5rem;
        background: #f3f3f3;
        font-size: 1rem;
        height: 4rem;
        border: 1px solid var(--primaryColor);
    }
`

const SubmitButton = styled.button`
    margin-left: 2rem;
    color: var(--primaryColor);
    border: none;
    border-radius: 0.5rem;
    background: #fff;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s linear;
    font-size: 4rem;
    &:hover {
        color: var(--primaryYellow);
    }
`

const Container = styled.div`
    margin-top: 2rem;
`

const ClearButton = styled.button`
    text-transform: capitalize;
    padding: 1.5rem;
    width: 15rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--mainRed);
    border-color: none;
    color: #fff;
    border-radius: 0.5rem;
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    border: none;
    transition: all 0.3s linear;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    font-size: bold;
`

export default BuyAndCook
