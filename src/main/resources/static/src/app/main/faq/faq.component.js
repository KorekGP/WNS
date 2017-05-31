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
        this.title = "";
        this.description = "";
    }

    getFaqs() {
        this.faqRepository.getFaqs((data) => {
            this.faqs = data;
        });
    }

    sendFaq() {
        this.faqRepository.sendFaq(this.title, this.description, (data) => {
                this.title = "";
                this.description = "";
                this.getFaqs();
            },
            (err) => {
                this.title = "";
                this.description = "";
            });

    }
}
export default {
    template: faqHtml,
    controller: faqController,
    controllerAs: 'faqCtrl'
};
