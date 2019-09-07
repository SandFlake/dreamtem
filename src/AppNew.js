
import React, {Component} from 'react';
import ls from 'local-storage'
// import SavedRecipes from './SavedRecipes'
import ReactDOM from 'react-dom';


const API_URL = 'https://www.food2fork.com/api/search?key=44af67ba8f8f1d746620b2c57f0f8741&q=';
const RESULT_DEFAULT_STATE = {};

export default class AppClass extends Component {
    state = {
        ingredient1: '',
        ingredient2: '',
        recipesResult: {},
    //    list: [],
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


    handleChange = (event) => {

      let list = [];
      let itemUrl = document.getElementById('recipeTitle');
      console.log(itemUrl);
      list.push(itemUrl);
      console.log(list);
      localStorage.setItem('myKey', itemUrl);

     };

   showList = () => {

      var result=  localStorage.getItem('myKey');
      console.log("hello " + result);
     }

     //  getSavedFood(){
     //    console.log("you made it here");
     //    const yoda = 'yoda man'
     //    localStorage.setItem('luke', yoda);
     //    const who = localStorage.getItem('luke');
     //    console.log(who);
     //  }
     //
     // componentDidMount(){
     //   this.getSavedFood();
     // }

   onSubmit = (event) => {
      event.preventDefault();

        const {ingredient1, ingredient2} = this.state;

        this.setRecipesResult(RESULT_DEFAULT_STATE);

        fetch(`${API_URL}${ingredient1},${ingredient2}`)
            .then(_ => _.json())
            .then(this.setRecipesResult)
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
                            <button className="btn-success" disabled={!(ingredient1 && ingredient2)}>
                                Find recipe ideas!
                            </button>

                        </div>
                    </form>

                    <button className ="btn-warning" onClick={this.showList}>
                    Look at saved recipes
                    </button>
                </header>
                <main>
                    {count > 0
                        ? <div>
                            <h3>Showing {count.toLocaleString()} results for {ingredient1} and {ingredient2}</h3>
                            {recipes.map((recipe, index) =>
                              <div className="resultbox" key={index}>
                                <p className="resulttext">

                                    {index + 1}:&nbsp;
                                    <a id="recipeTitle" href={recipe.source_url}>{recipe.title}</a> by&nbsp;
                                    <a href={recipe.publisher_url}>{recipe.publisher}</a> &nbsp;
                                    <img src={recipe.image_url} alt={recipe.title}/>

                                </p>
                                <label> <input name="rememberMe" type="checkBox"  onChange={this.handleChange}/> Save me </label>
                            </div>)}
                        </div>
                        : <h3>No results...</h3>
                    }
                </main>
            </div>
        );
    }
}

// Original key = 69810c988c6c70e14035a686640d095d
// https://www.food2fork.com/api/search?key=71bae224f882832faa9eb76d7471cbfd&q=chicken
// key3 = 6eae1e8c9a3e84f5952d0d0241433020
//key 4 = fe21f4df437054edfea1b84d1109decf
//
// New website if food2fork doesn't play nice
// ID = 6004b4a7
// key = fa6b448896dc28a62ede878f372078ac	—
// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
//
