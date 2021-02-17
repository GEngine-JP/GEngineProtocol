import * as $protobuf from "protobufjs";
/** Properties of a UseSkillRequest. */
export interface IUseSkillRequest {

    /** UseSkillRequest mid */
    mid?: (MID|null);

    /** UseSkillRequest skillId */
    skillId?: (number|null);
}

/** Represents a UseSkillRequest. */
export class UseSkillRequest implements IUseSkillRequest {

    /**
     * Constructs a new UseSkillRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUseSkillRequest);

    /** UseSkillRequest mid. */
    public mid: MID;

    /** UseSkillRequest skillId. */
    public skillId: number;

    /**
     * Creates a new UseSkillRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseSkillRequest instance
     */
    public static create(properties?: IUseSkillRequest): UseSkillRequest;

    /**
     * Encodes the specified UseSkillRequest message. Does not implicitly {@link UseSkillRequest.verify|verify} messages.
     * @param message UseSkillRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUseSkillRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UseSkillRequest message, length delimited. Does not implicitly {@link UseSkillRequest.verify|verify} messages.
     * @param message UseSkillRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUseSkillRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseSkillRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UseSkillRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UseSkillRequest;

    /**
     * Decodes a UseSkillRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UseSkillRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UseSkillRequest;

    /**
     * Verifies a UseSkillRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UseSkillRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UseSkillRequest
     */
    public static fromObject(object: { [k: string]: any }): UseSkillRequest;

    /**
     * Creates a plain object from a UseSkillRequest message. Also converts values to other types if specified.
     * @param message UseSkillRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UseSkillRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UseSkillRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UseSkillResponse. */
export interface IUseSkillResponse {

    /** UseSkillResponse mid */
    mid?: (MID|null);

    /** UseSkillResponse rid */
    rid?: (number|Long|null);

    /** UseSkillResponse skillId */
    skillId?: (number|null);

    /** UseSkillResponse result */
    result?: (number|null);
}

/** Represents a UseSkillResponse. */
export class UseSkillResponse implements IUseSkillResponse {

    /**
     * Constructs a new UseSkillResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUseSkillResponse);

    /** UseSkillResponse mid. */
    public mid: MID;

    /** UseSkillResponse rid. */
    public rid: (number|Long);

    /** UseSkillResponse skillId. */
    public skillId: number;

    /** UseSkillResponse result. */
    public result: number;

    /**
     * Creates a new UseSkillResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UseSkillResponse instance
     */
    public static create(properties?: IUseSkillResponse): UseSkillResponse;

    /**
     * Encodes the specified UseSkillResponse message. Does not implicitly {@link UseSkillResponse.verify|verify} messages.
     * @param message UseSkillResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUseSkillResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UseSkillResponse message, length delimited. Does not implicitly {@link UseSkillResponse.verify|verify} messages.
     * @param message UseSkillResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUseSkillResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UseSkillResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UseSkillResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UseSkillResponse;

    /**
     * Decodes a UseSkillResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UseSkillResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UseSkillResponse;

    /**
     * Verifies a UseSkillResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UseSkillResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UseSkillResponse
     */
    public static fromObject(object: { [k: string]: any }): UseSkillResponse;

    /**
     * Creates a plain object from a UseSkillResponse message. Also converts values to other types if specified.
     * @param message UseSkillResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UseSkillResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UseSkillResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FireRequest. */
export interface IFireRequest {

    /** FireRequest mid */
    mid?: (MID|null);

    /** FireRequest gold */
    gold?: (number|null);

    /** FireRequest angleX */
    angleX?: (number|null);

    /** FireRequest angleY */
    angleY?: (number|null);

    /** FireRequest targetFishId */
    targetFishId?: (number|Long|null);
}

/** Represents a FireRequest. */
export class FireRequest implements IFireRequest {

    /**
     * Constructs a new FireRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFireRequest);

    /** FireRequest mid. */
    public mid: MID;

    /** FireRequest gold. */
    public gold: number;

    /** FireRequest angleX. */
    public angleX: number;

    /** FireRequest angleY. */
    public angleY: number;

    /** FireRequest targetFishId. */
    public targetFishId: (number|Long);

    /**
     * Creates a new FireRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireRequest instance
     */
    public static create(properties?: IFireRequest): FireRequest;

    /**
     * Encodes the specified FireRequest message. Does not implicitly {@link FireRequest.verify|verify} messages.
     * @param message FireRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFireRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FireRequest message, length delimited. Does not implicitly {@link FireRequest.verify|verify} messages.
     * @param message FireRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFireRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FireRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FireRequest;

    /**
     * Decodes a FireRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FireRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FireRequest;

    /**
     * Verifies a FireRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FireRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FireRequest
     */
    public static fromObject(object: { [k: string]: any }): FireRequest;

    /**
     * Creates a plain object from a FireRequest message. Also converts values to other types if specified.
     * @param message FireRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FireRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FireRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FireResponse. */
export interface IFireResponse {

    /** FireResponse mid */
    mid?: (MID|null);

    /** FireResponse rid */
    rid?: (number|Long|null);

    /** FireResponse gold */
    gold?: (number|null);

    /** FireResponse angleX */
    angleX?: (number|null);

    /** FireResponse angleY */
    angleY?: (number|null);

    /** FireResponse targetFishId */
    targetFishId?: (number|Long|null);
}

/** Represents a FireResponse. */
export class FireResponse implements IFireResponse {

    /**
     * Constructs a new FireResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFireResponse);

    /** FireResponse mid. */
    public mid: MID;

    /** FireResponse rid. */
    public rid: (number|Long);

    /** FireResponse gold. */
    public gold: number;

    /** FireResponse angleX. */
    public angleX: number;

    /** FireResponse angleY. */
    public angleY: number;

    /** FireResponse targetFishId. */
    public targetFishId: (number|Long);

    /**
     * Creates a new FireResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireResponse instance
     */
    public static create(properties?: IFireResponse): FireResponse;

    /**
     * Encodes the specified FireResponse message. Does not implicitly {@link FireResponse.verify|verify} messages.
     * @param message FireResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFireResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FireResponse message, length delimited. Does not implicitly {@link FireResponse.verify|verify} messages.
     * @param message FireResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFireResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FireResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FireResponse;

    /**
     * Decodes a FireResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FireResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FireResponse;

    /**
     * Verifies a FireResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FireResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FireResponse
     */
    public static fromObject(object: { [k: string]: any }): FireResponse;

    /**
     * Creates a plain object from a FireResponse message. Also converts values to other types if specified.
     * @param message FireResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FireResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FireResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FireResultRequest. */
export interface IFireResultRequest {

    /** FireResultRequest mid */
    mid?: (MID|null);

    /** FireResultRequest targetFishId */
    targetFishId?: ((number|Long)[]|null);

    /** FireResultRequest multiple */
    multiple?: (number|null);

    /** FireResultRequest specialFishId */
    specialFishId?: (number|Long|null);

    /** FireResultRequest fireGold */
    fireGold?: (number|null);
}

/** Represents a FireResultRequest. */
export class FireResultRequest implements IFireResultRequest {

    /**
     * Constructs a new FireResultRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFireResultRequest);

    /** FireResultRequest mid. */
    public mid: MID;

    /** FireResultRequest targetFishId. */
    public targetFishId: (number|Long)[];

    /** FireResultRequest multiple. */
    public multiple: number;

    /** FireResultRequest specialFishId. */
    public specialFishId: (number|Long);

    /** FireResultRequest fireGold. */
    public fireGold: number;

    /**
     * Creates a new FireResultRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireResultRequest instance
     */
    public static create(properties?: IFireResultRequest): FireResultRequest;

    /**
     * Encodes the specified FireResultRequest message. Does not implicitly {@link FireResultRequest.verify|verify} messages.
     * @param message FireResultRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFireResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FireResultRequest message, length delimited. Does not implicitly {@link FireResultRequest.verify|verify} messages.
     * @param message FireResultRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFireResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireResultRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FireResultRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FireResultRequest;

    /**
     * Decodes a FireResultRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FireResultRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FireResultRequest;

    /**
     * Verifies a FireResultRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FireResultRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FireResultRequest
     */
    public static fromObject(object: { [k: string]: any }): FireResultRequest;

    /**
     * Creates a plain object from a FireResultRequest message. Also converts values to other types if specified.
     * @param message FireResultRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FireResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FireResultRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FireResultResponse. */
export interface IFireResultResponse {

    /** FireResultResponse mid */
    mid?: (MID|null);

    /** FireResultResponse rid */
    rid?: (number|Long|null);

    /** FireResultResponse dieFishId */
    dieFishId?: ((number|Long)[]|null);

    /** FireResultResponse gold */
    gold?: (number|Long|null);

    /** FireResultResponse multiple */
    multiple?: (number|null);

    /** FireResultResponse specialFishId */
    specialFishId?: (number|Long|null);

    /** FireResultResponse accumulateGold */
    accumulateGold?: (number|Long|null);
}

/** Represents a FireResultResponse. */
export class FireResultResponse implements IFireResultResponse {

    /**
     * Constructs a new FireResultResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFireResultResponse);

    /** FireResultResponse mid. */
    public mid: MID;

    /** FireResultResponse rid. */
    public rid: (number|Long);

    /** FireResultResponse dieFishId. */
    public dieFishId: (number|Long)[];

    /** FireResultResponse gold. */
    public gold: (number|Long);

    /** FireResultResponse multiple. */
    public multiple: number;

    /** FireResultResponse specialFishId. */
    public specialFishId: (number|Long);

    /** FireResultResponse accumulateGold. */
    public accumulateGold: (number|Long);

    /**
     * Creates a new FireResultResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FireResultResponse instance
     */
    public static create(properties?: IFireResultResponse): FireResultResponse;

    /**
     * Encodes the specified FireResultResponse message. Does not implicitly {@link FireResultResponse.verify|verify} messages.
     * @param message FireResultResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFireResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FireResultResponse message, length delimited. Does not implicitly {@link FireResultResponse.verify|verify} messages.
     * @param message FireResultResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFireResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FireResultResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FireResultResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FireResultResponse;

    /**
     * Decodes a FireResultResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FireResultResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FireResultResponse;

    /**
     * Verifies a FireResultResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FireResultResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FireResultResponse
     */
    public static fromObject(object: { [k: string]: any }): FireResultResponse;

    /**
     * Creates a plain object from a FireResultResponse message. Also converts values to other types if specified.
     * @param message FireResultResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FireResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FireResultResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GunLeveUpRequest. */
export interface IGunLeveUpRequest {

    /** GunLeveUpRequest mid */
    mid?: (MID|null);
}

/** Represents a GunLeveUpRequest. */
export class GunLeveUpRequest implements IGunLeveUpRequest {

    /**
     * Constructs a new GunLeveUpRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGunLeveUpRequest);

    /** GunLeveUpRequest mid. */
    public mid: MID;

    /**
     * Creates a new GunLeveUpRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GunLeveUpRequest instance
     */
    public static create(properties?: IGunLeveUpRequest): GunLeveUpRequest;

    /**
     * Encodes the specified GunLeveUpRequest message. Does not implicitly {@link GunLeveUpRequest.verify|verify} messages.
     * @param message GunLeveUpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGunLeveUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GunLeveUpRequest message, length delimited. Does not implicitly {@link GunLeveUpRequest.verify|verify} messages.
     * @param message GunLeveUpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGunLeveUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GunLeveUpRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GunLeveUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GunLeveUpRequest;

    /**
     * Decodes a GunLeveUpRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GunLeveUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GunLeveUpRequest;

    /**
     * Verifies a GunLeveUpRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GunLeveUpRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GunLeveUpRequest
     */
    public static fromObject(object: { [k: string]: any }): GunLeveUpRequest;

    /**
     * Creates a plain object from a GunLeveUpRequest message. Also converts values to other types if specified.
     * @param message GunLeveUpRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GunLeveUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GunLeveUpRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GunLeveUpResponse. */
export interface IGunLeveUpResponse {

    /** GunLeveUpResponse mid */
    mid?: (MID|null);

    /** GunLeveUpResponse result */
    result?: (number|null);
}

/** Represents a GunLeveUpResponse. */
export class GunLeveUpResponse implements IGunLeveUpResponse {

    /**
     * Constructs a new GunLeveUpResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGunLeveUpResponse);

    /** GunLeveUpResponse mid. */
    public mid: MID;

    /** GunLeveUpResponse result. */
    public result: number;

    /**
     * Creates a new GunLeveUpResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GunLeveUpResponse instance
     */
    public static create(properties?: IGunLeveUpResponse): GunLeveUpResponse;

    /**
     * Encodes the specified GunLeveUpResponse message. Does not implicitly {@link GunLeveUpResponse.verify|verify} messages.
     * @param message GunLeveUpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGunLeveUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GunLeveUpResponse message, length delimited. Does not implicitly {@link GunLeveUpResponse.verify|verify} messages.
     * @param message GunLeveUpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGunLeveUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GunLeveUpResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GunLeveUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GunLeveUpResponse;

    /**
     * Decodes a GunLeveUpResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GunLeveUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GunLeveUpResponse;

    /**
     * Verifies a GunLeveUpResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GunLeveUpResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GunLeveUpResponse
     */
    public static fromObject(object: { [k: string]: any }): GunLeveUpResponse;

    /**
     * Creates a plain object from a GunLeveUpResponse message. Also converts values to other types if specified.
     * @param message GunLeveUpResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GunLeveUpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GunLeveUpResponse to JSON.
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
