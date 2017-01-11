package info.xiaomo.app.api;


import info.xiaomo.app.model.UserModel;
import info.xiaomo.app.base.Result;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.Path;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/6/4 0004 14:55
 */
public interface LoginService {
    @GET("user/login/{email}/{password}")
    @Headers("Cache-Control: public, max-age=30")
    Call<Result<UserModel>> userLogin(@Path("email") String email, @Path("password") String password);
}
