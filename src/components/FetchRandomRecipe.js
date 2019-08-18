import React, { Component } from 'react'

export default class FetchRandomRecipe extends Component {

    state = {
      loading: true,
      recipes: null,
    }

   async componentDidMount(){
    const url = 'https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=chicken'
    const response = await fetch(url);
    const data = await response.json();
    this.setState( {recipes: data.recipes[2], loading: false})
    console.log(data.recipes);
   }

   render(){
     return (
        <div>
            {this.state.loading || !this.state.recipes ? (
               <div> loading...</div>
             ) :  (
               <div>
               <div> {this.state.recipes.title}</div>
               <img src= {this.state.recipes.image_url} />
               <div> {this.state.recipes.source_url}</div>
                </div>
             ) }
        </div>

     );
   }
}
