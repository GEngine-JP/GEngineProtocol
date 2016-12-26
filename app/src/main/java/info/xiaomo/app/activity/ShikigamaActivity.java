package info.xiaomo.app.activity;

import android.os.Bundle;
import android.widget.GridView;
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
    private ShikigamiAdapter shikigamiAdapter;
    private List<ShikigamiModel> mDataList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shikigami);
        mDataList = new ArrayList<>();
        GridView gridView = (GridView) findViewById(R.id.id_news_recycler_view);
        shikigamiAdapter = new ShikigamiAdapter(this, mDataList);
        gridView.setAdapter(shikigamiAdapter);
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
        shikigamiAdapter.notifyDataSetChanged();
    }

    @Override
    public void onFailure(String error) {
        mDialog.dismiss();
        Toast.makeText(ShikigamaActivity.this, "请求出现异常" + error, Toast.LENGTH_SHORT).show();
    }

}
