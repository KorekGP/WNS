/**
 * Created by eryk on 31.03.17.
 */
import chatHtml from './chat.component.html';
import './chat.component.scss';
import {ChatMessage} from './message.model';

const CHECK_MESSAGE_INTERVAL = 5000;

class ChatController {

    /*@ngInject*/
    constructor(ChatService, $interval, UserService) {
        this.chatService = ChatService;
        this.userService = UserService;
        this.$interval = $interval;
        this.me = null;
        this.messages = [];
        this.sendMessage = message => {
            this.chatService.sendMessage(message, () => {
                this.getMessages();
            });
        };
    }

    $onInit() {
        this.userService.userPromise.then(userHash => {
            this.me = {
                userId: userHash,
                userName: 'Anonimowy'
            };
            this.getMessages();
            this.$interval(() => {
                this.getMessages()
            }, CHECK_MESSAGE_INTERVAL);
        });
    }

    getMessages() {
        this.chatService.getMessages((response) => {
            this.messages = ChatMessage.getMessagesFromArr(response.data);
        });
    }

}

export const ChatComponent = {
    template: chatHtml,
    controller: ChatController,
};
