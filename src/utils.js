import { foods } from "./data"

export const getAllCategories = () => {
    const categoties = [...new Set(foods.map(obj=> obj.category))]
    return [...categoties, "all"].sort((a,b) => a.localeCompare(b))
}