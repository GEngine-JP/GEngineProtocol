package info.xiaomo.app.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseAdapter;
import info.xiaomo.app.model.ProjectModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:10
 */

public class ProjectGridViewAdapter extends BaseAdapter<ProjectModel> {

    private LayoutInflater inflater;

    public ProjectGridViewAdapter(Context context, List<ProjectModel> projectModelList) {
        super(projectModelList);
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ProjectModel item = (ProjectModel) getItem(position);
        ViewHolder holder;
        if (convertView == null) {
            convertView = inflater.inflate(R.layout.project_item, parent, false);
            holder = new ViewHolder(convertView);
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }
        holder.pic.setImageResource(Integer.parseInt(item.getPic()));
        holder.name.setText(item.getName());
        return convertView;
    }

    public static class ViewHolder extends Holder {
        @BindView(R.id.id_grid_item_image)
        ImageView pic;
        @BindView(R.id.id_grid_item_text)
        TextView name;

        ViewHolder(View view) {
            super(view);
        }

    }

}
