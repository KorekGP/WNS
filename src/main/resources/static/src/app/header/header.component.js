/**
 * Created by eryk on 31.03.17.
 */
import headerHtml from './header.component.html';
import headerPath from './header.jpg';
import './header.component.scss';

class HeaderController {

    constructor() {
        this.chat = false;
        this.navCollapsed = true;
        this.headerPath = headerPath;
    }

    openChat() {
        this.chat = this.chat === false;
    }
}

export default {
    template: headerHtml,
    controller: HeaderController,
    controllerAs: 'headerCtrl',
};
