import React, {Component} from 'react';
import ls from 'local-storage'
import RecipeObject from './RecipeObject.js'
import SeeFaveList from './FaveListButton.js'
import SavedRecipeContainer from './SavedRecipeContainer'

const API_PUPPY = "http://www.recipepuppy.com/api/?i="
const RESULT_DEFAULT_STATE = {};

export default class AppClass extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    ingredient1: '',
    ingredient2: '',
    recipesResult: {},
    isEmptyState: true,
    isFaveListState: false,
    readLater: []

  };

  setIngredient1 = (ingredient1) => {
    this.setState({ingredient1})
  };

  setIngredient2 = (ingredient2) => {
    this.setState({ingredient2})
  };

  setRecipesResult = (recipesResult) => {
    this.setState({recipesResult})
  };

  setFaveList = (readLater) => {
    this.setState({readLater})
  };

  triggerFaveListState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isFaveListState: true
    })
  };

  handleState = () => {
    this.setState({
      ...this.state,
      isEmptyState: true,
      isFaveListState: false
    })
  }

  handleSaveRecipe = (recipe) => {
    let currentReadLaterState = this.state.readLater.slice(0);
    let newReadLaterState = [...currentReadLaterState, recipe]

    if(!this.state.readLater.includes(recipe)){
      this.setState({
        readLater: newReadLaterState,
      });
      ls.set('readLater', newReadLaterState)
    }
  }

  handleDeleteRecipe = (recipe) => {
    const beGone = this.state.readLater.slice(0)
    beGone.splice(beGone.indexOf(recipe), 1)
    this.setState({
      readLater: beGone,
    })
    ls.set('readLater', beGone)
  }



  onSubmit = (event) => {
    event.preventDefault();
    const {ingredient1, ingredient2} = this.state;

    this.setRecipesResult(RESULT_DEFAULT_STATE);

    fetch(`${API_PUPPY}${ingredient1},${ingredient2}&p=3`)
    .then(_ => _.json())
    .then(this.setRecipesResult, this.setFaveList, this.setState ({
    readLater: ls.get('readLater') || [] }))
    .catch(console.error)
  };


  render() {
    const {ingredient1, ingredient2, recipesResult} = this.state;
    const {count = 0, recipes = []} = recipesResult;

    return (
      <div className="container">
        <header className="App-header">
        <h1 className="my-5 text-center"> Recipe Genie </h1>

        <h2 className="my-3 text-center"> Making magic happen in the kitchen since 2019 </h2>
        <h3>What ingredients would you like to cook with today?</h3>
        <form onSubmit={this.onSubmit}> {}
          <label> Ingredient 1: </label>
            <input
            type="text"
            required
            className="form-control"
            value={ingredient1}
            placeholder="Choose your first ingredient"
            onChange={({target}) => this.setIngredient1(target.value)}/>
          <label> Ingredient 2: </label>
            <input
            type="text"
            required
            className="form-control"
            value={ingredient2}
            placeholder="Choose a second ingredient"
            onChange={({target}) => this.setIngredient2(target.value)}/>
          <div className="buttondivlmao">
            <button className="btn-success btn-space" disabled={!(ingredient1 && ingredient2)} onClick={this.handleState}>
            Find recipe ideas!
            </button>

      </div>
      </form>

      {this.state.isEmptyState && <SeeFaveList seeList={this.triggerFaveListState } /> }

      {this.state.isFaveListState &&  <SavedRecipeContainer readLater = {this.state.readLater} handleDeleteRecipe = {this.handleDeleteRecipe}/>}

      </header>

      <main>
      {count > 0
        ? <div>
            <h3>Showing {count.toLocaleString()} results for {ingredient1} and {ingredient2}</h3>

            {recipes.map(item => {
    return (
      <div key = {item.results}>
       {item.recipe.map(product => {
         return (
           <div key = {product.uri}>
           <p> {product.label}</p>
           <p> Hello </p>
           </div>
         );
       })}
       </div>
    )
  })}

          </div>
          : <h3>No results...</h3>
        }
        </main>
        </div>
      );
    }
  }


  <RecipeObject hits = {recipe} key = {index}
   url = {recipe.uri}
   title = {recipe.label} readLater={this.state.readLater}
   handleSaveRecipe= {this.handleSaveRecipe}
   handleDeleteRecipe={this.handleDeleteRecipe}
    pub={recipe.uri} pub_url={recipe.uri}/>



    <main>
    {count > 0
      ? <div>
          <h3>Showing {count.toLocaleString()} results for {ingredient1} and {ingredient2}</h3>
          <h2> Showing {q.toLocaleString()} </h2>

         {hits.map((recipe, index) =>
           <div className = "resultbox" key={index}>

                <RecipeObject hits = {recipe key = {index}
                 url = {recipe.uri}
                 title = {recipe.label} readLater={this.state.readLater}
                 handleSaveRecipe= {this.handleSaveRecipe}
                 handleDeleteRecipe={this.handleDeleteRecipe}
                  pub={recipe.uri} pub_url={recipe.uri}/>





        </div>
        : <h3>No results...</h3>
      }
      </main>




  , { Component } from 'react';
  import data from "./data";

  class Example2 extends Component {
  	render() {
  		return (
              <div>
                  {
  					data.Experiences.map((experience, i) => {
  						return (
  							<div key={i}>
  								<div>
  									<a href={experience.url}>
  										<img src={experience.logo} alt={experience.companyName} />
  									</a>
  									<div>
  										<div>
  											<a href={experience.url}>{experience.companyName}</a>
  										</div>
  											{experience.roles.map(function (role, i) {
  												return <div key={i}>
  													<h5>{role.title}</h5>
  													<span>{role.startDate}</span>
  													<span>{role.location}</span>
  													<p>{role.description}</p>
  												</div>
  											})}
  									</div>
  								</div>
  							</div>
  						);
  					})
  				}
              </div>
          );
      }
  }
  export default Example2;
