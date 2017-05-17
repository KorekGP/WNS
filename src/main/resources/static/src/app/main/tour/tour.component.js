/**
 * Created by eryk on 31.03.17.
 */
import tourHtml from './tour.component.html';
import img from './img/interactive-map.jpg'
import './tour.component.scss';

class TourController {

    constructor() {
        this.img = img;
    }
}

export default {
    template: tourHtml,
    controller: TourController,
};
