package info.xiaomo.app.activity.base;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.annotation.LayoutRes;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import butterknife.ButterKnife;
import info.xiaomo.app.R;
import info.xiaomo.app.util.HttpUtil;


/**
 * activity基类 所有activity继承于这个类
 */
public abstract class BaseActivity extends LifeCycleActivity {


    @Override
    public void setContentView(@LayoutRes int layoutResID) {
        super.setContentView(layoutResID);
        inflater = LayoutInflater.from(this);
        setContentView(inflater.inflate(layoutResID, null));
    }

    @Override
    public void setContentView(View view) {
        super.setContentView(view);
        httpUtil = HttpUtil.getInstance(BaseActivity.this);
        dialog = new ProgressDialog(BaseActivity.this);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
    }

    /**
     * 获取View
     *
     * @param resId 布局文件Id
     * @return View
     */
    protected View inflateView(int resId) {
        return inflater.inflate(resId, null);
    }


    /**
     * 设置actionBar的标题
     *
     * @param resId resId
     */
    public void setActionBarTitle(int resId) {
        if (resId != 0) {
            setActionBarTitle();
        }
    }


    /**
     * 初始化(子类重写此方法时一定要先调用此方法)
     *
     * @param savedInstanceState savedInstanceState
     */
    protected void initView(Bundle savedInstanceState) {
        ButterKnife.bind(this);
    }


    /**
     * 设置actionBar的标题
     */
    public void setActionBarTitle() {
        String title = getString(R.string.app_name);
        if (hasActionBar() && actionBar != null) {
            actionBar.setTitle(title);
        }
    }

    /**
     * 当客户点击菜单当中的某一个选项时，会调用该方法
     *
     * @param item item
     * @return true
     */
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                break;
            default:
                break;
        }
        return super.onOptionsItemSelected(item);
    }

    public void longToast(String msg) {
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show();
    }

    public void shortToast(String msg) {
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show();
    }
}
