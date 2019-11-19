import React, {Component} from 'react';
import './App.css';
import MetisMenu from '../node_modules/react-metismenu/dist/react-metismenu';
import  '../node_modules/react-metismenu/dist/react-metismenu-standart.css';
import LoginScreen from './Loginscreen';
import Switch from "react-switch";

class App extends Component {
  constructor(props){
    super(props);
    this.state={checked: false};
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(checked){
    this.setState({checked});
  }


  render() {
    const menu=[
      {
        icon: 'fa-building',
        label: 'Building 1',
        content: [
          {
            label: 'Room 1',
            to:'App.js'
          }
        ]
      }
    ];


    return (
      <div className="App">
        <div id="header">
          <h1 className="auto-style1">Husky Lights</h1>
        </div>
          <MetisMenu content={menu} className='menu'/>

        <div className="body">
          <table id="light_table" border="1">
            <tr>
              <th>Light Location</th>
              <th>Power Usage</th>
              <th>Total Active Hours</th>
              <th>Switch</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onColor="#06D6A0"
                  offColor="#EF476F"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow= "0px 0px 2px rgba(10,10,10,0.29)"

                  /></td>
            </tr>
          </table>
        </div>

      </div>

    );
  }
}

export default App;
