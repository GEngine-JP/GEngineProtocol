import * as $protobuf from "protobufjs";
/** Properties of a PacketItemsRequest. */
export interface IPacketItemsRequest {

    /** PacketItemsRequest mid */
    mid?: (MID|null);
}

/** Represents a PacketItemsRequest. */
export class PacketItemsRequest implements IPacketItemsRequest {

    /**
     * Constructs a new PacketItemsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPacketItemsRequest);

    /** PacketItemsRequest mid. */
    public mid: MID;

    /**
     * Creates a new PacketItemsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PacketItemsRequest instance
     */
    public static create(properties?: IPacketItemsRequest): PacketItemsRequest;

    /**
     * Encodes the specified PacketItemsRequest message. Does not implicitly {@link PacketItemsRequest.verify|verify} messages.
     * @param message PacketItemsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPacketItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PacketItemsRequest message, length delimited. Does not implicitly {@link PacketItemsRequest.verify|verify} messages.
     * @param message PacketItemsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPacketItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PacketItemsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PacketItemsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PacketItemsRequest;

    /**
     * Decodes a PacketItemsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PacketItemsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PacketItemsRequest;

    /**
     * Verifies a PacketItemsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PacketItemsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PacketItemsRequest
     */
    public static fromObject(object: { [k: string]: any }): PacketItemsRequest;

    /**
     * Creates a plain object from a PacketItemsRequest message. Also converts values to other types if specified.
     * @param message PacketItemsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PacketItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PacketItemsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PacketItemsResponse. */
export interface IPacketItemsResponse {

    /** PacketItemsResponse mid */
    mid?: (MID|null);

    /** PacketItemsResponse items */
    items?: (IPacketItem[]|null);
}

/** Represents a PacketItemsResponse. */
export class PacketItemsResponse implements IPacketItemsResponse {

    /**
     * Constructs a new PacketItemsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPacketItemsResponse);

    /** PacketItemsResponse mid. */
    public mid: MID;

    /** PacketItemsResponse items. */
    public items: IPacketItem[];

    /**
     * Creates a new PacketItemsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PacketItemsResponse instance
     */
    public static create(properties?: IPacketItemsResponse): PacketItemsResponse;

    /**
     * Encodes the specified PacketItemsResponse message. Does not implicitly {@link PacketItemsResponse.verify|verify} messages.
     * @param message PacketItemsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPacketItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PacketItemsResponse message, length delimited. Does not implicitly {@link PacketItemsResponse.verify|verify} messages.
     * @param message PacketItemsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPacketItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PacketItemsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PacketItemsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PacketItemsResponse;

    /**
     * Decodes a PacketItemsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PacketItemsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PacketItemsResponse;

    /**
     * Verifies a PacketItemsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PacketItemsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PacketItemsResponse
     */
    public static fromObject(object: { [k: string]: any }): PacketItemsResponse;

    /**
     * Creates a plain object from a PacketItemsResponse message. Also converts values to other types if specified.
     * @param message PacketItemsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PacketItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PacketItemsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UseItemRequest. */
export interface IUseItemRequest {

    /** UseItemRequest mid */
    mid?: (MID|null);

    /** UseItemRequest itemId */
    itemId: (number|Long);
}

/** Represents a UseItemRequest. */
export class UseItemRequest implements IUseItemRequest {

    /**
     * Constructs a new UseItemRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUseItemRequest);

    /** UseItemRequest mid. */
    public mid: MID;

    /** UseItemRequest itemId. */
    public itemId: (number|Long);

    /**
     * Creates a new UseItemRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseItemRequest instance
     */
    public static create(properties?: IUseItemRequest): UseItemRequest;

    /**
     * Encodes the specified UseItemRequest message. Does not implicitly {@link UseItemRequest.verify|verify} messages.
     * @param message UseItemRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUseItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UseItemRequest message, length delimited. Does not implicitly {@link UseItemRequest.verify|verify} messages.
     * @param message UseItemRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUseItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseItemRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UseItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UseItemRequest;

    /**
     * Decodes a UseItemRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UseItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UseItemRequest;

    /**
     * Verifies a UseItemRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UseItemRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UseItemRequest
     */
    public static fromObject(object: { [k: string]: any }): UseItemRequest;

    /**
     * Creates a plain object from a UseItemRequest message. Also converts values to other types if specified.
     * @param message UseItemRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UseItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UseItemRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UseItemResponse. */
export interface IUseItemResponse {

    /** UseItemResponse mid */
    mid?: (MID|null);

    /** UseItemResponse result */
    result?: (number|null);
}

/** Represents a UseItemResponse. */
export class UseItemResponse implements IUseItemResponse {

    /**
     * Constructs a new UseItemResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUseItemResponse);

    /** UseItemResponse mid. */
    public mid: MID;

    /** UseItemResponse result. */
    public result: number;

    /**
     * Creates a new UseItemResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseItemResponse instance
     */
    public static create(properties?: IUseItemResponse): UseItemResponse;

    /**
     * Encodes the specified UseItemResponse message. Does not implicitly {@link UseItemResponse.verify|verify} messages.
     * @param message UseItemResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUseItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UseItemResponse message, length delimited. Does not implicitly {@link UseItemResponse.verify|verify} messages.
     * @param message UseItemResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUseItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseItemResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UseItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UseItemResponse;

    /**
     * Decodes a UseItemResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UseItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UseItemResponse;

    /**
     * Verifies a UseItemResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UseItemResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UseItemResponse
     */
    public static fromObject(object: { [k: string]: any }): UseItemResponse;

    /**
     * Creates a plain object from a UseItemResponse message. Also converts values to other types if specified.
     * @param message UseItemResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UseItemResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UseItemResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PacketItem. */
export interface IPacketItem {

    /** PacketItem id */
    id: (number|Long);

    /** PacketItem configId */
    configId: number;

    /** PacketItem num */
    num: number;
}

/** Represents a PacketItem. */
export class PacketItem implements IPacketItem {

    /**
     * Constructs a new PacketItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPacketItem);

    /** PacketItem id. */
    public id: (number|Long);

    /** PacketItem configId. */
    public configId: number;

    /** PacketItem num. */
    public num: number;

    /**
     * Creates a new PacketItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PacketItem instance
     */
    public static create(properties?: IPacketItem): PacketItem;

    /**
     * Encodes the specified PacketItem message. Does not implicitly {@link PacketItem.verify|verify} messages.
     * @param message PacketItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPacketItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PacketItem message, length delimited. Does not implicitly {@link PacketItem.verify|verify} messages.
     * @param message PacketItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPacketItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PacketItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PacketItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PacketItem;

    /**
     * Decodes a PacketItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PacketItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PacketItem;

    /**
     * Verifies a PacketItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PacketItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PacketItem
     */
    public static fromObject(object: { [k: string]: any }): PacketItem;

    /**
     * Creates a plain object from a PacketItem message. Also converts values to other types if specified.
     * @param message PacketItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PacketItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PacketItem to JSON.
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
