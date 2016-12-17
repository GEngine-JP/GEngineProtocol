package info.xiaomo.app.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import info.xiaomo.app.R;
import info.xiaomo.app.api.ILoginService;
import info.xiaomo.app.model.UserModel;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.ui.base.BaseActivity;
import info.xiaomo.app.util.HttpUtil;
import retrofit2.Call;

public class LoginActivity extends BaseActivity implements View.OnClickListener, HttpUtil.RetrofitCallBack<UserModel> {

    private static final String TAG = "LoginActivity";

    private AutoCompleteTextView mEmailView;
    private EditText mPasswordView;
    private View mLoginFormView;
    private Button mSignInButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        mEmailView = (AutoCompleteTextView) findViewById(R.id.email);
        mPasswordView = (EditText) findViewById(R.id.password);
        mPasswordView.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView textView, int id, KeyEvent keyEvent) {
                return id == R.id.login || id == EditorInfo.IME_NULL;
            }
        });

        mSignInButton = (Button) findViewById(R.id.sign_in_button);
        mSignInButton.setOnClickListener(this);
        mLoginFormView = findViewById(R.id.login_form);
    }

    public void startRegister(View view) {
        Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
        startActivity(intent);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.sign_in_button:
                mDialog.setMessage("正在登录中，请稍后...");
                mDialog.show();
                ILoginService loginService = httpUtil.getAPIService(ILoginService.class);
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
        Log.d(TAG, "onResponse======" + result.getData().getResultCode());
        Intent intent = new Intent(LoginActivity.this, NewsActivity.class);
        intent.putExtra("intent_user_id", String.valueOf(result.getData().getId()));
        startActivity(intent);
        Toast.makeText(getBaseContext(), "登录成功", Toast.LENGTH_SHORT).show();
        mDialog.dismiss();
    }

    @Override
    public void onFailure(String error) {
        Toast.makeText(getBaseContext(), error, Toast.LENGTH_SHORT).show();
        mDialog.dismiss();
    }
}

