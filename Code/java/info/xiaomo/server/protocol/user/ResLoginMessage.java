package info.xiaomo.server.protocol.user.message;

import com.google.protobuf.InvalidProtocolBufferException;
import info.xiaomo.server.server.AbstractMessage;
import info.xiaomo.server.protocol.proto.UserProto.LoginResponse;

/**
 * 登录返回
 */
public class ResLoginMessage extends AbstractMessage {

	private LoginResponse res;

	@Override
	public void decode(byte[] bytes) throws InvalidProtocolBufferException {
		this.res = LoginResponse.parseFrom(bytes);
	}

	@Override
	public int getId() {
		return 1002;
	}


    @Override
    public byte[] getContent() {
        return res.toByteArray();
    }

	public void setLoginResponse(LoginResponse res) {
		this.res = res;
	}
}

