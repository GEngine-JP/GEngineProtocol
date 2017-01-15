package info.xiaomo.app.activity.work;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.Snackbar;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

import butterknife.BindView;
import info.xiaomo.app.R;
import info.xiaomo.app.base.BaseFragment;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/7 17:56
 */

public class BlogFragment extends BaseFragment implements View.OnClickListener {

    private static final String url = "https://xiaomo.info";
    //项目列表
    @BindView(R.id.id_blog_web_view)
    WebView blogWebView;

    @BindView(R.id.id_progress_bar_frame)
    FrameLayout frameLayout;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_blog, container, false);
        initView(view);
        return view;
    }

    @Override
    public void initView(View view) {
        super.initView(view);
        blogWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                view.loadUrl(url);
                return true;
            }
        });
        blogWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress == 100) {
                    // 网页加载完成
                    frameLayout.post(new Runnable() {
                        @Override
                        public void run() {
                            frameLayout.setVisibility(View.GONE);
                        }
                    });
                } else {
                    // 加载中

                }

            }
        });
        WebSettings settings = blogWebView.getSettings();
        blogWebView.getSettings().setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        settings.setUseWideViewPort(true);//适配屏幕
        settings.setLoadWithOverviewMode(true);
        settings.setDomStorageEnabled(true);//支持Html5标签
        settings.setJavaScriptEnabled(true);
        blogWebView.loadUrl(url);
    }

    @Override
    public void onClick(View v) {
        Snackbar.make(v, "hello", Snackbar.LENGTH_SHORT).show();
    }

//    @Override
//    public boolean onKeyDown(int keyCode, KeyEvent event) {
//        // TODO Auto-generated method stub
//        if (keyCode == KeyEvent.KEYCODE_BACK) {
//            if (blogWebView.canGoBack()) {
//                blogWebView.goBack();//返回上一页面
//                return true;
//            } else {
//                System.exit(0);//退出程序
//            }
//        }
//        return super.onKeyDown(keyCode, event);
//    }

    class BlogChromeClient extends WebChromeClient {


    }
}
