import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''


    }



  }

  

  componentDidMount() { // metoda life-cycle, do której dostęp daje nam komponent class 
    fetch('https://jsonplaceholder.typicode.com/users') // "sprowadzamy" dane z tego URL
    .then(response => response.json()) // przekształcamy odzew na format .json, który javascript ogarnia używać
    .then(users => this.setState({monsters : users})) // bierzemy users'ów i przypisujemy ich do pustej tablicy monsters
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})

  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )



  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        handleType='search'
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
      
      <CardList monsters={filteredMonsters}/> 


    </div>
    
  
    
    );
  }
}

export default App;
