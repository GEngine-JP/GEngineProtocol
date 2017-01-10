package info.xiaomo.app.activity.auth;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import butterknife.BindView;
import butterknife.OnClick;
import info.xiaomo.app.R;
import info.xiaomo.app.activity.MainActivity;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.api.LoginService;
import info.xiaomo.app.model.UserModel;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;
import retrofit2.Call;

public class LoginActivity extends BaseActivity implements
        HttpUtil.RetrofitCallBack<UserModel>,
        View.OnClickListener,
        TextView.OnEditorActionListener {

    @BindView(R.id.email)
    EditText mEmailView;
    @BindView(R.id.password)
    EditText mPasswordView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        initView(savedInstanceState);

    }

    @Override
    protected void initView(Bundle savedInstanceState) {
        super.initView(savedInstanceState);
        mPasswordView.setOnEditorActionListener(this);
    }

    public void startRegister(View view) {
        Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
        startActivity(intent);
    }

    @OnClick(R.id.sign_in_button)
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.sign_in_button:
                dialog.setMessage("正在登录中，请稍后...");
                dialog.show();
                LoginService loginService = httpUtil.getAPIService(LoginService.class);
                String username = mEmailView.getText().toString();
                String password = mPasswordView.getText().toString();
                if (!TextUtils.isEmpty(username) && !TextUtils.isEmpty(password)) {
                    final Call<Result<UserModel>> repos = loginService.userLogin(username, password);
                    httpUtil.enqueueCall(repos, this);
                }
                break;
        }
    }

    @Override
    public void onSuccess(Result<UserModel> result) {
        Intent intent = new Intent(LoginActivity.this, MainActivity.class);
        intent.putExtra("intent_user_id", String.valueOf(result.getData().getId()));
        startActivity(intent);
        finish();
        Toast.makeText(getBaseContext(), "登录成功", Toast.LENGTH_SHORT).show();
        dialog.dismiss();
    }

    @Override
    public void onFailure(String error) {
        Toast.makeText(getBaseContext(), error, Toast.LENGTH_SHORT).show();
        dialog.dismiss();
    }

    @Override
    public boolean onEditorAction(TextView textView, int actionId, KeyEvent keyEvent) {
        return actionId == R.id.login || actionId == EditorInfo.IME_ACTION_NONE;
    }
}

