import axios from 'axios'
const URL = 'http://localhost:8000'

export async function createRecipe(data) {
    const body = {
        ...data,
    }
    return await axios.post(`${URL}/api/addrecipe/`, body).then((res) => res)
}

export async function getRecipeById(id) {
    return await fetch(`${URL}/api/addrecipe/${id}`).then((res) => res.json())
}

export async function getRecipes() {
    await fetch('/api/addrecipe').then((res) => res.json())
}

export async function getRecipesByUser(email) {
    return await axios(`${URL}/api/user-recipes/${email}`).then((res) => res)
}

export async function updateRecipe(data) {
    const body = {
        ...data,
    }

    await axios.put(`${URL}/api/addrecipe/${data._id}`, body).then((res) => res)
}

export async function deleteRecipeById(id) {
    await axios.delete(`${URL}/api/addrecipe/${id}`).then((res) => res)
}

// Users
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
