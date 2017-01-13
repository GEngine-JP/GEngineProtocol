package info.xiaomo.app.model;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;
import java.util.HashMap;

import info.xiaomo.app.base.BaseModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/12 16:03
 */

public class WeatherModel extends BaseModel {

    private ArrayList<HashMap<String, Object>> results;

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

    public ArrayList<HashMap<String, Object>> getResults() {
        return results;
    }

    public void setResults(ArrayList<HashMap<String, Object>> results) {
        this.results = results;
    }

    public void init() {
        HashMap<String, Object> weather = results.get(0);
        LinkedTreeMap<String, Object> now = (LinkedTreeMap<String, Object>) weather.get("now");
        this.weather = (String) now.get("text");
        this.temperature = (String) now.get("temperature");
    }
}
