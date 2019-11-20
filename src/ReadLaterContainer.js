import React from 'react';
import SavedRecipesForLater from './SavedRecipesForLater.js'

const ReadLaterContainer = ({readLater, handleDeleteRecipe}) => (

  <div className="savedbox2">

      <h1> Your Saved Recipes </h1>

        {readLater.map((recipe, index) => <SavedRecipesForLater readLater ={recipe} key={index}  handleDeleteRecipe={handleDeleteRecipe}/> )}

    </div>
);

export default ReadLaterContainer;
