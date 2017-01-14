package info.xiaomo.app.task;

import android.content.Context;
import android.view.View;

import java.util.TimerTask;

import info.xiaomo.app.R;
import info.xiaomo.app.util.AppUtil;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/10 10:36
 */

public class ShowClearCacheProgressBarTask extends TimerTask {

    private View[] views;
    private Context context;

    public ShowClearCacheProgressBarTask(Context context, View... views) {
        this.views = views;
        this.context = context;
    }

    @Override
    public void run() {
        views[0].post(new Runnable() {
            @Override
            public void run() {
                views[0].setVisibility(View.INVISIBLE);
                views[1].setVisibility(View.INVISIBLE);
                AppUtil.shortToast(context, context.getResources().getString(R.string.clear_cache_finish));
            }
        });
    }
}
