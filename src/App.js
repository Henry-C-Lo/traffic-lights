import React, {Component} from 'react';
import './App.css';
import Controller from './container/Controller';
import Street from './container/street';


class App extends Component {



    render() {
        return (
            <div className="App">
                <Street />
                <Controller />
            </div>
        );
    }
}



export default App;
