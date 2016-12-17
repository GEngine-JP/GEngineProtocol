package info.xiaomo.app.model.base;

import lombok.Data;

/**
 * 返回数据基类
 */
@Data
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
