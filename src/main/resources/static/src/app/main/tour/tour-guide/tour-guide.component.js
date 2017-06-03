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

    constructor($stateParams, TourRepository, $rootScope) {
        this.authenticated = $rootScope.authenticated;
        this.tourRepository = TourRepository;
        this.description = {};
        this.roomId = null;
        this.changedDescription = null;
        this.buildingID = $stateParams.buildingID;
        this.getDescription();
    }

    getDescription() {
        this.tourRepository.getDescriptions((data) => {
            this.description = data.data;
            this.prepareImages();
        });
    }

    prepareImages() {
        if (this.buildingID == 1) {
            this.slides = [
                {image: imgPath1, description: this.description[0].description},
                {image: imgPath2, description: this.description[1].description},
                {image: imgPath3, description: this.description[2].description},
                {image: imgPath4, description: this.description[3].description},
            ];
        } else if (this.buildingID == 2) {
            this.slides = [
                {image: imgPath5, description: this.description[4].description},
                {image: imgPath6, description: this.description[5].description},
                {image: imgPath7, description: this.description[6].description},
            ];
        } else if (this.buildingID == 3) {
            this.slides = [
                {image: imgPath8, description: this.description[7].description},
                {image: imgPath9, description: this.description[8].description},
                {image: imgPath10, description: this.description[9].description},
            ];
        } else if (this.buildingID == 4) {
            this.slides = [
                {image: imgPath11, description: this.description[10].description},
                {image: imgPath12, description: this.description[11].description},
                {image: imgPath13, description: this.description[12].description},
            ];
        }

        this.noWrapSlides = false;
        this.interval = 5000;
        this.active = 0;
    }
    editDescriptions() {
        this.tourRepository.editDescriptions(this.roomId, this.changedDescription, (data) => {
            console.log('Success');
        });
    }
}

export default {
    template: tourGuideHtml,
    controller: TourGuideController,
    controllerAs: 'tourGuideCtrl'
};
