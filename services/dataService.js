'use strict';

import events from '../constants/events';
import { setCategories }  from '../actions/';
import ApiService from '../services/apiService';

const DataService = store => next => action => {
    // pass all actions through by default
    next(action);

    switch(action.type) {
        case 'GET_CATEGORIES_DATA':
            ApiService.getCategories().then(categories => {
                next(setCategories(categories));
            });

            break;

        default:
            break;
    }
}

export default DataService;
