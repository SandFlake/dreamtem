import React, { Component } from 'react'
import FoodIdeas from './components/recipes'
import FetchRandomRecipe from './components/FetchRandomRecipe'


class App extends Component {
    state = {
      visible: true
    };

    render(){
      return (
        <div>
          <FetchRandomRecipe />
        </div>
      );
    }
}

export default App

// For use with files FoodIdeas AND RECIPES
// // const API = 'https://api.edamam.com/search?q=chicken&app_id=$6004b4a7&app_key=$fa6b448896dc28a62ede878f372078ac';
// const API = 'https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=';
// const DEFAULT_QUERY = 'chicken';
//
//   class App extends Component {
//     constructor(props) {
//       super(props);
//
//       this.state = {
//         foodIdeas: []
//       };
//     }
//
//      componentDidMount(){
//        fetch(API + DEFAULT_QUERY)
//        .then(res => res.json())
//        .then((data) => {
//
//          this.setState ({foodIdeas: data.recipes})
//
//        })
//        .catch(console.log)
//      }
//
//      render() {
//        return (
//          <FoodIdeas foodIdeas = {this.state.foodIdeas} />
//        )
//      }
//    }
//
// export default App


// Original key = 69810c988c6c70e14035a686640d095d
// https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=chicken
//
//
// New website
// ID = 6004b4a7
// key = fa6b448896dc28a62ede878f372078ac	—
// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
//
