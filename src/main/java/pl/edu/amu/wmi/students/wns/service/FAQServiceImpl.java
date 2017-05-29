package pl.edu.amu.wmi.students.wns.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.edu.amu.wmi.students.wns.db.FAQRepository;
import pl.edu.amu.wmi.students.wns.model.FAQ;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-30.
 */
@Service
public class FAQServiceImpl {

    @Autowired
    private FAQRepository FAQRepository;

    public List<FAQ> getFAQs() {
        return (List<FAQ>) FAQRepository.findAll();
    }

    public void delete(Long FAQId){
        FAQRepository.delete(FAQId);
    }

    public void addFAQ(FAQ FAQ) {
        FAQRepository.save(FAQ);
    }

    public FAQ findFAQById(Long FAQId){
        return FAQRepository.findById(FAQId);
    }

    public List<FAQ> findFAQByTitle(String FAQTitle){
        return FAQRepository.findByTitleContaining(FAQTitle);
    }

    public ResponseEntity addFaq(FAQ faq) {
        FAQRepository.save(faq);
        return new ResponseEntity(HttpStatus.OK);
    }
}


