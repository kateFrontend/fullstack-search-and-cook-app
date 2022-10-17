import React, { useState, createContext, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [recipes, setRecipes] = useState([])

    const fetchMeals = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            //  console.log(data)
            const { meals } = data
            if (meals) {
                const newMeal = meals.map((item) => {
                    const {
                        idMeal,
                        strMeal,
                        strMealThumb,
                        strCategory,
                        strArea,
                        //  strYoutube,
                    } = item
                    return {
                        id: idMeal,
                        name: strMeal,
                        image: strMealThumb,
                        category: strCategory,
                        cuisine: strArea,
                        //  video:strYoutube,
                    }
                })
                setRecipes(newMeal)
            } else {
                setRecipes([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [searchTerm])

    return (
        <AppContext.Provider
            value={{
                loading,
                recipes,
                setSearchTerm,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
