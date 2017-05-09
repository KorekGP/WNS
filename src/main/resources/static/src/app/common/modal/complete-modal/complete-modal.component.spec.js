/**
 * Created by eryk on 28.04.17.
 */

describe('footer-component', () => {
    let $componentController;

    beforeEach(angular.mock.module('app.common.modal'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should open complete modal', function () {
        const ctrl = $componentController('appCompleteModal');
    });

});
