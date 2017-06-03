package pl.edu.amu.wmi.students.wns.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.amu.wmi.students.wns.exceptions.NotFoundException;
import pl.edu.amu.wmi.students.wns.model.Description;
import pl.edu.amu.wmi.students.wns.service.DescriptionServiceImpl;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-25.
 */
@RestController
@RequestMapping(value = "/description")
public class DescriptionController {

    @Autowired
    private DescriptionServiceImpl descriptionServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public List<Description> getDescriptions() throws NotFoundException {
        if (descriptionServiceImpl.getAllDescriptions() == null) {
            throw new NotFoundException("Nie ma opisów w bazie");
        }
        return descriptionServiceImpl.getAllDescriptions();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{roomName}")
    public Description findDescriptionByroomName(@PathVariable Long roomName) throws NotFoundException {
        if (descriptionServiceImpl.getDescription(roomName) == null) {
            throw new NotFoundException("Nie ma opisu do tego pokoju");
        }
        return descriptionServiceImpl.getDescription(roomName);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity addDescription(@RequestBody Description description) {
        descriptionServiceImpl.addDescription(description);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{roomName}/{description}")
    public ResponseEntity editDescription(@PathVariable Long roomName, @PathVariable String newDescription) {
        Description description = descriptionServiceImpl.getDescription(roomName);
        description.setDescription(newDescription);
        descriptionServiceImpl.editDescription(description);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity deleteDescription(@RequestBody Description description) {
        descriptionServiceImpl.deleteDescription(description);
        return new ResponseEntity(HttpStatus.OK);
    }


}
