package pl.edu.amu.wmi.students.wns.user.controller;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.amu.wmi.students.wns.user.model.User;

/**
 * WNS Created by eryk on 14.05.17.
 */
@RestController
public class CheckUserController {

    @RequestMapping("/checkUser")
    public User checkUser(UsernamePasswordAuthenticationToken user) {
        if (user != null) {
            return (User) user.getPrincipal();
        }
        return null;
    }

}
