import React, { Component } from 'react'
import ls from 'local-storage'

class RecipeObject extends Component {

  constructor(props){
    super(props)
  }

  handleSave = () => {
    this.props.handleSaveRecipe(this.props.recipe)
  }

  render() {

    return (


      <p className="resulttext" >

        <a   href={this.props.url}  >  {this.props.label}  </a> by &nbsp;
        <a href={this.props.pub_url}>  {this.props.pub} </a> &nbsp;
        <img src={this.props.pic}/>

        <button className = "btn-dark btn-space" onClick={(e) => this.handleSave()} >
        Save Me
        </button>

      </p>

    )
  }
}

export default RecipeObject;
