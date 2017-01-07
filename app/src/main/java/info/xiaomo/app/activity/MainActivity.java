package info.xiaomo.app.activity;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.view.MenuItem;
import android.widget.TextView;

import butterknife.Bind;
import butterknife.ButterKnife;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;

public class MainActivity extends BaseActivity implements BottomNavigationView.OnNavigationItemSelectedListener {

    @Bind(R.id.nav_tv)
    TextView mNavTv;
    @Bind(R.id.bottom_nav)
    BottomNavigationView mBottomNav;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);

        mNavTv.setText(R.string.nav_ui);
        mBottomNav.setOnNavigationItemSelectedListener(this);
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.bottom_nav_ui:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_data:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_service:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_net:
                mNavTv.setText(item.getTitle());
                break;
            case R.id.bottom_nav_media:
                mNavTv.setText(item.getTitle());
                break;
        }
        return true;
    }

}

