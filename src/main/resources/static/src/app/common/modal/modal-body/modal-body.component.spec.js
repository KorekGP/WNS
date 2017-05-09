/**
 * Created by eryk on 28.04.17.
 */
import {getComponentElem, stdTest} from '../../test/test-helper';

describe('footer-component', () => {
    const wrapper = {};

    beforeEach(angular.mock.module('app.common.modal'));
    beforeEach(inject(getComponentElem(wrapper, '<app-modal-body></app-modal-body>')));


    fit('should open login modal', () => {
        stdTest(wrapper.element)
    });

});
