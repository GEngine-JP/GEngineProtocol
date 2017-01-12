package info.xiaomo.app.base;


import android.support.v4.app.Fragment;
import android.view.View;
import android.widget.Toast;

import butterknife.ButterKnife;
import info.xiaomo.app.util.HttpUtil;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:52
 */

public class BaseFragment extends Fragment {

    public HttpUtil httpUtil;


    public BaseFragment() {
        httpUtil = HttpUtil.getInstance(getContext());
    }

    public void longToast(String msg) {
        Toast.makeText(getContext(), msg, Toast.LENGTH_SHORT).show();
    }

    public void shortToast(String msg) {
        Toast.makeText(getContext(), msg, Toast.LENGTH_SHORT).show();
    }

    public void initView(View view) {
        ButterKnife.bind(this, view);
    }
}
