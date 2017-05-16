package pl.edu.amu.wmi.students.wns.user.db;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import pl.edu.amu.wmi.students.wns.user.model.ChangePasswordRequest;
import pl.edu.amu.wmi.students.wns.user.model.User;

import java.util.List;

/**
 * Created by Grzegorz on 2016-04-19.
 */
@Service
public class UserServiceImpl {

    private static final int MIN_PASSWORD_LENGTH = 5;
    private UserRepository userRepository;
    private Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new StandardPasswordEncoder();
    }

    public User findById(long id) {
        return userRepository.findOne(id);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    public User addUser(User user) {
        if (findByEmail(user.getEmail()) != null || findByUsername(user.getUsername()) != null) {
            return null;
        }
        userRepository.save(user);
        return user;
    }

    public boolean disable(int userId) {
        User user = findById(userId);
        if (user == null || !user.isEnabled()) {
            LOGGER.error("Użytownik jest już aktywowany lub nie istnieje");
            return false;
        }
        user.setEnabled(false);
        save(user);
        return true;
    }

    public void delete(Long userId) {
        userRepository.delete(userId);
    }

    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public boolean update(User updatedUser, int userId) {
        updatedUser.setUserId(userId);
        User user = findById(updatedUser.getUserId());
        if (user == null || !user.isEnabled()) {
            LOGGER.error("Użytownik jest nieaktywowany lub nie istnieje");
            return false;
        }
        user.setEmail(updatedUser.getEmail());
        user.setUserRole(updatedUser.getUserRole());
        save(user);
        return true;
    }

    public boolean changePassword(ChangePasswordRequest passwordRequest) {
        if (StringUtils.isEmpty(passwordRequest.getPassword()) || passwordRequest.getPassword().length() <= MIN_PASSWORD_LENGTH) {
            LOGGER.error("Hasło jest za krótkie");
            return false;
        }
        User user = findById(passwordRequest.getUserId());
        if (user == null || !user.isEnabled()) {
            LOGGER.error("Użytownik nie istnieje jest nieaktywny");
            return false;
        }
        user.setPassword(passwordEncoder.encode(passwordRequest.getPassword()));
        save(user);
        return true;
    }
}
