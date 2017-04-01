package wmi.students.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.Data;

/**
 * Created by Grzegorz on 2016-03-25.
 */

@Entity
@Data
public class Description {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String description;

    @NotNull
    private String roomName;

}
