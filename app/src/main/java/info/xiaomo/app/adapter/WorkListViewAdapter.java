package info.xiaomo.app.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseAdapter;
import info.xiaomo.app.model.WorkModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:10
 */

public class WorkListViewAdapter extends BaseAdapter<WorkModel> {

    private LayoutInflater inflater;

    public WorkListViewAdapter(Context context, List<WorkModel> WorkModelList) {
        super(WorkModelList);
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        WorkModel item = (WorkModel) getItem(position);
        ViewHolder holder;
        if (convertView == null) {
            convertView = inflater.inflate(R.layout.fragment_work_item, parent, false);
            holder = new ViewHolder(convertView);
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }
        holder.pic.setImageResource(Integer.parseInt(item.getPic()));
        holder.time.setText(item.getTime());
        holder.title.setText(item.getTitle());
        holder.content.setText(item.getContent());
        return convertView;
    }

    public static class ViewHolder {
        @BindView(R.id.id_work_item_icon)
        ImageView pic;
        @BindView(R.id.id_work_item_title)
        TextView title;
        @BindView(R.id.id_work_item_content)
        TextView content;
        @BindView(R.id.id_work_item_time)
        TextView time;

        ViewHolder(View view) {
            ButterKnife.bind(this, view);
        }
    }

}
