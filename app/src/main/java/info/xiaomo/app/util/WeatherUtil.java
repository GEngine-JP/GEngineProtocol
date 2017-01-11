package info.xiaomo.app.util;

import com.thinkpage.lib.api.TPCity;
import com.thinkpage.lib.api.TPListeners;
import com.thinkpage.lib.api.TPWeatherManager;
import com.thinkpage.lib.api.TPWeatherNow;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/11 9:19
 */

public class WeatherUtil implements TPListeners.TPWeatherNowListener {

    private static final String UID = "8UJKR2M1RZ";
    private static final String KEY = "U210327616";


    public static void getWeather(String city) {
        TPWeatherManager weatherManager = TPWeatherManager.sharedWeatherManager();
//使用心知天气官网获取的key和用户id初始化WeatherManager
        weatherManager.initWithKeyAndUserId(UID, KEY);

        weatherManager.getWeatherNow(new TPCity(city)
                , TPWeatherManager.TPWeatherReportLanguage.kSimplifiedChinese
                , TPWeatherManager.TPTemperatureUnit.kCelsius
                , new TPListeners.TPWeatherNowListener() {
                    @Override
                    public void onTPWeatherNowAvailable(TPWeatherNow weatherNow, String errorInfo) {
                        if (weatherNow != null) {
                            //weatherNow 就是返回的当前天气信息。
                            log(weatherNow.text); //获取天气文本，例如“晴”、“多云”
                            log(weatherNow.windDirection);  //获取当前风向，例如“西北”
                            log(weatherNow.feelsLikeTemperature); //获取当前体感温度
                        } else {
                            log(errorInfo); //错误信息
                        }
                    }
                }

        );

    }


    private static void log(Object msg) {
        System.out.println(msg);
    }

    @Override
    public void onTPWeatherNowAvailable(TPWeatherNow tpWeatherNow, String s) {

    }
}
