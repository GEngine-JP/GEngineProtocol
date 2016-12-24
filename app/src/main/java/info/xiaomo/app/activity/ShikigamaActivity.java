package info.xiaomo.app.activity;

import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.adapter.ShikigamiAdapter;
import info.xiaomo.app.api.ShikigamiService;
import info.xiaomo.app.model.ShikigamiModel;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;
import retrofit2.Call;

public class ShikigamaActivity extends BaseActivity implements HttpUtil.RetrofitCallBack<List<ShikigamiModel>> {
    private ShikigamiAdapter mNewsAdapter;
    private List<ShikigamiModel> mDataList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_news);
        mDataList = new ArrayList<>();
        RecyclerView mRecyclerView = (RecyclerView) findViewById(R.id.id_news_recycler_view);
        LinearLayoutManager manager = new LinearLayoutManager(ShikigamaActivity.this);
        mRecyclerView.setLayoutManager(manager);
        mNewsAdapter = new ShikigamiAdapter(this, mDataList);
        mRecyclerView.setAdapter(mNewsAdapter);
        loadData();
    }

    private void loadData() {
        mDialog.setMessage("正在加载中，请稍后...");
        mDialog.show();
        ShikigamiService shikigamiService = httpUtil.getAPIService(ShikigamiService.class);
        final Call<Result<List<ShikigamiModel>>> resp = shikigamiService.findAll();
        httpUtil.enqueueCall(resp, this);
    }

    @Override
    public void onSuccess(Result<List<ShikigamiModel>> result) {
        mDialog.dismiss();
        mDataList.clear();
        mDataList.addAll(result.getData());
        mNewsAdapter.notifyDataSetChanged();
    }

    @Override
    public void onFailure(String error) {
        mDialog.dismiss();
        Toast.makeText(ShikigamaActivity.this, "请求出现异常" + error, Toast.LENGTH_SHORT).show();
    }

}
