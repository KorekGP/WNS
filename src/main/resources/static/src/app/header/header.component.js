/**
 * Created by eryk on 31.03.17.
 */
import headerHtml from './header.component.html';
import headerPath from './header.jpg';
import './header.component.scss';

class HeaderController {

    constructor() {
        this.navCollapsed = true;
        this.headerPath = headerPath;
    }
}

export default {
    template: headerHtml,
    controller: HeaderController
};
