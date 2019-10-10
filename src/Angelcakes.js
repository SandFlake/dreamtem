import React, { Component } from 'react'

class RecipeObject extends Component {

  state = {
    recipeName: '',
    rememberMe: false
  };

  handleTick = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox'? input.checked : input.value;
    this.setState({ [input.name ]: value });
    {console.log("Cookie time in Angekcakes");}
  }

  handleAddAngelCakes = () => {
    const { rememberMe, recipeName } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('recipeName', rememberMe ? recipeName : "babylon");
  {console.log("Help in Angelcakes " + localStorage.getItem('rememberMe')+ " recipe name from ls: " + localStorage.getItem('recipeName'));}
  }

  render() {
    return (

        <p className="resulttext">
          <a   href={this.props.url}>  {this.props.title}  </a> by &nbsp;
          <a href={this.props.pub_url}>  {this.props.pub} </a> &nbsp;
          <img src={this.props.pic}/>

            <label> <input name="rememberMe" type="checkbox" checked = {this.state.rememberMe} onChange={this.handleTick} /> Over Here </label>

                  <button className = "btn-dark" onClick= {this.handleAddAngelCakes} >
                          Help
                  </button>
        </p>



        )
  }
}

export default RecipeObject;


// handleTick = (event) => {
//   const input = event.target;
//   const value = input.type === 'checkBox'? input.checked : input.value;
//   this.setState({ [input.name ]: value });
//   {console.log("Cookie time in App");}
// }
//
// handleAdd = () => {
//   const { recipeName, rememberMe } = this.state;
//   localStorage.setItem('rememberMe', rememberMe);
//   localStorage.setItem('recipeName', rememberMe ? recipeName : this.props.title);
// {console.log("getting here boobs " + rememberMe + " user: " + recipeName  );}
// }
