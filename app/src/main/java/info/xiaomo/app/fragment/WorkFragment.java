package info.xiaomo.app.fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.Snackbar;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.fragment.base.BaseFragment;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class WorkFragment extends BaseFragment implements View.OnClickListener {

    @BindView(R.id.tvInfo3)
    TextView textView;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_work, container, false);
        ButterKnife.bind(this, view);
        textView.setText(R.string.work);
        return view;
    }

    @OnClick(R.id.tvInfo3)
    @Override
    public void onClick(View v) {
        Snackbar.make(v, "hello", Snackbar.LENGTH_SHORT).show();
    }
}
