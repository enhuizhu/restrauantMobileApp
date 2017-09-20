'use strict';

import { connect } from 'react-redux';
import Loader from '../components/loader';

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

module.exports = connect(mapStateToProps)(Loader);