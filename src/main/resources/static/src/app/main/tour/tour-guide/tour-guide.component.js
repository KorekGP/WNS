/**
 * Created by Grzegorz on 22.05.2017.
 */
import tourGuideHtml from './tour-guide.component.html';
import './tour-guide.component.scss';
import {SlidesStore} from './slides.store';

class TourGuideController {

    /*@ngInject*/
    constructor(TourGuideService, $rootScope, $sce) {
        this.$sce = $sce;
        this.authenticated = $rootScope.authenticated;
        this.tourService = TourGuideService;
        this.id = null;
    }

    $onInit() {
        this.slidesStore = SlidesStore[this.resolve.buildingId];
        this.activeIndex = 0;
        this.getDescription();
    }

    getProperVideoId(link) {
        this.result = link.match(/=.+/);
        return this.$sce.trustAsResourceUrl("https://www.youtube.com/embed/" + this.result.toString().substring(1));
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
            slide.link = this.getProperVideoId(descriptionData[slide.id].link);
        }
    }

    editCallback(text, link) {
        this.tourService.editDescriptions(this.getId(), text, link, () => {
            this.getDescription();
        });
    }

    getId() {
        return this.slidesStore[this.controller.activeIndex].id
    }

}

export const TourGuideModalComponent = {
    bindings: {
        resolve: '<',
        modalInstance: '<'
    },
    template: tourGuideHtml,
    controller: TourGuideController
};
