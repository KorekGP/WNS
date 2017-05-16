/**
 * Created by eryk on 13.05.17.
 */

import {getComponent, stdTest} from '../../../common/test/test-helper';

const componentName = 'user-grid';

describe(componentName, () => {
    const wrapper = {};

    beforeEach(angular.mock.module('app.admin'));
    beforeEach(inject(getComponent(wrapper, componentName)));

    it('should open login modal', () => {
        stdTest(wrapper.element)
    });

});
