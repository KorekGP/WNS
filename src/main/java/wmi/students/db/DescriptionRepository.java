package wmi.students.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import wmi.students.model.Description;

/**
 * Created by Grzegorz on 2016-03-25.
 */
@Repository
public interface DescriptionRepository extends PagingAndSortingRepository<Description, Long> {

    Description findById(Long id);
    Description findByRoomName(String surname);

}
