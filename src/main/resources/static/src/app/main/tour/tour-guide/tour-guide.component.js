/**
 * Created by Grzegorz on 22.05.2017.
 */
import tourGuideHtml from './tour-guide.component.html';
import './tour-guide.component.css';
import {SlidesStore} from './slides.store';

class TourGuideController {

    constructor($stateParams, TourGuideService, $rootScope) {
        this.buildingID = $stateParams.buildingID;
        this.slidesStore = SlidesStore[this.buildingID];
        this.authenticated = $rootScope.authenticated;
        this.tourService = TourGuideService;
        this.id = null;
    }

    $onInit() {
        this.controller = {};
        this.controller.activeIndex = 0;
        this.interval = 10000;
        this.getDescription();
    }

    getDescription() {
        this.tourService.getDescriptions((data) => {
            this.description = data.data;
            this.assignStore(this.description);
        });
    }

    assignStore(descriptionData) {
        for (const slide of this.slidesStore) {
            slide.description = descriptionData[slide.id].description;
        }
    }

    setProperId(id) {
        this.id = id;
    }

    editCallback(text) {
        this.tourService.editDescriptions(this.getId(), text, () => {
            this.getDescription();
        });
    }

    getId() {
        return this.slidesStore[this.controller.activeIndex].id
    }

}

export default {
    template: tourGuideHtml,
    controller: TourGuideController,
    controllerAs: 'guide'
};
