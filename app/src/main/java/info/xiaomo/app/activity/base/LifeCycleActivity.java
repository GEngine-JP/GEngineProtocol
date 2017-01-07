package info.xiaomo.app.activity.base;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;

import info.xiaomo.app.R;
import info.xiaomo.app.util.HttpUtil;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:06
 *          一个最简单的完整的Activity生命周期会按照如下顺序回调：
 *          onCreate -> onStart -> onResume -> onPause -> onStop -> onDestroy。
 *          称之为entire lifetime。
 */

public class LifeCycleActivity extends AppCompatActivity {

    public HttpUtil httpUtil;
    public LayoutInflater inflater;
    public ProgressDialog dialog;
    protected ActionBar actionBar;


    /*****************************     生命周期  START     *****************************************/

    /**
     * 启动的时候调用
     *
     * @param savedInstanceState savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        onBeforeSetContentLayout();
        if (getLayoutId() != 0) {
            setContentView(getLayoutId());
        }
        actionBar = getSupportActionBar();
        inflater = getLayoutInflater();
        if (hasActionBar()) {
            initActionBar(actionBar);
        }
    }

    /**
     * 在onStart以后会执行。
     */
    @Override
    protected void onRestart() {
        super.onRestart();
    }

    /**
     * 启动时被回调，也就是Activity变为显示时被回调。
     */
    @Override
    protected void onStart() {
        super.onStart();
    }

    /**
     * 恢复为活动状态时候调用，调用该方法后Activity位于栈的栈顶。在 Activity 从 Pause 状态转换到 Active 状态时被调用
     */
    @Override
    protected void onResume() {
        super.onResume();
    }

    /**
     * 暂停时候被回调，这个方法需要比较快的执行因为执行完这个方法之后下一个Activity才会被恢复，一般用于持久保存数据，比如打游戏时候来电话，看小说时关闭。
     */
    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    /**
     * 销毁的时候调用
     */
    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    /*****************************     生命周期  END     *****************************************/


    /**
     * 在设置布局文件之前的操作
     */
    protected void onBeforeSetContentLayout() {
    }

    /**
     * 是否有actionBar
     *
     * @return boolean
     */
    protected boolean hasActionBar() {
        return getSupportActionBar() != null;
    }

    /**
     * 获取布局Id
     *
     * @return id
     */
    protected int getLayoutId() {
        return 0;
    }

    /**
     * 初始化actionBar
     *
     * @param actionBar actionBar
     */
    protected void initActionBar(ActionBar actionBar) {
        if (actionBar == null)
            return;
        if (hasBackButton()) {
            this.actionBar.setDisplayHomeAsUpEnabled(true);
            this.actionBar.setHomeButtonEnabled(true);
        } else {
            actionBar.setDisplayOptions(ActionBar.DISPLAY_SHOW_TITLE);
            actionBar.setDisplayUseLogoEnabled(false);
            int titleRes = getActionBarTitle();
            if (titleRes != 0) {
                actionBar.setTitle(titleRes);
            }
        }
    }

    /**
     * 是否有返回按钮
     *
     * @return boolean
     */
    protected boolean hasBackButton() {
        return false;
    }

    /**
     * 获取actionBar的名字
     *
     * @return string
     */
    protected int getActionBarTitle() {
        return R.string.app_name;
    }

}
