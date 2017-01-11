package info.xiaomo.app.activity;

import android.content.Intent;
import android.os.Bundle;

import java.util.Timer;

import info.xiaomo.app.R;
import info.xiaomo.app.activity.index.MainActivity;
import info.xiaomo.app.base.BaseActivity;
import info.xiaomo.app.task.TimeTask;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/10 10:35
 */

public class IndexActivity extends BaseActivity {

    private static final long DELAY_TIME = 1 * 1000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_index);
        initView(savedInstanceState);
    }

    @Override
    protected void initView(Bundle savedInstanceState) {
        super.initView(savedInstanceState);
        Intent intent = new Intent(this, MainActivity.class);
        TimeTask timeTask = new TimeTask(this, intent);
        new Timer().schedule(timeTask, DELAY_TIME);
    }
}
