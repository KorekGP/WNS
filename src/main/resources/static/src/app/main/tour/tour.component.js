/**
 * Created by eryk on 31.03.17.
 */
import tourHtml from './tour.component.html';
import './tour.component.scss';
import 'angular-ui-bootstrap/src/carousel';

class TourController {

    /*@ngInject*/
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    openGuideModal(buildingId) {
        this.modalInstance = this.$uibModal.open({
            component: 'appTourGuideModal',
            size: 'lg',
            resolve: {
                buildingId: () => buildingId
            }
        });
    }

}

export const TourComponent = {
    template: tourHtml,
    controller: TourController,
};
