import React from 'react';
import './App.css';
import { Component } from 'react';
import Card from './components/card-list/card-list.component'
import Search from './components/Search'

class App extends Component {
constructor() {
  super()
  this.state = {
    monsters:[],
    searchField: ''
  }
}


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users =>this.setState({monsters: users}))
  }

  render() {
    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
    
        <div className=" App">
        <h1 className="mons">Monsters Crowd</h1>
      <Search placeholder="search monsters" handleChange={e =>this.setState({searchField: e.target.value})}/>
        <Card monsters={filteredMonsters}/>
        </div>
        
    );
  }
  
}

export default App;
