package pl.edu.amu.wmi.students.wns.exceptions;

public class NotFoundException extends Exception {

    private String userMessage;

    public NotFoundException(String userMessage) {
        super();
        this.userMessage = userMessage;
    }

    public String getUserMessage() {
        return userMessage;
    }
}
