package pl.edu.amu.wmi.students.wns.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

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

    public void setDescription(String description) {
        this.description = description;
    }
}
