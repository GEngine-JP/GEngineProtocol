/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ReqUserLogin = (function() {

    /**
     * Properties of a ReqUserLogin.
     * @exports IReqUserLogin
     * @interface IReqUserLogin
     * @property {UserMsgId|null} [msgId] ReqUserLogin msgId
     * @property {number|null} [sex] ReqUserLogin sex
     * @property {number|Long|null} [userId] ReqUserLogin userId
     * @property {string|null} [loginName] ReqUserLogin loginName
     */

    /**
     * Constructs a new ReqUserLogin.
     * @exports ReqUserLogin
     * @classdesc Represents a ReqUserLogin.
     * @implements IReqUserLogin
     * @constructor
     * @param {IReqUserLogin=} [properties] Properties to set
     */
    function ReqUserLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqUserLogin msgId.
     * @member {UserMsgId} msgId
     * @memberof ReqUserLogin
     * @instance
     */
    ReqUserLogin.prototype.msgId = 0;

    /**
     * ReqUserLogin sex.
     * @member {number} sex
     * @memberof ReqUserLogin
     * @instance
     */
    ReqUserLogin.prototype.sex = 0;

    /**
     * ReqUserLogin userId.
     * @member {number|Long} userId
     * @memberof ReqUserLogin
     * @instance
     */
    ReqUserLogin.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReqUserLogin loginName.
     * @member {string} loginName
     * @memberof ReqUserLogin
     * @instance
     */
    ReqUserLogin.prototype.loginName = "";

    /**
     * Creates a new ReqUserLogin instance using the specified properties.
     * @function create
     * @memberof ReqUserLogin
     * @static
     * @param {IReqUserLogin=} [properties] Properties to set
     * @returns {ReqUserLogin} ReqUserLogin instance
     */
    ReqUserLogin.create = function create(properties) {
        return new ReqUserLogin(properties);
    };

    /**
     * Encodes the specified ReqUserLogin message. Does not implicitly {@link ReqUserLogin.verify|verify} messages.
     * @function encode
     * @memberof ReqUserLogin
     * @static
     * @param {IReqUserLogin} message ReqUserLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqUserLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
        if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sex);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
        if (message.loginName != null && Object.hasOwnProperty.call(message, "loginName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.loginName);
        return writer;
    };

    /**
     * Encodes the specified ReqUserLogin message, length delimited. Does not implicitly {@link ReqUserLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqUserLogin
     * @static
     * @param {IReqUserLogin} message ReqUserLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqUserLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqUserLogin message from the specified reader or buffer.
     * @function decode
     * @memberof ReqUserLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqUserLogin} ReqUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqUserLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqUserLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgId = reader.int32();
                break;
            case 2:
                message.sex = reader.int32();
                break;
            case 3:
                message.userId = reader.int64();
                break;
            case 4:
                message.loginName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqUserLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqUserLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqUserLogin} ReqUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqUserLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqUserLogin message.
     * @function verify
     * @memberof ReqUserLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqUserLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            switch (message.msgId) {
            default:
                return "msgId: enum value expected";
            case 0:
            case 101001:
            case 101002:
                break;
            }
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isInteger(message.sex))
                return "sex: integer expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.loginName != null && message.hasOwnProperty("loginName"))
            if (!$util.isString(message.loginName))
                return "loginName: string expected";
        return null;
    };

    /**
     * Creates a ReqUserLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqUserLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqUserLogin} ReqUserLogin
     */
    ReqUserLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqUserLogin)
            return object;
        var message = new $root.ReqUserLogin();
        switch (object.msgId) {
        case "UserUnknown":
        case 0:
            message.msgId = 0;
            break;
        case "LoginRequest":
        case 101001:
            message.msgId = 101001;
            break;
        case "LoginResponse":
        case 101002:
            message.msgId = 101002;
            break;
        }
        if (object.sex != null)
            message.sex = object.sex | 0;
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
        if (object.loginName != null)
            message.loginName = String(object.loginName);
        return message;
    };

    /**
     * Creates a plain object from a ReqUserLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqUserLogin
     * @static
     * @param {ReqUserLogin} message ReqUserLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqUserLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.msgId = options.enums === String ? "UserUnknown" : 0;
            object.sex = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            object.loginName = "";
        }
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            object.msgId = options.enums === String ? $root.UserMsgId[message.msgId] : message.msgId;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
        if (message.loginName != null && message.hasOwnProperty("loginName"))
            object.loginName = message.loginName;
        return object;
    };

    /**
     * Converts this ReqUserLogin to JSON.
     * @function toJSON
     * @memberof ReqUserLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqUserLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqUserLogin;
})();

$root.ResUserLogin = (function() {

    /**
     * Properties of a ResUserLogin.
     * @exports IResUserLogin
     * @interface IResUserLogin
     * @property {UserMsgId|null} [msgId] ResUserLogin msgId
     * @property {number|null} [sex] ResUserLogin sex
     * @property {number|Long|null} [userId] ResUserLogin userId
     * @property {string|null} [loginName] ResUserLogin loginName
     */

    /**
     * Constructs a new ResUserLogin.
     * @exports ResUserLogin
     * @classdesc Represents a ResUserLogin.
     * @implements IResUserLogin
     * @constructor
     * @param {IResUserLogin=} [properties] Properties to set
     */
    function ResUserLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResUserLogin msgId.
     * @member {UserMsgId} msgId
     * @memberof ResUserLogin
     * @instance
     */
    ResUserLogin.prototype.msgId = 0;

    /**
     * ResUserLogin sex.
     * @member {number} sex
     * @memberof ResUserLogin
     * @instance
     */
    ResUserLogin.prototype.sex = 0;

    /**
     * ResUserLogin userId.
     * @member {number|Long} userId
     * @memberof ResUserLogin
     * @instance
     */
    ResUserLogin.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ResUserLogin loginName.
     * @member {string} loginName
     * @memberof ResUserLogin
     * @instance
     */
    ResUserLogin.prototype.loginName = "";

    /**
     * Creates a new ResUserLogin instance using the specified properties.
     * @function create
     * @memberof ResUserLogin
     * @static
     * @param {IResUserLogin=} [properties] Properties to set
     * @returns {ResUserLogin} ResUserLogin instance
     */
    ResUserLogin.create = function create(properties) {
        return new ResUserLogin(properties);
    };

    /**
     * Encodes the specified ResUserLogin message. Does not implicitly {@link ResUserLogin.verify|verify} messages.
     * @function encode
     * @memberof ResUserLogin
     * @static
     * @param {IResUserLogin} message ResUserLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResUserLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
        if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sex);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
        if (message.loginName != null && Object.hasOwnProperty.call(message, "loginName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.loginName);
        return writer;
    };

    /**
     * Encodes the specified ResUserLogin message, length delimited. Does not implicitly {@link ResUserLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResUserLogin
     * @static
     * @param {IResUserLogin} message ResUserLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResUserLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResUserLogin message from the specified reader or buffer.
     * @function decode
     * @memberof ResUserLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResUserLogin} ResUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResUserLogin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResUserLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.msgId = reader.int32();
                break;
            case 2:
                message.sex = reader.int32();
                break;
            case 3:
                message.userId = reader.int64();
                break;
            case 4:
                message.loginName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResUserLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResUserLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResUserLogin} ResUserLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResUserLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResUserLogin message.
     * @function verify
     * @memberof ResUserLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResUserLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            switch (message.msgId) {
            default:
                return "msgId: enum value expected";
            case 0:
            case 101001:
            case 101002:
                break;
            }
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isInteger(message.sex))
                return "sex: integer expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
        if (message.loginName != null && message.hasOwnProperty("loginName"))
            if (!$util.isString(message.loginName))
                return "loginName: string expected";
        return null;
    };

    /**
     * Creates a ResUserLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResUserLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResUserLogin} ResUserLogin
     */
    ResUserLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.ResUserLogin)
            return object;
        var message = new $root.ResUserLogin();
        switch (object.msgId) {
        case "UserUnknown":
        case 0:
            message.msgId = 0;
            break;
        case "LoginRequest":
        case 101001:
            message.msgId = 101001;
            break;
        case "LoginResponse":
        case 101002:
            message.msgId = 101002;
            break;
        }
        if (object.sex != null)
            message.sex = object.sex | 0;
        if (object.userId != null)
            if ($util.Long)
                (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
            else if (typeof object.userId === "string")
                message.userId = parseInt(object.userId, 10);
            else if (typeof object.userId === "number")
                message.userId = object.userId;
            else if (typeof object.userId === "object")
                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
        if (object.loginName != null)
            message.loginName = String(object.loginName);
        return message;
    };

    /**
     * Creates a plain object from a ResUserLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResUserLogin
     * @static
     * @param {ResUserLogin} message ResUserLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResUserLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.msgId = options.enums === String ? "UserUnknown" : 0;
            object.sex = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userId = options.longs === String ? "0" : 0;
            object.loginName = "";
        }
        if (message.msgId != null && message.hasOwnProperty("msgId"))
            object.msgId = options.enums === String ? $root.UserMsgId[message.msgId] : message.msgId;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (typeof message.userId === "number")
                object.userId = options.longs === String ? String(message.userId) : message.userId;
            else
                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
        if (message.loginName != null && message.hasOwnProperty("loginName"))
            object.loginName = message.loginName;
        return object;
    };

    /**
     * Converts this ResUserLogin to JSON.
     * @function toJSON
     * @memberof ResUserLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResUserLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ResUserLogin;
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
