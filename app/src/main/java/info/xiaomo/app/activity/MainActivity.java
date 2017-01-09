package info.xiaomo.app.activity;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;

import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.adapter.ViewPagerAdapter;
import info.xiaomo.app.fragment.IndexFragment;
import info.xiaomo.app.fragment.MeFragment;
import info.xiaomo.app.fragment.ProjectFragment;
import info.xiaomo.app.fragment.WorkFragment;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;

public class MainActivity extends BaseActivity implements
        HttpUtil.RetrofitCallBack,
        BottomNavigationView.OnNavigationItemSelectedListener,
        ViewPager.OnPageChangeListener,
        View.OnTouchListener {

    @BindView(R.id.bottom_nav)
    BottomNavigationView bottomNavigationView;
    @BindView(R.id.id_content_view_pager)
    ViewPager contentViewPager;

    List<Fragment> fragmentList;
    MenuItem prevMenuItem;

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
        if (prevMenuItem != null) {
            prevMenuItem.setChecked(false);
        } else {
            bottomNavigationView.getMenu().getItem(0).setChecked(false);
        }
        bottomNavigationView.getMenu().getItem(position).setChecked(true);
        prevMenuItem = bottomNavigationView.getMenu().getItem(position);

    }

    /**
     * 当页面滑动状态改变时
     *
     * @param state state
     */
    @Override
    public void onPageScrollStateChanged(int state) {
        // 如果想禁止滑动，可以把下面的代码取消注释
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

}
