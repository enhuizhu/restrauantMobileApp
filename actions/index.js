'use strict';

import events from '../constants/events';

export function setCategories(categories) {
    return {
        type: events.SET_CATEGORIES,
        data: categories
    }
}

export function setLoader(isLoading) {
    return {
        type: events.SET_LOADER,
        data: isLoading
    }
}