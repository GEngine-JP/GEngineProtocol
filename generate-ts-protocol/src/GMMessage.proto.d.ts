import * as $protobuf from "protobufjs";
/** Properties of a ReqGMCloseServer. */
export interface IReqGMCloseServer {

    /** ReqGMCloseServer msgId */
    msgId?: (GMMsgId|null);

    /** ReqGMCloseServer resMsg */
    resMsg?: (string|null);
}

/** Represents a ReqGMCloseServer. */
export class ReqGMCloseServer implements IReqGMCloseServer {

    /**
     * Constructs a new ReqGMCloseServer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGMCloseServer);

    /** ReqGMCloseServer msgId. */
    public msgId: GMMsgId;

    /** ReqGMCloseServer resMsg. */
    public resMsg: string;

    /**
     * Creates a new ReqGMCloseServer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGMCloseServer instance
     */
    public static create(properties?: IReqGMCloseServer): ReqGMCloseServer;

    /**
     * Encodes the specified ReqGMCloseServer message. Does not implicitly {@link ReqGMCloseServer.verify|verify} messages.
     * @param message ReqGMCloseServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGMCloseServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGMCloseServer message, length delimited. Does not implicitly {@link ReqGMCloseServer.verify|verify} messages.
     * @param message ReqGMCloseServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGMCloseServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGMCloseServer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGMCloseServer;

    /**
     * Decodes a ReqGMCloseServer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGMCloseServer;

    /**
     * Verifies a ReqGMCloseServer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGMCloseServer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGMCloseServer
     */
    public static fromObject(object: { [k: string]: any }): ReqGMCloseServer;

    /**
     * Creates a plain object from a ReqGMCloseServer message. Also converts values to other types if specified.
     * @param message ReqGMCloseServer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGMCloseServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGMCloseServer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResGMCloseServer. */
export interface IResGMCloseServer {

    /** ResGMCloseServer msgId */
    msgId?: (GMMsgId|null);

    /** ResGMCloseServer resMsg */
    resMsg?: (string|null);
}

/** Represents a ResGMCloseServer. */
export class ResGMCloseServer implements IResGMCloseServer {

    /**
     * Constructs a new ResGMCloseServer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGMCloseServer);

    /** ResGMCloseServer msgId. */
    public msgId: GMMsgId;

    /** ResGMCloseServer resMsg. */
    public resMsg: string;

    /**
     * Creates a new ResGMCloseServer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGMCloseServer instance
     */
    public static create(properties?: IResGMCloseServer): ResGMCloseServer;

    /**
     * Encodes the specified ResGMCloseServer message. Does not implicitly {@link ResGMCloseServer.verify|verify} messages.
     * @param message ResGMCloseServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGMCloseServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGMCloseServer message, length delimited. Does not implicitly {@link ResGMCloseServer.verify|verify} messages.
     * @param message ResGMCloseServer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGMCloseServer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGMCloseServer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGMCloseServer;

    /**
     * Decodes a ResGMCloseServer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGMCloseServer;

    /**
     * Verifies a ResGMCloseServer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGMCloseServer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGMCloseServer
     */
    public static fromObject(object: { [k: string]: any }): ResGMCloseServer;

    /**
     * Creates a plain object from a ResGMCloseServer message. Also converts values to other types if specified.
     * @param message ResGMCloseServer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGMCloseServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGMCloseServer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** GMMsgId enum. */
export enum GMMsgId {
    GmUnknown = 0,
    CloseServerRequest = 201001,
    CloseServerResponse = 201002
}

/** UserMsgId enum. */
export enum UserMsgId {
    UserUnknown = 0,
    LoginRequest = 101001,
    LoginResponse = 101002
}
