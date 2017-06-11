/**
 * Created by eryk on 01.06.17.
 */

import './shake-error.component.scss';
import template from './shake-error.view.html';

const ANIMATION_DURATION = 500;

class ShakeErrorController {

    /*@ngInject*/
    constructor($timeout) {
        this.shakeError = {};
        this.$timeout = $timeout;
        this.errorAlready = false;
        this.animate = false;
        this.message = null;
    }

    domShake() {
        this.animate = true;
        this.$timeout(() => {
            this.animate = false;
        }, ANIMATION_DURATION);
    }

    shake() {
        return (message) => {
            if (this.errorAlready && this.message === message) {
                this.message = message;
                this.domShake();
            } else {
                this.message = message;
                this.errorAlready = true;
            }
        };
    }

    $onInit() {
        this.shakeError.shake = this.shake();
    }

}

export const ShakeErrorComponent = {
    bindings: {
        shakeError: '<'
    },
    controller: ShakeErrorController,
    controllerAs: 'shakeError',
    template: template
};


