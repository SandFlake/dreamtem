import React from 'react'

const AddToList = props => {
  return <button className="btn-info" onClick = {props.handleAdd}> Add These to Your FaVE lIST </button>
}

export default AddToList

// From angelcakes
// state = {
//   recipeName: '',
//   rememberMe: false
// };

// handleTick = (event) => {
//   const input = event.target;
//   const value = input.type === 'checkbox'? input.checked : input.value;
//   this.setState({ [input.name ]: value });
//   {console.log("Cookie time in Angekcakes");}
// }
//
// handleAddAngelCakes = () => {
//   const { rememberMe, recipeName } = this.state;
//   localStorage.setItem('rememberMe', rememberMe);
//   localStorage.setItem('recipeName', rememberMe ? recipeName : "babylon");
// {console.log("Help in Angelcakes " + localStorage.getItem('rememberMe')+ " recipe name from ls: " + localStorage.getItem('recipeName'));}
// }


//From AppClass
 // handleAdd = () => {
    //   const {  rememberMe, recipeName } = this.state;
    //   localStorage.setItem('rememberMe', rememberMe);
    //   localStorage.setItem('recipeName', rememberMe ? recipeName : "silver");
    //   {console.log("accessing ls: " + localStorage.getItem('recipeName'));}
    // {console.log("getting here  in App " + rememberMe + " user: " + recipeName  );}
    // }
    //
    // handleTick = (event) => {
    //   const input = event.target;
    //   const value = input.type === 'checkBox'? input.checked : input.value;
    //   this.setState({ [input.name ]: value });
    //   {console.log("Cookie time in App");}
    // }


From angelcakes<label> <input name="rememberMe" type="checkbox" checked = {this.state.rememberMe} onChange={this.handleTick} /> Over Here </label>
