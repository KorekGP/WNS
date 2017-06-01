/**
 * Created by eryk on 31.03.17.
 */
import html from './common-panel.component.html';
import './common-panel.component.scss';

class CommonPanelController {

    constructor() {
        // TODO
    }

}

export default {
    bindings: {
        title: '@',
        id: '@?',
        inverse: '=?',
        fluid: '<'
    },
    controller: CommonPanelController,
    controllerAs: 'panel',
    template: html,
    transclude: true
};
