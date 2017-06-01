package pl.edu.amu.wmi.students.wns.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.edu.amu.wmi.students.wns.db.ChatMessageRepository;
import pl.edu.amu.wmi.students.wns.model.ChatMessage;

import java.util.List;

@Service
public class ChatMessageServiceImpl {

    private ChatMessageRepository chatMessageRepository;

    @Autowired
    public ChatMessageServiceImpl(ChatMessageRepository chatMessageRepository) {
        this.chatMessageRepository = chatMessageRepository;
    }

    public List<ChatMessage> getAllMessages() {
        return (List<ChatMessage>) chatMessageRepository.findAll();
    }

    public ChatMessage findMessageById(Long id) {
        return chatMessageRepository.findById(id);
    }

    public ResponseEntity addMessage(ChatMessage message) {
        chatMessageRepository.save(message);
        return new ResponseEntity(HttpStatus.OK);
    }

    public ChatMessage editMessage(ChatMessage message) {
        return chatMessageRepository.save(message);
    }

    public ResponseEntity deleteMessage(ChatMessage message) {
        chatMessageRepository.delete(message);
        return new ResponseEntity(HttpStatus.OK);
    }

}
