package info.xiaomo.app.activity.index;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.api.WeatherService;
import info.xiaomo.app.base.BaseFragment;
import info.xiaomo.app.base.Result;
import info.xiaomo.app.constant.CallBackType;
import info.xiaomo.app.model.WeatherModel;
import info.xiaomo.app.util.HttpUtil;
import info.xiaomo.app.util.LunarCalendarUtil;
import info.xiaomo.app.util.TimeUtil;
import retrofit2.Call;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class IndexFragment extends BaseFragment
        implements HttpUtil.RetrofitCallBack<WeatherModel> {

    @BindView(R.id.id_date_text_view)
    TextView dateTextView;
    @BindView(R.id.id_nongli_text_view)
    TextView nlDateTextView;
    @BindView(R.id.id_now_tq_text_view)
    TextView tqTextView;
    @BindView(R.id.id_now_wd_text_view)
    TextView wdTextView;


    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_index, container, false);
        initView(view);
        return view;
    }

    @Override
    public void initView(View view) {
        super.initView(view);
        dateTextView.setText(TimeUtil.getNowTimeWithPattern(TimeUtil.DATE_PATTERN));
        nlDateTextView.setText(LunarCalendarUtil.solarToLunar());
        WeatherService apiService = httpUtil.getAPIService(WeatherService.class);
        Call<WeatherModel> resp = apiService.getWeather("hangzhou");
        httpUtil.enqueueCall(resp, this, CallBackType.WEATHER);
    }

    @Override
    public void onSuccess(Result<WeatherModel> result) {
        WeatherModel data = result.getData();
        tqTextView.setText(data.getWeather());
        String wd = getResources().getString(R.string.temperatureStr) + data.getTemperature();
        wdTextView.setText(wd);
    }

    @Override
    public void onFailure(String error) {
        shortToast("没有获取到天气情况！");
    }
}
