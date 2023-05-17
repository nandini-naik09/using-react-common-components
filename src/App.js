import logo from './logo.svg';
import './App.css';
import React from 'react';

class Form extends React.Component{
  constructor()
  {
    super();
    this.state={
      descrption: 'React is a front-end library developed by Facebook folks'
    }
  }

  render()
  {
    return (
      <form>
        <p>Write your post:</p>
        <textarea defaultValue={this.state.descrption} rows={2} cols={40} />

        <p> Using Dropdown</p>
        <select value="Please choose options"> --! multiple={true}
          <option value="React">React</option>
          <option value="Angular">Angular </option>
          <option value="Node">Node.js</option>
        </select>


        <p> Using Progress</p>
          <progress value={0} /> <br/>
          <progress value={0.5} />  <br/>
          <progress value={75} max={100} />  <br/>
          <progress value={1} />  <br/>
          <progress value={null} />

          <p> Using Checkbox</p>
          <label>
          <input type="checkbox" name="myCheckbox" value="Option1"/> Option1
          </label>
          

          <p> Using RadioButtons</p>
          <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>

      </form>
    )
  }
}



export default Form;
