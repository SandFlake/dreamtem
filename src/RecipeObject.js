import React, {Component} from 'react'

class RecipeObject extends Component {

    constructor(props) {
        super(props)
    }

    handleSave = () => {
        this.props.handleSaveRecipe(this.props.recipe)
    };

    render() {
        return (
            <p className="resulttext">
                <a href={this.props.hits.recipe.url}>  {this.props.hits.recipe.label}  </a> by &nbsp;
                <a href={this.props.hits.recipe.pub_url}>  {this.props.hits.recipe.pub} </a> &nbsp;
                <img src={this.props.hits.recipe.image}/>

                <button className="btn-dark btn-space" onClick={(e) => this.handleSave()}>
                    Save Me
                </button>
            </p>
        )
    }
}

export default RecipeObject;
