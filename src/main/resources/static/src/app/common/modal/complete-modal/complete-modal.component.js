/**
 * Created by eryk on 31.03.17.
 */
import html from './complete-modal.component.html';

class CompleteModalController {

    constructor() {
        // TODO
    }

}

export default {
    bindings: {
        title: '@',
        modalInstance: '=?'
    },
    controller: CompleteModalController,
    controllerAs: 'modal',
    template: html,
    transclude: {
        myModalBody: '?myModalBody',
        myModalFooter: '?myModalFooter'
    }
};
