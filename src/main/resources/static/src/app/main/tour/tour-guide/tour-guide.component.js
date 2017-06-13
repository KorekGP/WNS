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
        this.allSlides = this.allSlides();
        this.activeIndex = 0;
        this.getDescription();
    }

    getProperVideoId(link) {
        if (link) {
            return this.$sce.trustAsResourceUrl(link);
        }
    }

    allSlides() {
        return SlidesStore[1]
            .concat(SlidesStore[2])
            .concat(SlidesStore[3])
            .concat(SlidesStore[4]);
    }


    getDescription() {
        this.tourService.getDescriptions((data) => {
            this.description = data.data;
            this.assignStore(this.description);
        });
    }

    assignStore(descriptionData) {
        for (const description of descriptionData) {
            const slide = this.getSlideById(description.id);
            slide.description = description.description;
            slide.link = this.getProperVideoId(description.link);
        }
    }

    editCallback(text, link) {
        this.tourService.editDescriptions(this.getCurrentSlide().id, text, link, () => {
            this.getDescription();
        });
    }

    getCurrentSlide() {
        for (const slide of this.slidesStore) {
            if (slide.index === this.controller.activeIndex) {
                return slide;
            }
        }
    }

    getSlideById(id) {
        for (const slide of this.allSlides) {
            if (slide.id === id) {
                return slide;
            }
        }
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
