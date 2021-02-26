import * as $protobuf from "protobufjs";
/** Properties of a ReqUserLogin. */
export interface IReqUserLogin {

    /** ReqUserLogin msgId */
    msgId?: (UserMsgId|null);

    /** ReqUserLogin sex */
    sex?: (number|null);

    /** ReqUserLogin userId */
    userId?: (number|Long|null);

    /** ReqUserLogin loginName */
    loginName?: (string|null);
}

/** Represents a ReqUserLogin. */
export class ReqUserLogin implements IReqUserLogin {

    /**
     * Constructs a new ReqUserLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqUserLogin);

    /** ReqUserLogin msgId. */
    public msgId: UserMsgId;

    /** ReqUserLogin sex. */
    public sex: number;

    /** ReqUserLogin userId. */
    public userId: (number|Long);

    /** ReqUserLogin loginName. */
    public loginName: string;

    /**
     * Creates a new ReqUserLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqUserLogin instance
     */
    public static create(properties?: IReqUserLogin): ReqUserLogin;

    /**
     * Encodes the specified ReqUserLogin message. Does not implicitly {@link ReqUserLogin.verify|verify} messages.
     * @param message ReqUserLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqUserLogin message, length delimited. Does not implicitly {@link ReqUserLogin.verify|verify} messages.
     * @param message ReqUserLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqUserLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqUserLogin;

    /**
     * Decodes a ReqUserLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqUserLogin;

    /**
     * Verifies a ReqUserLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqUserLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqUserLogin
     */
    public static fromObject(object: { [k: string]: any }): ReqUserLogin;

    /**
     * Creates a plain object from a ReqUserLogin message. Also converts values to other types if specified.
     * @param message ReqUserLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqUserLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqUserLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResUserLogin. */
export interface IResUserLogin {

    /** ResUserLogin msgId */
    msgId?: (UserMsgId|null);

    /** ResUserLogin sex */
    sex?: (number|null);

    /** ResUserLogin userId */
    userId?: (number|Long|null);

    /** ResUserLogin loginName */
    loginName?: (string|null);
}

/** Represents a ResUserLogin. */
export class ResUserLogin implements IResUserLogin {

    /**
     * Constructs a new ResUserLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResUserLogin);

    /** ResUserLogin msgId. */
    public msgId: UserMsgId;

    /** ResUserLogin sex. */
    public sex: number;

    /** ResUserLogin userId. */
    public userId: (number|Long);

    /** ResUserLogin loginName. */
    public loginName: string;

    /**
     * Creates a new ResUserLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResUserLogin instance
     */
    public static create(properties?: IResUserLogin): ResUserLogin;

    /**
     * Encodes the specified ResUserLogin message. Does not implicitly {@link ResUserLogin.verify|verify} messages.
     * @param message ResUserLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResUserLogin message, length delimited. Does not implicitly {@link ResUserLogin.verify|verify} messages.
     * @param message ResUserLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResUserLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResUserLogin;

    /**
     * Decodes a ResUserLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResUserLogin;

    /**
     * Verifies a ResUserLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResUserLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResUserLogin
     */
    public static fromObject(object: { [k: string]: any }): ResUserLogin;

    /**
     * Creates a plain object from a ResUserLogin message. Also converts values to other types if specified.
     * @param message ResUserLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResUserLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResUserLogin to JSON.
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
