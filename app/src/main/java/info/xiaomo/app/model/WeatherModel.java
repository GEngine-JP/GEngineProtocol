package info.xiaomo.app.model;

import info.xiaomo.app.base.BaseModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/12 16:03
 */

public class WeatherModel extends BaseModel {

    private String weather;

    private String temperature;

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }
}
