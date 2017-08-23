package info.xiaomo.tool.message.config;

import java.util.ArrayList;
import java.util.List;

public class FileConfig {

    /**
     * 组
     */
    private int group;

    /**
     * 包路径
     */
    private String packagePath;


    private List<MessageConfig> messageList = new ArrayList<MessageConfig>();


    public int getGroup() {
        return group;
    }

    public void setGroup(int group) {
        this.group = group;
    }

    public String getPackagePath() {
        return packagePath;
    }

    public void setPackagePath(String packagePath) {
        this.packagePath = packagePath;
    }

    public List<MessageConfig> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<MessageConfig> messageList) {
        this.messageList = messageList;
    }

}
