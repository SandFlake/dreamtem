import React from 'react';
import ls from 'local-storage';

class SavedRecipesForLater  extends React.Component {

  deleteRecipe = () => {
    this.props.handleDeleteRecipe(this.props.savedRecipe)
  }

  componentDidMount() {
    fetch('https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=')
    .then(json => this.setState({
      readLater: ls.get('readLater') || [],
    }));

  }

  render (){

    return (

        <div className = "readLaterArticleItem">
          <a href={this.props.readLater.publisher_url}>
            {this.props.readLater.title}
          </a>

          </div>
    )
  }
}

export default SavedRecipesForLater;
