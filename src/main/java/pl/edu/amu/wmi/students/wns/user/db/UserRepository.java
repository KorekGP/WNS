package pl.edu.amu.wmi.students.wns.user.db;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import pl.edu.amu.wmi.students.wns.user.model.User;

/**
 * Created by Grzegorz on 2016-04-19.
 */
@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    User findByEmail(String email);

    User findByUsername(String username);
}
