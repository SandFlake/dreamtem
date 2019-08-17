import React, { Component } from 'react'

class Food extends Component {
    constructor() {
      super();
      this.state = {
        recipes : [],
      };
    }

  componentDidMount() {
    fetch ('https://www.food2fork.com/api/search?key=69810c988c6c70e14035a686640d095d&q=')
    .then(results => {
      return results.json();
    }).then(data => {
      let recipes = data.results.map((pic)) => {
        return (
          <div key = {pic.results}
        )
      }
    })
  }

export default Food
