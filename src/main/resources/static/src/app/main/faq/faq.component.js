/**
 * Created by Grzegorz on 06.05.2017.
 */
import faqHtml from './faq.component.html';
import './faq.component.scss';

class faqController {

    /*@ngInject*/
    constructor(FaqRepository, $rootScope) {

        this.authenticated = $rootScope.authenticated;

        this.faqRepository = FaqRepository;
        this.faqs = {};
        this.getFaqs();
        this.title = '';
        this.description = '';
    }

    getFaqs() {
        this.faqRepository.getFaqs((data) => {
            this.faqs = data.data;
        });
    }

    sendFaq() {
        this.faqRepository.sendFaq(this.title, this.description,
            () => {
                this.title = '';
                this.description = '';
                this.getFaqs();
            },
            () => {
                this.title = '';
                this.description = '';
            }
        );
    }
}
export default {
    template: faqHtml,
    controller: faqController,
    controllerAs: 'faqCtrl'
};
