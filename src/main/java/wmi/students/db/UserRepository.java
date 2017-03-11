package wmi.students.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import wmi.students.model.User;

/**
 * Created by Grzegorz on 2016-04-19.
 */
@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    User findByEmail(String email);
    User findByLogin(String login);
}
