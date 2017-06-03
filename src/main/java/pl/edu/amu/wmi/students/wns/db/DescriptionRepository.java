package pl.edu.amu.wmi.students.wns.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import pl.edu.amu.wmi.students.wns.model.Description;

/**
 * Created by Grzegorz on 2016-03-25.
 */
@Repository
public interface DescriptionRepository extends PagingAndSortingRepository<Description, Long> {

    Description findById(Long id);
}
