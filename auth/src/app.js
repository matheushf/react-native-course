import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDOvGSgj3zkaaSrIcUdqKqNI7y5pvIVZXg',
            authDomain: 'authentication-cb3f3.firebaseapp.com',
            databaseURL: 'https://authentication-cb3f3.firebaseio.com',
            projectId: 'authentication-cb3f3',
            storageBucket: 'authentication-cb3f3.appspot.com',
            messagingSenderId: '167410328272'
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;