import React from 'react';
import { View } from 'react-native';
import { Ṕrovider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
    <Provider store={createStore(reducers)}>
        <View>
            <Header headerText="Tech Stack" />
        </View>
    </Provider>
}

export default App;