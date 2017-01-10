package info.xiaomo.app.task;

import android.app.Activity;
import android.content.Intent;

import java.util.TimerTask;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/10 10:36
 */

public class TimeTask extends TimerTask {


    private Activity activity;
    private Intent intent;

    public TimeTask(Activity activity, Intent intent) {
        this.activity = activity;
        this.intent = intent;
    }

    @Override
    public void run() {
        activity.startActivity(intent);
        activity.finish();
    }
}
