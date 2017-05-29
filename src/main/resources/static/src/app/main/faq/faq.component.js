/**
 * Created by Grzegorz on 06.05.2017.
 */
import faqHtml from './faq.component.html';
import './faq.component.scss';

class faqController {

    constructor(FaqRepository) {
        this.faqRepository = FaqRepository;
        this.faqs = {};
        this.getFaqs();
    }

    getFaqs() {
        this.faqRepository.getFaqs((data) => {
            this.faqs = data;
        });
    }

    sendFaq() {
        this.faqRepository.sendFaq(this.title, this.description, (data) => {
            this.getFaqs();
        });
    }
}
export default {
    template: faqHtml,
    controller: faqController,
    controllerAs: 'faqCtrl'
};
