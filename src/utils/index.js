import axios from "axios";

// retrieve recipes from database
export async function getRecipes() {
    const { data } = await axios.get("/api/recipes");
    return data;
};