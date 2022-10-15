export function createFetchRecipe (data) {
    fetch("http://localhost:8000/api/addrecipe/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.error(e))
  }

  export function getRecipeById (id) {
    return fetch(`/api/addrecipe/${id}`)
  }

  export async function getRecipes() {
    await fetch('/api/addrecipe')
  }
