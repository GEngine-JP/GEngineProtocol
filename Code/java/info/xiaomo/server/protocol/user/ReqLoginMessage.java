package info.xiaomo.server.protocol.user.message;

import info.xiaomo.server.server.AbstractMessage;
import info.xiaomo.server.protocol.proto.UserProto.LoginRequest;
import com.google.protobuf.InvalidProtocolBufferException;

public class ReqLoginMessage extends AbstractMessage {

    private LoginRequest req;

    public ReqLoginMessage() {
        this.queueId = 1;
    }


    @Override
    public void doAction() {

    }

	@Override
	public void decode(byte[] bytes) throws InvalidProtocolBufferException{
        this.req = LoginRequest.parseFrom(bytes);
	}

    @Override
    public int getId() {
        return 1001;
    }

}

