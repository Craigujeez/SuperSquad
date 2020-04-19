import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroeList from './HeroeList';
import '../index.css';
import SquadStats from './SquadStats';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <h3>SuperSquad</h3>
                <div className="container">
                    <div className="col-md-4"><CharacterList/></div>
                    <div className="col-md-4"><HeroeList/></div>
                    <div className="col-md-4"><SquadStats/></div>
                </div>
            </div>
         );
    }
}
 
export default App;