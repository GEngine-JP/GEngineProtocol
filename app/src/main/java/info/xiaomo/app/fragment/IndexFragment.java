package info.xiaomo.app.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.me.MessageActivity;
import info.xiaomo.app.fragment.base.BaseFragment;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class IndexFragment extends BaseFragment implements View.OnClickListener {

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_index, container, false);
        return view;
    }

    @OnClick(R.id.id_tool_bar_notification)
    @Override
    public void onClick(View v) {
        Intent intent = new Intent(getActivity(), MessageActivity.class);
        startActivity(intent);
    }
}
