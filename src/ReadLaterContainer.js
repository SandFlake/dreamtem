import React from 'react';
import SavedRecipesForLater from './SavedRecipesForLater.js'

const ReadLaterContainer = ({readLater, handleDeleteRecipe}) => (

  <div className="savedbox2">
        {readLater.map((recipe, index) => <SavedRecipesForLater readLater ={recipe} key={index}  handleDeleteRecipe={handleDeleteRecipe}/> )}
    </div>
);

export default ReadLaterContainer;





  //  {recipe.map((recipe, index) => <SavedRecipesForLater savedRecipe ={recipe} key={index}  handleDeleteRecipe={handleDeleteRecipe}/> )}
