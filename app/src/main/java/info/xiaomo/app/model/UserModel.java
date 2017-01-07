package info.xiaomo.app.model;


import info.xiaomo.app.model.base.Result;

public class UserModel extends Result {

    private Long id;

    private String email;

    private String salt;

    private String password;

    public UserModel(int resultCode) {
        super(resultCode);
    }

    public UserModel(int resultCode, String message) {
        super(resultCode, message);
    }

    public UserModel(int resultCode, String message, Object data) {
        super(resultCode, message, data);
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
