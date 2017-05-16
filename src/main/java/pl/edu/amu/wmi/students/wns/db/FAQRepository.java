package pl.edu.amu.wmi.students.wns.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import pl.edu.amu.wmi.students.wns.model.FAQ;

import java.util.List;

/**
 * Created by Grzegorz on 2016-03-24.
 */
@Repository
public interface FAQRepository extends PagingAndSortingRepository<FAQ, Long> {

    FAQ findById(Long id);
    List<FAQ> findByTitleContaining(String title);

}
