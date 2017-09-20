import React from 'react';
import { Provider } from 'react-redux';
// import all the screens
import HomeScreenContainer from './containers/homeScreenContainer';
import SubScreen from './screens/SubScreen';

import store from './store/';
import events from './constants/events';

import {
    StackNavigator,
} from 'react-navigation';

const AppNavigator = StackNavigator({
    Home: { screen: HomeScreenContainer },
    SubScreen: {screen: SubScreen}
});

store.dispatch({
    type: events.GET_CATEGORIES_DATA
});


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

export default App;