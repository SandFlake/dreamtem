import React, { Component } from 'react'

class RecipeObject extends Component {
  render() {
    return (

        <p className="resulttext">
          <a href={this.props.url}>  {this.props.title} </a> by &nbsp;
          <a href={this.props.pub_url}>  {this.props.pub} </a> &nbsp;
          <img src={this.props.pic}/>
        </p>

        )
  }
}

export default RecipeObject;
