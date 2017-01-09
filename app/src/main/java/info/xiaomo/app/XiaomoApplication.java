package info.xiaomo.app;

import android.app.Application;

import im.fir.sdk.FIR;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 11:43
 */

public class XiaomoApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        FIR.init(this);
    }
}
