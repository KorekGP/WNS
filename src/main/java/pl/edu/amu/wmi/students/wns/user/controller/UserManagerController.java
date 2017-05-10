package pl.edu.amu.wmi.students.wns.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.edu.amu.wmi.students.wns.exceptions.NotFoundException;
import pl.edu.amu.wmi.students.wns.user.db.UserServiceImpl;
import pl.edu.amu.wmi.students.wns.user.model.ChangePasswordRequest;
import pl.edu.amu.wmi.students.wns.user.model.User;

import java.util.List;

/**
 * Created by eryk on 10.05.17.
 */
@PreAuthorize("@hasRole('ADMIN')")
@RestController
public class UserManagerController {

    private UserServiceImpl userService;

    @Autowired
    public UserManagerController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/user/{userId}")
    public ResponseEntity disableUser(@PathVariable("userId") int userId) {
        if (userService.disable(userId)) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/user")
    public ResponseEntity editUser(@RequestBody User user) throws NotFoundException {
        if (userService.update(user)) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/user/change-password")
    public ResponseEntity changePassword(ChangePasswordRequest passwordRequest) throws NotFoundException {
        if (userService.changePassword(passwordRequest)) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user")
    public ResponseEntity<User> addUser(@RequestBody User user) throws NotFoundException {
        User addedUser = userService.addUser(user);
        if (addedUser == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/user")
    public List<User> getUsers() {
        return userService.findAll();
    }


}
