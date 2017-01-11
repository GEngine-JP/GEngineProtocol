package info.xiaomo.app.base;

/**
 * 返回数据基类
 */
public class Result<T> {

    /**
     * 成功失败的返回码
     */
    private int resultCode;

    /**
     * 成功失败的返回消息
     */
    private String message;

    /**
     * 实体消息
     */
    private T data;

    public int getResultCode() {
        return resultCode;
    }

    public void setResultCode(int resultCode) {
        this.resultCode = resultCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Result(int resultCode) {
        this.resultCode = resultCode;
    }

    public Result(int resultCode, String message) {
        this.resultCode = resultCode;
        this.message = message;
    }

    public Result(int resultCode, String message, T data) {
        this.resultCode = resultCode;
        this.message = message;
        this.data = data;
    }
}
