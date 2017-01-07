package info.xiaomo.app.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.api.LoginService;
import info.xiaomo.app.model.UserModel;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;
import retrofit2.Call;

public class LoginActivity extends BaseActivity implements HttpUtil.RetrofitCallBack<UserModel>, View.OnClickListener, TextView.OnEditorActionListener {

    private AutoCompleteTextView mEmailView;
    private EditText mPasswordView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        mEmailView = (AutoCompleteTextView) findViewById(R.id.email);
        mPasswordView = (EditText) findViewById(R.id.password);
        mPasswordView.setOnEditorActionListener(this);
        Button mSignInButton = (Button) findViewById(R.id.sign_in_button);
        mSignInButton.setOnClickListener(this);
    }

    public void startRegister(View view) {
        Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
        startActivity(intent);
    }

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

