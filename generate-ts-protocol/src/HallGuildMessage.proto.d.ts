import * as $protobuf from "protobufjs";
/** Properties of a GuildInfoRequest. */
export interface IGuildInfoRequest {

    /** GuildInfoRequest mid */
    mid?: (MID|null);

    /** GuildInfoRequest guildId */
    guildId?: (number|Long|null);
}

/** Represents a GuildInfoRequest. */
export class GuildInfoRequest implements IGuildInfoRequest {

    /**
     * Constructs a new GuildInfoRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildInfoRequest);

    /** GuildInfoRequest mid. */
    public mid: MID;

    /** GuildInfoRequest guildId. */
    public guildId: (number|Long);

    /**
     * Creates a new GuildInfoRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildInfoRequest instance
     */
    public static create(properties?: IGuildInfoRequest): GuildInfoRequest;

    /**
     * Encodes the specified GuildInfoRequest message. Does not implicitly {@link GuildInfoRequest.verify|verify} messages.
     * @param message GuildInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildInfoRequest message, length delimited. Does not implicitly {@link GuildInfoRequest.verify|verify} messages.
     * @param message GuildInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildInfoRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildInfoRequest;

    /**
     * Decodes a GuildInfoRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildInfoRequest;

    /**
     * Verifies a GuildInfoRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildInfoRequest
     */
    public static fromObject(object: { [k: string]: any }): GuildInfoRequest;

    /**
     * Creates a plain object from a GuildInfoRequest message. Also converts values to other types if specified.
     * @param message GuildInfoRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildInfoRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildInfoResponse. */
export interface IGuildInfoResponse {

    /** GuildInfoResponse mid */
    mid?: (MID|null);

    /** GuildInfoResponse guildInfo */
    guildInfo?: (IGuildInfo|null);
}

/** Represents a GuildInfoResponse. */
export class GuildInfoResponse implements IGuildInfoResponse {

    /**
     * Constructs a new GuildInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildInfoResponse);

    /** GuildInfoResponse mid. */
    public mid: MID;

    /** GuildInfoResponse guildInfo. */
    public guildInfo?: (IGuildInfo|null);

    /**
     * Creates a new GuildInfoResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildInfoResponse instance
     */
    public static create(properties?: IGuildInfoResponse): GuildInfoResponse;

    /**
     * Encodes the specified GuildInfoResponse message. Does not implicitly {@link GuildInfoResponse.verify|verify} messages.
     * @param message GuildInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildInfoResponse message, length delimited. Does not implicitly {@link GuildInfoResponse.verify|verify} messages.
     * @param message GuildInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildInfoResponse;

    /**
     * Decodes a GuildInfoResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildInfoResponse;

    /**
     * Verifies a GuildInfoResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildInfoResponse
     */
    public static fromObject(object: { [k: string]: any }): GuildInfoResponse;

    /**
     * Creates a plain object from a GuildInfoResponse message. Also converts values to other types if specified.
     * @param message GuildInfoResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildInfoResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildListRequest. */
export interface IGuildListRequest {

    /** GuildListRequest mid */
    mid?: (MID|null);
}

/** Represents a GuildListRequest. */
export class GuildListRequest implements IGuildListRequest {

    /**
     * Constructs a new GuildListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildListRequest);

    /** GuildListRequest mid. */
    public mid: MID;

    /**
     * Creates a new GuildListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildListRequest instance
     */
    public static create(properties?: IGuildListRequest): GuildListRequest;

    /**
     * Encodes the specified GuildListRequest message. Does not implicitly {@link GuildListRequest.verify|verify} messages.
     * @param message GuildListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildListRequest message, length delimited. Does not implicitly {@link GuildListRequest.verify|verify} messages.
     * @param message GuildListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildListRequest;

    /**
     * Decodes a GuildListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildListRequest;

    /**
     * Verifies a GuildListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildListRequest
     */
    public static fromObject(object: { [k: string]: any }): GuildListRequest;

    /**
     * Creates a plain object from a GuildListRequest message. Also converts values to other types if specified.
     * @param message GuildListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildListResponse. */
export interface IGuildListResponse {

    /** GuildListResponse mid */
    mid?: (MID|null);

    /** GuildListResponse guilds */
    guilds?: (IGuildInfo[]|null);
}

/** Represents a GuildListResponse. */
export class GuildListResponse implements IGuildListResponse {

    /**
     * Constructs a new GuildListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildListResponse);

    /** GuildListResponse mid. */
    public mid: MID;

    /** GuildListResponse guilds. */
    public guilds: IGuildInfo[];

    /**
     * Creates a new GuildListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildListResponse instance
     */
    public static create(properties?: IGuildListResponse): GuildListResponse;

    /**
     * Encodes the specified GuildListResponse message. Does not implicitly {@link GuildListResponse.verify|verify} messages.
     * @param message GuildListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildListResponse message, length delimited. Does not implicitly {@link GuildListResponse.verify|verify} messages.
     * @param message GuildListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildListResponse;

    /**
     * Decodes a GuildListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildListResponse;

    /**
     * Verifies a GuildListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildListResponse
     */
    public static fromObject(object: { [k: string]: any }): GuildListResponse;

    /**
     * Creates a plain object from a GuildListResponse message. Also converts values to other types if specified.
     * @param message GuildListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ApplyGuildRequest. */
export interface IApplyGuildRequest {

    /** ApplyGuildRequest mid */
    mid?: (MID|null);

    /** ApplyGuildRequest guildId */
    guildId?: (number|Long|null);
}

/** Represents an ApplyGuildRequest. */
export class ApplyGuildRequest implements IApplyGuildRequest {

    /**
     * Constructs a new ApplyGuildRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IApplyGuildRequest);

    /** ApplyGuildRequest mid. */
    public mid: MID;

    /** ApplyGuildRequest guildId. */
    public guildId: (number|Long);

    /**
     * Creates a new ApplyGuildRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyGuildRequest instance
     */
    public static create(properties?: IApplyGuildRequest): ApplyGuildRequest;

    /**
     * Encodes the specified ApplyGuildRequest message. Does not implicitly {@link ApplyGuildRequest.verify|verify} messages.
     * @param message ApplyGuildRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IApplyGuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ApplyGuildRequest message, length delimited. Does not implicitly {@link ApplyGuildRequest.verify|verify} messages.
     * @param message ApplyGuildRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IApplyGuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyGuildRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApplyGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApplyGuildRequest;

    /**
     * Decodes an ApplyGuildRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApplyGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApplyGuildRequest;

    /**
     * Verifies an ApplyGuildRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ApplyGuildRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApplyGuildRequest
     */
    public static fromObject(object: { [k: string]: any }): ApplyGuildRequest;

    /**
     * Creates a plain object from an ApplyGuildRequest message. Also converts values to other types if specified.
     * @param message ApplyGuildRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ApplyGuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ApplyGuildRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ApplyGuildResponse. */
export interface IApplyGuildResponse {

    /** ApplyGuildResponse mid */
    mid?: (MID|null);

    /** ApplyGuildResponse result */
    result?: (number|null);
}

/** Represents an ApplyGuildResponse. */
export class ApplyGuildResponse implements IApplyGuildResponse {

    /**
     * Constructs a new ApplyGuildResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IApplyGuildResponse);

    /** ApplyGuildResponse mid. */
    public mid: MID;

    /** ApplyGuildResponse result. */
    public result: number;

    /**
     * Creates a new ApplyGuildResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyGuildResponse instance
     */
    public static create(properties?: IApplyGuildResponse): ApplyGuildResponse;

    /**
     * Encodes the specified ApplyGuildResponse message. Does not implicitly {@link ApplyGuildResponse.verify|verify} messages.
     * @param message ApplyGuildResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IApplyGuildResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ApplyGuildResponse message, length delimited. Does not implicitly {@link ApplyGuildResponse.verify|verify} messages.
     * @param message ApplyGuildResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IApplyGuildResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyGuildResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApplyGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApplyGuildResponse;

    /**
     * Decodes an ApplyGuildResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApplyGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApplyGuildResponse;

    /**
     * Verifies an ApplyGuildResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ApplyGuildResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApplyGuildResponse
     */
    public static fromObject(object: { [k: string]: any }): ApplyGuildResponse;

    /**
     * Creates a plain object from an ApplyGuildResponse message. Also converts values to other types if specified.
     * @param message ApplyGuildResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ApplyGuildResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ApplyGuildResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildApprovalRequest. */
export interface IGuildApprovalRequest {

    /** GuildApprovalRequest mid */
    mid?: (MID|null);

    /** GuildApprovalRequest roleId */
    roleId?: (number|Long|null);

    /** GuildApprovalRequest type */
    type: number;
}

/** Represents a GuildApprovalRequest. */
export class GuildApprovalRequest implements IGuildApprovalRequest {

    /**
     * Constructs a new GuildApprovalRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildApprovalRequest);

    /** GuildApprovalRequest mid. */
    public mid: MID;

    /** GuildApprovalRequest roleId. */
    public roleId: (number|Long);

    /** GuildApprovalRequest type. */
    public type: number;

    /**
     * Creates a new GuildApprovalRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildApprovalRequest instance
     */
    public static create(properties?: IGuildApprovalRequest): GuildApprovalRequest;

    /**
     * Encodes the specified GuildApprovalRequest message. Does not implicitly {@link GuildApprovalRequest.verify|verify} messages.
     * @param message GuildApprovalRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildApprovalRequest message, length delimited. Does not implicitly {@link GuildApprovalRequest.verify|verify} messages.
     * @param message GuildApprovalRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildApprovalRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildApprovalRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildApprovalRequest;

    /**
     * Decodes a GuildApprovalRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildApprovalRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildApprovalRequest;

    /**
     * Verifies a GuildApprovalRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildApprovalRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildApprovalRequest
     */
    public static fromObject(object: { [k: string]: any }): GuildApprovalRequest;

    /**
     * Creates a plain object from a GuildApprovalRequest message. Also converts values to other types if specified.
     * @param message GuildApprovalRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildApprovalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildApprovalRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildApprovalResponse. */
export interface IGuildApprovalResponse {

    /** GuildApprovalResponse mid */
    mid?: (MID|null);

    /** GuildApprovalResponse result */
    result: number;
}

/** Represents a GuildApprovalResponse. */
export class GuildApprovalResponse implements IGuildApprovalResponse {

    /**
     * Constructs a new GuildApprovalResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildApprovalResponse);

    /** GuildApprovalResponse mid. */
    public mid: MID;

    /** GuildApprovalResponse result. */
    public result: number;

    /**
     * Creates a new GuildApprovalResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildApprovalResponse instance
     */
    public static create(properties?: IGuildApprovalResponse): GuildApprovalResponse;

    /**
     * Encodes the specified GuildApprovalResponse message. Does not implicitly {@link GuildApprovalResponse.verify|verify} messages.
     * @param message GuildApprovalResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildApprovalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildApprovalResponse message, length delimited. Does not implicitly {@link GuildApprovalResponse.verify|verify} messages.
     * @param message GuildApprovalResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildApprovalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildApprovalResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildApprovalResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildApprovalResponse;

    /**
     * Decodes a GuildApprovalResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildApprovalResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildApprovalResponse;

    /**
     * Verifies a GuildApprovalResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildApprovalResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildApprovalResponse
     */
    public static fromObject(object: { [k: string]: any }): GuildApprovalResponse;

    /**
     * Creates a plain object from a GuildApprovalResponse message. Also converts values to other types if specified.
     * @param message GuildApprovalResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildApprovalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildApprovalResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateGuildRequest. */
export interface ICreateGuildRequest {

    /** CreateGuildRequest mid */
    mid?: (MID|null);

    /** CreateGuildRequest name */
    name: string;
}

/** Represents a CreateGuildRequest. */
export class CreateGuildRequest implements ICreateGuildRequest {

    /**
     * Constructs a new CreateGuildRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateGuildRequest);

    /** CreateGuildRequest mid. */
    public mid: MID;

    /** CreateGuildRequest name. */
    public name: string;

    /**
     * Creates a new CreateGuildRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateGuildRequest instance
     */
    public static create(properties?: ICreateGuildRequest): CreateGuildRequest;

    /**
     * Encodes the specified CreateGuildRequest message. Does not implicitly {@link CreateGuildRequest.verify|verify} messages.
     * @param message CreateGuildRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateGuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateGuildRequest message, length delimited. Does not implicitly {@link CreateGuildRequest.verify|verify} messages.
     * @param message CreateGuildRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateGuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateGuildRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateGuildRequest;

    /**
     * Decodes a CreateGuildRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateGuildRequest;

    /**
     * Verifies a CreateGuildRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateGuildRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateGuildRequest
     */
    public static fromObject(object: { [k: string]: any }): CreateGuildRequest;

    /**
     * Creates a plain object from a CreateGuildRequest message. Also converts values to other types if specified.
     * @param message CreateGuildRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateGuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateGuildRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateGuildResponse. */
export interface ICreateGuildResponse {

    /** CreateGuildResponse mid */
    mid?: (MID|null);

    /** CreateGuildResponse result */
    result: number;

    /** CreateGuildResponse guildInfo */
    guildInfo?: (IGuildInfo|null);
}

/** Represents a CreateGuildResponse. */
export class CreateGuildResponse implements ICreateGuildResponse {

    /**
     * Constructs a new CreateGuildResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateGuildResponse);

    /** CreateGuildResponse mid. */
    public mid: MID;

    /** CreateGuildResponse result. */
    public result: number;

    /** CreateGuildResponse guildInfo. */
    public guildInfo?: (IGuildInfo|null);

    /**
     * Creates a new CreateGuildResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateGuildResponse instance
     */
    public static create(properties?: ICreateGuildResponse): CreateGuildResponse;

    /**
     * Encodes the specified CreateGuildResponse message. Does not implicitly {@link CreateGuildResponse.verify|verify} messages.
     * @param message CreateGuildResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateGuildResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateGuildResponse message, length delimited. Does not implicitly {@link CreateGuildResponse.verify|verify} messages.
     * @param message CreateGuildResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateGuildResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateGuildResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateGuildResponse;

    /**
     * Decodes a CreateGuildResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateGuildResponse;

    /**
     * Verifies a CreateGuildResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateGuildResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateGuildResponse
     */
    public static fromObject(object: { [k: string]: any }): CreateGuildResponse;

    /**
     * Creates a plain object from a CreateGuildResponse message. Also converts values to other types if specified.
     * @param message CreateGuildResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateGuildResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateGuildResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildInfo. */
export interface IGuildInfo {

    /** GuildInfo id */
    id: (number|Long);

    /** GuildInfo name */
    name: string;

    /** GuildInfo masterId */
    masterId: (number|Long);

    /** GuildInfo level */
    level: number;

    /** GuildInfo members */
    members?: (IGuildMemberInfo[]|null);
}

/** Represents a GuildInfo. */
export class GuildInfo implements IGuildInfo {

    /**
     * Constructs a new GuildInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildInfo);

    /** GuildInfo id. */
    public id: (number|Long);

    /** GuildInfo name. */
    public name: string;

    /** GuildInfo masterId. */
    public masterId: (number|Long);

    /** GuildInfo level. */
    public level: number;

    /** GuildInfo members. */
    public members: IGuildMemberInfo[];

    /**
     * Creates a new GuildInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildInfo instance
     */
    public static create(properties?: IGuildInfo): GuildInfo;

    /**
     * Encodes the specified GuildInfo message. Does not implicitly {@link GuildInfo.verify|verify} messages.
     * @param message GuildInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildInfo message, length delimited. Does not implicitly {@link GuildInfo.verify|verify} messages.
     * @param message GuildInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildInfo;

    /**
     * Decodes a GuildInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildInfo;

    /**
     * Verifies a GuildInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildInfo
     */
    public static fromObject(object: { [k: string]: any }): GuildInfo;

    /**
     * Creates a plain object from a GuildInfo message. Also converts values to other types if specified.
     * @param message GuildInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GuildMemberInfo. */
export interface IGuildMemberInfo {

    /** GuildMemberInfo roleId */
    roleId: (number|Long);

    /** GuildMemberInfo name */
    name: string;

    /** GuildMemberInfo level */
    level: number;
}

/** Represents a GuildMemberInfo. */
export class GuildMemberInfo implements IGuildMemberInfo {

    /**
     * Constructs a new GuildMemberInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGuildMemberInfo);

    /** GuildMemberInfo roleId. */
    public roleId: (number|Long);

    /** GuildMemberInfo name. */
    public name: string;

    /** GuildMemberInfo level. */
    public level: number;

    /**
     * Creates a new GuildMemberInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GuildMemberInfo instance
     */
    public static create(properties?: IGuildMemberInfo): GuildMemberInfo;

    /**
     * Encodes the specified GuildMemberInfo message. Does not implicitly {@link GuildMemberInfo.verify|verify} messages.
     * @param message GuildMemberInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGuildMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GuildMemberInfo message, length delimited. Does not implicitly {@link GuildMemberInfo.verify|verify} messages.
     * @param message GuildMemberInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGuildMemberInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GuildMemberInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GuildMemberInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GuildMemberInfo;

    /**
     * Decodes a GuildMemberInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GuildMemberInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GuildMemberInfo;

    /**
     * Verifies a GuildMemberInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GuildMemberInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GuildMemberInfo
     */
    public static fromObject(object: { [k: string]: any }): GuildMemberInfo;

    /**
     * Creates a plain object from a GuildMemberInfo message. Also converts values to other types if specified.
     * @param message GuildMemberInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GuildMemberInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GuildMemberInfo to JSON.
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
