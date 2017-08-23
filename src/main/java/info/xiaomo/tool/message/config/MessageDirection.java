package info.xiaomo.tool.message.config;

public enum MessageDirection {
    TO_CLIENT("toClient"),
    TO_SERVER("toServer"),;

    private String text;

    MessageDirection(String text) {
        this.text = text;
    }


    public static MessageDirection parse(String text) {
        for (MessageDirection dire : values()) {
            if (dire.text.equalsIgnoreCase(text)) {
                return dire;
            }
        }
        throw new RuntimeException("不支持的类型： " + text);
    }
}
