/**
 * Created by eryk on 09.05.17.
 */
/**
 * Created by eryk on 28.04.17.
 */
class ModalFactory {

    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }


    simple(message) {
        const modalInstance = this.$uibModal.open({
            component: 'appModalBody',
        });
    }


}

export default function ($uibModal) {
    return new ModalFactory($uibModal)
}
