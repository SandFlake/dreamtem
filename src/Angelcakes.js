import React, { Component } from 'react'

class RecipeObject extends Component {

constructor(props) {
  super(props)
}

  handleReadLater = () => {
    this.props.handleSaveRecipeForLater(this.props.recipe)
    {console.log("Reaching handlereadlater");}
  }


  render() {
    return (

        <p className="resulttext">
          <a   href={this.props.url}>  {this.props.title}  </a> by &nbsp;
          <a href={this.props.pub_url}>  {this.props.pub} </a> &nbsp;
          <img src={this.props.pic}/>



                  <button className = "btn-dark" onClick= {this.handleReadLater} >
                          Save Me
                  </button>
        </p>



        )
  }
}

export default RecipeObject;
