'use strict';

const baseUrl = "http://baba.olmarket.co.uk/cms/";

class UrlHelper {
    static getApi(path) {
        return `${baseUrl}${path}`;
    }

    static getImage(path) {
        return `${baseUrl}uploads/${path}`;
    }
}

export default UrlHelper;
