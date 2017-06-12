/**
 * Created by eryk on 12.06.17.
 */

class ChatMessage {

    constructor(message) {
        this.text = message.text;
        this.date = message.date;
        this.id = message.id;
        this.userId = message.userId;
        this.userName = message.userName;
        this.avatar = 'http://polyligne.be/wp-content/uploads/2014/06/Man_Avatar.gif'
    }

    static getMessagesFromArr(messages) {
        const arr = [];
        for (const message of messages) {
            arr.push(new ChatMessage(message))
        }
        return arr;
    }

}

export {
    ChatMessage
}
