/**
 * Created by eryk on 28.04.17.
 */
import {getComponent, stdTest} from '../../test/test-helper';

describe('footer-component', () => {
    const wrapper = {};

    beforeEach(angular.mock.module('app.common.modal'));
    beforeEach(inject(getComponent(wrapper, 'modal-body', null, true)));

    it('should open login modal', () => {
        stdTest(wrapper.element)
    });

});
