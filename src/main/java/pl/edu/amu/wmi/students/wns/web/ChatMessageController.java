package pl.edu.amu.wmi.students.wns.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.amu.wmi.students.wns.exceptions.NotFoundException;
import pl.edu.amu.wmi.students.wns.model.ChatMessage;
import pl.edu.amu.wmi.students.wns.service.ChatMessageServiceImpl;

import java.util.List;

@RestController
@RequestMapping(value = "/api/chat")
public class ChatMessageController {

    @Autowired
    private ChatMessageServiceImpl chatMessageServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public List<ChatMessage> getMessages() throws NotFoundException {
        if (chatMessageServiceImpl.getAllMessages() == null) {
            throw new NotFoundException("Nie ma wiadomości w bazie");
        }
        return chatMessageServiceImpl.getAllMessages();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ChatMessage getMessageById(@PathVariable long id) throws NotFoundException {
        if (chatMessageServiceImpl.findMessageById(id) == null) {
            throw new NotFoundException("Nie ma wiadomości o takim ID");
        }
        return chatMessageServiceImpl.findMessageById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity addMessage(@RequestBody ChatMessage message) {
        message.setId(null);
        chatMessageServiceImpl.addMessage(message);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity editMessage(@RequestBody ChatMessage message) {
        chatMessageServiceImpl.editMessage(message);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity deleteMessage(@RequestBody ChatMessage message) {
        chatMessageServiceImpl.deleteMessage(message);
        return new ResponseEntity(HttpStatus.OK);
    }

}
