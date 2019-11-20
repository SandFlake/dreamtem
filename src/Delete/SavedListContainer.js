import React, {Component} from 'react'
import App from './App3'
import SavedRecipesForLater from './SavedRecipesForLater'
import ls from 'local-storage'
import RecipeItem from './RecipeItem'


class SavedList  extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div className="savedbox">


      <h1> ill tell you what i want but i reaally really waaaant </h1>


      </div>
    )
  }
}

export default SavedList


 // {readLater.map((recipe, index) => <SavedRecipesForLater savedRecipe ={recipe} key={index}  handleDeleteRecipe={handleDeleteRecipe}/> )}

        //     {readLater.map((recipe, index) => <SavedRecipesForLater readLater ={recipe} key={index}  handleDeleteRecipe={handleDeleteRecipe}/>)}
