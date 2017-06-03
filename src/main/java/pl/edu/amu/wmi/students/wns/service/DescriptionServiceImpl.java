package pl.edu.amu.wmi.students.wns.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.edu.amu.wmi.students.wns.db.DescriptionRepository;
import pl.edu.amu.wmi.students.wns.model.Description;

import java.util.List;

/**
 * Created by Grzegorz on 2016-04-13.
 */
@Service
public class DescriptionServiceImpl {

    @Autowired
    private DescriptionRepository descriptionRepository;

    public List<Description> getAllDescriptions() {
        return (List<Description>) descriptionRepository.findAll();
    }

    public Description getDescription(Long roomName) {
        return descriptionRepository.findById(roomName);
    }

    public ResponseEntity addDescription(Description description) {
        descriptionRepository.save(description);
        return new ResponseEntity(HttpStatus.OK);
    }

    public ResponseEntity deleteDescription(Description description) {
        descriptionRepository.delete(description);
        return new ResponseEntity(HttpStatus.OK);
    }

    public Description editDescription(Description description) {
        return descriptionRepository.save(description);
    }

}
