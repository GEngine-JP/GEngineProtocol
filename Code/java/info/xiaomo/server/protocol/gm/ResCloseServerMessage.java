package info.xiaomo.server.protocol.gm.message;

import com.google.protobuf.InvalidProtocolBufferException;
import info.xiaomo.server.server.AbstractMessage;
import info.xiaomo.server.protocol.proto.GMProto.CloseServerResponse;

/**
 * 关服返回
 */
public class ResCloseServerMessage extends AbstractMessage {

	private CloseServerResponse res;

	@Override
	public void decode(byte[] bytes) throws InvalidProtocolBufferException {
		this.res = CloseServerResponse.parseFrom(bytes);
	}

	@Override
	public int getId() {
		return 2202;
	}

	public CloseServerResponse getCloseServerResponse() {
		return res;
	}

	public void setCloseServerResponse(CloseServerResponse res) {
		this.res = res;
	}

    @Override
    public byte[] encode() {
        return res.toByteArray();
    }
}

