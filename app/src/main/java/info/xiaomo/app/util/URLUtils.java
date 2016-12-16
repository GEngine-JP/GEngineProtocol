package info.xiaomo.app.util;

import java.util.regex.Pattern;

/**
 * 解析URL链接, 如果是站内链接, 用相应的activity打开, 否则用浏览器打开
 * Created by thanatos on 16/9/27.
 */

public class URLUtils {

    public static final Pattern PATTERN_URL = Pattern.compile(
            "(?:http|https)://([^/]+)(.+)"
    );

    public static final Pattern PATTERN_PATH_NEWS = Pattern.compile(
            "/news/([0-9]+).*"
    );

    public static final Pattern PATTERN_PATH_SOFTWARE = Pattern.compile(
            "/p/([^/]+)"
    );

    public static final Pattern PATTERN_PATH_TOPIC = Pattern.compile(
            "/question/tag/(\\w+)"
    );

    public static final Pattern PATTERN_PATH_TWEET_TOPIC = Pattern.compile(
            "/tweet-topic/([^/]+)"
    );

    public static final Pattern PATTERN_PATH_QUESTION = Pattern.compile(
            "/question/(\\w+)"
    );

    public static final Pattern PATTERN_PATH_USER_BLOG = Pattern.compile(
            "/([^/]+)/blog/([0-9]+)"
    );

    public static final Pattern PATTERN_PATH_USER_TWEET = Pattern.compile(
            "/([^/]+)/tweet/([0-9]+)"
    );

    public static final Pattern PATTERN_PATH_USER_UID = Pattern.compile(
            "/u/([0-9]+)"
    );

    public static final Pattern PATTERN_PATH_USER_SUFFIX = Pattern.compile(
            "/([^/]+)"
    );

    public static final Pattern PATTERN_PATH_CITY_EVENT = Pattern.compile(
            "/([^/]+)/event/([0-9]+)"
    );

    public static final Pattern PATTERN_IMAGE = Pattern.compile(
            ".*?(gif|jpeg|png|jpg|bmp)"
    );

    private static final String PREFIX_IMAGE = "ima-api:action=showImage&data=";


    /**
     * 解析跳转链接, 使用对应应用打开
     * @param context Context
     * @param uri give me a uri
     */
//    public static void parseUrl(Context context, String uri){
//        if (TextUtils.isEmpty(uri)) return;
//
//        String url = uri;
//        if (!url.startsWith("http://") && !url.startsWith("https://")){
//            url = "https://" + url;
//        }
//        try {
//            url = URLDecoder.decode(url, "UTF-8");
//        } catch (UnsupportedEncodingException e) {
//            // do nothing
//        }
//
//        Matcher matcher;
//
//        // image url ?
//        matcher = PATTERN_IMAGE.matcher(url);
//        if (matcher.matches()){
//            ImageGalleryActivity.show(context, url);
//            return;
//        }
//
//        matcher = PATTERN_URL.matcher(url);
//        if (!matcher.find()) {
//            // other ?
//            parseNonstandardUrl(context, uri);
//            return;
//        }
//
//        // own ?
//        String host = matcher.group(1);
//        String path = matcher.group(2);
//
//        if (TextUtils.isEmpty(host) || TextUtils.isEmpty(path)) return;
//
//        long oid = 0;
//        switch (host){
//            case "www.oschina.net":
//                matcher = PATTERN_PATH_NEWS.matcher(path);
//                if (matcher.find()){
//                    oid = StringUtils.toLong(matcher.group(1));
//                    NewsDetailActivity.show(context, oid);
//                    break;
//                }
//                matcher = PATTERN_PATH_SOFTWARE.matcher(path);
//                if (matcher.find()){
//                    // https://www.oschina.net/p/parallels-desktop
//                    SoftwareDetailActivity.show(context, matcher.group(1));
//                    break;
//                }
//                matcher = PATTERN_PATH_TOPIC.matcher(path);
//                if (matcher.find()){
//                    // TODO replace by new activity
//                    UIHelper.showPostListByTag(context, matcher.group(1));
//                    break;
//                }
//                matcher = PATTERN_PATH_TWEET_TOPIC.matcher(path);
//                if (matcher.find()){
//                    // TODO replace by new activity
//                    //  https://www.oschina.net/tweet-topic/Navicat+for+Postgresql
//                    Bundle bundle = new Bundle();
//                    bundle.putString("topic", matcher.group(1));
//                    UIHelper.showSimpleBack(context, SimpleBackPage.TWEET_TOPIC_LIST, bundle);
//                    break;
//                }
//                matcher = PATTERN_PATH_QUESTION.matcher(path);
//                if (matcher.find()){
//                    oid = StringUtils.toLong(matcher.group(1).split("_")[1]);
//                    QuestionDetailActivity.show(context, oid);
//                    break;
//                }
//                UIHelper.openInternalBrowser(context, url);
//                break;
//            case "team.oschina.net":
//                // TODO team要独立?
//                UIHelper.openInternalBrowser(context, url);
//                break;
//            case "git.oschina.net":
//                // TODO 如果用户安装了git@osc application, 使用git@osc打开
//                UIHelper.openInternalBrowser(context, url);
//                break;
//            case "my.oschina.net":
//                matcher = PATTERN_PATH_USER_BLOG.matcher(path);
//                if (matcher.find()){
//                    oid = StringUtils.toLong(matcher.group(2));
//                    BlogDetailActivity.show(context, oid);
//                    break;
//                }
//                matcher = PATTERN_PATH_USER_TWEET.matcher(path);
//                if (matcher.find()){
//                    oid = StringUtils.toLong(matcher.group(2));
//                    TweetDetailActivity.show(context, oid);
//                    break;
//                }
//                matcher = PATTERN_PATH_USER_UID.matcher(path);
//                if (matcher.find()){
//                    oid = StringUtils.toLong(matcher.group(1));
//                    OtherUserHomeActivity.show(context, oid);
//                    break;
//                }
//                matcher = PATTERN_PATH_USER_SUFFIX.matcher(path);
//                if (matcher.find()){
//                    OtherUserHomeActivity.show(context, 0, matcher.group(1));
//                    break;
//                }
//                UIHelper.openInternalBrowser(context, url);
//                break;
//            case "city.oschina.net":
//                matcher = PATTERN_PATH_CITY_EVENT.matcher(url);
//                if (matcher.find()){
//                    long eid = StringUtils.toInt(matcher.group(3), 0);
//                    if (eid <= 0) return;
//                    UIHelper.showEventDetail(context, eid);
//                    return;
//                }
//                UIHelper.openInternalBrowser(context, url);
//                break;
//            default:
//                // pass
//                UIHelper.openInternalBrowser(context, url);
//        }
//
//    }

//    public static void parseNonstandardUrl(Context context, String url) {
//
//        if (url.startsWith("mailto:")){
//            Uri uri = Uri.parse(url);
//            Intent intent = new Intent(Intent.ACTION_SENDTO, uri);
//            context.startActivity(Intent.createChooser(intent, "选择发送应用"));
//            return;
//        }
//
//        // image, 我不懂老代码的思路...所以直接copy过来
//        if (url.startsWith(PREFIX_IMAGE)) {
//            String jos = url.substring(PREFIX_IMAGE.length());
//            try {
//                JSONObject json = new JSONObject(jos);
//                String[] urls = json.getString("urls").split(",");
//                OSCPhotosActivity.showImagePreview(context, urls[0]);
//            } catch (JSONException e) {
//                e.printStackTrace();
//            }
//        }
//    }

}
