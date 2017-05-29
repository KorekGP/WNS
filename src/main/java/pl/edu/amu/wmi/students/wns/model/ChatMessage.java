package pl.edu.amu.wmi.students.wns.model;

import lombok.Data;
import pl.edu.amu.wmi.students.wns.user.model.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String content;
    private Date createdAt;

}
