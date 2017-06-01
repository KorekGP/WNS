/**
 * Created by Grzegorz on 22.05.2017.
 */
import tourGuideHtml from './tour-guide.component.html';
import './tour-guide.component.css';
import imgPath1 from '../../../images/01a_1.jpg';
import imgPath2 from '../../../images/02aa_1.jpg';
import imgPath3 from '../../../images/02bb_1.jpg';
import imgPath4 from '../../../images/03a_1.jpg';
import imgPath5 from '../../../images/06a_1.jpg';
import imgPath6 from '../../../images/06b_1.jpg';
import imgPath7 from '../../../images/08a_1.jpg';
import imgPath8 from '../../../images/09a_1.jpg';
import imgPath9 from '../../../images/09b_1.jpg';
import imgPath10 from '../../../images/09b_1_(1).jpg';
import imgPath11 from '../../../images/10a_1.jpg';
import imgPath12 from '../../../images/sala_wykładowa bud_E.jpg';
import imgPath13 from '../../../images/sala_wykładowa_ budynek_E.jpg';


class TourGuideController {

    constructor($stateParams) {

        this.buildingID = $stateParams.buildingID;

        if (this.buildingID == 1) {
            this.slides = [
                {image: imgPath1, description: 'Image 00'},
                {image: imgPath2, description: 'Image 01'},
                {image: imgPath3, description: 'Image 02'},
                {image: imgPath4, description: 'Image 03'},
            ];
        } else if (this.buildingID == 2) {
            this.slides = [
                {image: imgPath5, description: 'Image 00'},
                {image: imgPath6, description: 'Image 01'},
                {image: imgPath7, description: 'Image 02'},
            ];
        } else if (this.buildingID == 3) {
            this.slides = [
                {image: imgPath8, description: 'Image 00'},
                {image: imgPath9, description: 'Image 01'},
                {image: imgPath10, description: 'Image 02'},
            ];
        } else if (this.buildingID == 4) {
            this.slides = [
                {image: imgPath11, description: 'Image 00'},
                {image: imgPath12, description: 'Image 01'},
                {image: imgPath13, description: 'Image 02'},
            ];
        }
        this.noWrapSlides = false;
        this.interval = 5000;
        this.active = 0;
    }

    nextIndex() {
        this.index = this.index + 1;
        this.checkIfEmpty();
    }

    previosIndex() {
        this.index = this.index - 1;
        this.checkIfEmpty();
    }

    checkIfEmpty() {
        this.nextEmpty = this.index === this.slides.length - 1;
        this.previousEmpty = this.index === 0;
    }
}


export default {
    template: tourGuideHtml,
    controller: TourGuideController,
    controllerAs: 'tourGuideCtrl',
};
