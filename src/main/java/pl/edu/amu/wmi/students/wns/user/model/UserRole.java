package pl.edu.amu.wmi.students.wns.user.model;

import org.springframework.security.core.GrantedAuthority;

/**
 * Created by eryk on 10.05.17.
 */
public enum UserRole implements GrantedAuthority {

    ADMIN, GUIDE;

    @Override
    public String getAuthority() {
         return "ROLE_" + toString();
    }

}
