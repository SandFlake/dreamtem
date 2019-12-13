import React from 'react';
import ls from 'local-storage';

class SavedRecipesForLater  extends React.Component {

  constructor(props){
    super(props)
  }

  handleDelete = () => {
    this.props.handleDeleteRecipe(this.props.readLater)
  }

  render (){

    return (

        <div className = "readLaterArticleItem">
          <a href={this.props.readLater.uri}>
            {this.props.readLater.label}
          </a>

          <button className = "btn-danger btn-space" onClick={(e => this.handleDelete())}>

          Delete Me!
          </button>

          </div>
    )
  }
}

export default SavedRecipesForLater;

//
// componentDidMount() {
//   fetch('https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=')
//   .then(json => this.setState({
//     readLater: ls.get('readLater') || [],
//   }));
//
// }
