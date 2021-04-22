import {async} from 'regenerator-runtime';
export const state = {
    recipe: {},
};
import {API_URL} from './config.js';
import {getJSON} from './helpers.js';
export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`)
        // console.log(data);
        //destructure the data and create a better object
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        // console.log(state.recipe);
    } catch (err) {
        // console.error(`%%%%% ${err} %%%%%%% `);
        throw err;
    }
};

export const loadSearchResults = async function(query) {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);
    } catch (err) {
        throw err;
    }
}
loadSearchResults('pizza');
