import React, { Component } from 'react'

export default class FetchRandomRecipe extends Component {

    state = {
      loading: true,
    }

   async componentDidMount(){
    const url = 'https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=chicken'
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   }

   render(){
     return (
        <div>
            {this.state.loading ? <div> loading...</div>
            : <div> recipe... </div> }

        </div>

     );
   }
}
