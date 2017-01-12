package info.xiaomo.app.activity;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.KeyEvent;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.index.IndexFragment;
import info.xiaomo.app.base.BaseActivity;
import info.xiaomo.app.activity.me.MessageActivity;
import info.xiaomo.app.adapter.ViewPagerAdapter;
import info.xiaomo.app.activity.me.MeFragment;
import info.xiaomo.app.activity.project.ProjectFragment;
import info.xiaomo.app.activity.work.WorkFragment;
import info.xiaomo.app.base.Result;
import info.xiaomo.app.util.HttpUtil;
import info.xiaomo.app.widget.BottomNavigationViewEx;

public class MainActivity extends BaseActivity implements
        HttpUtil.RetrofitCallBack,
        BottomNavigationView.OnNavigationItemSelectedListener,
        View.OnClickListener,
        ViewPager.OnPageChangeListener,
        View.OnTouchListener {

    @BindView(R.id.bottom_nav)
    BottomNavigationViewEx bottomNavigationView;
    @BindView(R.id.id_content_view_pager)
    ViewPager contentViewPager;
    @BindView(R.id.id_tool_bar_title)
    TextView titleTextView;

    List<Fragment> fragmentList;
    private long exitTime = 0;

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
        bottomNavigationView.setOnNavigationItemSelectedListener(this);
        bottomNavigationView.enableAnimation(false);
        bottomNavigationView.enableItemShiftingMode(false);
        bottomNavigationView.enableShiftingMode(false);
        setupViewPager();
    }


    private void setupViewPager() {
        IndexFragment indexFragment = new IndexFragment();
        ProjectFragment projectFragment = new ProjectFragment();
        WorkFragment workFragment = new WorkFragment();
        MeFragment meFragment = new MeFragment();
        fragmentList = new ArrayList<>();
        fragmentList.add(indexFragment);
        fragmentList.add(projectFragment);
        fragmentList.add(workFragment);
        fragmentList.add(meFragment);
        contentViewPager.setAdapter(new ViewPagerAdapter(getSupportFragmentManager(), fragmentList));
        contentViewPager.addOnPageChangeListener(this);
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
                contentViewPager.setCurrentItem(0);
                break;
            case R.id.bottom_nav_project:
                contentViewPager.setCurrentItem(1);
                break;
            case R.id.bottom_nav_work:
                contentViewPager.setCurrentItem(2);
                break;
            case R.id.bottom_nav_me:
                contentViewPager.setCurrentItem(3);
                break;
        }
        return true;

    }

    @Override
    public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

    }

    /**
     * viewPager中当前fragment被选中时
     *
     * @param position position
     */
    @Override
    public void onPageSelected(int position) {
        switch (position) {
            case 0:
                titleTextView.setText(R.string.xiaomo);
                break;
            case 1:
                titleTextView.setText(R.string.project);
                break;
            case 2:
                titleTextView.setText(R.string.work);
                break;
            case 3:
                titleTextView.setText(R.string.me);
                break;
        }
    }

    /**
     * 当页面滑动状态改变时
     *
     * @param state state
     */
    @Override
    public void onPageScrollStateChanged(int state) {
        // 如果不禁止滑动，可以把下面的代码取消注释
        contentViewPager.setOnTouchListener(this);
    }

    /**
     * 触摸时
     *
     * @param v     v
     * @param event event
     * @return true
     */
    @Override
    public boolean onTouch(View v, MotionEvent event) {
        return true;
    }


    /**
     * 再接一次退出程序
     *
     * @param keyCode keyCode
     * @param event   event
     * @return true
     */
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && event.getAction() == KeyEvent.ACTION_DOWN) {
            if ((System.currentTimeMillis() - exitTime) > 2000) {
                Toast.makeText(getApplicationContext(), "再按一次退出程序", Toast.LENGTH_SHORT).show();
                exitTime = System.currentTimeMillis();
            } else {
                finish();
                System.exit(0);
            }
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @OnClick(R.id.id_tool_bar_notification)
    @Override
    public void onClick(View v) {
        Intent intent = new Intent(this, MessageActivity.class);
        startActivity(intent);
    }
}
