package info.xiaomo.app.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

import info.xiaomo.app.R;
import info.xiaomo.app.model.ShikigamiModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/6/15 0015 14:45
 */
public class ShikigamiAdapter extends BaseAdapter {
    private List<ShikigamiModel> dataList;
    private LayoutInflater inflater;

    public ShikigamiAdapter(Context context, List<ShikigamiModel> dataList) {
        this.dataList = dataList;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return dataList.size();
    }

    @Override
    public Object getItem(int i) {
        return dataList.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        ShikigamiHolder shikigamiHolder;
        if (view == null) {
            shikigamiHolder = new ShikigamiHolder();
            view = this.inflater.inflate(R.layout.activity_shikigami_item, null);
            shikigamiHolder.icon = (ImageView) view.findViewById(R.id.shikigami_icon);
            shikigamiHolder.name = (TextView) view.findViewById(R.id.shikigami_name);
            view.setTag(shikigamiHolder);
        } else {
            shikigamiHolder = (ShikigamiHolder) view.getTag();
        }
        ShikigamiModel model = dataList.get(i);
        shikigamiHolder.name.setText(model.getName());
        return view;
    }


    private class ShikigamiHolder {
        private ImageView icon;
        private TextView name;
    }


}
