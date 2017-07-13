import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, CardSection, Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDOvGSgj3zkaaSrIcUdqKqNI7y5pvIVZXg',
            authDomain: 'authentication-cb3f3.firebaseapp.com',
            databaseURL: 'https://authentication-cb3f3.firebaseio.com',
            projectId: 'authentication-cb3f3',
            storageBucket: 'authentication-cb3f3.appspot.com',
            messagingSenderId: '167410328272'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>
        }

        if (this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;