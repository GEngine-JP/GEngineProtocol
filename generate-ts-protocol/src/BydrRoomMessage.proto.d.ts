import * as $protobuf from "protobufjs";
/** Properties of an EnterRoomRequest. */
export interface IEnterRoomRequest {

    /** EnterRoomRequest mid */
    mid?: (MID|null);

    /** EnterRoomRequest type */
    type: RoomType;

    /** EnterRoomRequest rank */
    rank: number;
}

/** Represents an EnterRoomRequest. */
export class EnterRoomRequest implements IEnterRoomRequest {

    /**
     * Constructs a new EnterRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterRoomRequest);

    /** EnterRoomRequest mid. */
    public mid: MID;

    /** EnterRoomRequest type. */
    public type: RoomType;

    /** EnterRoomRequest rank. */
    public rank: number;

    /**
     * Creates a new EnterRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterRoomRequest instance
     */
    public static create(properties?: IEnterRoomRequest): EnterRoomRequest;

    /**
     * Encodes the specified EnterRoomRequest message. Does not implicitly {@link EnterRoomRequest.verify|verify} messages.
     * @param message EnterRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterRoomRequest message, length delimited. Does not implicitly {@link EnterRoomRequest.verify|verify} messages.
     * @param message EnterRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterRoomRequest;

    /**
     * Decodes an EnterRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterRoomRequest;

    /**
     * Verifies an EnterRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterRoomRequest
     */
    public static fromObject(object: { [k: string]: any }): EnterRoomRequest;

    /**
     * Creates a plain object from an EnterRoomRequest message. Also converts values to other types if specified.
     * @param message EnterRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterRoomResponse. */
export interface IEnterRoomResponse {

    /** EnterRoomResponse mid */
    mid?: (MID|null);

    /** EnterRoomResponse result */
    result?: (number|null);

    /** EnterRoomResponse roomInfo */
    roomInfo?: (IRoomInfo|null);

    /** EnterRoomResponse fishInfo */
    fishInfo?: (IFishInfo[]|null);

    /** EnterRoomResponse roleInfo */
    roleInfo?: (IRoomRoleInfo[]|null);
}

/** Represents an EnterRoomResponse. */
export class EnterRoomResponse implements IEnterRoomResponse {

    /**
     * Constructs a new EnterRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterRoomResponse);

    /** EnterRoomResponse mid. */
    public mid: MID;

    /** EnterRoomResponse result. */
    public result: number;

    /** EnterRoomResponse roomInfo. */
    public roomInfo?: (IRoomInfo|null);

    /** EnterRoomResponse fishInfo. */
    public fishInfo: IFishInfo[];

    /** EnterRoomResponse roleInfo. */
    public roleInfo: IRoomRoleInfo[];

    /**
     * Creates a new EnterRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterRoomResponse instance
     */
    public static create(properties?: IEnterRoomResponse): EnterRoomResponse;

    /**
     * Encodes the specified EnterRoomResponse message. Does not implicitly {@link EnterRoomResponse.verify|verify} messages.
     * @param message EnterRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterRoomResponse message, length delimited. Does not implicitly {@link EnterRoomResponse.verify|verify} messages.
     * @param message EnterRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterRoomResponse;

    /**
     * Decodes an EnterRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterRoomResponse;

    /**
     * Verifies an EnterRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): EnterRoomResponse;

    /**
     * Creates a plain object from an EnterRoomResponse message. Also converts values to other types if specified.
     * @param message EnterRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ApplyAthleticsRequest. */
export interface IApplyAthleticsRequest {

    /** ApplyAthleticsRequest mid */
    mid?: (MID|null);

    /** ApplyAthleticsRequest type */
    type?: (RoomType|null);

    /** ApplyAthleticsRequest rank */
    rank?: (number|null);
}

/** Represents an ApplyAthleticsRequest. */
export class ApplyAthleticsRequest implements IApplyAthleticsRequest {

    /**
     * Constructs a new ApplyAthleticsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IApplyAthleticsRequest);

    /** ApplyAthleticsRequest mid. */
    public mid: MID;

    /** ApplyAthleticsRequest type. */
    public type: RoomType;

    /** ApplyAthleticsRequest rank. */
    public rank: number;

    /**
     * Creates a new ApplyAthleticsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyAthleticsRequest instance
     */
    public static create(properties?: IApplyAthleticsRequest): ApplyAthleticsRequest;

    /**
     * Encodes the specified ApplyAthleticsRequest message. Does not implicitly {@link ApplyAthleticsRequest.verify|verify} messages.
     * @param message ApplyAthleticsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IApplyAthleticsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ApplyAthleticsRequest message, length delimited. Does not implicitly {@link ApplyAthleticsRequest.verify|verify} messages.
     * @param message ApplyAthleticsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IApplyAthleticsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyAthleticsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApplyAthleticsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApplyAthleticsRequest;

    /**
     * Decodes an ApplyAthleticsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApplyAthleticsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApplyAthleticsRequest;

    /**
     * Verifies an ApplyAthleticsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ApplyAthleticsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApplyAthleticsRequest
     */
    public static fromObject(object: { [k: string]: any }): ApplyAthleticsRequest;

    /**
     * Creates a plain object from an ApplyAthleticsRequest message. Also converts values to other types if specified.
     * @param message ApplyAthleticsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ApplyAthleticsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ApplyAthleticsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ApplyAthleticsResponse. */
export interface IApplyAthleticsResponse {

    /** ApplyAthleticsResponse mid */
    mid?: (MID|null);

    /** ApplyAthleticsResponse result */
    result?: (number|null);

    /** ApplyAthleticsResponse roleId */
    roleId?: ((number|Long)[]|null);
}

/** Represents an ApplyAthleticsResponse. */
export class ApplyAthleticsResponse implements IApplyAthleticsResponse {

    /**
     * Constructs a new ApplyAthleticsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IApplyAthleticsResponse);

    /** ApplyAthleticsResponse mid. */
    public mid: MID;

    /** ApplyAthleticsResponse result. */
    public result: number;

    /** ApplyAthleticsResponse roleId. */
    public roleId: (number|Long)[];

    /**
     * Creates a new ApplyAthleticsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ApplyAthleticsResponse instance
     */
    public static create(properties?: IApplyAthleticsResponse): ApplyAthleticsResponse;

    /**
     * Encodes the specified ApplyAthleticsResponse message. Does not implicitly {@link ApplyAthleticsResponse.verify|verify} messages.
     * @param message ApplyAthleticsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IApplyAthleticsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ApplyAthleticsResponse message, length delimited. Does not implicitly {@link ApplyAthleticsResponse.verify|verify} messages.
     * @param message ApplyAthleticsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IApplyAthleticsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ApplyAthleticsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ApplyAthleticsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ApplyAthleticsResponse;

    /**
     * Decodes an ApplyAthleticsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ApplyAthleticsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ApplyAthleticsResponse;

    /**
     * Verifies an ApplyAthleticsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ApplyAthleticsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ApplyAthleticsResponse
     */
    public static fromObject(object: { [k: string]: any }): ApplyAthleticsResponse;

    /**
     * Creates a plain object from an ApplyAthleticsResponse message. Also converts values to other types if specified.
     * @param message ApplyAthleticsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ApplyAthleticsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ApplyAthleticsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QuitRoomRequest. */
export interface IQuitRoomRequest {

    /** QuitRoomRequest mid */
    mid?: (MID|null);
}

/** Represents a QuitRoomRequest. */
export class QuitRoomRequest implements IQuitRoomRequest {

    /**
     * Constructs a new QuitRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuitRoomRequest);

    /** QuitRoomRequest mid. */
    public mid: MID;

    /**
     * Creates a new QuitRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QuitRoomRequest instance
     */
    public static create(properties?: IQuitRoomRequest): QuitRoomRequest;

    /**
     * Encodes the specified QuitRoomRequest message. Does not implicitly {@link QuitRoomRequest.verify|verify} messages.
     * @param message QuitRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuitRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuitRoomRequest message, length delimited. Does not implicitly {@link QuitRoomRequest.verify|verify} messages.
     * @param message QuitRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuitRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuitRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QuitRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitRoomRequest;

    /**
     * Decodes a QuitRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QuitRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitRoomRequest;

    /**
     * Verifies a QuitRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QuitRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QuitRoomRequest
     */
    public static fromObject(object: { [k: string]: any }): QuitRoomRequest;

    /**
     * Creates a plain object from a QuitRoomRequest message. Also converts values to other types if specified.
     * @param message QuitRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QuitRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QuitRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QuitRoomResponse. */
export interface IQuitRoomResponse {

    /** QuitRoomResponse mid */
    mid?: (MID|null);

    /** QuitRoomResponse result */
    result?: (number|null);

    /** QuitRoomResponse rid */
    rid?: (number|null);
}

/** Represents a QuitRoomResponse. */
export class QuitRoomResponse implements IQuitRoomResponse {

    /**
     * Constructs a new QuitRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuitRoomResponse);

    /** QuitRoomResponse mid. */
    public mid: MID;

    /** QuitRoomResponse result. */
    public result: number;

    /** QuitRoomResponse rid. */
    public rid: number;

    /**
     * Creates a new QuitRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QuitRoomResponse instance
     */
    public static create(properties?: IQuitRoomResponse): QuitRoomResponse;

    /**
     * Encodes the specified QuitRoomResponse message. Does not implicitly {@link QuitRoomResponse.verify|verify} messages.
     * @param message QuitRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuitRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QuitRoomResponse message, length delimited. Does not implicitly {@link QuitRoomResponse.verify|verify} messages.
     * @param message QuitRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuitRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QuitRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QuitRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QuitRoomResponse;

    /**
     * Decodes a QuitRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QuitRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QuitRoomResponse;

    /**
     * Verifies a QuitRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QuitRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QuitRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): QuitRoomResponse;

    /**
     * Creates a plain object from a QuitRoomResponse message. Also converts values to other types if specified.
     * @param message QuitRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QuitRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QuitRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FishEnterRoomResponse. */
export interface IFishEnterRoomResponse {

    /** FishEnterRoomResponse mid */
    mid?: (MID|null);

    /** FishEnterRoomResponse fishInfo */
    fishInfo?: (IFishInfo[]|null);
}

/** Represents a FishEnterRoomResponse. */
export class FishEnterRoomResponse implements IFishEnterRoomResponse {

    /**
     * Constructs a new FishEnterRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishEnterRoomResponse);

    /** FishEnterRoomResponse mid. */
    public mid: MID;

    /** FishEnterRoomResponse fishInfo. */
    public fishInfo: IFishInfo[];

    /**
     * Creates a new FishEnterRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishEnterRoomResponse instance
     */
    public static create(properties?: IFishEnterRoomResponse): FishEnterRoomResponse;

    /**
     * Encodes the specified FishEnterRoomResponse message. Does not implicitly {@link FishEnterRoomResponse.verify|verify} messages.
     * @param message FishEnterRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FishEnterRoomResponse message, length delimited. Does not implicitly {@link FishEnterRoomResponse.verify|verify} messages.
     * @param message FishEnterRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFishEnterRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishEnterRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishEnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishEnterRoomResponse;

    /**
     * Decodes a FishEnterRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FishEnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FishEnterRoomResponse;

    /**
     * Verifies a FishEnterRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FishEnterRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FishEnterRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): FishEnterRoomResponse;

    /**
     * Creates a plain object from a FishEnterRoomResponse message. Also converts values to other types if specified.
     * @param message FishEnterRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FishEnterRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FishEnterRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomInfoResponse. */
export interface IRoomInfoResponse {

    /** RoomInfoResponse mid */
    mid?: (MID|null);

    /** RoomInfoResponse roomInfo */
    roomInfo?: (IRoomInfo|null);

    /** RoomInfoResponse fishInfo */
    fishInfo?: (IFishInfo[]|null);

    /** RoomInfoResponse roleInfo */
    roleInfo?: (IRoomRoleInfo[]|null);
}

/** Represents a RoomInfoResponse. */
export class RoomInfoResponse implements IRoomInfoResponse {

    /**
     * Constructs a new RoomInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfoResponse);

    /** RoomInfoResponse mid. */
    public mid: MID;

    /** RoomInfoResponse roomInfo. */
    public roomInfo?: (IRoomInfo|null);

    /** RoomInfoResponse fishInfo. */
    public fishInfo: IFishInfo[];

    /** RoomInfoResponse roleInfo. */
    public roleInfo: IRoomRoleInfo[];

    /**
     * Creates a new RoomInfoResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfoResponse instance
     */
    public static create(properties?: IRoomInfoResponse): RoomInfoResponse;

    /**
     * Encodes the specified RoomInfoResponse message. Does not implicitly {@link RoomInfoResponse.verify|verify} messages.
     * @param message RoomInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomInfoResponse message, length delimited. Does not implicitly {@link RoomInfoResponse.verify|verify} messages.
     * @param message RoomInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomInfoResponse;

    /**
     * Decodes a RoomInfoResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomInfoResponse;

    /**
     * Verifies a RoomInfoResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomInfoResponse
     */
    public static fromObject(object: { [k: string]: any }): RoomInfoResponse;

    /**
     * Creates a plain object from a RoomInfoResponse message. Also converts values to other types if specified.
     * @param message RoomInfoResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomInfoResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomChangeResponse. */
export interface IRoomChangeResponse {

    /** RoomChangeResponse mid */
    mid?: (MID|null);

    /** RoomChangeResponse roomInfo */
    roomInfo?: (IRoomInfo|null);
}

/** Represents a RoomChangeResponse. */
export class RoomChangeResponse implements IRoomChangeResponse {

    /**
     * Constructs a new RoomChangeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomChangeResponse);

    /** RoomChangeResponse mid. */
    public mid: MID;

    /** RoomChangeResponse roomInfo. */
    public roomInfo?: (IRoomInfo|null);

    /**
     * Creates a new RoomChangeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomChangeResponse instance
     */
    public static create(properties?: IRoomChangeResponse): RoomChangeResponse;

    /**
     * Encodes the specified RoomChangeResponse message. Does not implicitly {@link RoomChangeResponse.verify|verify} messages.
     * @param message RoomChangeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomChangeResponse message, length delimited. Does not implicitly {@link RoomChangeResponse.verify|verify} messages.
     * @param message RoomChangeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomChangeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomChangeResponse;

    /**
     * Decodes a RoomChangeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomChangeResponse;

    /**
     * Verifies a RoomChangeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomChangeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomChangeResponse
     */
    public static fromObject(object: { [k: string]: any }): RoomChangeResponse;

    /**
     * Creates a plain object from a RoomChangeResponse message. Also converts values to other types if specified.
     * @param message RoomChangeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomChangeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomChangeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** RoomType enum. */
export enum RoomType {
    CLASSICS = 1,
    ARENA = 2
}

/** Represents a FishInfo. */
export class FishInfo implements IFishInfo {

    /**
     * Constructs a new FishInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFishInfo);

    /** FishInfo id. */
    public id: (number|Long)[];

    /** FishInfo configId. */
    public configId: number[];

    /** FishInfo trackId. */
    public trackId: number[];

    /** FishInfo formation. */
    public formation: number;

    /** FishInfo bornTime. */
    public bornTime: (number|Long);

    /** FishInfo serverTime. */
    public serverTime: (number|Long);

    /** FishInfo speed. */
    public speed: number;

    /** FishInfo topSpeed. */
    public topSpeed: number;

    /** FishInfo topSpeedStartTime. */
    public topSpeedStartTime: (number|Long);

    /**
     * Creates a new FishInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FishInfo instance
     */
    public static create(properties?: IFishInfo): FishInfo;

    /**
     * Encodes the specified FishInfo message. Does not implicitly {@link FishInfo.verify|verify} messages.
     * @param message FishInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFishInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FishInfo message, length delimited. Does not implicitly {@link FishInfo.verify|verify} messages.
     * @param message FishInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFishInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FishInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FishInfo;

    /**
     * Decodes a FishInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FishInfo;

    /**
     * Verifies a FishInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FishInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FishInfo
     */
    public static fromObject(object: { [k: string]: any }): FishInfo;

    /**
     * Creates a plain object from a FishInfo message. Also converts values to other types if specified.
     * @param message FishInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FishInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FishInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfo);

    /** RoomInfo id. */
    public id: (number|Long);

    /** RoomInfo rank. */
    public rank: number;

    /** RoomInfo type. */
    public type: number;

    /** RoomInfo cumulativeGold. */
    public cumulativeGold: (number|Long);

    /** RoomInfo state. */
    public state: (number|Long);

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomInfo;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomInfo;

    /**
     * Verifies a RoomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomInfo
     */
    public static fromObject(object: { [k: string]: any }): RoomInfo;

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @param message RoomInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a RoomRoleInfo. */
export class RoomRoleInfo implements IRoomRoleInfo {

    /**
     * Constructs a new RoomRoleInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomRoleInfo);

    /** RoomRoleInfo nick. */
    public nick: string;

    /** RoomRoleInfo icon. */
    public icon: string;

    /** RoomRoleInfo level. */
    public level: number;

    /** RoomRoleInfo gold. */
    public gold: (number|Long);

    /** RoomRoleInfo sign. */
    public sign: string;

    /** RoomRoleInfo popularity. */
    public popularity: number;

    /** RoomRoleInfo seatNo. */
    public seatNo: number;

    /** RoomRoleInfo vip. */
    public vip: boolean;

    /** RoomRoleInfo diamond. */
    public diamond: (number|Long);

    /** RoomRoleInfo rid. */
    public rid: (number|Long);

    /** RoomRoleInfo robotNo. */
    public robotNo: number;

    /** RoomRoleInfo ownerId. */
    public ownerId: number;

    /** RoomRoleInfo sid. */
    public sid: string;

    /**
     * Creates a new RoomRoleInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomRoleInfo instance
     */
    public static create(properties?: IRoomRoleInfo): RoomRoleInfo;

    /**
     * Encodes the specified RoomRoleInfo message. Does not implicitly {@link RoomRoleInfo.verify|verify} messages.
     * @param message RoomRoleInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomRoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomRoleInfo message, length delimited. Does not implicitly {@link RoomRoleInfo.verify|verify} messages.
     * @param message RoomRoleInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomRoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomRoleInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomRoleInfo;

    /**
     * Decodes a RoomRoleInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomRoleInfo;

    /**
     * Verifies a RoomRoleInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomRoleInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomRoleInfo
     */
    public static fromObject(object: { [k: string]: any }): RoomRoleInfo;

    /**
     * Creates a plain object from a RoomRoleInfo message. Also converts values to other types if specified.
     * @param message RoomRoleInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomRoleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomRoleInfo to JSON.
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
