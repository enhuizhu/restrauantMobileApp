'use strict';

import { createStore, applyMiddleware } from 'redux';
import DataService from '../services/dataService'
import restraurantApp from '../reducers/';

export default createStore(restraurantApp, applyMiddleware(DataService));