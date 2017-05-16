/**
 * Created by eryk on 28.04.17.
 */

describe('login-modal', () => {
    let $componentController;

    beforeEach(angular.mock.module('app.footer'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should open login modal', function () {
        const ctrl = $componentController('appLoginModal');
    });

});
