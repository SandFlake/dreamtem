import React, { Component } from 'react'
import ls from 'local-storage'

//instead of Angelcakes

const SAVED_LIST = {};

class RecipeObject extends Component {

  state = {
    readLater: []
  }

  setSavedList = (readLater) => {
    this.setState({readLater})
  }


  handleReadLater = (recipe) => {


    let currentReadLaterState = this.state.readLater.slice(0);
    let newReadLaterState = [...currentReadLaterState, this.props]

    this.setSavedList(SAVED_LIST);

    if(!this.state.readLater.includes(this.props)){

      this.setState({
        readLater: newReadLaterState,
      });
      ls.set('readLater', newReadLaterState)
    
}


    {console.log("Reaching handlereadlater "  + ls.get('readLater') + "    boobs    " + this.props.title + " url: " + this.props.url );}
  }


  render() {
    const {readLater} = this.state;
      const {count = 0 , savedRecipes = [] } = readLater;

    return (


        <p className="resulttext" >
          <a   href={this.props.url}  >  {this.props.title}  </a> by &nbsp;
          <a href={this.props.pub_url}>  {this.props.pub} </a> &nbsp;
          <img src={this.props.pic}/>


          <button className = "btn-dark" onClick={(e) => this.handleReadLater()} >
                Save Me
          </button>

        </p>



        )
  }
}

export default RecipeObject;

  // this.props.handleSaveRecipeForLater.bind(this.props.title)

// let currentReadLaterState = this.state.readLater;
// let newReadLaterState = [...currentReadLaterState, recipe]
//
// ls.set('readLater', this.props)

// componentDidMount() {
//   fetch('https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=')
//   .then(json => this.setState({
//     readLater: ls.get('readLater') || [],
//   }));
// }

          // <button className = "btn-dark" onClick={this.handleReadLater(this.props.title)} >
          //       Save Me
          // </button>

//    this.props.handleSaveRecipeForLater(this.props.recipe)

// if (this.props.readLater.find((recipe) => {
//   return recipe.title == this.props.title
// }))
// if (!this.state.readLater.includes(recipe)){
//   this.setState({
//     readLater: newReadLaterState,
//
//   });
//   ls.set('readLater', newReadLaterState)
// }
