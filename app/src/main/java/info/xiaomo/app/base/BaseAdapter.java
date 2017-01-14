package info.xiaomo.app.base;

import android.view.View;
import android.view.ViewGroup;

import java.util.List;

import butterknife.ButterKnife;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 9:58
 */

public class BaseAdapter<T> extends android.widget.BaseAdapter {

    private List<T> list;

    public BaseAdapter(List<T> list) {
        this.list = list;
    }


    @Override
    public int getCount() {
        return list.size();
    }

    @Override
    public Object getItem(int position) {
        return list.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        return null;
    }

    public static class Holder {
        public Holder(View view) {
            ButterKnife.bind(this, view);
        }
    }

}
