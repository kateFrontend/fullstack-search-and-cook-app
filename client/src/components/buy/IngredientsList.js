import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'

const IngredientsList = ({ items, removeItem, editItem }) => {
    return (
        <Wrapper>
            {items.map((item) => {
                const { id, title } = item
                return (
                    <ListItem key={id}>
                        <Title>{title}</Title>
                        <Container>
                            <EditButton
                                type="button"
                                onClick={() => editItem(id)}
                            >
                                <FaEdit />
                            </EditButton>
                            <DeleteButton
                                type="button"
                                className="delete-btn"
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </DeleteButton>
                        </Container>
                    </ListItem>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div``

const ListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: all 0.3s linear;
    padding: 0.25rem 1rem;
    border-radius: 0.5rem;
    text-transform: capitalize;
`
const Container = styled.div``

const Title = styled.p`
    margin-bottom: 0;
    font-size: 1.2rem;
    color: grey;
    font-weight: 400;
    letter-spacing: 2px;
    transition: all 0.3s linear;
`

const EditButton = styled.button`
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: all 0.3s linear;
    color: green;
    font-size: 1.2rem;
`

const DeleteButton = styled.button`
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: all 0.3s linear;
    color: red;
    font-size: 1.2rem;
    margin-left: 1.5rem;
`

export default IngredientsList
