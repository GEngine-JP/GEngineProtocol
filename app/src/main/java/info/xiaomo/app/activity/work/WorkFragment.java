package info.xiaomo.app.activity.work;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.Snackbar;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import butterknife.BindView;
import butterknife.ButterKnife;
import info.xiaomo.app.R;
import info.xiaomo.app.adapter.WorkListViewAdapter;
import info.xiaomo.app.data.StaticData;
import info.xiaomo.app.base.BaseFragment;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class WorkFragment extends BaseFragment implements View.OnClickListener {

    //项目列表
    @BindView(R.id.id_work_list_view)
    ListView workListView;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_work, container, false);
        ButterKnife.bind(this, view);
        workListView.setAdapter(new WorkListViewAdapter(getContext(), StaticData.getWorkList()));
        return view;
    }

    @Override
    public void onClick(View v) {
        Snackbar.make(v, "hello", Snackbar.LENGTH_SHORT).show();
    }
}
