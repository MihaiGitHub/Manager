import React, { Component } from 'react';
import { Provider } from 'react-redux';
// applyMiddleware - tells redux to take a middleware and make use of it
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
            authDomain: 'manager-25f5a.firebaseapp.com',
            databaseURL: 'https://manager-25f5a.firebaseio.com',
            projectId: 'manager-25f5a',
            storageBucket: 'manager-25f5a.appspot.com',
            messagingSenderId: '815657719840'
        };

        firebase.initializeApp(config);
    }

    render() {
        // applyMiddleware - store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                {/* Let the router determine what to show */}
                <Router />
            </Provider>
        );
    }
}

export default App;