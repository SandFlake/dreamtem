import React, { Component } from 'react'
import Recipes from './components/recipes'


  class App extends Component {

    render() {
      return (
        <Recipes foodIdeas = {this.state.foodIdeas} />
      )
    }

     state = {
       foodIdeas: []
     };

     componentDidMount(){
       fetch('https://www.food2fork.com/api/search?key=69810c988c6c70e14035a686640d095d&q=chicken')
       .then(res => res.json())
       .then((data) => {
         this.setState ({foodIdeas: data})
       })
       .catch(console.log)
     }
   }

export default App
