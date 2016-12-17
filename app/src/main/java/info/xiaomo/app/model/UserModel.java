package info.xiaomo.app.model;


import info.xiaomo.app.model.base.Result;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = false)
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
}
