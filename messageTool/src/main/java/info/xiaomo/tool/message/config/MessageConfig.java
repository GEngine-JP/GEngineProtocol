package info.xiaomo.tool.message.config;

public class MessageConfig {

	private int id;

	/**
	 * 生成的java文件名
	 */
	private String className;

	/**
	 * 描述
	 */
	private String desc;

	/**
	 * proto类的地址
	 */
	private String protoClassName;

	/**
	 * 通信方向
	 */
	private MessageDirection dir;

	public MessageDirection getDir() {
		return dir;
	}

	public void setDir(MessageDirection dir) {
		this.dir = dir;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProtoClassName() {
		return protoClassName;
	}

	public void setProtoClassName(String protoClassName) {
		this.protoClassName = protoClassName;
	}

}
