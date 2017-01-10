package info.xiaomo.app.data;

import java.util.ArrayList;
import java.util.List;

import info.xiaomo.app.R;
import info.xiaomo.app.model.MessageModel;

/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @version : 2017/1/9 17:05
 */

public class StaticData {

    public static List<MessageModel> getChatItemList() {
        List<MessageModel> hhList = new ArrayList<>();
        MessageModel h1 = new MessageModel();
        h1.setPic(R.mipmap.ic_launcher + "");
        h1.setType(1);
        h1.setName("小莫");
        h1.setSendTime("15分钟前");
        h1.setContent("盘点：那些还在拼命探索的语音识别软件们");

        MessageModel h2 = new MessageModel();
        h2.setPic(R.drawable.find_pressed + "");
        h2.setName("小莫");
        h2.setSendTime("15分钟前");
        h2.setContent("快忘记什么讴歌NSX啦，还是本田NSX好！");
        h2.setType(2);

        MessageModel h3 = new MessageModel();
        h3.setPic(R.drawable.find_pressed + "");
        h3.setContent("萌萌的哈士奇是宠物的首选");
        h3.setName("小莫");
        h3.setSendTime("15分钟前");
        h3.setType(1);

        MessageModel h4 = new MessageModel();
        h4.setPic(R.mipmap.ic_launcher + "");
        h4.setContent("《欢天喜地七仙女》要翻拍？已邀请杨幂赵丽颖刘诗诗郑爽，那么谁才是女主？");
        h4.setType(2);
        h4.setSendTime("15分钟前");
        h4.setName("小莫");

        MessageModel h5 = new MessageModel();
        h5.setPic(R.drawable.find_pressed + "");
        h5.setName("小莫");
        h5.setSendTime("15分钟前");
        h5.setContent("韩媒：中方报复萨德力度升级 韩企在华受重挫");
        h5.setType(1);

        MessageModel h6 = new MessageModel();
        h6.setPic(R.drawable.find_pressed + "");
        h6.setContent("漫画：程序员打针之后");
        h6.setType(2);
        h6.setSendTime("15分钟前");
        h6.setName("小莫");

        MessageModel h7 = new MessageModel();
        h7.setPic(R.drawable.find_pressed + "");
        h7.setName("小莫");
        h7.setSendTime("15分钟前");
        h7.setContent("10来万买suv好纠结啊要缤智还是xrv");
        h7.setType(1);

        MessageModel h8 = new MessageModel();
        h8.setPic(R.drawable.find_pressed + "");
        h8.setContent("烤鱼能把鱼肉营养全毁了");
        h8.setName("小莫");
        h8.setSendTime("15分钟前");
        h8.setType(2);

        MessageModel h9 = new MessageModel();
        h9.setName("小莫");
        h9.setPic(R.drawable.find_pressed + "");
        h9.setContent("韩媒：中方报复萨德力度升级 韩企在华受重挫");
        h9.setType(1);
        h9.setSendTime("15分钟前");

        MessageModel h10 = new MessageModel();
        h10.setPic(R.drawable.find_pressed + "");
        h10.setContent("如何区分强迫症与强迫行为");
        h10.setType(1);
        h10.setSendTime("15分钟前");
        h10.setName("小莫");

        hhList.add(h1);
        hhList.add(h2);
        hhList.add(h3);
        hhList.add(h4);
        hhList.add(h5);
        hhList.add(h6);
        hhList.add(h7);
        hhList.add(h8);
        hhList.add(h9);
        hhList.add(h10);
        return hhList;
    }

}
