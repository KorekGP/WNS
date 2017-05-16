/**
 * Created by eryk on 31.03.17.
 */
import html from './common-panel.component.html';

class CommonPanelController {

    constructor() {
        // TODO
    }

}

export default {
    bindings: {
        title: '@',
        id: '@?',
        inverse: '=?'
    },
    controller: CommonPanelController,
    controllerAs: 'panel',
    template: html,
    transclude: true
};
