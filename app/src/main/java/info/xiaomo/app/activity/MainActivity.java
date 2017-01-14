package info.xiaomo.app.activity;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.design.widget.NavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.view.Gravity;
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
import info.xiaomo.app.activity.set.SetFragment;
import info.xiaomo.app.activity.project.ProjectFragment;
import info.xiaomo.app.activity.work.WorkFragment;
import info.xiaomo.app.adapter.ViewPagerAdapter;
import info.xiaomo.app.base.BaseActivity;
import info.xiaomo.app.widget.BottomNavigationViewEx;

public class MainActivity extends BaseActivity implements View.OnClickListener, View.OnTouchListener {

    // 底部菜单
    @BindView(R.id.bottom_nav)
    BottomNavigationViewEx bottomNavigationView;
    // viewPager
    @BindView(R.id.id_content_view_pager)
    ViewPager contentViewPager;
    // 顶部actionBar的名字
    @BindView(R.id.id_tool_bar_title)
    TextView titleTextView;
    // 左侧侧滑菜单布局
    @BindView(R.id.drawer_layout)
    DrawerLayout drawerLayout;
    // 左侧菜单内容
    @BindView(R.id.navigation_view)
    NavigationView navigationView;

    ActionBarDrawerToggle toggle;//菜单按钮
    List<Fragment> fragmentList; // fragment列表
    private long exitTime = 0; //

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
        initBottomNavigationView();
        initViewPager();
        initDrawerLayout();
        initNavigationView();
    }

    /**
     * 设置侧滑菜单相关内容
     */
    private void initNavigationView() {
        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
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
                toggleNav();
                return true;
            }
        });
    }


    /**
     * 设置底部底部导航相关内容
     */
    private void initBottomNavigationView() {
        bottomNavigationView.enableAnimation(false);
        bottomNavigationView.enableItemShiftingMode(false);
        bottomNavigationView.enableShiftingMode(false);
        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            /**
             * 底部导航被选中时的操作
             *
             * @param item item 被选中的item
             * @return 是否操作完成
             */
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
        });
    }

    /**
     * 设置viewPager相关内容
     */
    private void initViewPager() {
        fragmentList = new ArrayList<>();

        IndexFragment indexFragment = new IndexFragment();
        fragmentList.add(indexFragment);

        ProjectFragment projectFragment = new ProjectFragment();
        fragmentList.add(projectFragment);

        WorkFragment workFragment = new WorkFragment();
        fragmentList.add(workFragment);

        SetFragment setFragment = new SetFragment();
        fragmentList.add(setFragment);

        ViewPagerAdapter adapter = new ViewPagerAdapter(getSupportFragmentManager(), fragmentList);
        contentViewPager.setAdapter(adapter);
        contentViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            /**
             * viewPager滑动时的操作
             *
             * @param position             position
             * @param positionOffset       positionOffset
             * @param positionOffsetPixels positionOffsetPixels
             */
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            /**
             * viewPager中当前fragment被选中时设置actionBar的标题
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
                        titleTextView.setText(R.string.setting);
                        break;
                }
            }

            /**
             * viewPager当页面滑动状态改变时
             *
             * @param state state
             */
            @Override
            public void onPageScrollStateChanged(int state) {
                // 如果不禁止滑动，可以把下面的代码取消注释
                contentViewPager.setOnTouchListener(MainActivity.this);
            }
        });
    }


    /**
     * 触摸时(作用是禁止viewPager的滑动)
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
            if (drawerLayout.isDrawerOpen(Gravity.START)) {
                drawerLayout.closeDrawer(Gravity.START);
                return true;
            }
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

    /**
     * 点击菜单打开和关闭侧滑菜单
     *
     * @param v 当前view
     */
    @OnClick(R.id.id_tool_bar_menu)
    @Override
    public void onClick(View v) {
        toggleNav();
    }

    /**
     * 初始化侧滑菜单相关操作
     */
    private void initDrawerLayout() {
        toggle = new ActionBarDrawerToggle(this, drawerLayout,
                R.string.open_message_info, R.string.close_message_info) {
            /**
             * 当drawer处于完全关闭的状态时调用
             */
            @Override
            public void onDrawerClosed(View drawerView) {
                super.onDrawerClosed(drawerView);
                invalidateOptionsMenu();
            }

            /**
             * 当drawer处于完全打开的状态时调用
             */
            @Override
            public void onDrawerOpened(View drawerView) {
                super.onDrawerOpened(drawerView);
                invalidateOptionsMenu();
            }

        };
        drawerLayout.addDrawerListener(toggle);
    }

    /**
     * 打开或关闭侧滑菜单
     */
    private void toggleNav() {
        if (drawerLayout.isDrawerOpen(Gravity.START)) {
            drawerLayout.closeDrawer(Gravity.START);
        } else {
            drawerLayout.openDrawer(Gravity.START);
        }

    }
}
