import React from 'react';
import RecipeObject from './RecipeItem';

class RecipeNowContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipe()
    this.props.startInterval(this.props.fetchRecipes)
  }

  render() {
    return (

    <div>

        {this.props.recipes.map((recipe, index) => {
          return (
            <RecipeObject recipes={recipe} key={index} id={parseInt(index)} handleSaveRecipeForLater={this.props.handleSaveRecipeForLater}  articles={this.props.recipe} readLater={this.props.readLater}/>
          );
        })
      }

    </div>
  )
}
}


export default RecipeNowContainer;
