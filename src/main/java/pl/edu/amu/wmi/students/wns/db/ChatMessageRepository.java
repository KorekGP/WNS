package pl.edu.amu.wmi.students.wns.db;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import pl.edu.amu.wmi.students.wns.model.ChatMessage;

@Repository
public interface ChatMessageRepository extends PagingAndSortingRepository<ChatMessage, Long> {

    ChatMessage findById(Long id);

}
