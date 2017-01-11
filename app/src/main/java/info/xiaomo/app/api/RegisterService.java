package info.xiaomo.app.api;

import java.util.Map;

import info.xiaomo.app.model.UserModel;
import info.xiaomo.app.base.Result;
import retrofit2.Call;
import retrofit2.http.FieldMap;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/6/4 0004 14:53
 */
public interface RegisterService {
    @FormUrlEncoded
    @POST("/user/register")
    Call<Result<UserModel>> createUser(@FieldMap Map<String, String> params);
}
