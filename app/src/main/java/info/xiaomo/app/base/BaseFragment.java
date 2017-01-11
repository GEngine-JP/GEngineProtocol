package info.xiaomo.app.base;


import android.app.ProgressDialog;
import android.support.v4.app.Fragment;
import android.widget.Toast;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:52
 */

public class BaseFragment extends Fragment {

//    protected ProgressDialog dialog;

    public BaseFragment() {
//        dialog = new ProgressDialog(getContext());
    }

    public void longToast(String msg) {
        Toast.makeText(getContext(), msg, Toast.LENGTH_SHORT).show();
    }

    public void shortToast(String msg) {
        Toast.makeText(getContext(), msg, Toast.LENGTH_SHORT).show();
    }
}
