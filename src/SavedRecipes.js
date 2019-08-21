import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SavedRecipes extends Component {

  const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>Publisher</td>
      </tr>
      <tr>
        <td>Pic</td>
      </tr>
    </table>
  );

  ReactDOM.render(myelement, document.getElementById('root'));
