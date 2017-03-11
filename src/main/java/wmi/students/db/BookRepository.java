package wmi.students.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import wmi.students.model.Book;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-24.
 */
@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {

    Book findById(Long id);
    List<Book> findByGenreContaining(String genre);
    List<Book> findByTitleContaining(String title);
    List<Book> findByTitle(String title);
}
