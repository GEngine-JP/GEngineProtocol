package info.xiaomo.app.activity;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.view.MenuItem;
import android.widget.TextView;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;

public class MainActivity extends BaseActivity implements HttpUtil.RetrofitCallBack, BottomNavigationView.OnNavigationItemSelectedListener {

    @BindView(R.id.nav_tv)
    TextView mNavTv;
    @BindView(R.id.bottom_nav)
    BottomNavigationView mBottomNav;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView(savedInstanceState);
    }

    /**
     * 初始化布局文件
     *
     * @param savedInstanceState savedInstanceState
     */
    @Override
    protected void initView(Bundle savedInstanceState) {
        super.initView(savedInstanceState);
        mNavTv.setText(R.string.xiaomo);
        mBottomNav.setOnNavigationItemSelectedListener(this);
    }

    /**
     * 成功时的操作
     *
     * @param result 获取到的结果
     */
    @Override
    public void onSuccess(Result result) {

    }

    /**
     * 失败时的操作
     *
     * @param error 错误信息
     */
    @Override
    public void onFailure(String error) {

    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.bottom_nav_xiaomo:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_project:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_work:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_me:
                mNavTv.setText(item.getTitle());
                break;
        }
        return true;

    }
}
