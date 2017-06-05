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
        this.id = null;
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
                {image: imgPath1, description: this.description[0].description, id: "1"},
                {image: imgPath2, description: this.description[1].description, id: "2"},
                {image: imgPath3, description: this.description[2].description, id: "3"},
                {image: imgPath4, description: this.description[3].description, id: "4"},
            ];
        } else if (this.buildingID == 2) {
            this.slides = [
                {image: imgPath5, description: this.description[4].description, id: "5"},
                {image: imgPath6, description: this.description[5].description, id: "6"},
                {image: imgPath7, description: this.description[6].description, id: "7"},
            ];
        } else if (this.buildingID == 3) {
            this.slides = [
                {image: imgPath8, description: this.description[7].description, id: "8"},
                {image: imgPath9, description: this.description[8].description, id: "9"},
                {image: imgPath10, description: this.description[9].description, id: "10"},
            ];
        } else if (this.buildingID == 4) {
            this.slides = [
                {image: imgPath11, description: this.description[10].description, id: "11"},
                {image: imgPath12, description: this.description[11].description, id: "12"},
                {image: imgPath13, description: this.description[12].description, id: "13"},
            ];
        }

        this.noWrapSlides = false;
        this.interval = 5000;
        this.active = 0;
    }
    editDescriptions() {
        this.tourRepository.editDescriptions(this.id, this.changedDescription, (data) => {
            this.getDescription();
            console.log('Success');
        });
    }

    setProperId(id) {
        this.id = id;
    }
}

export default {
    template: tourGuideHtml,
    controller: TourGuideController,
    controllerAs: 'tourGuideCtrl'
};
