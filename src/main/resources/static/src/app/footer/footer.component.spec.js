/**
 * Created by eryk on 28.04.17.
 */

describe('component: accept-modal.component.test.js', () => {
    let $componentController;

    beforeEach(module('app.rentcar.common'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    fit('should call goAccept', function () {
        var bindings = {
            rentcarItem: {
                rentId: 1,
                akceptUwagi: 'foo',
                akceptStatus: '-'
            },
            callback: function () {
                'use strict';
                //test purpose
            }
        };
        var ctrl = $componentController('acceptModalComponent', null, bindings);
        ctrl.goAccept();
    });

});
