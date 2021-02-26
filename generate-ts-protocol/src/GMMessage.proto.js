/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ReqGMCloseServer = (function() {

    /**
     * Properties of a ReqGMCloseServer.
     * @exports IReqGMCloseServer
     * @interface IReqGMCloseServer
     * @property {GMMsgId|null} [msgId] ReqGMCloseServer msgId
     * @property {string|null} [resMsg] ReqGMCloseServer resMsg
     */

    /**
     * Constructs a new ReqGMCloseServer.
     * @exports ReqGMCloseServer
     * @classdesc Represents a ReqGMCloseServer.
     * @implements IReqGMCloseServer
     * @constructor
     * @param {IReqGMCloseServer=} [properties] Properties to set
     */
    function ReqGMCloseServer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqGMCloseServer msgId.
     * @member {GMMsgId} msgId
     * @memberof ReqGMCloseServer
     * @instance
     */
    ReqGMCloseServer.prototype.msgId = 0;

    /**
     * ReqGMCloseServer resMsg.
     * @member {string} resMsg
     * @memberof ReqGMCloseServer
     * @instance
     */
    ReqGMCloseServer.prototype.resMsg = "";

    /**
     * Creates a new ReqGMCloseServer instance using the specified properties.
     * @function create
     * @memberof ReqGMCloseServer
     * @static
     * @param {IReqGMCloseServer=} [properties] Properties to set
     * @returns {ReqGMCloseServer} ReqGMCloseServer instance
     */
    ReqGMCloseServer.create = function create(properties) {
        return new ReqGMCloseServer(properties);
    };

    /**
     * Encodes the specified ReqGMCloseServer message. Does not implicitly {@link ReqGMCloseServer.verify|verify} messages.
     * @function encode
     * @memberof ReqGMCloseServer
     * @static
     * @param {IReqGMCloseServer} message ReqGMCloseServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGMCloseServer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
        if (message.resMsg != null && Object.hasOwnProperty.call(message, "resMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.resMsg);
        return writer;
    };

    /**
     * Encodes the specified ReqGMCloseServer message, length delimited. Does not implicitly {@link ReqGMCloseServer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGMCloseServer
     * @static
     * @param {IReqGMCloseServer} message ReqGMCloseServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGMCloseServer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqGMCloseServer message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGMCloseServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGMCloseServer} ReqGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGMCloseServer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGMCloseServer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgId = reader.int32();
                break;
            case 2:
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
     * Decodes a ReqGMCloseServer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGMCloseServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGMCloseServer} ReqGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGMCloseServer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqGMCloseServer message.
     * @function verify
     * @memberof ReqGMCloseServer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGMCloseServer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            switch (message.msgId) {
            default:
                return "msgId: enum value expected";
            case 0:
            case 201001:
            case 201002:
                break;
            }
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            if (!$util.isString(message.resMsg))
                return "resMsg: string expected";
        return null;
    };

    /**
     * Creates a ReqGMCloseServer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGMCloseServer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGMCloseServer} ReqGMCloseServer
     */
    ReqGMCloseServer.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGMCloseServer)
            return object;
        var message = new $root.ReqGMCloseServer();
        switch (object.msgId) {
        case "GmUnknown":
        case 0:
            message.msgId = 0;
            break;
        case "CloseServerRequest":
        case 201001:
            message.msgId = 201001;
            break;
        case "CloseServerResponse":
        case 201002:
            message.msgId = 201002;
            break;
        }
        if (object.resMsg != null)
            message.resMsg = String(object.resMsg);
        return message;
    };

    /**
     * Creates a plain object from a ReqGMCloseServer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGMCloseServer
     * @static
     * @param {ReqGMCloseServer} message ReqGMCloseServer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGMCloseServer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.msgId = options.enums === String ? "GmUnknown" : 0;
            object.resMsg = "";
        }
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            object.msgId = options.enums === String ? $root.GMMsgId[message.msgId] : message.msgId;
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            object.resMsg = message.resMsg;
        return object;
    };

    /**
     * Converts this ReqGMCloseServer to JSON.
     * @function toJSON
     * @memberof ReqGMCloseServer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGMCloseServer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqGMCloseServer;
})();

$root.ResGMCloseServer = (function() {

    /**
     * Properties of a ResGMCloseServer.
     * @exports IResGMCloseServer
     * @interface IResGMCloseServer
     * @property {GMMsgId|null} [msgId] ResGMCloseServer msgId
     * @property {string|null} [resMsg] ResGMCloseServer resMsg
     */

    /**
     * Constructs a new ResGMCloseServer.
     * @exports ResGMCloseServer
     * @classdesc Represents a ResGMCloseServer.
     * @implements IResGMCloseServer
     * @constructor
     * @param {IResGMCloseServer=} [properties] Properties to set
     */
    function ResGMCloseServer(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResGMCloseServer msgId.
     * @member {GMMsgId} msgId
     * @memberof ResGMCloseServer
     * @instance
     */
    ResGMCloseServer.prototype.msgId = 0;

    /**
     * ResGMCloseServer resMsg.
     * @member {string} resMsg
     * @memberof ResGMCloseServer
     * @instance
     */
    ResGMCloseServer.prototype.resMsg = "";

    /**
     * Creates a new ResGMCloseServer instance using the specified properties.
     * @function create
     * @memberof ResGMCloseServer
     * @static
     * @param {IResGMCloseServer=} [properties] Properties to set
     * @returns {ResGMCloseServer} ResGMCloseServer instance
     */
    ResGMCloseServer.create = function create(properties) {
        return new ResGMCloseServer(properties);
    };

    /**
     * Encodes the specified ResGMCloseServer message. Does not implicitly {@link ResGMCloseServer.verify|verify} messages.
     * @function encode
     * @memberof ResGMCloseServer
     * @static
     * @param {IResGMCloseServer} message ResGMCloseServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResGMCloseServer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
        if (message.resMsg != null && Object.hasOwnProperty.call(message, "resMsg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.resMsg);
        return writer;
    };

    /**
     * Encodes the specified ResGMCloseServer message, length delimited. Does not implicitly {@link ResGMCloseServer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResGMCloseServer
     * @static
     * @param {IResGMCloseServer} message ResGMCloseServer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResGMCloseServer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResGMCloseServer message from the specified reader or buffer.
     * @function decode
     * @memberof ResGMCloseServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResGMCloseServer} ResGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResGMCloseServer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResGMCloseServer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgId = reader.int32();
                break;
            case 2:
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
     * Decodes a ResGMCloseServer message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResGMCloseServer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResGMCloseServer} ResGMCloseServer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResGMCloseServer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResGMCloseServer message.
     * @function verify
     * @memberof ResGMCloseServer
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResGMCloseServer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            switch (message.msgId) {
            default:
                return "msgId: enum value expected";
            case 0:
            case 201001:
            case 201002:
                break;
            }
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            if (!$util.isString(message.resMsg))
                return "resMsg: string expected";
        return null;
    };

    /**
     * Creates a ResGMCloseServer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResGMCloseServer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResGMCloseServer} ResGMCloseServer
     */
    ResGMCloseServer.fromObject = function fromObject(object) {
        if (object instanceof $root.ResGMCloseServer)
            return object;
        var message = new $root.ResGMCloseServer();
        switch (object.msgId) {
        case "GmUnknown":
        case 0:
            message.msgId = 0;
            break;
        case "CloseServerRequest":
        case 201001:
            message.msgId = 201001;
            break;
        case "CloseServerResponse":
        case 201002:
            message.msgId = 201002;
            break;
        }
        if (object.resMsg != null)
            message.resMsg = String(object.resMsg);
        return message;
    };

    /**
     * Creates a plain object from a ResGMCloseServer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResGMCloseServer
     * @static
     * @param {ResGMCloseServer} message ResGMCloseServer
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResGMCloseServer.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.msgId = options.enums === String ? "GmUnknown" : 0;
            object.resMsg = "";
        }
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            object.msgId = options.enums === String ? $root.GMMsgId[message.msgId] : message.msgId;
        if (message.resMsg != null && message.hasOwnProperty("resMsg"))
            object.resMsg = message.resMsg;
        return object;
    };

    /**
     * Converts this ResGMCloseServer to JSON.
     * @function toJSON
     * @memberof ResGMCloseServer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResGMCloseServer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ResGMCloseServer;
})();

/**
 * GMMsgId enum.
 * @exports GMMsgId
 * @enum {number}
 * @property {number} GmUnknown=0 GmUnknown value
 * @property {number} CloseServerRequest=201001 CloseServerRequest value
 * @property {number} CloseServerResponse=201002 CloseServerResponse value
 */
$root.GMMsgId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GmUnknown"] = 0;
    values[valuesById[201001] = "CloseServerRequest"] = 201001;
    values[valuesById[201002] = "CloseServerResponse"] = 201002;
    return values;
})();

/**
 * UserMsgId enum.
 * @exports UserMsgId
 * @enum {number}
 * @property {number} UserUnknown=0 UserUnknown value
 * @property {number} LoginRequest=101001 LoginRequest value
 * @property {number} LoginResponse=101002 LoginResponse value
 */
$root.UserMsgId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UserUnknown"] = 0;
    values[valuesById[101001] = "LoginRequest"] = 101001;
    values[valuesById[101002] = "LoginResponse"] = 101002;
    return values;
})();

module.exports = $root;
