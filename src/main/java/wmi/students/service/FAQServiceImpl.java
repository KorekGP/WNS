package wmi.students.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wmi.students.db.FAQRepository;
import wmi.students.model.FAQ;

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
}


