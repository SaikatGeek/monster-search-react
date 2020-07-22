import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount(params) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }



  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monster"
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}
        <h1> Monsters Search </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}




export default App;
