package info.xiaomo.app.ui.activity;

import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import info.xiaomo.app.R;
import info.xiaomo.app.adapter.NewsAdapter;
import info.xiaomo.app.api.LinkService;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.model.Link;
import info.xiaomo.app.model.LinkList;
import info.xiaomo.app.ui.base.BaseActivity;
import info.xiaomo.app.util.HttpUtil;
import retrofit2.Call;

public class NewsActivity extends BaseActivity implements HttpUtil.RetrofitCallBack<LinkList> {
    private static final String TAG = "NewsActivity";

    private String mUserId;
    private RecyclerView mRecyclerView;
    private NewsAdapter mNewsAdapter;
    private List<Link> mDataList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_news);
        mUserId = getIntent().getStringExtra("intent_user_id");
        mDataList = new ArrayList<>();
        mRecyclerView = (RecyclerView) findViewById(R.id.id_news_recycler_view);
        LinearLayoutManager manager = new LinearLayoutManager(NewsActivity.this);
        mRecyclerView.setLayoutManager(manager);
        mNewsAdapter = new NewsAdapter(NewsActivity.this, mDataList);
        mRecyclerView.setAdapter(mNewsAdapter);
        loadData();
    }

    private void loadData() {
        mDialog.setMessage("正在加载中，请稍后...");
        mDialog.show();
        LinkService linkService = httpUtil.getAPIService(LinkService.class);
        Log.d(TAG, "mUserId=====" + mUserId);
        final Call<Result<LinkList>> resp = linkService.findAll();
        httpUtil.enqueueCall(resp, this);
    }

    @Override
    public void onSuccess(Result<LinkList> result) {
        mDialog.dismiss();
        mDataList.clear();
        mDataList.addAll(result.getData().getLink());
        mNewsAdapter.notifyDataSetChanged();
    }

    @Override
    public void onFailure(String error) {
        mDialog.dismiss();
        Toast.makeText(NewsActivity.this, "请求出现异常" + error, Toast.LENGTH_SHORT).show();
    }
}
