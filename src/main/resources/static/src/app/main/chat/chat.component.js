/**
 * Created by eryk on 31.03.17.
 */
import chatHtml from './chat.component.html';
import './chat.component.scss';

class chatController {

    constructor(ChatRepository) {
        this.chatRepository = ChatRepository;
        this.messages = {};
        this.getMessages();
    }

    getMessages() {
        this.chatRepository.getMessages((data) => {
            this.messages = data.data;
        });
    }

    sendMessage() {
        this.chatRepository.sendMessages(this.content, (data) => {
            this.content = '';
            this.getMessages();
        });
    }
}

export default {
    template: chatHtml,
    controller: chatController,
    controllerAs: 'chatCtrl'
};
