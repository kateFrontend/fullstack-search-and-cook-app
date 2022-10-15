import axios from 'axios'
const URL = 'http://localhost:8000'

export function createFetchRecipe(data) {
    fetch('http://localhost:8000/api/addrecipe/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.error(e))
}

export async function getRecipeById(id) {
    await fetch(`/api/addrecipe/${id}`).then((res) => res.json())
}

export async function getRecipes() {
    await fetch('/api/addrecipe').then((res) => res.json())
}

export async function getUsers() {
    await fetch('/api/get-user').then((res) => res.json())
}

export async function getUserByEmail(email) {
    return await fetch(`${URL}/api/get-user/${email}`).then((res) => res.json())
}

export async function createUser(body) {
    const newBody = {
        ...body,
    }
    return await axios
        .post(`${URL}/api/create-user`, newBody)
        .then((res) => res)
}
