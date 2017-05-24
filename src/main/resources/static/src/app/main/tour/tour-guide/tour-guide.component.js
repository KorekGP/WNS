/**
 * Created by Grzegorz on 22.05.2017.
 */
import tourGuideHtml from './tour-guide.component.html';
import './tour-guide.component.css';
import uiRouter from '@uirouter/angularjs';
import imgPath1 from '../../../images/01a_1.jpg';


class TourGuideController {

    constructor($stateParams) {

        this.buildingID = $stateParams.buildingID;

        if (this.buildingID == 1) {
            this.slides = [
                {image: imgPath1, description: 'Image 00'},
                {image: 'src/app/images/02aa_1.jpg', description: 'Image 01'},
                {image: 'src/app/images/02bb_1.jpg', description: 'Image 02'},
                {image: 'src/app/images/03a_1.jpg', description: 'Image 03'},
            ];
        } else if (this.buildingID == 2 ) {
            this.slides = [
                {image: 'src/app/images/06a_1.jpg', description: 'Image 00'},
                {image: 'src/app/images/06b_1.jpg', description: 'Image 01'},
                {image: 'src/app/images/08a_1.jpg', description: 'Image 02'},
            ];
        } else if (this.buildingID == 3 ) {
            this.slides = [
                {image: 'src/app/images/09a_1.jpg', description: 'Image 00'},
                {image: 'src/app/images/09b_1.jpg', description: 'Image 01'},
                {image: 'src/app/images/09b_1_(1).jpg', description: 'Image 02'},
            ];
        } else if (this.buildingID == 4 ) {
            this.slides = [
                {image: 'src/app/images/10a_1.jpg', description: 'Image 00'},
                {image: 'src/app/images/sala_wykładowa bud_E.jpg', description: 'Image 01'},
                {image: 'src/app/images/sala_wykładowa_ budynek_E.jpg', description: 'Image 02'},
            ];
        }

        this.index = 0;
        this.previousEmpty = true;
        this.nextEmpty = false;
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
