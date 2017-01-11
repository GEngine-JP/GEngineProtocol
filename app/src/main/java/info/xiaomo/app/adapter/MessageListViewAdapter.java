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
import info.xiaomo.app.model.MessageModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:10
 */

public class MessageListViewAdapter extends BaseAdapter<MessageModel> {

    private LayoutInflater inflater;

    public MessageListViewAdapter(Context context, List<MessageModel> messageModelList) {
        super(messageModelList);
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        MessageModel item = (MessageModel) getItem(position);
        ViewHolder holder;
        if (convertView == null) {
            convertView = inflater.inflate(R.layout.message_item, parent, false);
            holder = new ViewHolder(convertView);
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }
        holder.pic.setImageResource(Integer.parseInt(item.getPic()));
        holder.sendTime.setText(item.getSendTime());
        holder.name.setText(item.getName());
        holder.content.setText(item.getContent());
        return convertView;
    }

    public static class ViewHolder {
        @BindView(R.id.id_chat_item_icon)
        ImageView pic;
        @BindView(R.id.id_chat_item_name)
        TextView name;
        @BindView(R.id.id_chat_item_content)
        TextView content;
        @BindView(R.id.id_chat_item_time)
        TextView sendTime;

        ViewHolder(View view) {
            ButterKnife.bind(this,view);
        }
    }

}
