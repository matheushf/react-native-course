import React from 'react';
import {View} from 'react-native';
import {Ṕrovider } from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const App = () => {
    <Provider store={createStore(reducers)}>
        <View />
    </Provider>
}

export default App;