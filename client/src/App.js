import React, { Component } from 'react';

import Menu from './components/Menu'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <div className="App">
                    <Menu />
                </div>
            </Provider>

        )
    }
}

export default App;