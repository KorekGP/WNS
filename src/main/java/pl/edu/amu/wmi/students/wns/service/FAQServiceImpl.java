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

    private FAQRepository faqRepository;

    @Autowired
    public FAQServiceImpl(FAQRepository faqRepository) {
        this.faqRepository = faqRepository;
    }

    public List<FAQ> getFAQs() {
        return (List<FAQ>) faqRepository.findAll();
    }

    public void delete(Long faqId) {
        faqRepository.delete(faqId);
    }

    public FAQ findFAQById(Long faqId) {
        return faqRepository.findById(faqId);
    }

    public List<FAQ> findFAQByTitle(String faqTitle) {
        return faqRepository.findByTitleContaining(faqTitle);
    }

    public ResponseEntity addFaq(FAQ faq) {
        faqRepository.save(faq);
        return new ResponseEntity(HttpStatus.OK);
    }
}


