package info.xiaomo.app.activity.index;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseFragment;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class IndexFragment extends BaseFragment {

//    @BindView(R.id.id_date_text_view)
//    TextView dateTextView;
//    @BindView(R.id.id_nongli_text_view)
//    TextView nlDateTextView;
//    @BindView(R.id.id_now_tq_text_view)
//    TextView tqTextView;
//    @BindView(R.id.id_now_wd_text_view)
//    TextView wdTextView;


    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_index, container, false);
//        initView(view);
        return view;
    }

//    @Override
//    public void initView(View view) {
//        super.initView(view);
////        dateTextView.setText(TimeUtil.getNowTimeWithPattern(TimeUtil.DATE_PATTERN));
////        nlDateTextView.setText(LunarUtil.animalsYear());
//    }
}
