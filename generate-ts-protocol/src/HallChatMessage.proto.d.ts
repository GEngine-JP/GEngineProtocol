import * as $protobuf from "protobufjs";
/** Properties of a ChatRequest. */
export interface IChatRequest {

    /** ChatRequest mid */
    mid?: (MID|null);

    /** ChatRequest chatType */
    chatType: ChatType;

    /** ChatRequest receiverId */
    receiverId?: (number|Long|null);

    /** ChatRequest msg */
    msg?: (string|null);
}

/** Represents a ChatRequest. */
export class ChatRequest implements IChatRequest {

    /**
     * Constructs a new ChatRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatRequest);

    /** ChatRequest mid. */
    public mid: MID;

    /** ChatRequest chatType. */
    public chatType: ChatType;

    /** ChatRequest receiverId. */
    public receiverId: (number|Long);

    /** ChatRequest msg. */
    public msg: string;

    /**
     * Creates a new ChatRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatRequest instance
     */
    public static create(properties?: IChatRequest): ChatRequest;

    /**
     * Encodes the specified ChatRequest message. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @param message ChatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatRequest message, length delimited. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @param message ChatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatRequest;

    /**
     * Decodes a ChatRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatRequest;

    /**
     * Verifies a ChatRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatRequest
     */
    public static fromObject(object: { [k: string]: any }): ChatRequest;

    /**
     * Creates a plain object from a ChatRequest message. Also converts values to other types if specified.
     * @param message ChatRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatResponse. */
export interface IChatResponse {

    /** ChatResponse mid */
    mid?: (MID|null);

    /** ChatResponse senderId */
    senderId?: (number|Long|null);

    /** ChatResponse senderHead */
    senderHead?: (string|null);

    /** ChatResponse senderNick */
    senderNick?: (string|null);

    /** ChatResponse chatType */
    chatType: ChatType;

    /** ChatResponse msg */
    msg?: (string|null);
}

/** Represents a ChatResponse. */
export class ChatResponse implements IChatResponse {

    /**
     * Constructs a new ChatResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatResponse);

    /** ChatResponse mid. */
    public mid: MID;

    /** ChatResponse senderId. */
    public senderId: (number|Long);

    /** ChatResponse senderHead. */
    public senderHead: string;

    /** ChatResponse senderNick. */
    public senderNick: string;

    /** ChatResponse chatType. */
    public chatType: ChatType;

    /** ChatResponse msg. */
    public msg: string;

    /**
     * Creates a new ChatResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatResponse instance
     */
    public static create(properties?: IChatResponse): ChatResponse;

    /**
     * Encodes the specified ChatResponse message. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @param message ChatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatResponse message, length delimited. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @param message ChatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatResponse;

    /**
     * Decodes a ChatResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatResponse;

    /**
     * Verifies a ChatResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatResponse
     */
    public static fromObject(object: { [k: string]: any }): ChatResponse;

    /**
     * Creates a plain object from a ChatResponse message. Also converts values to other types if specified.
     * @param message ChatResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MailListRequest. */
export interface IMailListRequest {

    /** MailListRequest mid */
    mid?: (MID|null);
}

/** Represents a MailListRequest. */
export class MailListRequest implements IMailListRequest {

    /**
     * Constructs a new MailListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMailListRequest);

    /** MailListRequest mid. */
    public mid: MID;

    /**
     * Creates a new MailListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailListRequest instance
     */
    public static create(properties?: IMailListRequest): MailListRequest;

    /**
     * Encodes the specified MailListRequest message. Does not implicitly {@link MailListRequest.verify|verify} messages.
     * @param message MailListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMailListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MailListRequest message, length delimited. Does not implicitly {@link MailListRequest.verify|verify} messages.
     * @param message MailListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMailListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MailListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MailListRequest;

    /**
     * Decodes a MailListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MailListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MailListRequest;

    /**
     * Verifies a MailListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MailListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MailListRequest
     */
    public static fromObject(object: { [k: string]: any }): MailListRequest;

    /**
     * Creates a plain object from a MailListRequest message. Also converts values to other types if specified.
     * @param message MailListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MailListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MailListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MailListResponse. */
export interface IMailListResponse {

    /** MailListResponse mid */
    mid?: (MID|null);

    /** MailListResponse mails */
    mails?: (IMailInfo[]|null);
}

/** Represents a MailListResponse. */
export class MailListResponse implements IMailListResponse {

    /**
     * Constructs a new MailListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMailListResponse);

    /** MailListResponse mid. */
    public mid: MID;

    /** MailListResponse mails. */
    public mails: IMailInfo[];

    /**
     * Creates a new MailListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailListResponse instance
     */
    public static create(properties?: IMailListResponse): MailListResponse;

    /**
     * Encodes the specified MailListResponse message. Does not implicitly {@link MailListResponse.verify|verify} messages.
     * @param message MailListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMailListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MailListResponse message, length delimited. Does not implicitly {@link MailListResponse.verify|verify} messages.
     * @param message MailListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMailListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MailListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MailListResponse;

    /**
     * Decodes a MailListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MailListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MailListResponse;

    /**
     * Verifies a MailListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MailListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MailListResponse
     */
    public static fromObject(object: { [k: string]: any }): MailListResponse;

    /**
     * Creates a plain object from a MailListResponse message. Also converts values to other types if specified.
     * @param message MailListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MailListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MailListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModifyMailRequest. */
export interface IModifyMailRequest {

    /** ModifyMailRequest mid */
    mid?: (MID|null);

    /** ModifyMailRequest mailId */
    mailId: (number|Long);

    /** ModifyMailRequest state */
    state: number;
}

/** Represents a ModifyMailRequest. */
export class ModifyMailRequest implements IModifyMailRequest {

    /**
     * Constructs a new ModifyMailRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModifyMailRequest);

    /** ModifyMailRequest mid. */
    public mid: MID;

    /** ModifyMailRequest mailId. */
    public mailId: (number|Long);

    /** ModifyMailRequest state. */
    public state: number;

    /**
     * Creates a new ModifyMailRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModifyMailRequest instance
     */
    public static create(properties?: IModifyMailRequest): ModifyMailRequest;

    /**
     * Encodes the specified ModifyMailRequest message. Does not implicitly {@link ModifyMailRequest.verify|verify} messages.
     * @param message ModifyMailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModifyMailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModifyMailRequest message, length delimited. Does not implicitly {@link ModifyMailRequest.verify|verify} messages.
     * @param message ModifyMailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModifyMailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifyMailRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModifyMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModifyMailRequest;

    /**
     * Decodes a ModifyMailRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModifyMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModifyMailRequest;

    /**
     * Verifies a ModifyMailRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModifyMailRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModifyMailRequest
     */
    public static fromObject(object: { [k: string]: any }): ModifyMailRequest;

    /**
     * Creates a plain object from a ModifyMailRequest message. Also converts values to other types if specified.
     * @param message ModifyMailRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModifyMailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModifyMailRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModifyMailResponse. */
export interface IModifyMailResponse {

    /** ModifyMailResponse mid */
    mid?: (MID|null);

    /** ModifyMailResponse result */
    result?: (number|null);
}

/** Represents a ModifyMailResponse. */
export class ModifyMailResponse implements IModifyMailResponse {

    /**
     * Constructs a new ModifyMailResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModifyMailResponse);

    /** ModifyMailResponse mid. */
    public mid: MID;

    /** ModifyMailResponse result. */
    public result: number;

    /**
     * Creates a new ModifyMailResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModifyMailResponse instance
     */
    public static create(properties?: IModifyMailResponse): ModifyMailResponse;

    /**
     * Encodes the specified ModifyMailResponse message. Does not implicitly {@link ModifyMailResponse.verify|verify} messages.
     * @param message ModifyMailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModifyMailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModifyMailResponse message, length delimited. Does not implicitly {@link ModifyMailResponse.verify|verify} messages.
     * @param message ModifyMailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModifyMailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifyMailResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModifyMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModifyMailResponse;

    /**
     * Decodes a ModifyMailResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModifyMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModifyMailResponse;

    /**
     * Verifies a ModifyMailResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModifyMailResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModifyMailResponse
     */
    public static fromObject(object: { [k: string]: any }): ModifyMailResponse;

    /**
     * Creates a plain object from a ModifyMailResponse message. Also converts values to other types if specified.
     * @param message ModifyMailResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModifyMailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModifyMailResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MailInfo. */
export interface IMailInfo {

    /** MailInfo id */
    id: (number|Long);

    /** MailInfo senderId */
    senderId?: (number|Long|null);

    /** MailInfo title */
    title: string;

    /** MailInfo content */
    content: string;

    /** MailInfo state */
    state: number;

    /** MailInfo createTime */
    createTime: (number|Long);
}

/** Represents a MailInfo. */
export class MailInfo implements IMailInfo {

    /**
     * Constructs a new MailInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMailInfo);

    /** MailInfo id. */
    public id: (number|Long);

    /** MailInfo senderId. */
    public senderId: (number|Long);

    /** MailInfo title. */
    public title: string;

    /** MailInfo content. */
    public content: string;

    /** MailInfo state. */
    public state: number;

    /** MailInfo createTime. */
    public createTime: (number|Long);

    /**
     * Creates a new MailInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailInfo instance
     */
    public static create(properties?: IMailInfo): MailInfo;

    /**
     * Encodes the specified MailInfo message. Does not implicitly {@link MailInfo.verify|verify} messages.
     * @param message MailInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MailInfo message, length delimited. Does not implicitly {@link MailInfo.verify|verify} messages.
     * @param message MailInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MailInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MailInfo;

    /**
     * Decodes a MailInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MailInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MailInfo;

    /**
     * Verifies a MailInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MailInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MailInfo
     */
    public static fromObject(object: { [k: string]: any }): MailInfo;

    /**
     * Creates a plain object from a MailInfo message. Also converts values to other types if specified.
     * @param message MailInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MailInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MailInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** ChatType enum. */
export enum ChatType {
    PRIVATE = 1,
    GUILD = 2,
    WORLD = 3,
    PMD = 4
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
