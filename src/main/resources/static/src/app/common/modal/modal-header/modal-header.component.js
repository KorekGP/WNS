/**
 * Created by eryk on 31.03.17.
 */
import html from './modal-header.component.html';

class ModalHeaderComponent {

}

export default {
    bindings: {
        title: '@',
        close: '&?'
    },
    controller: ModalHeaderComponent,
    controllerAs: 'modal',
    template: html,
};
