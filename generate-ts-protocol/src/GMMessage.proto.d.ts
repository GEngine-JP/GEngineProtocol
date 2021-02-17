import * as $protobuf from "protobufjs";
/** Properties of a CloseServerRequest. */
export interface ICloseServerRequest {

    /** CloseServerRequest resMsg */
    resMsg?: (string|null);
}

/** Represents a CloseServerRequest. */
export class CloseServerRequest implements ICloseServerRequest {

    /**
     * Constructs a new CloseServerRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICloseServerRequest);

    /** CloseServerRequest resMsg. */
    public resMsg: string;

    /**
     * Creates a new CloseServerRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseServerRequest instance
     */
    public static create(properties?: ICloseServerRequest): CloseServerRequest;

    /**
     * Encodes the specified CloseServerRequest message. Does not implicitly {@link CloseServerRequest.verify|verify} messages.
     * @param message CloseServerRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICloseServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CloseServerRequest message, length delimited. Does not implicitly {@link CloseServerRequest.verify|verify} messages.
     * @param message CloseServerRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICloseServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CloseServerRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CloseServerRequest;

    /**
     * Decodes a CloseServerRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CloseServerRequest;

    /**
     * Verifies a CloseServerRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CloseServerRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseServerRequest
     */
    public static fromObject(object: { [k: string]: any }): CloseServerRequest;

    /**
     * Creates a plain object from a CloseServerRequest message. Also converts values to other types if specified.
     * @param message CloseServerRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CloseServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CloseServerRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CloseServerResponse. */
export interface ICloseServerResponse {

    /** CloseServerResponse resMsg */
    resMsg?: (string|null);
}

/** Represents a CloseServerResponse. */
export class CloseServerResponse implements ICloseServerResponse {

    /**
     * Constructs a new CloseServerResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICloseServerResponse);

    /** CloseServerResponse resMsg. */
    public resMsg: string;

    /**
     * Creates a new CloseServerResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseServerResponse instance
     */
    public static create(properties?: ICloseServerResponse): CloseServerResponse;

    /**
     * Encodes the specified CloseServerResponse message. Does not implicitly {@link CloseServerResponse.verify|verify} messages.
     * @param message CloseServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICloseServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CloseServerResponse message, length delimited. Does not implicitly {@link CloseServerResponse.verify|verify} messages.
     * @param message CloseServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICloseServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CloseServerResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CloseServerResponse;

    /**
     * Decodes a CloseServerResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CloseServerResponse;

    /**
     * Verifies a CloseServerResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CloseServerResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseServerResponse
     */
    public static fromObject(object: { [k: string]: any }): CloseServerResponse;

    /**
     * Creates a plain object from a CloseServerResponse message. Also converts values to other types if specified.
     * @param message CloseServerResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CloseServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CloseServerResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
