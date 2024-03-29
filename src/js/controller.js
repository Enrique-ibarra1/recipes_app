
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id)
    if (!id) return;
    //spinny thing before search loads
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    //rendering recipe to the dom
    recipeView.render(model.state.recipe);
    
  } catch (err) {
    recipeView.renderError();
  }
}
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}
init();