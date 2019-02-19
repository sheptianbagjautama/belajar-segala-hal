import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Header from './component/header';
// DB JSON
import JSON from './db.json'
import NewList from './component/new_list';

class App extends Component {

    state = {
        news:JSON
    }

    render(){
        return (
            <div className="newElement">
                <Header/>
                <NewList news={this.state.news} >
                </NewList>
            </div>
        );
    }
}
    
ReactDOM.render(<App/>,document.querySelector('#root'));

