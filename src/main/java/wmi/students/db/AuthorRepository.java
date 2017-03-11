package wmi.students.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import wmi.students.model.Author;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-25.
 */
@Repository
public interface AuthorRepository extends PagingAndSortingRepository<Author, Long> {

    Author findById(Long id);
    List<Author> findBySurnameContaining(String surname);

}
