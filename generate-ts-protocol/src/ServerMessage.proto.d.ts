import * as $protobuf from "protobufjs";
/** Properties of a ServerRegisterRequest. */
export interface IServerRegisterRequest {

    /** ServerRegisterRequest mid */
    mid?: (MID|null);

    /** ServerRegisterRequest serverInfo */
    serverInfo: IServerInfo;
}

/** Represents a ServerRegisterRequest. */
export class ServerRegisterRequest implements IServerRegisterRequest {

    /**
     * Constructs a new ServerRegisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerRegisterRequest);

    /** ServerRegisterRequest mid. */
    public mid: MID;

    /** ServerRegisterRequest serverInfo. */
    public serverInfo: IServerInfo;

    /**
     * Creates a new ServerRegisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerRegisterRequest instance
     */
    public static create(properties?: IServerRegisterRequest): ServerRegisterRequest;

    /**
     * Encodes the specified ServerRegisterRequest message. Does not implicitly {@link ServerRegisterRequest.verify|verify} messages.
     * @param message ServerRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerRegisterRequest message, length delimited. Does not implicitly {@link ServerRegisterRequest.verify|verify} messages.
     * @param message ServerRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerRegisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRegisterRequest;

    /**
     * Decodes a ServerRegisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRegisterRequest;

    /**
     * Verifies a ServerRegisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerRegisterRequest
     */
    public static fromObject(object: { [k: string]: any }): ServerRegisterRequest;

    /**
     * Creates a plain object from a ServerRegisterRequest message. Also converts values to other types if specified.
     * @param message ServerRegisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerRegisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerRegisterResponse. */
export interface IServerRegisterResponse {

    /** ServerRegisterResponse mid */
    mid?: (MID|null);

    /** ServerRegisterResponse serverInfo */
    serverInfo?: (IServerInfo|null);
}

/** Represents a ServerRegisterResponse. */
export class ServerRegisterResponse implements IServerRegisterResponse {

    /**
     * Constructs a new ServerRegisterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerRegisterResponse);

    /** ServerRegisterResponse mid. */
    public mid: MID;

    /** ServerRegisterResponse serverInfo. */
    public serverInfo?: (IServerInfo|null);

    /**
     * Creates a new ServerRegisterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerRegisterResponse instance
     */
    public static create(properties?: IServerRegisterResponse): ServerRegisterResponse;

    /**
     * Encodes the specified ServerRegisterResponse message. Does not implicitly {@link ServerRegisterResponse.verify|verify} messages.
     * @param message ServerRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerRegisterResponse message, length delimited. Does not implicitly {@link ServerRegisterResponse.verify|verify} messages.
     * @param message ServerRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerRegisterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRegisterResponse;

    /**
     * Decodes a ServerRegisterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRegisterResponse;

    /**
     * Verifies a ServerRegisterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerRegisterResponse
     */
    public static fromObject(object: { [k: string]: any }): ServerRegisterResponse;

    /**
     * Creates a plain object from a ServerRegisterResponse message. Also converts values to other types if specified.
     * @param message ServerRegisterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerRegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerRegisterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerListRequest. */
export interface IServerListRequest {

    /** ServerListRequest mid */
    mid?: (MID|null);

    /** ServerListRequest serverType */
    serverType: number;
}

/** Represents a ServerListRequest. */
export class ServerListRequest implements IServerListRequest {

    /**
     * Constructs a new ServerListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerListRequest);

    /** ServerListRequest mid. */
    public mid: MID;

    /** ServerListRequest serverType. */
    public serverType: number;

    /**
     * Creates a new ServerListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerListRequest instance
     */
    public static create(properties?: IServerListRequest): ServerListRequest;

    /**
     * Encodes the specified ServerListRequest message. Does not implicitly {@link ServerListRequest.verify|verify} messages.
     * @param message ServerListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerListRequest message, length delimited. Does not implicitly {@link ServerListRequest.verify|verify} messages.
     * @param message ServerListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerListRequest;

    /**
     * Decodes a ServerListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerListRequest;

    /**
     * Verifies a ServerListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerListRequest
     */
    public static fromObject(object: { [k: string]: any }): ServerListRequest;

    /**
     * Creates a plain object from a ServerListRequest message. Also converts values to other types if specified.
     * @param message ServerListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerListResponse. */
export interface IServerListResponse {

    /** ServerListResponse mid */
    mid?: (MID|null);

    /** ServerListResponse serverInfo */
    serverInfo?: (IServerInfo[]|null);
}

/** Represents a ServerListResponse. */
export class ServerListResponse implements IServerListResponse {

    /**
     * Constructs a new ServerListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerListResponse);

    /** ServerListResponse mid. */
    public mid: MID;

    /** ServerListResponse serverInfo. */
    public serverInfo: IServerInfo[];

    /**
     * Creates a new ServerListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerListResponse instance
     */
    public static create(properties?: IServerListResponse): ServerListResponse;

    /**
     * Encodes the specified ServerListResponse message. Does not implicitly {@link ServerListResponse.verify|verify} messages.
     * @param message ServerListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerListResponse message, length delimited. Does not implicitly {@link ServerListResponse.verify|verify} messages.
     * @param message ServerListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerListResponse;

    /**
     * Decodes a ServerListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerListResponse;

    /**
     * Verifies a ServerListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerListResponse
     */
    public static fromObject(object: { [k: string]: any }): ServerListResponse;

    /**
     * Creates a plain object from a ServerListResponse message. Also converts values to other types if specified.
     * @param message ServerListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChangeRoleServerRequest. */
export interface IChangeRoleServerRequest {

    /** ChangeRoleServerRequest mid */
    mid?: (MID|null);

    /** ChangeRoleServerRequest serverId */
    serverId?: (number|null);

    /** ChangeRoleServerRequest serverType */
    serverType: number;

    /** ChangeRoleServerRequest roleId */
    roleId: (number|Long);
}

/** Represents a ChangeRoleServerRequest. */
export class ChangeRoleServerRequest implements IChangeRoleServerRequest {

    /**
     * Constructs a new ChangeRoleServerRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeRoleServerRequest);

    /** ChangeRoleServerRequest mid. */
    public mid: MID;

    /** ChangeRoleServerRequest serverId. */
    public serverId: number;

    /** ChangeRoleServerRequest serverType. */
    public serverType: number;

    /** ChangeRoleServerRequest roleId. */
    public roleId: (number|Long);

    /**
     * Creates a new ChangeRoleServerRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeRoleServerRequest instance
     */
    public static create(properties?: IChangeRoleServerRequest): ChangeRoleServerRequest;

    /**
     * Encodes the specified ChangeRoleServerRequest message. Does not implicitly {@link ChangeRoleServerRequest.verify|verify} messages.
     * @param message ChangeRoleServerRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeRoleServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeRoleServerRequest message, length delimited. Does not implicitly {@link ChangeRoleServerRequest.verify|verify} messages.
     * @param message ChangeRoleServerRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeRoleServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeRoleServerRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeRoleServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeRoleServerRequest;

    /**
     * Decodes a ChangeRoleServerRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeRoleServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeRoleServerRequest;

    /**
     * Verifies a ChangeRoleServerRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChangeRoleServerRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeRoleServerRequest
     */
    public static fromObject(object: { [k: string]: any }): ChangeRoleServerRequest;

    /**
     * Creates a plain object from a ChangeRoleServerRequest message. Also converts values to other types if specified.
     * @param message ChangeRoleServerRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeRoleServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeRoleServerRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChangeRoleServerResponse. */
export interface IChangeRoleServerResponse {

    /** ChangeRoleServerResponse mid */
    mid?: (MID|null);

    /** ChangeRoleServerResponse result */
    result?: (number|null);
}

/** Represents a ChangeRoleServerResponse. */
export class ChangeRoleServerResponse implements IChangeRoleServerResponse {

    /**
     * Constructs a new ChangeRoleServerResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeRoleServerResponse);

    /** ChangeRoleServerResponse mid. */
    public mid: MID;

    /** ChangeRoleServerResponse result. */
    public result: number;

    /**
     * Creates a new ChangeRoleServerResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeRoleServerResponse instance
     */
    public static create(properties?: IChangeRoleServerResponse): ChangeRoleServerResponse;

    /**
     * Encodes the specified ChangeRoleServerResponse message. Does not implicitly {@link ChangeRoleServerResponse.verify|verify} messages.
     * @param message ChangeRoleServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeRoleServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeRoleServerResponse message, length delimited. Does not implicitly {@link ChangeRoleServerResponse.verify|verify} messages.
     * @param message ChangeRoleServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeRoleServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeRoleServerResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeRoleServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeRoleServerResponse;

    /**
     * Decodes a ChangeRoleServerResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeRoleServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeRoleServerResponse;

    /**
     * Verifies a ChangeRoleServerResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChangeRoleServerResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeRoleServerResponse
     */
    public static fromObject(object: { [k: string]: any }): ChangeRoleServerResponse;

    /**
     * Creates a plain object from a ChangeRoleServerResponse message. Also converts values to other types if specified.
     * @param message ChangeRoleServerResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeRoleServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeRoleServerResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerEventRequest. */
export interface IServerEventRequest {

    /** ServerEventRequest mid */
    mid?: (MID|null);

    /** ServerEventRequest type */
    type: number;

    /** ServerEventRequest serverId */
    serverId?: (number|null);

    /** ServerEventRequest id */
    id?: (number|Long|null);

    /** ServerEventRequest ids */
    ids?: ((number|Long)[]|null);

    /** ServerEventRequest info */
    info?: (string|null);
}

/** Represents a ServerEventRequest. */
export class ServerEventRequest implements IServerEventRequest {

    /**
     * Constructs a new ServerEventRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerEventRequest);

    /** ServerEventRequest mid. */
    public mid: MID;

    /** ServerEventRequest type. */
    public type: number;

    /** ServerEventRequest serverId. */
    public serverId: number;

    /** ServerEventRequest id. */
    public id: (number|Long);

    /** ServerEventRequest ids. */
    public ids: (number|Long)[];

    /** ServerEventRequest info. */
    public info: string;

    /**
     * Creates a new ServerEventRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerEventRequest instance
     */
    public static create(properties?: IServerEventRequest): ServerEventRequest;

    /**
     * Encodes the specified ServerEventRequest message. Does not implicitly {@link ServerEventRequest.verify|verify} messages.
     * @param message ServerEventRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerEventRequest message, length delimited. Does not implicitly {@link ServerEventRequest.verify|verify} messages.
     * @param message ServerEventRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerEventRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerEventRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerEventRequest;

    /**
     * Decodes a ServerEventRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerEventRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerEventRequest;

    /**
     * Verifies a ServerEventRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerEventRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerEventRequest
     */
    public static fromObject(object: { [k: string]: any }): ServerEventRequest;

    /**
     * Creates a plain object from a ServerEventRequest message. Also converts values to other types if specified.
     * @param message ServerEventRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerEventRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerEventResponse. */
export interface IServerEventResponse {

    /** ServerEventResponse mid */
    mid?: (MID|null);

    /** ServerEventResponse type */
    type: number;

    /** ServerEventResponse result */
    result?: (number|null);
}

/** Represents a ServerEventResponse. */
export class ServerEventResponse implements IServerEventResponse {

    /**
     * Constructs a new ServerEventResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerEventResponse);

    /** ServerEventResponse mid. */
    public mid: MID;

    /** ServerEventResponse type. */
    public type: number;

    /** ServerEventResponse result. */
    public result: number;

    /**
     * Creates a new ServerEventResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerEventResponse instance
     */
    public static create(properties?: IServerEventResponse): ServerEventResponse;

    /**
     * Encodes the specified ServerEventResponse message. Does not implicitly {@link ServerEventResponse.verify|verify} messages.
     * @param message ServerEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerEventResponse message, length delimited. Does not implicitly {@link ServerEventResponse.verify|verify} messages.
     * @param message ServerEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerEventResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerEventResponse;

    /**
     * Decodes a ServerEventResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerEventResponse;

    /**
     * Verifies a ServerEventResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerEventResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerEventResponse
     */
    public static fromObject(object: { [k: string]: any }): ServerEventResponse;

    /**
     * Creates a plain object from a ServerEventResponse message. Also converts values to other types if specified.
     * @param message ServerEventResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerEventResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerInfo. */
export interface IServerInfo {

    /** ServerInfo id */
    id: number;

    /** ServerInfo ip */
    ip?: (string|null);

    /** ServerInfo type */
    type?: (number|null);

    /** ServerInfo port */
    port?: (number|null);

    /** ServerInfo state */
    state?: (number|null);

    /** ServerInfo online */
    online?: (number|null);

    /** ServerInfo maxUserCount */
    maxUserCount?: (number|null);

    /** ServerInfo httpport */
    httpport?: (number|null);

    /** ServerInfo name */
    name?: (string|null);

    /** ServerInfo wwwip */
    wwwip?: (string|null);

    /** ServerInfo freeMemory */
    freeMemory?: (number|null);

    /** ServerInfo totalMemory */
    totalMemory?: (number|null);

    /** ServerInfo version */
    version?: (string|null);
}

/** Represents a ServerInfo. */
export class ServerInfo implements IServerInfo {

    /**
     * Constructs a new ServerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerInfo);

    /** ServerInfo id. */
    public id: number;

    /** ServerInfo ip. */
    public ip: string;

    /** ServerInfo type. */
    public type: number;

    /** ServerInfo port. */
    public port: number;

    /** ServerInfo state. */
    public state: number;

    /** ServerInfo online. */
    public online: number;

    /** ServerInfo maxUserCount. */
    public maxUserCount: number;

    /** ServerInfo httpport. */
    public httpport: number;

    /** ServerInfo name. */
    public name: string;

    /** ServerInfo wwwip. */
    public wwwip: string;

    /** ServerInfo freeMemory. */
    public freeMemory: number;

    /** ServerInfo totalMemory. */
    public totalMemory: number;

    /** ServerInfo version. */
    public version: string;

    /**
     * Creates a new ServerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerInfo instance
     */
    public static create(properties?: IServerInfo): ServerInfo;

    /**
     * Encodes the specified ServerInfo message. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @param message ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @param message ServerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerInfo;

    /**
     * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerInfo;

    /**
     * Verifies a ServerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerInfo
     */
    public static fromObject(object: { [k: string]: any }): ServerInfo;

    /**
     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
     * @param message ServerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerInfo to JSON.
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
