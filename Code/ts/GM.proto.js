/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CloseServerRequest = (function() {

    /**
     * Properties of a CloseServerRequest.
     * @exports ICloseServerRequest
     * @interface ICloseServerRequest
     * @property {string|null} [resMsg] CloseServerRequest resMsg
     */

    /**
     * Constructs a new CloseServerRequest.
     * @exports CloseServerRequest
     * @classdesc Represents a CloseServerRequest.
     * @implements ICloseServerRequest
     * @constructor
     * @param {ICloseServerRequest=} [properties] Properties to set
     */
    function CloseServerRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CloseServerRequest resMsg.
     * @member {string} resMsg
     * @memberof CloseServerRequest
     * @instance
     */
    CloseServerRequest.prototype.resMsg = "";

    /**
     * Creates a new CloseServerRequest instance using the specified properties.
     * @function create
     * @memberof CloseServerRequest
     * @static
     * @param {ICloseServerRequest=} [properties] Properties to set
     * @returns {CloseServerRequest} CloseServerRequest instance
     */
    CloseServerRequest.create = function create(properties) {
        return new CloseServerRequest(properties);
    };

    /**
     * Encodes the specified CloseServerRequest message. Does not implicitly {@link CloseServerRequest.verify|verify} messages.
     * @function encode
     * @memberof CloseServerRequest
     * @static
     * @param {ICloseServerRequest} message CloseServerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseServerRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.resMsg != null && Object.hasOwnProperty.call(message, "resMsg"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.resMsg);
        return writer;
    };

    /**
     * Encodes the specified CloseServerRequest message, length delimited. Does not implicitly {@link CloseServerRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CloseServerRequest
     * @static
     * @param {ICloseServerRequest} message CloseServerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CloseServerRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CloseServerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CloseServerRequest} CloseServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseServerRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CloseServerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resMsg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CloseServerRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CloseServerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CloseServerRequest} CloseServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseServerRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CloseServerRequest message.
     * @function verify
     * @memberof CloseServerRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CloseServerRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            if (!$util.isString(message.resMsg))
                return "resMsg: string expected";
        return null;
    };

    /**
     * Creates a CloseServerRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CloseServerRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CloseServerRequest} CloseServerRequest
     */
    CloseServerRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CloseServerRequest)
            return object;
        var message = new $root.CloseServerRequest();
        if (object.resMsg != null)
            message.resMsg = String(object.resMsg);
        return message;
    };

    /**
     * Creates a plain object from a CloseServerRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CloseServerRequest
     * @static
     * @param {CloseServerRequest} message CloseServerRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CloseServerRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.resMsg = "";
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            object.resMsg = message.resMsg;
        return object;
    };

    /**
     * Converts this CloseServerRequest to JSON.
     * @function toJSON
     * @memberof CloseServerRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CloseServerRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CloseServerRequest;
})();

$root.CloseServerResponse = (function() {

    /**
     * Properties of a CloseServerResponse.
     * @exports ICloseServerResponse
     * @interface ICloseServerResponse
     * @property {string|null} [resMsg] CloseServerResponse resMsg
     */

    /**
     * Constructs a new CloseServerResponse.
     * @exports CloseServerResponse
     * @classdesc Represents a CloseServerResponse.
     * @implements ICloseServerResponse
     * @constructor
     * @param {ICloseServerResponse=} [properties] Properties to set
     */
    function CloseServerResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CloseServerResponse resMsg.
     * @member {string} resMsg
     * @memberof CloseServerResponse
     * @instance
     */
    CloseServerResponse.prototype.resMsg = "";

    /**
     * Creates a new CloseServerResponse instance using the specified properties.
     * @function create
     * @memberof CloseServerResponse
     * @static
     * @param {ICloseServerResponse=} [properties] Properties to set
     * @returns {CloseServerResponse} CloseServerResponse instance
     */
    CloseServerResponse.create = function create(properties) {
        return new CloseServerResponse(properties);
    };

    /**
     * Encodes the specified CloseServerResponse message. Does not implicitly {@link CloseServerResponse.verify|verify} messages.
     * @function encode
     * @memberof CloseServerResponse
     * @static
     * @param {ICloseServerResponse} message CloseServerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseServerResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.resMsg != null && Object.hasOwnProperty.call(message, "resMsg"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.resMsg);
        return writer;
    };

    /**
     * Encodes the specified CloseServerResponse message, length delimited. Does not implicitly {@link CloseServerResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CloseServerResponse
     * @static
     * @param {ICloseServerResponse} message CloseServerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CloseServerResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CloseServerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CloseServerResponse} CloseServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseServerResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CloseServerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resMsg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CloseServerResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CloseServerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CloseServerResponse} CloseServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseServerResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CloseServerResponse message.
     * @function verify
     * @memberof CloseServerResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CloseServerResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            if (!$util.isString(message.resMsg))
                return "resMsg: string expected";
        return null;
    };

    /**
     * Creates a CloseServerResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CloseServerResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CloseServerResponse} CloseServerResponse
     */
    CloseServerResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CloseServerResponse)
            return object;
        var message = new $root.CloseServerResponse();
        if (object.resMsg != null)
            message.resMsg = String(object.resMsg);
        return message;
    };

    /**
     * Creates a plain object from a CloseServerResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CloseServerResponse
     * @static
     * @param {CloseServerResponse} message CloseServerResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CloseServerResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.resMsg = "";
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            object.resMsg = message.resMsg;
        return object;
    };

    /**
     * Converts this CloseServerResponse to JSON.
     * @function toJSON
     * @memberof CloseServerResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CloseServerResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CloseServerResponse;
})();

module.exports = $root;
