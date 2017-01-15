package info.xiaomo.app.activity.set;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.ProgressBar;
import android.widget.Switch;
import android.widget.TextView;

import java.util.Timer;

import butterknife.BindView;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseFragment;
import info.xiaomo.app.task.ShowCheckVersionProgressBarTask;
import info.xiaomo.app.task.ShowClearCacheProgressBarTask;
import info.xiaomo.app.util.AppUtil;
import info.xiaomo.app.util.RandomUtil;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class SetFragment extends BaseFragment implements View.OnClickListener, CompoundButton.OnCheckedChangeListener {

    private static final long CLEAR_CACHE_TIME = 5 * 1000;
    private static final long CHECK_VERSION = 2 * 1000;
    // 消息提醒开关
    @BindView(R.id.id_remind_switch)
    Switch switchView;
    // 版本号
    @BindView(R.id.id_new_version_number)
    TextView newVersionTextView;
    // 清缓存进度条
    @BindView(R.id.set_progressbar)
    ProgressBar progressBar;
    // 缓存数量
    @BindView(R.id.id_trash_count)
    TextView trashTextView;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_set, container, false);
        initView(view);
        return view;
    }

    @Override
    public void initView(View view) {
        super.initView(view);
        switchView.setOnCheckedChangeListener(this);
        newVersionTextView.setText(AppUtil.getAppVersionName(getContext()));
        String text = RandomUtil.nextDouble(1, 100, 1) + "M";
        trashTextView.setText(text);
    }

    @OnClick({R.id.id_clear_cache, R.id.check_update})
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.id_clear_cache:
                progressBar.setVisibility(View.VISIBLE);
                ShowClearCacheProgressBarTask task = new ShowClearCacheProgressBarTask(getContext(), progressBar, trashTextView);
                new Timer().schedule(task, CLEAR_CACHE_TIME);
                clearWebViewCache();
                break;
            case R.id.check_update:
                progressBar.setVisibility(View.VISIBLE);
                ShowCheckVersionProgressBarTask checkVersionTask = new ShowCheckVersionProgressBarTask(getContext(), progressBar);
                new Timer().schedule(checkVersionTask, CHECK_VERSION);
                break;
        }
    }

    @Override
    public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
        if (isChecked) {
            shortToast(getResources().getString(R.string.open_message_info));
        } else {
            shortToast(getResources().getString(R.string.close_message_info));
        }
    }

    /**
     * 清除WebView缓存
     */
    public void clearWebViewCache() {

        //清理Webview缓存数据库
        try {
            getContext().deleteDatabase("webview.db");
            getContext().deleteDatabase("webviewCache.db");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
