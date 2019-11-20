import React, { Component } from 'react'
import ls from 'local-storage'

class RecipeObject extends Component {

  constructor(props){
    super(props)
  }

  handleSave = () => {
    this.props.handleReadLater(this.props.recipe)
  }

  render() {

    return (

      <p className="resulttext" >
        <a   href={this.props.url}  >  {this.props.title}  </a> by &nbsp;
        <a href={this.props.pub_url}>  {this.props.pub} </a> &nbsp;
        <img src={this.props.pic}/>

        <button className = "btn-dark" onClick={(e) => this.handleSave()} >
        Save Me
        </button>

      </p>

    )
  }
}

export default RecipeObject;
