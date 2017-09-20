'use strict';

const expect = require('chai').expect;
const Loader = require('../../components/loader');
const shallow = require('enzyme').shallow;

describe('loader', () => {
    it('check dom', () => {
        const wrapper = shallow(<Loader/>);
        expect(wrapper.find('View')).to.have.length(1);
    });
});