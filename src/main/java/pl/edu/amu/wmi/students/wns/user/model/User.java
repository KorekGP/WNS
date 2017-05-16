package pl.edu.amu.wmi.students.wns.user.model;

import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import pl.edu.amu.wmi.students.wns.user.config.ModelAttributeLength;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.Collections;

import static pl.edu.amu.wmi.students.wns.user.config.ModelAttributeLength.DEFAULT_MAX_LEN;
import static pl.edu.amu.wmi.students.wns.user.config.ModelAttributeLength.DEFAULT_MIN_LEN;

/**
 * Created by Grzegorz on 2016-04-19.
 */
@Entity
@Data
@Table(name = "wns_user")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @NotNull
    @Length(min = ModelAttributeLength.DEFAULT_MIN_LEN, max = DEFAULT_MAX_LEN)
    private String username;

    @Email
    @Column(unique = true)
    @Length(min = DEFAULT_MIN_LEN, max = DEFAULT_MAX_LEN)
    private String email;

    @NotNull
    @Length(min = DEFAULT_MIN_LEN, max = DEFAULT_MAX_LEN)
    private String password;

    @NotNull
    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    @Column(name = "enabled")
    private boolean enabled;

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(userRole);
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

}
