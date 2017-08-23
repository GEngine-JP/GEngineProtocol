package info.xiaomo.tool.message.config;

import java.util.ArrayList;
import java.util.List;

public class FileConfig {

    /**
     * 组
     */
    private int group;

    private int queueId;

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

    public int getQueueId() {
        return queueId;
    }

    public void setQueueId(int queueId) {
        this.queueId = queueId;
    }

    public void setMessageList(List<MessageConfig> messageList) {


        this.messageList = messageList;
    }

}
