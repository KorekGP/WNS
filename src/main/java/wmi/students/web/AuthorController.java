package wmi.students.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wmi.students.exceptions.BadRequestException;
import wmi.students.exceptions.NotFoundException;
import wmi.students.model.Author;
import wmi.students.service.AuthorServiceImpl;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-25.
 */
@RestController
public class AuthorController {

    @Autowired
    private AuthorServiceImpl authorServiceImpl;

    @RequestMapping(method = RequestMethod.GET, value = "/authors")
    public List<Author> getAuthors() throws NotFoundException{
        if (authorServiceImpl.getAuthors() == null) {
            throw new NotFoundException("Nie ma autorów w bazie");
        }
        return authorServiceImpl.getAuthors();
    }


    @RequestMapping(value = "/authors", method = RequestMethod.POST)
    public ResponseEntity addAuthor(@RequestBody Author author) throws BadRequestException{
        if(author.getFirstName() == null){
            throw new BadRequestException("Nie podałeś imienia(firstName)");
        }
        if(author.getSurname() == null){
            throw new BadRequestException("Nie podałeś nazwiska(surname)");
        }
         return authorServiceImpl.addAuthor(author);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/authors/{authorId}")
    public Author findAllBooksByAuthorId(@PathVariable Long authorId) throws NotFoundException{
        if (authorServiceImpl.findAllBooksByAuthorId(authorId) == null) {
            throw new NotFoundException("Autor nie posiada książek");
        }
        return authorServiceImpl.findAllBooksByAuthorId(authorId);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/authors/books")
    public List<Author> findAllBooksByAuthorSurname(@RequestParam(value = "surname") String authorSurname) throws NotFoundException{
        if (authorServiceImpl.findAllBooksByAuthorSurname(authorSurname) == null) {
            throw new NotFoundException("Autor nie posiada książek");
        }
        return authorServiceImpl.findAllBooksByAuthorSurname(authorSurname);
    }
}
