package info.xiaomo.app.api;

import java.util.List;

import info.xiaomo.app.model.ShikigamiModel;
import info.xiaomo.app.model.base.Result;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Headers;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/12/24 17:35
 */

public interface ShikigamiService {

    @GET("findAll")
    @Headers("Cache-Control: public, max-age=30")
    Call<Result<List<ShikigamiModel>>> findAll();

}
