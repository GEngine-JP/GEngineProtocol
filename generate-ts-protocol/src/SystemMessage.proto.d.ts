import * as $protobuf from "protobufjs";
/** Properties of a SystemErrorResponse. */
export interface ISystemErrorResponse {

    /** SystemErrorResponse mid */
    mid?: (MID|null);

    /** SystemErrorResponse errorCode */
    errorCode?: (SystemErroCode|null);

    /** SystemErrorResponse msg */
    msg?: (string|null);
}

/** Represents a SystemErrorResponse. */
export class SystemErrorResponse implements ISystemErrorResponse {

    /**
     * Constructs a new SystemErrorResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISystemErrorResponse);

    /** SystemErrorResponse mid. */
    public mid: MID;

    /** SystemErrorResponse errorCode. */
    public errorCode: SystemErroCode;

    /** SystemErrorResponse msg. */
    public msg: string;

    /**
     * Creates a new SystemErrorResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SystemErrorResponse instance
     */
    public static create(properties?: ISystemErrorResponse): SystemErrorResponse;

    /**
     * Encodes the specified SystemErrorResponse message. Does not implicitly {@link SystemErrorResponse.verify|verify} messages.
     * @param message SystemErrorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISystemErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SystemErrorResponse message, length delimited. Does not implicitly {@link SystemErrorResponse.verify|verify} messages.
     * @param message SystemErrorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISystemErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SystemErrorResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SystemErrorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SystemErrorResponse;

    /**
     * Decodes a SystemErrorResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SystemErrorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SystemErrorResponse;

    /**
     * Verifies a SystemErrorResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SystemErrorResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SystemErrorResponse
     */
    public static fromObject(object: { [k: string]: any }): SystemErrorResponse;

    /**
     * Creates a plain object from a SystemErrorResponse message. Also converts values to other types if specified.
     * @param message SystemErrorResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SystemErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SystemErrorResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** SystemErroCode enum. */
export enum SystemErroCode {
    HallNotFind = 1,
    GameNotFind = 2,
    ConectReset = 3
}

/** Represents a HeartRequest. */
export class HeartRequest implements IHeartRequest {

    /**
     * Constructs a new HeartRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartRequest);

    /** HeartRequest mid. */
    public mid: MID;

    /**
     * Creates a new HeartRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartRequest instance
     */
    public static create(properties?: IHeartRequest): HeartRequest;

    /**
     * Encodes the specified HeartRequest message. Does not implicitly {@link HeartRequest.verify|verify} messages.
     * @param message HeartRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartRequest message, length delimited. Does not implicitly {@link HeartRequest.verify|verify} messages.
     * @param message HeartRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartRequest;

    /**
     * Decodes a HeartRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartRequest;

    /**
     * Verifies a HeartRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HeartRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartRequest
     */
    public static fromObject(object: { [k: string]: any }): HeartRequest;

    /**
     * Creates a plain object from a HeartRequest message. Also converts values to other types if specified.
     * @param message HeartRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HeartRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a HeartResponse. */
export class HeartResponse implements IHeartResponse {

    /**
     * Constructs a new HeartResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartResponse);

    /** HeartResponse mid. */
    public mid: MID;

    /** HeartResponse serverTime. */
    public serverTime: (number|Long);

    /**
     * Creates a new HeartResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartResponse instance
     */
    public static create(properties?: IHeartResponse): HeartResponse;

    /**
     * Encodes the specified HeartResponse message. Does not implicitly {@link HeartResponse.verify|verify} messages.
     * @param message HeartResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartResponse message, length delimited. Does not implicitly {@link HeartResponse.verify|verify} messages.
     * @param message HeartResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartResponse;

    /**
     * Decodes a HeartResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartResponse;

    /**
     * Verifies a HeartResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HeartResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartResponse
     */
    public static fromObject(object: { [k: string]: any }): HeartResponse;

    /**
     * Creates a plain object from a HeartResponse message. Also converts values to other types if specified.
     * @param message HeartResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HeartResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an UdpConnectRequest. */
export class UdpConnectRequest implements IUdpConnectRequest {

    /**
     * Constructs a new UdpConnectRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUdpConnectRequest);

    /** UdpConnectRequest mid. */
    public mid: MID;

    /** UdpConnectRequest sessionId. */
    public sessionId: (number|Long);

    /** UdpConnectRequest rid. */
    public rid: (number|Long);

    /**
     * Creates a new UdpConnectRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UdpConnectRequest instance
     */
    public static create(properties?: IUdpConnectRequest): UdpConnectRequest;

    /**
     * Encodes the specified UdpConnectRequest message. Does not implicitly {@link UdpConnectRequest.verify|verify} messages.
     * @param message UdpConnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUdpConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UdpConnectRequest message, length delimited. Does not implicitly {@link UdpConnectRequest.verify|verify} messages.
     * @param message UdpConnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUdpConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UdpConnectRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UdpConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UdpConnectRequest;

    /**
     * Decodes an UdpConnectRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UdpConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UdpConnectRequest;

    /**
     * Verifies an UdpConnectRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UdpConnectRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UdpConnectRequest
     */
    public static fromObject(object: { [k: string]: any }): UdpConnectRequest;

    /**
     * Creates a plain object from an UdpConnectRequest message. Also converts values to other types if specified.
     * @param message UdpConnectRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UdpConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UdpConnectRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an UdpConnectResponse. */
export class UdpConnectResponse implements IUdpConnectResponse {

    /**
     * Constructs a new UdpConnectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUdpConnectResponse);

    /** UdpConnectResponse mid. */
    public mid: MID;

    /** UdpConnectResponse result. */
    public result: number;

    /**
     * Creates a new UdpConnectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UdpConnectResponse instance
     */
    public static create(properties?: IUdpConnectResponse): UdpConnectResponse;

    /**
     * Encodes the specified UdpConnectResponse message. Does not implicitly {@link UdpConnectResponse.verify|verify} messages.
     * @param message UdpConnectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUdpConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UdpConnectResponse message, length delimited. Does not implicitly {@link UdpConnectResponse.verify|verify} messages.
     * @param message UdpConnectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUdpConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UdpConnectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UdpConnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UdpConnectResponse;

    /**
     * Decodes an UdpConnectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UdpConnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UdpConnectResponse;

    /**
     * Verifies an UdpConnectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UdpConnectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UdpConnectResponse
     */
    public static fromObject(object: { [k: string]: any }): UdpConnectResponse;

    /**
     * Creates a plain object from an UdpConnectResponse message. Also converts values to other types if specified.
     * @param message UdpConnectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UdpConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UdpConnectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
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
