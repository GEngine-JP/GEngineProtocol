package info.xiaomo.app.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


import java.util.List;

import info.xiaomo.app.R;
import info.xiaomo.app.model.NewItem;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/6/15 0015 14:45
 */
public class NewsAdapter extends RecyclerView.Adapter<NewsAdapter.NewsViewHolder>{
    private Context mContext;
    private List<NewItem> mDataList;
    private LayoutInflater mInflater;
    public NewsAdapter(Context context,List<NewItem> mDataList) {
        this.mContext = context ;
        this.mDataList = mDataList ;
        mInflater = LayoutInflater.from(mContext);
    }

    @Override
    public NewsViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new NewsViewHolder(mInflater.inflate(R.layout.activity_news_item,parent,false));
    }

    @Override
    public void onBindViewHolder(NewsViewHolder holder, int position) {
        NewItem newItem = mDataList.get(position);
        holder.mTitleTv.setText(newItem.getTitle());
        holder.mContentTv.setText(newItem.getContent());
    }

    @Override
    public int getItemCount() {
        return mDataList.size();
    }

    public class NewsViewHolder extends RecyclerView.ViewHolder{
        private TextView mTitleTv;
        private TextView mContentTv;
        public NewsViewHolder(View itemView) {
            super(itemView);
            mTitleTv = (TextView) itemView.findViewById(R.id.id_news_title);
            mContentTv = (TextView) itemView.findViewById(R.id.id_news_content);
        }
    }
}
