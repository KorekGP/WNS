package wmi.students.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wmi.students.model.FAQ;
import wmi.students.service.FAQServiceImpl;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-24.
 */
@RestController
public class FAQController {

    @Autowired
    private FAQServiceImpl FAQServiceImpl;


    @RequestMapping(method = RequestMethod.DELETE, value = "/faq/{faqId}")
    public ResponseEntity deleteFAQ(@PathVariable("faq") Long faqId){
        FAQServiceImpl.delete(faqId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/faq")
    public List<FAQ> getFAQs() {
       return FAQServiceImpl.getFAQs();
    }

    @RequestMapping(value = "/faq", method = RequestMethod.POST)
    public ResponseEntity addFAQ(@RequestBody FAQ FAQ){
        FAQServiceImpl.addFAQ(FAQ);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/faq/{faqId}")
    public FAQ findFAQById(@PathVariable Long faqId){
        return FAQServiceImpl.findFAQById(faqId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/faq/title")
    public List<FAQ> findFaqByTitle(@RequestParam(value = "title") String faqTitle){
        return FAQServiceImpl.findFAQByTitle(faqTitle);
    }
}