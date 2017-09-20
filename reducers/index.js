'use strict';

import events from '../constants/events';

function setCategories(categories, action) {
    if (action.type === events.SET_CATEGORIES) {
        return action.data;
    }

    return categories;
}

function setLoader(isLoading, action) {
    if (action.type === events.SET_LOADER) {
        return action.data;
    }

    return isLoading;
}

export default function restraurantApp(state = {categories: {}, isLoading: false}, action) {
    return {
        categories: setCategories(state.categories, action),
        isLoading: setLoader(state.isLoading, action)
    };
}