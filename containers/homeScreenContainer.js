'use strict';

import { connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

module.exports = connect(mapStateToProps)(HomeScreen);