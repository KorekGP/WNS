package pl.edu.amu.wmi.students.wns.user.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.amu.wmi.students.wns.user.db.UserRepository;
import pl.edu.amu.wmi.students.wns.user.model.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userService;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userService) {
        this.userService = userService;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String login) {
        User user = userService.findByLogin(login);
        if (user == null) {
            throw new UsernameNotFoundException("Nie ma takiego użytkownika");
        }
        return user;
    }

}
