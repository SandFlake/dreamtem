import React from 'react';
import ls from 'local-storage';

class SavedRecipesForLater extends React.Component {


  deleteRecipe = () => {
    this.props.handleDeleteRecipe(this.props.savedRecipe)
  }

  componentDidMount() {
    fetch('https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=')
    .then(json => this.setState({
      readLater: ls.get('readLater') || [],
    }));

    {console.log("Getting to save list for later " +  " " + ls.get('readLater'))}
  }

  render (){


    return (
      <div className = "readLaterArticleItem">

      <div className = "readLaterTitle">
        <a href = {this.props.url}>

         {this.props.title } </a>



         <h1> Sup fools  </h1>
         </div>


         </div>
    )
  }
}

export default SavedRecipesForLater;


// handleReadRecipe = () => {
//   this.props.handleReadRecipe(this.props.savedRecipe)
// }
