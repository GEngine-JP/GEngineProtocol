package info.xiaomo.app.util;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

/**
 * Created by 钟光新 on 2016/6/15 0015.
 */
public class NetUtil {
    static int NO_NETWORK = 0;
    static int NETWORK_WIFI = 1;
    static int NETWORK_MOBILE = 2;
    public static int checkNetwork(Context context) {
        if (context == null) {
            return NETWORK_WIFI;
        }
        ConnectivityManager cm = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo wifi = cm.getNetworkInfo(ConnectivityManager.TYPE_WIFI);
        if (wifi != null && wifi.isConnected()) {
            return NETWORK_WIFI;
        }
        NetworkInfo mobile = cm.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);
        if (mobile != null && mobile.isConnected()) {
            return NETWORK_MOBILE;
        }
        return NO_NETWORK;
    }
}
