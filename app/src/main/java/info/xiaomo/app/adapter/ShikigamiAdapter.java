package info.xiaomo.app.adapter;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.net.URL;
import java.util.List;

import info.xiaomo.app.R;
import info.xiaomo.app.model.ShikigamiModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/6/15 0015 14:45
 */
public class ShikigamiAdapter extends RecyclerView.Adapter<ShikigamiAdapter.ShikigamiHolder> {
    private List<ShikigamiModel> dataList;
    private LayoutInflater inflater;

    public ShikigamiAdapter(Context context, List<ShikigamiModel> dataList) {
        this.dataList = dataList;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public ShikigamiHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ShikigamiHolder(inflater.inflate(R.layout.activity_shikigami_item, parent, false));
    }

    @Override
    public void onBindViewHolder(ShikigamiHolder holder, int position) {
        ShikigamiModel shikigami = dataList.get(position);
        getImageAsyncTask getImageAsyncTask = new getImageAsyncTask();
        AsyncTask<String, Void, Drawable> execute = getImageAsyncTask.execute(shikigami.getImage());
        try {
            Drawable drawable = execute.get();
            holder.icon.setImageDrawable(drawable);
        } catch (Exception e) {
            e.printStackTrace();
        }
        holder.name.setText(shikigami.getName());
    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }


    class ShikigamiHolder extends RecyclerView.ViewHolder {
        private ImageView icon;
        private TextView name;

        ShikigamiHolder(View itemView) {
            super(itemView);
            icon = (ImageView) itemView.findViewById(R.id.shikigami_icon);
            name = (TextView) itemView.findViewById(R.id.shikigami_name);
        }
    }


    class getImageAsyncTask extends AsyncTask<String, Void, Drawable> {

        @Override
        protected Drawable doInBackground(String... strings) {
            Drawable thumb_d = null;
            try {
                URL thumb_u = new URL(strings[0]);
                thumb_d = Drawable.createFromStream(thumb_u.openStream(), "src");
            } catch (Exception e) {
                e.printStackTrace();
            }
            return thumb_d;
        }
    }


}
