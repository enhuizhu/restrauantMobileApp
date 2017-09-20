'use strict';

import UrlHelper from '../helpers/urlHelper';

const token = "RAE6W1NUirZ5FRhcXU86uP80iA8FSNUtsv8dEfXK";

class ApiService {
    static getCategories() {
        return this.get('categories');
    }

    static get(path) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('token', token);
            
            fetch(UrlHelper.getApi(path), {headers}).then((response) => {
                return response.json();
            }).then((result) => {
                resolve(result);
            }).catch(reject);
        });
    }
}

export default ApiService;