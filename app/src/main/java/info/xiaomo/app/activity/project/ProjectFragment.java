package info.xiaomo.app.activity.project;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.GridView;

import java.util.List;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.adapter.ProjectGridViewAdapter;
import info.xiaomo.app.base.BaseFragment;
import info.xiaomo.app.data.StaticData;
import info.xiaomo.app.model.ProjectModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class ProjectFragment extends BaseFragment implements View.OnClickListener {

    @BindView(R.id.id_project_grid_view)
    GridView gridView;

    List<ProjectModel> lists;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_project, container, false);
        initView(view);
        lists = StaticData.getProjectList();
        gridView.setAdapter(new ProjectGridViewAdapter(getContext(), lists));
        return view;
    }

    @Override
    public void onClick(View v) {
    }
}
