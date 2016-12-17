package info.xiaomo.app.ui.base;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.annotation.LayoutRes;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;

import info.xiaomo.app.util.HttpUtil;

public abstract class BaseActivity extends AppCompatActivity{
    public HttpUtil httpUtil;
    public LayoutInflater mInflater;
    public ProgressDialog mDialog;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void setContentView(@LayoutRes int layoutResID) {
        super.setContentView(layoutResID);
        mInflater = LayoutInflater.from(this);
        setContentView(mInflater.inflate(layoutResID,null));
    }

    @Override
    public void setContentView(View view) {
        super.setContentView(view);
        httpUtil = HttpUtil.getInstance(BaseActivity.this);
        mDialog = new ProgressDialog(BaseActivity.this);
    }
}

