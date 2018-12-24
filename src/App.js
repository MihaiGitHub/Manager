import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyD4rzEVkfZsX_MtVQ2IfLt5-kC96VimNcw',
            authDomain: 'manager-25f5a.firebaseapp.com',
            databaseURL: 'https://manager-25f5a.firebaseio.com',
            projectId: 'manager-25f5a',
            storageBucket: 'manager-25f5a.appspot.com',
            messagingSenderId: '815657719840'
        };

        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;