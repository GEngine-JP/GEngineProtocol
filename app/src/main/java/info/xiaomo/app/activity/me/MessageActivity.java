package info.xiaomo.app.activity.me;

import android.os.Bundle;
import android.view.View;
import android.widget.ListView;

import butterknife.BindView;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.adapter.MessageListViewAdapter;
import info.xiaomo.app.data.StaticData;
import info.xiaomo.app.model.MessageModel;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:01
 */

public class MessageActivity extends BaseActivity implements HttpUtil.RetrofitCallBack<MessageModel>, View.OnClickListener {

    @BindView(R.id.id_message_list_view)
    ListView messageListView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message_list);
        initView(savedInstanceState);
    }

    @Override
    protected void initView(Bundle savedInstanceState) {
        super.initView(savedInstanceState);
        messageListView.setAdapter(new MessageListViewAdapter(this, StaticData.getChatItemList()));
    }

    @Override
    public void onSuccess(Result<MessageModel> result) {

    }

    @Override
    public void onFailure(String error) {

    }

    @OnClick(R.id.id_tool_bar_back)
    @Override
    public void onClick(View v) {
        finish();
    }
}
