package info.xiaomo.app.api;

import info.xiaomo.app.model.WeatherModel;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.Query;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/12 16:05
 */

public interface WeatherService {

    @GET("https://api.thinkpage.cn/v3/weather/now.json?key=8UJKR2M1RZ&language=zh-Hans&unit=c")
    @Headers("Cache-Control: public, max-age=30")
    Call<WeatherModel> getWeather(@Query("location") String location);

}
