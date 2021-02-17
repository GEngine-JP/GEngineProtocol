import * as $protobuf from "protobufjs";
/** Properties of a LoginRequest. */
export interface ILoginRequest {

    /** LoginRequest mid */
    mid?: (MID|null);

    /** LoginRequest account */
    account?: (string|null);

    /** LoginRequest password */
    password?: (string|null);

    /** LoginRequest loginType */
    loginType?: (LoginType|null);

    /** LoginRequest sessionId */
    sessionId?: (number|Long|null);

    /** LoginRequest gateId */
    gateId?: (number|null);

    /** LoginRequest ip */
    ip?: (string|null);

    /** LoginRequest version */
    version?: (string|null);
}

/** Represents a LoginRequest. */
export class LoginRequest implements ILoginRequest {

    /**
     * Constructs a new LoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginRequest);

    /** LoginRequest mid. */
    public mid: MID;

    /** LoginRequest account. */
    public account: string;

    /** LoginRequest password. */
    public password: string;

    /** LoginRequest loginType. */
    public loginType: LoginType;

    /** LoginRequest sessionId. */
    public sessionId: (number|Long);

    /** LoginRequest gateId. */
    public gateId: number;

    /** LoginRequest ip. */
    public ip: string;

    /** LoginRequest version. */
    public version: string;

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRequest instance
     */
    public static create(properties?: ILoginRequest): LoginRequest;

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginRequest;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginRequest;

    /**
     * Verifies a LoginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginRequest
     */
    public static fromObject(object: { [k: string]: any }): LoginRequest;

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @param message LoginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginResponse. */
export interface ILoginResponse {

    /** LoginResponse mid */
    mid?: (MID|null);

    /** LoginResponse isOk */
    isOk?: (boolean|null);

    /** LoginResponse uid */
    uid?: (number|Long|null);

    /** LoginResponse rid */
    rid?: (number|Long|null);

    /** LoginResponse sessionId */
    sessionId?: (number|Long|null);
}

/** Represents a LoginResponse. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse mid. */
    public mid: MID;

    /** LoginResponse isOk. */
    public isOk: boolean;

    /** LoginResponse uid. */
    public uid: (number|Long);

    /** LoginResponse rid. */
    public rid: (number|Long);

    /** LoginResponse sessionId. */
    public sessionId: (number|Long);

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginResponse;

    /**
     * Verifies a LoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginResponse;

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @param message LoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QuitRequest. */
export interface IQuitRequest {

    /** QuitRequest mid */
    mid?: (MID|null);

    /** QuitRequest rid */
    rid?: (number|Long|null);
}

/** Represents a QuitRequest. */
export class QuitRequest implements IQuitRequest {

    /**
     * Constructs a new QuitRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuitRequest);

    /** QuitRequest mid. */
    public mid: MID;

    /** QuitRequest rid. */
    public rid: (number|Long);

    /**
     * Creates a new QuitRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QuitRequest instance
     */
    public static create(properties?: IQuitRequest): QuitRequest;

    /**
     * Encodes the specified QuitRequest message. Does not implicitly {@link QuitRequest.verify|verify} messages.
     * @param message QuitRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuitRequest message, length delimited. Does not implicitly {@link QuitRequest.verify|verify} messages.
     * @param message QuitRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuitRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QuitRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitRequest;

    /**
     * Decodes a QuitRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QuitRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitRequest;

    /**
     * Verifies a QuitRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QuitRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QuitRequest
     */
    public static fromObject(object: { [k: string]: any }): QuitRequest;

    /**
     * Creates a plain object from a QuitRequest message. Also converts values to other types if specified.
     * @param message QuitRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QuitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QuitRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QuitResponse. */
export interface IQuitResponse {

    /** QuitResponse mid */
    mid?: (MID|null);

    /** QuitResponse result */
    result?: (number|null);
}

/** Represents a QuitResponse. */
export class QuitResponse implements IQuitResponse {

    /**
     * Constructs a new QuitResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuitResponse);

    /** QuitResponse mid. */
    public mid: MID;

    /** QuitResponse result. */
    public result: number;

    /**
     * Creates a new QuitResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QuitResponse instance
     */
    public static create(properties?: IQuitResponse): QuitResponse;

    /**
     * Encodes the specified QuitResponse message. Does not implicitly {@link QuitResponse.verify|verify} messages.
     * @param message QuitResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuitResponse message, length delimited. Does not implicitly {@link QuitResponse.verify|verify} messages.
     * @param message QuitResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuitResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QuitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitResponse;

    /**
     * Decodes a QuitResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QuitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitResponse;

    /**
     * Verifies a QuitResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QuitResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QuitResponse
     */
    public static fromObject(object: { [k: string]: any }): QuitResponse;

    /**
     * Creates a plain object from a QuitResponse message. Also converts values to other types if specified.
     * @param message QuitResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QuitResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginSubGameRequest. */
export interface ILoginSubGameRequest {

    /** LoginSubGameRequest mid */
    mid?: (MID|null);

    /** LoginSubGameRequest rid */
    rid: (number|Long);

    /** LoginSubGameRequest type */
    type?: (number|null);

    /** LoginSubGameRequest gameType */
    gameType?: (number|null);
}

/** Represents a LoginSubGameRequest. */
export class LoginSubGameRequest implements ILoginSubGameRequest {

    /**
     * Constructs a new LoginSubGameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginSubGameRequest);

    /** LoginSubGameRequest mid. */
    public mid: MID;

    /** LoginSubGameRequest rid. */
    public rid: (number|Long);

    /** LoginSubGameRequest type. */
    public type: number;

    /** LoginSubGameRequest gameType. */
    public gameType: number;

    /**
     * Creates a new LoginSubGameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginSubGameRequest instance
     */
    public static create(properties?: ILoginSubGameRequest): LoginSubGameRequest;

    /**
     * Encodes the specified LoginSubGameRequest message. Does not implicitly {@link LoginSubGameRequest.verify|verify} messages.
     * @param message LoginSubGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginSubGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginSubGameRequest message, length delimited. Does not implicitly {@link LoginSubGameRequest.verify|verify} messages.
     * @param message LoginSubGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginSubGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginSubGameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginSubGameRequest;

    /**
     * Decodes a LoginSubGameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginSubGameRequest;

    /**
     * Verifies a LoginSubGameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginSubGameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginSubGameRequest
     */
    public static fromObject(object: { [k: string]: any }): LoginSubGameRequest;

    /**
     * Creates a plain object from a LoginSubGameRequest message. Also converts values to other types if specified.
     * @param message LoginSubGameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginSubGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginSubGameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginSubGameResponse. */
export interface ILoginSubGameResponse {

    /** LoginSubGameResponse mid */
    mid?: (MID|null);

    /** LoginSubGameResponse result */
    result?: (number|null);
}

/** Represents a LoginSubGameResponse. */
export class LoginSubGameResponse implements ILoginSubGameResponse {

    /**
     * Constructs a new LoginSubGameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginSubGameResponse);

    /** LoginSubGameResponse mid. */
    public mid: MID;

    /** LoginSubGameResponse result. */
    public result: number;

    /**
     * Creates a new LoginSubGameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginSubGameResponse instance
     */
    public static create(properties?: ILoginSubGameResponse): LoginSubGameResponse;

    /**
     * Encodes the specified LoginSubGameResponse message. Does not implicitly {@link LoginSubGameResponse.verify|verify} messages.
     * @param message LoginSubGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginSubGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginSubGameResponse message, length delimited. Does not implicitly {@link LoginSubGameResponse.verify|verify} messages.
     * @param message LoginSubGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginSubGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginSubGameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginSubGameResponse;

    /**
     * Decodes a LoginSubGameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginSubGameResponse;

    /**
     * Verifies a LoginSubGameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginSubGameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginSubGameResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginSubGameResponse;

    /**
     * Creates a plain object from a LoginSubGameResponse message. Also converts values to other types if specified.
     * @param message LoginSubGameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginSubGameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginSubGameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QuitSubGameRequest. */
export interface IQuitSubGameRequest {

    /** QuitSubGameRequest mid */
    mid?: (MID|null);

    /** QuitSubGameRequest rid */
    rid?: (number|Long|null);
}

/** Represents a QuitSubGameRequest. */
export class QuitSubGameRequest implements IQuitSubGameRequest {

    /**
     * Constructs a new QuitSubGameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuitSubGameRequest);

    /** QuitSubGameRequest mid. */
    public mid: MID;

    /** QuitSubGameRequest rid. */
    public rid: (number|Long);

    /**
     * Creates a new QuitSubGameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QuitSubGameRequest instance
     */
    public static create(properties?: IQuitSubGameRequest): QuitSubGameRequest;

    /**
     * Encodes the specified QuitSubGameRequest message. Does not implicitly {@link QuitSubGameRequest.verify|verify} messages.
     * @param message QuitSubGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuitSubGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuitSubGameRequest message, length delimited. Does not implicitly {@link QuitSubGameRequest.verify|verify} messages.
     * @param message QuitSubGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuitSubGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuitSubGameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QuitSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitSubGameRequest;

    /**
     * Decodes a QuitSubGameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QuitSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitSubGameRequest;

    /**
     * Verifies a QuitSubGameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QuitSubGameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QuitSubGameRequest
     */
    public static fromObject(object: { [k: string]: any }): QuitSubGameRequest;

    /**
     * Creates a plain object from a QuitSubGameRequest message. Also converts values to other types if specified.
     * @param message QuitSubGameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QuitSubGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QuitSubGameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QuitSubGameResponse. */
export interface IQuitSubGameResponse {

    /** QuitSubGameResponse mid */
    mid?: (MID|null);

    /** QuitSubGameResponse result */
    result?: (number|null);
}

/** Represents a QuitSubGameResponse. */
export class QuitSubGameResponse implements IQuitSubGameResponse {

    /**
     * Constructs a new QuitSubGameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuitSubGameResponse);

    /** QuitSubGameResponse mid. */
    public mid: MID;

    /** QuitSubGameResponse result. */
    public result: number;

    /**
     * Creates a new QuitSubGameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QuitSubGameResponse instance
     */
    public static create(properties?: IQuitSubGameResponse): QuitSubGameResponse;

    /**
     * Encodes the specified QuitSubGameResponse message. Does not implicitly {@link QuitSubGameResponse.verify|verify} messages.
     * @param message QuitSubGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuitSubGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuitSubGameResponse message, length delimited. Does not implicitly {@link QuitSubGameResponse.verify|verify} messages.
     * @param message QuitSubGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuitSubGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuitSubGameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QuitSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitSubGameResponse;

    /**
     * Decodes a QuitSubGameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QuitSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitSubGameResponse;

    /**
     * Verifies a QuitSubGameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QuitSubGameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QuitSubGameResponse
     */
    public static fromObject(object: { [k: string]: any }): QuitSubGameResponse;

    /**
     * Creates a plain object from a QuitSubGameResponse message. Also converts values to other types if specified.
     * @param message QuitSubGameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QuitSubGameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QuitSubGameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** LoginType enum. */
export enum LoginType {
    ACCOUNT = 1
}

/** MID enum. */
export enum MID {
    Base = 0,
    ServerRegisterReq = 1001,
    ServerRegisterRes = 1002,
    ServerListReq = 1003,
    ServerListRes = 1004,
    ChangeRoleServerReq = 1005,
    ChangeRoleServerRes = 1006,
    ServerEventReq = 1007,
    ServerEventRes = 1008,
    LoginReq = 10001,
    LoginRes = 10002,
    LoginSubGameReq = 10003,
    LoginSubGameRes = 10004,
    SystemErrorRes = 10006,
    QuitReq = 10007,
    QuitRes = 10008,
    QuitSubGameReq = 10009,
    QuitSubGameRes = 10010,
    HeartReq = 10011,
    HeartRes = 10012,
    UdpConnectReq = 10013,
    UdpConnectRes = 10014,
    ChatReq = 10015,
    ChatRes = 10016,
    PacketItemsReq = 10017,
    PacketItemsRes = 10018,
    UseItemReq = 10019,
    UseItemRes = 10020,
    MailListReq = 10021,
    MailListRes = 10022,
    ModifyMailReq = 10023,
    ModifyMailRes = 10024,
    GuildInfoReq = 10025,
    GuildInfoRes = 10026,
    GuildListReq = 10027,
    GuildListRes = 10028,
    ApplyGuildReq = 10029,
    ApplyGuildRes = 10030,
    GuildApprovalReq = 10031,
    GuildApprovalRes = 10032,
    CreateGuildReq = 10033,
    CreateGuildRes = 10034,
    EnterRoomReq = 20001,
    EnterRoomRes = 20002,
    ApplyAthleticsReq = 20003,
    ApplyAthleticsRes = 20004,
    QuitRoomReq = 20005,
    QuitRoomRes = 20006,
    FishEnterRoomRes = 20008,
    RoomInfoRes = 20010,
    RoomChangeRes = 20012,
    UseSkillReq = 20013,
    UseSkillRes = 20014,
    FireReq = 20015,
    FireRes = 20016,
    FireResultReq = 20017,
    FireResultRes = 20018,
    GunLeveUpReq = 20019,
    GunLeveUpRes = 20020
}
