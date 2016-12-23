package info.xiaomo.app.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

import info.xiaomo.app.R;
import info.xiaomo.app.activity.base.BaseActivity;
import info.xiaomo.app.api.RegisterService;
import info.xiaomo.app.model.UserModel;
import info.xiaomo.app.model.base.Result;
import info.xiaomo.app.util.HttpUtil;
import retrofit2.Call;

public class RegisterActivity extends BaseActivity implements HttpUtil.RetrofitCallBack<UserModel> {
    private AutoCompleteTextView mUserName;
    private EditText mPasswordEditText;
    private EditText mConfirmationEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        mUserName = (AutoCompleteTextView) findViewById(R.id.id_username);
        mPasswordEditText = (EditText) findViewById(R.id.password);
        mConfirmationEditText = (EditText) findViewById(R.id.confirmation_password);
    }

    public void startRegister(View view) {
        String userName = mUserName.getText().toString();
        String password = mPasswordEditText.getText().toString();
        String mConfirmation = mConfirmationEditText.getText().toString();
        if (!TextUtils.isEmpty(userName) && !TextUtils.isEmpty(password)
                && !TextUtils.isEmpty(mConfirmation)) {
            if (password.equals(mConfirmation)) {
                RegisterService loginService = httpUtil.getAPIService(RegisterService.class);
                Map<String, String> mParamsMap = new HashMap<>();
                mParamsMap.put("username", userName);
                mParamsMap.put("password", password);
                Call<Result<UserModel>> call = loginService.createUser(mParamsMap);
                httpUtil.enqueueCall(call, this);
            } else {
                Toast.makeText(getBaseContext(), "密码不一致", Toast.LENGTH_SHORT).show();
            }
        } else {
            Toast.makeText(getBaseContext(), "请填写完整", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onSuccess(Result<UserModel> result) {
        if (result.getResultCode() == 200) {
            Intent intent = new Intent(RegisterActivity.this, LoginActivity.class);
            startActivity(intent);
        } else {
            Toast.makeText(getBaseContext(), "注册失败", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onFailure(String error) {
        Toast.makeText(getBaseContext(), "哎呀，出错了！", Toast.LENGTH_SHORT).show();
    }
}

