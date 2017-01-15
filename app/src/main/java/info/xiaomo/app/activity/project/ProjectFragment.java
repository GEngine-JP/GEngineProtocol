package info.xiaomo.app.activity.project;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.Toast;

import java.util.List;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.adapter.ProjectGridViewAdapter;
import info.xiaomo.app.base.BaseFragment;
import info.xiaomo.app.data.StaticData;
import info.xiaomo.app.model.ProjectModel;
import info.xiaomo.app.util.AppUtil;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class ProjectFragment extends BaseFragment implements View.OnClickListener, AdapterView.OnItemClickListener {

    @BindView(R.id.id_project_grid_view)
    GridView gridView;

    List<ProjectModel> lists;
    Toast toast;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_project, container, false);
        initView(view);
        return view;
    }

    @Override
    public void initView(View view) {
        super.initView(view);
        lists = StaticData.getProjectList();
        gridView.setAdapter(new ProjectGridViewAdapter(getContext(), lists));
        gridView.setOnItemClickListener(this);
    }

    @Override
    public void onClick(View v) {
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        ProjectModel item = (ProjectModel) parent.getAdapter().getItem(position);
        toast = AppUtil.ShowToast(toast, getContext(), item.getName());
    }
}
