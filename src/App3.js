
import React, {Component} from 'react';
import ls from 'local-storage'
import RecipeObject from './RecipeItem.js'
import SavedList from './SavedListContainer.js'
import SeeFaveList from './FaveList.js'
import ReadLaterContainer from './ReadLaterContainer'


const API_URL = 'https://www.food2fork.com/api/search?key=69810c988c6c70e14035a686640d095d&q=';
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



    // handleSaveRecipeForLater = (recipe) => {
    //   let currentReadLaterState = this.state.readLater.slice(0);
    //   let newReadLaterState = [...currentReadLaterState, recipe]
    //   if (!this.state.readLater.includes(recipe)) {
    //     this.setState({
    //       readLater: newReadLaterState,
    //     });
    //     ls.set('readLater', newReadLaterState)
    //   }
    //
    // }

    // componentDidMount() {
    //   fetch(`${API_URL}${ingredient1},${ingredient2}`)
    //   .then(response => response.json())
    //   .then(json => this.setState({
    //     readLater : ls.get('readLater') || [],
    //   }));
    // }


   onSubmit = (event) => {
      event.preventDefault();

        const {ingredient1, ingredient2} = this.state;

        this.setRecipesResult(RESULT_DEFAULT_STATE);

        fetch(`${API_URL}${ingredient1},${ingredient2}`)
            .then(_ => _.json())
            .then(this.setRecipesResult)
            .catch(console.error)

                //   readLater: ls.get('readLater') || [],
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
                            <button className="btn-success" disabled={!(ingredient1 && ingredient2)} onClick={this.handleState}>
                                Find recipe ideas!
                            </button>




                        </div>
                    </form>



                  {this.state.isEmptyState && <SeeFaveList seeList={this.triggerFaveListState } /> }

                  {this.state.isFaveListState && <SavedList />}


                    <ReadLaterContainer readLater = {this.state.readLater} handleDeleteRecipe = {this.handleDeleteRecipe}/>


                </header>

                <main>
                    {count > 0
                        ? <div>
                            <h3>Showing {count.toLocaleString()} results for {ingredient1} and {ingredient2}</h3>
                            {recipes.map((recipe, index) =>

                              <div className="resultbox" key={index}>
                                <RecipeObject recipe = {recipe} key={index}  url= {recipe.source_url} title={recipe.title} pub_url={recipe.publisher_url} pub={recipe.publisher} pic={recipe.image_url} value ={this.state.user}/>



                              {  console.log('Making recipe object with recipe: ' + recipe.title + "key: " + index ) }

                            </div>  )}
                        </div>
                        : <h3>No results...</h3>
                    }
                </main>
            </div>
        );
    }
}


   // <ReadLaterContainer readLater = {this.state.readLater} handleReadRecipe = {this.handleReadRecipe} handleDeleteRecipe = {this.handleDeleteRecipe}/>

    // <SavedList recipe = {recipe.title} SavedRecipesForLater = {readLater}/>


//   onClick ={ this.handleSaveRecipeForLater}


  //    <label> <input name="rememberMe" type="checkBox" checked={this.state.rememberMe}  onChange={this.handleTick}/> Save me </label>

// const API_URL = 'https://www.food2fork.com/api/search?key=44af67ba8f8f1d746620b2c57f0f8741&q=';

// Original key = 'https://www.food2fork.com/api/search?key=69810c988c6c70e14035a686640d095d&q=';
// 'https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=';
// key3 = 6eae1e8c9a3e84f5952d0d0241433020
//key 4 = fe21f4df437054edfea1b84d1109decf
//
// New website if food2fork doesn't play nice
// ID = 6004b4a7
// key = fa6b448896dc28a62ede878f372078ac	—
// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
//
