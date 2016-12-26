package info.xiaomo.app.util;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
import com.bumptech.glide.load.resource.bitmap.BitmapTransformation;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2016/12/26 14:47
 *          只能加载网络图片，本地图片没有效果
 */

public class GlideImgUtil {

    public static final int Circle = 1;

    public static final int Radius = 2;

    /**
     * load normal  for img
     *
     * @param context  上下文 传this就行
     * @param url      string类型的URL
     * @param erroImg  R.id.xxx错误时的图片
     * @param emptyImg R.id.xxx 为空时的图片
     * @param iv       imageView
     *                 缺省 正常图片
     */
    public static void glideLoader(Context context, String url, int erroImg, int emptyImg, ImageView iv) {
        //原生 API
        Glide.with(context).load(url).placeholder(emptyImg).error(erroImg).into(iv);
    }


    /**
     * load normal  for  circle or round img
     *
     * @param url      string类型的URL
     * @param erroImg  R.id.xxx错误时的图片
     * @param emptyImg R.id.xxx 为空时的图片
     * @param iv       imageView
     * @param tag      1正圆，2圆角
     */
    public static void glideLoader(Context context, String url, ImageView iv, int tag) {
        if (1 == tag) { // 正圆
            Glide.with(context).load(url).placeholder(android.R.mipmap.sym_def_app_icon).error(android.R.mipmap.sym_def_app_icon).transform(new GlideCircleTransform(context)).into(iv);
        } else if (2 == tag) { // 圆角
            Glide.with(context).load(url).placeholder(android.R.mipmap.sym_def_app_icon).error(android.R.mipmap.sym_def_app_icon).transform(new GlideRoundTransform(context, 10)).into(iv);
        }
    }

    /**
     * load normal  for  circle or round img
     *
     * @param url      string类型的URL
     * @param erroImg  R.id.xxx错误时的图片
     * @param emptyImg R.id.xxx 为空时的图片
     * @param iv       imageView
     * @param tag      1正圆，2圆角
     */
    public static void glideLoader(Context context, String url, int erroImg, int emptyImg, ImageView iv, int tag) {
        if (1 == tag) { // 正圆
            Glide.with(context).load(url).placeholder(emptyImg).error(erroImg).transform(new GlideCircleTransform(context)).into(iv);
        } else if (2 == tag) { // 圆角
            Glide.with(context).load(url).placeholder(emptyImg).error(erroImg).transform(new GlideRoundTransform(context, 10)).into(iv);
        }
    }


    /**
     * Created by qly on 2016/6/22.
     * 将图片转化为圆角
     * 构造中第二个参数定义半径
     */
    private static class GlideRoundTransform extends BitmapTransformation {

        private static float radius = 0f;

        public GlideRoundTransform(Context context) {
            this(context, 4);
        }

        GlideRoundTransform(Context context, int dp) {
            super(context);
            radius = Resources.getSystem().getDisplayMetrics().density * dp;
        }

        @Override
        protected Bitmap transform(BitmapPool pool, Bitmap toTransform, int outWidth, int outHeight) {
            return roundCrop(pool, toTransform);
        }

        private static Bitmap roundCrop(BitmapPool pool, Bitmap source) {
            if (source == null) return null;

            Bitmap result = pool.get(source.getWidth(), source.getHeight(), Bitmap.Config.ARGB_8888);
            if (result == null) {
                result = Bitmap.createBitmap(source.getWidth(), source.getHeight(), Bitmap.Config.ARGB_8888);
            }

            Canvas canvas = new Canvas(result);
            Paint paint = new Paint();
            paint.setShader(new BitmapShader(source, BitmapShader.TileMode.CLAMP, BitmapShader.TileMode.CLAMP));
            paint.setAntiAlias(true);
            RectF rectF = new RectF(0f, 0f, source.getWidth(), source.getHeight());
            canvas.drawRoundRect(rectF, radius, radius, paint);
            return result;
        }

        @Override
        public String getId() {
            return getClass().getName() + Math.round(radius);
        }
    }


    /**
     * Created by qly on 2016/6/22.
     * 将图片转化为圆形
     */
    private static class GlideCircleTransform extends BitmapTransformation {
        GlideCircleTransform(Context context) {
            super(context);
        }

        @Override
        protected Bitmap transform(BitmapPool pool, Bitmap toTransform, int outWidth, int outHeight) {
            return circleCrop(pool, toTransform);
        }

        private static Bitmap circleCrop(BitmapPool pool, Bitmap source) {
            if (source == null) return null;

            int size = Math.min(source.getWidth(), source.getHeight());
            int x = (source.getWidth() - size) / 2;
            int y = (source.getHeight() - size) / 2;

            Bitmap squared = Bitmap.createBitmap(source, x, y, size, size);

            Bitmap result = pool.get(size, size, Bitmap.Config.ARGB_8888);
            if (result == null) {
                result = Bitmap.createBitmap(size, size, Bitmap.Config.ARGB_8888);
            }

            Canvas canvas = new Canvas(result);
            Paint paint = new Paint();
            paint.setShader(new BitmapShader(squared, BitmapShader.TileMode.CLAMP, BitmapShader.TileMode.CLAMP));
            paint.setAntiAlias(true);
            float r = size / 2f;
            canvas.drawCircle(r, r, r, paint);
            return result;
        }

        @Override
        public String getId() {
            return getClass().getName();
        }
    }
}
