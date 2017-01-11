package info.xiaomo.app.task;

import android.app.ProgressDialog;

import java.util.TimerTask;

import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseFragment;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/10 10:36
 */

public class ShowClearCacheProgressBarTask extends TimerTask {

    private ProgressDialog dialog;
    private BaseFragment fragment;

    public ShowClearCacheProgressBarTask(BaseFragment fragment, ProgressDialog dialog) {
        this.dialog = dialog;
        this.fragment = fragment;
    }

    @Override
    public void run() {
        dialog.dismiss();
        fragment.shortToast(fragment.getResources().getString(R.string.clear_cache_finish));
    }
}
