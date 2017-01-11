package info.xiaomo.app.activity.me;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.Switch;

import java.util.Timer;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseFragment;
import info.xiaomo.app.task.ShowClearCacheProgressBarTask;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class MeFragment extends BaseFragment implements View.OnClickListener, CompoundButton.OnCheckedChangeListener {

    private static final long CLEAR_CACHE_TIME = 2 * 1000;
    @BindView(R.id.id_remind_switch)
    Switch switchView;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_me, container, false);
        ButterKnife.bind(this, view);
        switchView.setOnCheckedChangeListener(this);
        return view;
    }

    @OnClick({R.id.id_not_login_layout, R.id.id_clear_cache})
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.id_not_login_layout:
                Intent intent = new Intent(getActivity(), LoginActivity.class);
                startActivity(intent);
                break;
            case R.id.id_clear_cache:
//                dialog.show();
//                ShowClearCacheProgressBarTask task = new ShowClearCacheProgressBarTask(this, dialog);
//                new Timer().schedule(task, CLEAR_CACHE_TIME);

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
}
