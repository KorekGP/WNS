package pl.edu.amu.wmi.students.wns.user.model;

/**
 * Created by eryk on 10.05.17.
 */
public class ChangePasswordRequest {

    private Integer userId;
    private String password;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
