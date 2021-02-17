/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SystemErrorResponse = (function() {

    /**
     * Properties of a SystemErrorResponse.
     * @exports ISystemErrorResponse
     * @interface ISystemErrorResponse
     * @property {MID|null} [mid] SystemErrorResponse mid
     * @property {SystemErroCode|null} [errorCode] SystemErrorResponse errorCode
     * @property {string|null} [msg] SystemErrorResponse msg
     */

    /**
     * Constructs a new SystemErrorResponse.
     * @exports SystemErrorResponse
     * @classdesc Represents a SystemErrorResponse.
     * @implements ISystemErrorResponse
     * @constructor
     * @param {ISystemErrorResponse=} [properties] Properties to set
     */
    function SystemErrorResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SystemErrorResponse mid.
     * @member {MID} mid
     * @memberof SystemErrorResponse
     * @instance
     */
    SystemErrorResponse.prototype.mid = 10006;

    /**
     * SystemErrorResponse errorCode.
     * @member {SystemErroCode} errorCode
     * @memberof SystemErrorResponse
     * @instance
     */
    SystemErrorResponse.prototype.errorCode = 1;

    /**
     * SystemErrorResponse msg.
     * @member {string} msg
     * @memberof SystemErrorResponse
     * @instance
     */
    SystemErrorResponse.prototype.msg = "";

    /**
     * Creates a new SystemErrorResponse instance using the specified properties.
     * @function create
     * @memberof SystemErrorResponse
     * @static
     * @param {ISystemErrorResponse=} [properties] Properties to set
     * @returns {SystemErrorResponse} SystemErrorResponse instance
     */
    SystemErrorResponse.create = function create(properties) {
        return new SystemErrorResponse(properties);
    };

    /**
     * Encodes the specified SystemErrorResponse message. Does not implicitly {@link SystemErrorResponse.verify|verify} messages.
     * @function encode
     * @memberof SystemErrorResponse
     * @static
     * @param {ISystemErrorResponse} message SystemErrorResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SystemErrorResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified SystemErrorResponse message, length delimited. Does not implicitly {@link SystemErrorResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SystemErrorResponse
     * @static
     * @param {ISystemErrorResponse} message SystemErrorResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SystemErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SystemErrorResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SystemErrorResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SystemErrorResponse} SystemErrorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SystemErrorResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SystemErrorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.errorCode = reader.int32();
                break;
            case 3:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SystemErrorResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SystemErrorResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SystemErrorResponse} SystemErrorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SystemErrorResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SystemErrorResponse message.
     * @function verify
     * @memberof SystemErrorResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SystemErrorResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mid != null && message.hasOwnProperty("mid"))
            switch (message.mid) {
            default:
                return "mid: enum value expected";
            case 0:
            case 1001:
            case 1002:
            case 1003:
            case 1004:
            case 1005:
            case 1006:
            case 1007:
            case 1008:
            case 10001:
            case 10002:
            case 10003:
            case 10004:
            case 10006:
            case 10007:
            case 10008:
            case 10009:
            case 10010:
            case 10011:
            case 10012:
            case 10013:
            case 10014:
            case 10015:
            case 10016:
            case 10017:
            case 10018:
            case 10019:
            case 10020:
            case 10021:
            case 10022:
            case 10023:
            case 10024:
            case 10025:
            case 10026:
            case 10027:
            case 10028:
            case 10029:
            case 10030:
            case 10031:
            case 10032:
            case 10033:
            case 10034:
            case 20001:
            case 20002:
            case 20003:
            case 20004:
            case 20005:
            case 20006:
            case 20008:
            case 20010:
            case 20012:
            case 20013:
            case 20014:
            case 20015:
            case 20016:
            case 20017:
            case 20018:
            case 20019:
            case 20020:
                break;
            }
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            switch (message.errorCode) {
            default:
                return "errorCode: enum value expected";
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a SystemErrorResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SystemErrorResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SystemErrorResponse} SystemErrorResponse
     */
    SystemErrorResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SystemErrorResponse)
            return object;
        var message = new $root.SystemErrorResponse();
        switch (object.mid) {
        case "Base":
        case 0:
            message.mid = 0;
            break;
        case "ServerRegisterReq":
        case 1001:
            message.mid = 1001;
            break;
        case "ServerRegisterRes":
        case 1002:
            message.mid = 1002;
            break;
        case "ServerListReq":
        case 1003:
            message.mid = 1003;
            break;
        case "ServerListRes":
        case 1004:
            message.mid = 1004;
            break;
        case "ChangeRoleServerReq":
        case 1005:
            message.mid = 1005;
            break;
        case "ChangeRoleServerRes":
        case 1006:
            message.mid = 1006;
            break;
        case "ServerEventReq":
        case 1007:
            message.mid = 1007;
            break;
        case "ServerEventRes":
        case 1008:
            message.mid = 1008;
            break;
        case "LoginReq":
        case 10001:
            message.mid = 10001;
            break;
        case "LoginRes":
        case 10002:
            message.mid = 10002;
            break;
        case "LoginSubGameReq":
        case 10003:
            message.mid = 10003;
            break;
        case "LoginSubGameRes":
        case 10004:
            message.mid = 10004;
            break;
        case "SystemErrorRes":
        case 10006:
            message.mid = 10006;
            break;
        case "QuitReq":
        case 10007:
            message.mid = 10007;
            break;
        case "QuitRes":
        case 10008:
            message.mid = 10008;
            break;
        case "QuitSubGameReq":
        case 10009:
            message.mid = 10009;
            break;
        case "QuitSubGameRes":
        case 10010:
            message.mid = 10010;
            break;
        case "HeartReq":
        case 10011:
            message.mid = 10011;
            break;
        case "HeartRes":
        case 10012:
            message.mid = 10012;
            break;
        case "UdpConnectReq":
        case 10013:
            message.mid = 10013;
            break;
        case "UdpConnectRes":
        case 10014:
            message.mid = 10014;
            break;
        case "ChatReq":
        case 10015:
            message.mid = 10015;
            break;
        case "ChatRes":
        case 10016:
            message.mid = 10016;
            break;
        case "PacketItemsReq":
        case 10017:
            message.mid = 10017;
            break;
        case "PacketItemsRes":
        case 10018:
            message.mid = 10018;
            break;
        case "UseItemReq":
        case 10019:
            message.mid = 10019;
            break;
        case "UseItemRes":
        case 10020:
            message.mid = 10020;
            break;
        case "MailListReq":
        case 10021:
            message.mid = 10021;
            break;
        case "MailListRes":
        case 10022:
            message.mid = 10022;
            break;
        case "ModifyMailReq":
        case 10023:
            message.mid = 10023;
            break;
        case "ModifyMailRes":
        case 10024:
            message.mid = 10024;
            break;
        case "GuildInfoReq":
        case 10025:
            message.mid = 10025;
            break;
        case "GuildInfoRes":
        case 10026:
            message.mid = 10026;
            break;
        case "GuildListReq":
        case 10027:
            message.mid = 10027;
            break;
        case "GuildListRes":
        case 10028:
            message.mid = 10028;
            break;
        case "ApplyGuildReq":
        case 10029:
            message.mid = 10029;
            break;
        case "ApplyGuildRes":
        case 10030:
            message.mid = 10030;
            break;
        case "GuildApprovalReq":
        case 10031:
            message.mid = 10031;
            break;
        case "GuildApprovalRes":
        case 10032:
            message.mid = 10032;
            break;
        case "CreateGuildReq":
        case 10033:
            message.mid = 10033;
            break;
        case "CreateGuildRes":
        case 10034:
            message.mid = 10034;
            break;
        case "EnterRoomReq":
        case 20001:
            message.mid = 20001;
            break;
        case "EnterRoomRes":
        case 20002:
            message.mid = 20002;
            break;
        case "ApplyAthleticsReq":
        case 20003:
            message.mid = 20003;
            break;
        case "ApplyAthleticsRes":
        case 20004:
            message.mid = 20004;
            break;
        case "QuitRoomReq":
        case 20005:
            message.mid = 20005;
            break;
        case "QuitRoomRes":
        case 20006:
            message.mid = 20006;
            break;
        case "FishEnterRoomRes":
        case 20008:
            message.mid = 20008;
            break;
        case "RoomInfoRes":
        case 20010:
            message.mid = 20010;
            break;
        case "RoomChangeRes":
        case 20012:
            message.mid = 20012;
            break;
        case "UseSkillReq":
        case 20013:
            message.mid = 20013;
            break;
        case "UseSkillRes":
        case 20014:
            message.mid = 20014;
            break;
        case "FireReq":
        case 20015:
            message.mid = 20015;
            break;
        case "FireRes":
        case 20016:
            message.mid = 20016;
            break;
        case "FireResultReq":
        case 20017:
            message.mid = 20017;
            break;
        case "FireResultRes":
        case 20018:
            message.mid = 20018;
            break;
        case "GunLeveUpReq":
        case 20019:
            message.mid = 20019;
            break;
        case "GunLeveUpRes":
        case 20020:
            message.mid = 20020;
            break;
        }
        switch (object.errorCode) {
        case "HallNotFind":
        case 1:
            message.errorCode = 1;
            break;
        case "GameNotFind":
        case 2:
            message.errorCode = 2;
            break;
        case "ConectReset":
        case 3:
            message.errorCode = 3;
            break;
        }
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a SystemErrorResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SystemErrorResponse
     * @static
     * @param {SystemErrorResponse} message SystemErrorResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SystemErrorResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "SystemErrorRes" : 10006;
            object.errorCode = options.enums === String ? "HallNotFind" : 1;
            object.msg = "";
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = options.enums === String ? $root.SystemErroCode[message.errorCode] : message.errorCode;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this SystemErrorResponse to JSON.
     * @function toJSON
     * @memberof SystemErrorResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SystemErrorResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SystemErrorResponse;
})();

/**
 * SystemErroCode enum.
 * @exports SystemErroCode
 * @enum {number}
 * @property {number} HallNotFind=1 HallNotFind value
 * @property {number} GameNotFind=2 GameNotFind value
 * @property {number} ConectReset=3 ConectReset value
 */
$root.SystemErroCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "HallNotFind"] = 1;
    values[valuesById[2] = "GameNotFind"] = 2;
    values[valuesById[3] = "ConectReset"] = 3;
    return values;
})();

$root.HeartRequest = (function() {

    /**
     * Properties of a HeartRequest.
     * @exports IHeartRequest
     * @interface IHeartRequest
     * @property {MID|null} [mid] HeartRequest mid
     */

    /**
     * Constructs a new HeartRequest.
     * @exports HeartRequest
     * @classdesc Represents a HeartRequest.
     * @implements IHeartRequest
     * @constructor
     * @param {IHeartRequest=} [properties] Properties to set
     */
    function HeartRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HeartRequest mid.
     * @member {MID} mid
     * @memberof HeartRequest
     * @instance
     */
    HeartRequest.prototype.mid = 10011;

    /**
     * Creates a new HeartRequest instance using the specified properties.
     * @function create
     * @memberof HeartRequest
     * @static
     * @param {IHeartRequest=} [properties] Properties to set
     * @returns {HeartRequest} HeartRequest instance
     */
    HeartRequest.create = function create(properties) {
        return new HeartRequest(properties);
    };

    /**
     * Encodes the specified HeartRequest message. Does not implicitly {@link HeartRequest.verify|verify} messages.
     * @function encode
     * @memberof HeartRequest
     * @static
     * @param {IHeartRequest} message HeartRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        return writer;
    };

    /**
     * Encodes the specified HeartRequest message, length delimited. Does not implicitly {@link HeartRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartRequest
     * @static
     * @param {IHeartRequest} message HeartRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HeartRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartRequest} HeartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartRequest} HeartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartRequest message.
     * @function verify
     * @memberof HeartRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mid != null && message.hasOwnProperty("mid"))
            switch (message.mid) {
            default:
                return "mid: enum value expected";
            case 0:
            case 1001:
            case 1002:
            case 1003:
            case 1004:
            case 1005:
            case 1006:
            case 1007:
            case 1008:
            case 10001:
            case 10002:
            case 10003:
            case 10004:
            case 10006:
            case 10007:
            case 10008:
            case 10009:
            case 10010:
            case 10011:
            case 10012:
            case 10013:
            case 10014:
            case 10015:
            case 10016:
            case 10017:
            case 10018:
            case 10019:
            case 10020:
            case 10021:
            case 10022:
            case 10023:
            case 10024:
            case 10025:
            case 10026:
            case 10027:
            case 10028:
            case 10029:
            case 10030:
            case 10031:
            case 10032:
            case 10033:
            case 10034:
            case 20001:
            case 20002:
            case 20003:
            case 20004:
            case 20005:
            case 20006:
            case 20008:
            case 20010:
            case 20012:
            case 20013:
            case 20014:
            case 20015:
            case 20016:
            case 20017:
            case 20018:
            case 20019:
            case 20020:
                break;
            }
        return null;
    };

    /**
     * Creates a HeartRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartRequest} HeartRequest
     */
    HeartRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartRequest)
            return object;
        var message = new $root.HeartRequest();
        switch (object.mid) {
        case "Base":
        case 0:
            message.mid = 0;
            break;
        case "ServerRegisterReq":
        case 1001:
            message.mid = 1001;
            break;
        case "ServerRegisterRes":
        case 1002:
            message.mid = 1002;
            break;
        case "ServerListReq":
        case 1003:
            message.mid = 1003;
            break;
        case "ServerListRes":
        case 1004:
            message.mid = 1004;
            break;
        case "ChangeRoleServerReq":
        case 1005:
            message.mid = 1005;
            break;
        case "ChangeRoleServerRes":
        case 1006:
            message.mid = 1006;
            break;
        case "ServerEventReq":
        case 1007:
            message.mid = 1007;
            break;
        case "ServerEventRes":
        case 1008:
            message.mid = 1008;
            break;
        case "LoginReq":
        case 10001:
            message.mid = 10001;
            break;
        case "LoginRes":
        case 10002:
            message.mid = 10002;
            break;
        case "LoginSubGameReq":
        case 10003:
            message.mid = 10003;
            break;
        case "LoginSubGameRes":
        case 10004:
            message.mid = 10004;
            break;
        case "SystemErrorRes":
        case 10006:
            message.mid = 10006;
            break;
        case "QuitReq":
        case 10007:
            message.mid = 10007;
            break;
        case "QuitRes":
        case 10008:
            message.mid = 10008;
            break;
        case "QuitSubGameReq":
        case 10009:
            message.mid = 10009;
            break;
        case "QuitSubGameRes":
        case 10010:
            message.mid = 10010;
            break;
        case "HeartReq":
        case 10011:
            message.mid = 10011;
            break;
        case "HeartRes":
        case 10012:
            message.mid = 10012;
            break;
        case "UdpConnectReq":
        case 10013:
            message.mid = 10013;
            break;
        case "UdpConnectRes":
        case 10014:
            message.mid = 10014;
            break;
        case "ChatReq":
        case 10015:
            message.mid = 10015;
            break;
        case "ChatRes":
        case 10016:
            message.mid = 10016;
            break;
        case "PacketItemsReq":
        case 10017:
            message.mid = 10017;
            break;
        case "PacketItemsRes":
        case 10018:
            message.mid = 10018;
            break;
        case "UseItemReq":
        case 10019:
            message.mid = 10019;
            break;
        case "UseItemRes":
        case 10020:
            message.mid = 10020;
            break;
        case "MailListReq":
        case 10021:
            message.mid = 10021;
            break;
        case "MailListRes":
        case 10022:
            message.mid = 10022;
            break;
        case "ModifyMailReq":
        case 10023:
            message.mid = 10023;
            break;
        case "ModifyMailRes":
        case 10024:
            message.mid = 10024;
            break;
        case "GuildInfoReq":
        case 10025:
            message.mid = 10025;
            break;
        case "GuildInfoRes":
        case 10026:
            message.mid = 10026;
            break;
        case "GuildListReq":
        case 10027:
            message.mid = 10027;
            break;
        case "GuildListRes":
        case 10028:
            message.mid = 10028;
            break;
        case "ApplyGuildReq":
        case 10029:
            message.mid = 10029;
            break;
        case "ApplyGuildRes":
        case 10030:
            message.mid = 10030;
            break;
        case "GuildApprovalReq":
        case 10031:
            message.mid = 10031;
            break;
        case "GuildApprovalRes":
        case 10032:
            message.mid = 10032;
            break;
        case "CreateGuildReq":
        case 10033:
            message.mid = 10033;
            break;
        case "CreateGuildRes":
        case 10034:
            message.mid = 10034;
            break;
        case "EnterRoomReq":
        case 20001:
            message.mid = 20001;
            break;
        case "EnterRoomRes":
        case 20002:
            message.mid = 20002;
            break;
        case "ApplyAthleticsReq":
        case 20003:
            message.mid = 20003;
            break;
        case "ApplyAthleticsRes":
        case 20004:
            message.mid = 20004;
            break;
        case "QuitRoomReq":
        case 20005:
            message.mid = 20005;
            break;
        case "QuitRoomRes":
        case 20006:
            message.mid = 20006;
            break;
        case "FishEnterRoomRes":
        case 20008:
            message.mid = 20008;
            break;
        case "RoomInfoRes":
        case 20010:
            message.mid = 20010;
            break;
        case "RoomChangeRes":
        case 20012:
            message.mid = 20012;
            break;
        case "UseSkillReq":
        case 20013:
            message.mid = 20013;
            break;
        case "UseSkillRes":
        case 20014:
            message.mid = 20014;
            break;
        case "FireReq":
        case 20015:
            message.mid = 20015;
            break;
        case "FireRes":
        case 20016:
            message.mid = 20016;
            break;
        case "FireResultReq":
        case 20017:
            message.mid = 20017;
            break;
        case "FireResultRes":
        case 20018:
            message.mid = 20018;
            break;
        case "GunLeveUpReq":
        case 20019:
            message.mid = 20019;
            break;
        case "GunLeveUpRes":
        case 20020:
            message.mid = 20020;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a HeartRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartRequest
     * @static
     * @param {HeartRequest} message HeartRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mid = options.enums === String ? "HeartReq" : 10011;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        return object;
    };

    /**
     * Converts this HeartRequest to JSON.
     * @function toJSON
     * @memberof HeartRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HeartRequest;
})();

$root.HeartResponse = (function() {

    /**
     * Properties of a HeartResponse.
     * @exports IHeartResponse
     * @interface IHeartResponse
     * @property {MID|null} [mid] HeartResponse mid
     * @property {number|Long|null} [serverTime] HeartResponse serverTime
     */

    /**
     * Constructs a new HeartResponse.
     * @exports HeartResponse
     * @classdesc Represents a HeartResponse.
     * @implements IHeartResponse
     * @constructor
     * @param {IHeartResponse=} [properties] Properties to set
     */
    function HeartResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HeartResponse mid.
     * @member {MID} mid
     * @memberof HeartResponse
     * @instance
     */
    HeartResponse.prototype.mid = 10012;

    /**
     * HeartResponse serverTime.
     * @member {number|Long} serverTime
     * @memberof HeartResponse
     * @instance
     */
    HeartResponse.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new HeartResponse instance using the specified properties.
     * @function create
     * @memberof HeartResponse
     * @static
     * @param {IHeartResponse=} [properties] Properties to set
     * @returns {HeartResponse} HeartResponse instance
     */
    HeartResponse.create = function create(properties) {
        return new HeartResponse(properties);
    };

    /**
     * Encodes the specified HeartResponse message. Does not implicitly {@link HeartResponse.verify|verify} messages.
     * @function encode
     * @memberof HeartResponse
     * @static
     * @param {IHeartResponse} message HeartResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serverTime);
        return writer;
    };

    /**
     * Encodes the specified HeartResponse message, length delimited. Does not implicitly {@link HeartResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartResponse
     * @static
     * @param {IHeartResponse} message HeartResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HeartResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartResponse} HeartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.serverTime = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartResponse} HeartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartResponse message.
     * @function verify
     * @memberof HeartResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mid != null && message.hasOwnProperty("mid"))
            switch (message.mid) {
            default:
                return "mid: enum value expected";
            case 0:
            case 1001:
            case 1002:
            case 1003:
            case 1004:
            case 1005:
            case 1006:
            case 1007:
            case 1008:
            case 10001:
            case 10002:
            case 10003:
            case 10004:
            case 10006:
            case 10007:
            case 10008:
            case 10009:
            case 10010:
            case 10011:
            case 10012:
            case 10013:
            case 10014:
            case 10015:
            case 10016:
            case 10017:
            case 10018:
            case 10019:
            case 10020:
            case 10021:
            case 10022:
            case 10023:
            case 10024:
            case 10025:
            case 10026:
            case 10027:
            case 10028:
            case 10029:
            case 10030:
            case 10031:
            case 10032:
            case 10033:
            case 10034:
            case 20001:
            case 20002:
            case 20003:
            case 20004:
            case 20005:
            case 20006:
            case 20008:
            case 20010:
            case 20012:
            case 20013:
            case 20014:
            case 20015:
            case 20016:
            case 20017:
            case 20018:
            case 20019:
            case 20020:
                break;
            }
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a HeartResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartResponse} HeartResponse
     */
    HeartResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartResponse)
            return object;
        var message = new $root.HeartResponse();
        switch (object.mid) {
        case "Base":
        case 0:
            message.mid = 0;
            break;
        case "ServerRegisterReq":
        case 1001:
            message.mid = 1001;
            break;
        case "ServerRegisterRes":
        case 1002:
            message.mid = 1002;
            break;
        case "ServerListReq":
        case 1003:
            message.mid = 1003;
            break;
        case "ServerListRes":
        case 1004:
            message.mid = 1004;
            break;
        case "ChangeRoleServerReq":
        case 1005:
            message.mid = 1005;
            break;
        case "ChangeRoleServerRes":
        case 1006:
            message.mid = 1006;
            break;
        case "ServerEventReq":
        case 1007:
            message.mid = 1007;
            break;
        case "ServerEventRes":
        case 1008:
            message.mid = 1008;
            break;
        case "LoginReq":
        case 10001:
            message.mid = 10001;
            break;
        case "LoginRes":
        case 10002:
            message.mid = 10002;
            break;
        case "LoginSubGameReq":
        case 10003:
            message.mid = 10003;
            break;
        case "LoginSubGameRes":
        case 10004:
            message.mid = 10004;
            break;
        case "SystemErrorRes":
        case 10006:
            message.mid = 10006;
            break;
        case "QuitReq":
        case 10007:
            message.mid = 10007;
            break;
        case "QuitRes":
        case 10008:
            message.mid = 10008;
            break;
        case "QuitSubGameReq":
        case 10009:
            message.mid = 10009;
            break;
        case "QuitSubGameRes":
        case 10010:
            message.mid = 10010;
            break;
        case "HeartReq":
        case 10011:
            message.mid = 10011;
            break;
        case "HeartRes":
        case 10012:
            message.mid = 10012;
            break;
        case "UdpConnectReq":
        case 10013:
            message.mid = 10013;
            break;
        case "UdpConnectRes":
        case 10014:
            message.mid = 10014;
            break;
        case "ChatReq":
        case 10015:
            message.mid = 10015;
            break;
        case "ChatRes":
        case 10016:
            message.mid = 10016;
            break;
        case "PacketItemsReq":
        case 10017:
            message.mid = 10017;
            break;
        case "PacketItemsRes":
        case 10018:
            message.mid = 10018;
            break;
        case "UseItemReq":
        case 10019:
            message.mid = 10019;
            break;
        case "UseItemRes":
        case 10020:
            message.mid = 10020;
            break;
        case "MailListReq":
        case 10021:
            message.mid = 10021;
            break;
        case "MailListRes":
        case 10022:
            message.mid = 10022;
            break;
        case "ModifyMailReq":
        case 10023:
            message.mid = 10023;
            break;
        case "ModifyMailRes":
        case 10024:
            message.mid = 10024;
            break;
        case "GuildInfoReq":
        case 10025:
            message.mid = 10025;
            break;
        case "GuildInfoRes":
        case 10026:
            message.mid = 10026;
            break;
        case "GuildListReq":
        case 10027:
            message.mid = 10027;
            break;
        case "GuildListRes":
        case 10028:
            message.mid = 10028;
            break;
        case "ApplyGuildReq":
        case 10029:
            message.mid = 10029;
            break;
        case "ApplyGuildRes":
        case 10030:
            message.mid = 10030;
            break;
        case "GuildApprovalReq":
        case 10031:
            message.mid = 10031;
            break;
        case "GuildApprovalRes":
        case 10032:
            message.mid = 10032;
            break;
        case "CreateGuildReq":
        case 10033:
            message.mid = 10033;
            break;
        case "CreateGuildRes":
        case 10034:
            message.mid = 10034;
            break;
        case "EnterRoomReq":
        case 20001:
            message.mid = 20001;
            break;
        case "EnterRoomRes":
        case 20002:
            message.mid = 20002;
            break;
        case "ApplyAthleticsReq":
        case 20003:
            message.mid = 20003;
            break;
        case "ApplyAthleticsRes":
        case 20004:
            message.mid = 20004;
            break;
        case "QuitRoomReq":
        case 20005:
            message.mid = 20005;
            break;
        case "QuitRoomRes":
        case 20006:
            message.mid = 20006;
            break;
        case "FishEnterRoomRes":
        case 20008:
            message.mid = 20008;
            break;
        case "RoomInfoRes":
        case 20010:
            message.mid = 20010;
            break;
        case "RoomChangeRes":
        case 20012:
            message.mid = 20012;
            break;
        case "UseSkillReq":
        case 20013:
            message.mid = 20013;
            break;
        case "UseSkillRes":
        case 20014:
            message.mid = 20014;
            break;
        case "FireReq":
        case 20015:
            message.mid = 20015;
            break;
        case "FireRes":
        case 20016:
            message.mid = 20016;
            break;
        case "FireResultReq":
        case 20017:
            message.mid = 20017;
            break;
        case "FireResultRes":
        case 20018:
            message.mid = 20018;
            break;
        case "GunLeveUpReq":
        case 20019:
            message.mid = 20019;
            break;
        case "GunLeveUpRes":
        case 20020:
            message.mid = 20020;
            break;
        }
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a HeartResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartResponse
     * @static
     * @param {HeartResponse} message HeartResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "HeartRes" : 10012;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
        return object;
    };

    /**
     * Converts this HeartResponse to JSON.
     * @function toJSON
     * @memberof HeartResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HeartResponse;
})();

$root.UdpConnectRequest = (function() {

    /**
     * Properties of an UdpConnectRequest.
     * @exports IUdpConnectRequest
     * @interface IUdpConnectRequest
     * @property {MID|null} [mid] UdpConnectRequest mid
     * @property {number|Long|null} [sessionId] UdpConnectRequest sessionId
     * @property {number|Long|null} [rid] UdpConnectRequest rid
     */

    /**
     * Constructs a new UdpConnectRequest.
     * @exports UdpConnectRequest
     * @classdesc Represents an UdpConnectRequest.
     * @implements IUdpConnectRequest
     * @constructor
     * @param {IUdpConnectRequest=} [properties] Properties to set
     */
    function UdpConnectRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UdpConnectRequest mid.
     * @member {MID} mid
     * @memberof UdpConnectRequest
     * @instance
     */
    UdpConnectRequest.prototype.mid = 10013;

    /**
     * UdpConnectRequest sessionId.
     * @member {number|Long} sessionId
     * @memberof UdpConnectRequest
     * @instance
     */
    UdpConnectRequest.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UdpConnectRequest rid.
     * @member {number|Long} rid
     * @memberof UdpConnectRequest
     * @instance
     */
    UdpConnectRequest.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UdpConnectRequest instance using the specified properties.
     * @function create
     * @memberof UdpConnectRequest
     * @static
     * @param {IUdpConnectRequest=} [properties] Properties to set
     * @returns {UdpConnectRequest} UdpConnectRequest instance
     */
    UdpConnectRequest.create = function create(properties) {
        return new UdpConnectRequest(properties);
    };

    /**
     * Encodes the specified UdpConnectRequest message. Does not implicitly {@link UdpConnectRequest.verify|verify} messages.
     * @function encode
     * @memberof UdpConnectRequest
     * @static
     * @param {IUdpConnectRequest} message UdpConnectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpConnectRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sessionId);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.rid);
        return writer;
    };

    /**
     * Encodes the specified UdpConnectRequest message, length delimited. Does not implicitly {@link UdpConnectRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UdpConnectRequest
     * @static
     * @param {IUdpConnectRequest} message UdpConnectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpConnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UdpConnectRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UdpConnectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UdpConnectRequest} UdpConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpConnectRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UdpConnectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.sessionId = reader.int64();
                break;
            case 3:
                message.rid = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UdpConnectRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UdpConnectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UdpConnectRequest} UdpConnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpConnectRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UdpConnectRequest message.
     * @function verify
     * @memberof UdpConnectRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UdpConnectRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mid != null && message.hasOwnProperty("mid"))
            switch (message.mid) {
            default:
                return "mid: enum value expected";
            case 0:
            case 1001:
            case 1002:
            case 1003:
            case 1004:
            case 1005:
            case 1006:
            case 1007:
            case 1008:
            case 10001:
            case 10002:
            case 10003:
            case 10004:
            case 10006:
            case 10007:
            case 10008:
            case 10009:
            case 10010:
            case 10011:
            case 10012:
            case 10013:
            case 10014:
            case 10015:
            case 10016:
            case 10017:
            case 10018:
            case 10019:
            case 10020:
            case 10021:
            case 10022:
            case 10023:
            case 10024:
            case 10025:
            case 10026:
            case 10027:
            case 10028:
            case 10029:
            case 10030:
            case 10031:
            case 10032:
            case 10033:
            case 10034:
            case 20001:
            case 20002:
            case 20003:
            case 20004:
            case 20005:
            case 20006:
            case 20008:
            case 20010:
            case 20012:
            case 20013:
            case 20014:
            case 20015:
            case 20016:
            case 20017:
            case 20018:
            case 20019:
            case 20020:
                break;
            }
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                return "sessionId: integer|Long expected";
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
                return "rid: integer|Long expected";
        return null;
    };

    /**
     * Creates an UdpConnectRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UdpConnectRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UdpConnectRequest} UdpConnectRequest
     */
    UdpConnectRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UdpConnectRequest)
            return object;
        var message = new $root.UdpConnectRequest();
        switch (object.mid) {
        case "Base":
        case 0:
            message.mid = 0;
            break;
        case "ServerRegisterReq":
        case 1001:
            message.mid = 1001;
            break;
        case "ServerRegisterRes":
        case 1002:
            message.mid = 1002;
            break;
        case "ServerListReq":
        case 1003:
            message.mid = 1003;
            break;
        case "ServerListRes":
        case 1004:
            message.mid = 1004;
            break;
        case "ChangeRoleServerReq":
        case 1005:
            message.mid = 1005;
            break;
        case "ChangeRoleServerRes":
        case 1006:
            message.mid = 1006;
            break;
        case "ServerEventReq":
        case 1007:
            message.mid = 1007;
            break;
        case "ServerEventRes":
        case 1008:
            message.mid = 1008;
            break;
        case "LoginReq":
        case 10001:
            message.mid = 10001;
            break;
        case "LoginRes":
        case 10002:
            message.mid = 10002;
            break;
        case "LoginSubGameReq":
        case 10003:
            message.mid = 10003;
            break;
        case "LoginSubGameRes":
        case 10004:
            message.mid = 10004;
            break;
        case "SystemErrorRes":
        case 10006:
            message.mid = 10006;
            break;
        case "QuitReq":
        case 10007:
            message.mid = 10007;
            break;
        case "QuitRes":
        case 10008:
            message.mid = 10008;
            break;
        case "QuitSubGameReq":
        case 10009:
            message.mid = 10009;
            break;
        case "QuitSubGameRes":
        case 10010:
            message.mid = 10010;
            break;
        case "HeartReq":
        case 10011:
            message.mid = 10011;
            break;
        case "HeartRes":
        case 10012:
            message.mid = 10012;
            break;
        case "UdpConnectReq":
        case 10013:
            message.mid = 10013;
            break;
        case "UdpConnectRes":
        case 10014:
            message.mid = 10014;
            break;
        case "ChatReq":
        case 10015:
            message.mid = 10015;
            break;
        case "ChatRes":
        case 10016:
            message.mid = 10016;
            break;
        case "PacketItemsReq":
        case 10017:
            message.mid = 10017;
            break;
        case "PacketItemsRes":
        case 10018:
            message.mid = 10018;
            break;
        case "UseItemReq":
        case 10019:
            message.mid = 10019;
            break;
        case "UseItemRes":
        case 10020:
            message.mid = 10020;
            break;
        case "MailListReq":
        case 10021:
            message.mid = 10021;
            break;
        case "MailListRes":
        case 10022:
            message.mid = 10022;
            break;
        case "ModifyMailReq":
        case 10023:
            message.mid = 10023;
            break;
        case "ModifyMailRes":
        case 10024:
            message.mid = 10024;
            break;
        case "GuildInfoReq":
        case 10025:
            message.mid = 10025;
            break;
        case "GuildInfoRes":
        case 10026:
            message.mid = 10026;
            break;
        case "GuildListReq":
        case 10027:
            message.mid = 10027;
            break;
        case "GuildListRes":
        case 10028:
            message.mid = 10028;
            break;
        case "ApplyGuildReq":
        case 10029:
            message.mid = 10029;
            break;
        case "ApplyGuildRes":
        case 10030:
            message.mid = 10030;
            break;
        case "GuildApprovalReq":
        case 10031:
            message.mid = 10031;
            break;
        case "GuildApprovalRes":
        case 10032:
            message.mid = 10032;
            break;
        case "CreateGuildReq":
        case 10033:
            message.mid = 10033;
            break;
        case "CreateGuildRes":
        case 10034:
            message.mid = 10034;
            break;
        case "EnterRoomReq":
        case 20001:
            message.mid = 20001;
            break;
        case "EnterRoomRes":
        case 20002:
            message.mid = 20002;
            break;
        case "ApplyAthleticsReq":
        case 20003:
            message.mid = 20003;
            break;
        case "ApplyAthleticsRes":
        case 20004:
            message.mid = 20004;
            break;
        case "QuitRoomReq":
        case 20005:
            message.mid = 20005;
            break;
        case "QuitRoomRes":
        case 20006:
            message.mid = 20006;
            break;
        case "FishEnterRoomRes":
        case 20008:
            message.mid = 20008;
            break;
        case "RoomInfoRes":
        case 20010:
            message.mid = 20010;
            break;
        case "RoomChangeRes":
        case 20012:
            message.mid = 20012;
            break;
        case "UseSkillReq":
        case 20013:
            message.mid = 20013;
            break;
        case "UseSkillRes":
        case 20014:
            message.mid = 20014;
            break;
        case "FireReq":
        case 20015:
            message.mid = 20015;
            break;
        case "FireRes":
        case 20016:
            message.mid = 20016;
            break;
        case "FireResultReq":
        case 20017:
            message.mid = 20017;
            break;
        case "FireResultRes":
        case 20018:
            message.mid = 20018;
            break;
        case "GunLeveUpReq":
        case 20019:
            message.mid = 20019;
            break;
        case "GunLeveUpRes":
        case 20020:
            message.mid = 20020;
            break;
        }
        if (object.sessionId != null)
            if ($util.Long)
                (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = false;
            else if (typeof object.sessionId === "string")
                message.sessionId = parseInt(object.sessionId, 10);
            else if (typeof object.sessionId === "number")
                message.sessionId = object.sessionId;
            else if (typeof object.sessionId === "object")
                message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber();
        if (object.rid != null)
            if ($util.Long)
                (message.rid = $util.Long.fromValue(object.rid)).unsigned = false;
            else if (typeof object.rid === "string")
                message.rid = parseInt(object.rid, 10);
            else if (typeof object.rid === "number")
                message.rid = object.rid;
            else if (typeof object.rid === "object")
                message.rid = new $util.LongBits(object.rid.low >>> 0, object.rid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an UdpConnectRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UdpConnectRequest
     * @static
     * @param {UdpConnectRequest} message UdpConnectRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UdpConnectRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "UdpConnectReq" : 10013;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sessionId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (typeof message.sessionId === "number")
                object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
            else
                object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber() : message.sessionId;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        return object;
    };

    /**
     * Converts this UdpConnectRequest to JSON.
     * @function toJSON
     * @memberof UdpConnectRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UdpConnectRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UdpConnectRequest;
})();

$root.UdpConnectResponse = (function() {

    /**
     * Properties of an UdpConnectResponse.
     * @exports IUdpConnectResponse
     * @interface IUdpConnectResponse
     * @property {MID|null} [mid] UdpConnectResponse mid
     * @property {number|null} [result] UdpConnectResponse result
     */

    /**
     * Constructs a new UdpConnectResponse.
     * @exports UdpConnectResponse
     * @classdesc Represents an UdpConnectResponse.
     * @implements IUdpConnectResponse
     * @constructor
     * @param {IUdpConnectResponse=} [properties] Properties to set
     */
    function UdpConnectResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UdpConnectResponse mid.
     * @member {MID} mid
     * @memberof UdpConnectResponse
     * @instance
     */
    UdpConnectResponse.prototype.mid = 10014;

    /**
     * UdpConnectResponse result.
     * @member {number} result
     * @memberof UdpConnectResponse
     * @instance
     */
    UdpConnectResponse.prototype.result = 0;

    /**
     * Creates a new UdpConnectResponse instance using the specified properties.
     * @function create
     * @memberof UdpConnectResponse
     * @static
     * @param {IUdpConnectResponse=} [properties] Properties to set
     * @returns {UdpConnectResponse} UdpConnectResponse instance
     */
    UdpConnectResponse.create = function create(properties) {
        return new UdpConnectResponse(properties);
    };

    /**
     * Encodes the specified UdpConnectResponse message. Does not implicitly {@link UdpConnectResponse.verify|verify} messages.
     * @function encode
     * @memberof UdpConnectResponse
     * @static
     * @param {IUdpConnectResponse} message UdpConnectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpConnectResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified UdpConnectResponse message, length delimited. Does not implicitly {@link UdpConnectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UdpConnectResponse
     * @static
     * @param {IUdpConnectResponse} message UdpConnectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UdpConnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UdpConnectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UdpConnectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UdpConnectResponse} UdpConnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpConnectResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UdpConnectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.result = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UdpConnectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UdpConnectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UdpConnectResponse} UdpConnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UdpConnectResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UdpConnectResponse message.
     * @function verify
     * @memberof UdpConnectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UdpConnectResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mid != null && message.hasOwnProperty("mid"))
            switch (message.mid) {
            default:
                return "mid: enum value expected";
            case 0:
            case 1001:
            case 1002:
            case 1003:
            case 1004:
            case 1005:
            case 1006:
            case 1007:
            case 1008:
            case 10001:
            case 10002:
            case 10003:
            case 10004:
            case 10006:
            case 10007:
            case 10008:
            case 10009:
            case 10010:
            case 10011:
            case 10012:
            case 10013:
            case 10014:
            case 10015:
            case 10016:
            case 10017:
            case 10018:
            case 10019:
            case 10020:
            case 10021:
            case 10022:
            case 10023:
            case 10024:
            case 10025:
            case 10026:
            case 10027:
            case 10028:
            case 10029:
            case 10030:
            case 10031:
            case 10032:
            case 10033:
            case 10034:
            case 20001:
            case 20002:
            case 20003:
            case 20004:
            case 20005:
            case 20006:
            case 20008:
            case 20010:
            case 20012:
            case 20013:
            case 20014:
            case 20015:
            case 20016:
            case 20017:
            case 20018:
            case 20019:
            case 20020:
                break;
            }
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isInteger(message.result))
                return "result: integer expected";
        return null;
    };

    /**
     * Creates an UdpConnectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UdpConnectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UdpConnectResponse} UdpConnectResponse
     */
    UdpConnectResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.UdpConnectResponse)
            return object;
        var message = new $root.UdpConnectResponse();
        switch (object.mid) {
        case "Base":
        case 0:
            message.mid = 0;
            break;
        case "ServerRegisterReq":
        case 1001:
            message.mid = 1001;
            break;
        case "ServerRegisterRes":
        case 1002:
            message.mid = 1002;
            break;
        case "ServerListReq":
        case 1003:
            message.mid = 1003;
            break;
        case "ServerListRes":
        case 1004:
            message.mid = 1004;
            break;
        case "ChangeRoleServerReq":
        case 1005:
            message.mid = 1005;
            break;
        case "ChangeRoleServerRes":
        case 1006:
            message.mid = 1006;
            break;
        case "ServerEventReq":
        case 1007:
            message.mid = 1007;
            break;
        case "ServerEventRes":
        case 1008:
            message.mid = 1008;
            break;
        case "LoginReq":
        case 10001:
            message.mid = 10001;
            break;
        case "LoginRes":
        case 10002:
            message.mid = 10002;
            break;
        case "LoginSubGameReq":
        case 10003:
            message.mid = 10003;
            break;
        case "LoginSubGameRes":
        case 10004:
            message.mid = 10004;
            break;
        case "SystemErrorRes":
        case 10006:
            message.mid = 10006;
            break;
        case "QuitReq":
        case 10007:
            message.mid = 10007;
            break;
        case "QuitRes":
        case 10008:
            message.mid = 10008;
            break;
        case "QuitSubGameReq":
        case 10009:
            message.mid = 10009;
            break;
        case "QuitSubGameRes":
        case 10010:
            message.mid = 10010;
            break;
        case "HeartReq":
        case 10011:
            message.mid = 10011;
            break;
        case "HeartRes":
        case 10012:
            message.mid = 10012;
            break;
        case "UdpConnectReq":
        case 10013:
            message.mid = 10013;
            break;
        case "UdpConnectRes":
        case 10014:
            message.mid = 10014;
            break;
        case "ChatReq":
        case 10015:
            message.mid = 10015;
            break;
        case "ChatRes":
        case 10016:
            message.mid = 10016;
            break;
        case "PacketItemsReq":
        case 10017:
            message.mid = 10017;
            break;
        case "PacketItemsRes":
        case 10018:
            message.mid = 10018;
            break;
        case "UseItemReq":
        case 10019:
            message.mid = 10019;
            break;
        case "UseItemRes":
        case 10020:
            message.mid = 10020;
            break;
        case "MailListReq":
        case 10021:
            message.mid = 10021;
            break;
        case "MailListRes":
        case 10022:
            message.mid = 10022;
            break;
        case "ModifyMailReq":
        case 10023:
            message.mid = 10023;
            break;
        case "ModifyMailRes":
        case 10024:
            message.mid = 10024;
            break;
        case "GuildInfoReq":
        case 10025:
            message.mid = 10025;
            break;
        case "GuildInfoRes":
        case 10026:
            message.mid = 10026;
            break;
        case "GuildListReq":
        case 10027:
            message.mid = 10027;
            break;
        case "GuildListRes":
        case 10028:
            message.mid = 10028;
            break;
        case "ApplyGuildReq":
        case 10029:
            message.mid = 10029;
            break;
        case "ApplyGuildRes":
        case 10030:
            message.mid = 10030;
            break;
        case "GuildApprovalReq":
        case 10031:
            message.mid = 10031;
            break;
        case "GuildApprovalRes":
        case 10032:
            message.mid = 10032;
            break;
        case "CreateGuildReq":
        case 10033:
            message.mid = 10033;
            break;
        case "CreateGuildRes":
        case 10034:
            message.mid = 10034;
            break;
        case "EnterRoomReq":
        case 20001:
            message.mid = 20001;
            break;
        case "EnterRoomRes":
        case 20002:
            message.mid = 20002;
            break;
        case "ApplyAthleticsReq":
        case 20003:
            message.mid = 20003;
            break;
        case "ApplyAthleticsRes":
        case 20004:
            message.mid = 20004;
            break;
        case "QuitRoomReq":
        case 20005:
            message.mid = 20005;
            break;
        case "QuitRoomRes":
        case 20006:
            message.mid = 20006;
            break;
        case "FishEnterRoomRes":
        case 20008:
            message.mid = 20008;
            break;
        case "RoomInfoRes":
        case 20010:
            message.mid = 20010;
            break;
        case "RoomChangeRes":
        case 20012:
            message.mid = 20012;
            break;
        case "UseSkillReq":
        case 20013:
            message.mid = 20013;
            break;
        case "UseSkillRes":
        case 20014:
            message.mid = 20014;
            break;
        case "FireReq":
        case 20015:
            message.mid = 20015;
            break;
        case "FireRes":
        case 20016:
            message.mid = 20016;
            break;
        case "FireResultReq":
        case 20017:
            message.mid = 20017;
            break;
        case "FireResultRes":
        case 20018:
            message.mid = 20018;
            break;
        case "GunLeveUpReq":
        case 20019:
            message.mid = 20019;
            break;
        case "GunLeveUpRes":
        case 20020:
            message.mid = 20020;
            break;
        }
        if (object.result != null)
            message.result = object.result | 0;
        return message;
    };

    /**
     * Creates a plain object from an UdpConnectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UdpConnectResponse
     * @static
     * @param {UdpConnectResponse} message UdpConnectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UdpConnectResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "UdpConnectRes" : 10014;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this UdpConnectResponse to JSON.
     * @function toJSON
     * @memberof UdpConnectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UdpConnectResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UdpConnectResponse;
})();

/**
 * MID enum.
 * @exports MID
 * @enum {number}
 * @property {number} Base=0 Base value
 * @property {number} ServerRegisterReq=1001 ServerRegisterReq value
 * @property {number} ServerRegisterRes=1002 ServerRegisterRes value
 * @property {number} ServerListReq=1003 ServerListReq value
 * @property {number} ServerListRes=1004 ServerListRes value
 * @property {number} ChangeRoleServerReq=1005 ChangeRoleServerReq value
 * @property {number} ChangeRoleServerRes=1006 ChangeRoleServerRes value
 * @property {number} ServerEventReq=1007 ServerEventReq value
 * @property {number} ServerEventRes=1008 ServerEventRes value
 * @property {number} LoginReq=10001 LoginReq value
 * @property {number} LoginRes=10002 LoginRes value
 * @property {number} LoginSubGameReq=10003 LoginSubGameReq value
 * @property {number} LoginSubGameRes=10004 LoginSubGameRes value
 * @property {number} SystemErrorRes=10006 SystemErrorRes value
 * @property {number} QuitReq=10007 QuitReq value
 * @property {number} QuitRes=10008 QuitRes value
 * @property {number} QuitSubGameReq=10009 QuitSubGameReq value
 * @property {number} QuitSubGameRes=10010 QuitSubGameRes value
 * @property {number} HeartReq=10011 HeartReq value
 * @property {number} HeartRes=10012 HeartRes value
 * @property {number} UdpConnectReq=10013 UdpConnectReq value
 * @property {number} UdpConnectRes=10014 UdpConnectRes value
 * @property {number} ChatReq=10015 ChatReq value
 * @property {number} ChatRes=10016 ChatRes value
 * @property {number} PacketItemsReq=10017 PacketItemsReq value
 * @property {number} PacketItemsRes=10018 PacketItemsRes value
 * @property {number} UseItemReq=10019 UseItemReq value
 * @property {number} UseItemRes=10020 UseItemRes value
 * @property {number} MailListReq=10021 MailListReq value
 * @property {number} MailListRes=10022 MailListRes value
 * @property {number} ModifyMailReq=10023 ModifyMailReq value
 * @property {number} ModifyMailRes=10024 ModifyMailRes value
 * @property {number} GuildInfoReq=10025 GuildInfoReq value
 * @property {number} GuildInfoRes=10026 GuildInfoRes value
 * @property {number} GuildListReq=10027 GuildListReq value
 * @property {number} GuildListRes=10028 GuildListRes value
 * @property {number} ApplyGuildReq=10029 ApplyGuildReq value
 * @property {number} ApplyGuildRes=10030 ApplyGuildRes value
 * @property {number} GuildApprovalReq=10031 GuildApprovalReq value
 * @property {number} GuildApprovalRes=10032 GuildApprovalRes value
 * @property {number} CreateGuildReq=10033 CreateGuildReq value
 * @property {number} CreateGuildRes=10034 CreateGuildRes value
 * @property {number} EnterRoomReq=20001 EnterRoomReq value
 * @property {number} EnterRoomRes=20002 EnterRoomRes value
 * @property {number} ApplyAthleticsReq=20003 ApplyAthleticsReq value
 * @property {number} ApplyAthleticsRes=20004 ApplyAthleticsRes value
 * @property {number} QuitRoomReq=20005 QuitRoomReq value
 * @property {number} QuitRoomRes=20006 QuitRoomRes value
 * @property {number} FishEnterRoomRes=20008 FishEnterRoomRes value
 * @property {number} RoomInfoRes=20010 RoomInfoRes value
 * @property {number} RoomChangeRes=20012 RoomChangeRes value
 * @property {number} UseSkillReq=20013 UseSkillReq value
 * @property {number} UseSkillRes=20014 UseSkillRes value
 * @property {number} FireReq=20015 FireReq value
 * @property {number} FireRes=20016 FireRes value
 * @property {number} FireResultReq=20017 FireResultReq value
 * @property {number} FireResultRes=20018 FireResultRes value
 * @property {number} GunLeveUpReq=20019 GunLeveUpReq value
 * @property {number} GunLeveUpRes=20020 GunLeveUpRes value
 */
$root.MID = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Base"] = 0;
    values[valuesById[1001] = "ServerRegisterReq"] = 1001;
    values[valuesById[1002] = "ServerRegisterRes"] = 1002;
    values[valuesById[1003] = "ServerListReq"] = 1003;
    values[valuesById[1004] = "ServerListRes"] = 1004;
    values[valuesById[1005] = "ChangeRoleServerReq"] = 1005;
    values[valuesById[1006] = "ChangeRoleServerRes"] = 1006;
    values[valuesById[1007] = "ServerEventReq"] = 1007;
    values[valuesById[1008] = "ServerEventRes"] = 1008;
    values[valuesById[10001] = "LoginReq"] = 10001;
    values[valuesById[10002] = "LoginRes"] = 10002;
    values[valuesById[10003] = "LoginSubGameReq"] = 10003;
    values[valuesById[10004] = "LoginSubGameRes"] = 10004;
    values[valuesById[10006] = "SystemErrorRes"] = 10006;
    values[valuesById[10007] = "QuitReq"] = 10007;
    values[valuesById[10008] = "QuitRes"] = 10008;
    values[valuesById[10009] = "QuitSubGameReq"] = 10009;
    values[valuesById[10010] = "QuitSubGameRes"] = 10010;
    values[valuesById[10011] = "HeartReq"] = 10011;
    values[valuesById[10012] = "HeartRes"] = 10012;
    values[valuesById[10013] = "UdpConnectReq"] = 10013;
    values[valuesById[10014] = "UdpConnectRes"] = 10014;
    values[valuesById[10015] = "ChatReq"] = 10015;
    values[valuesById[10016] = "ChatRes"] = 10016;
    values[valuesById[10017] = "PacketItemsReq"] = 10017;
    values[valuesById[10018] = "PacketItemsRes"] = 10018;
    values[valuesById[10019] = "UseItemReq"] = 10019;
    values[valuesById[10020] = "UseItemRes"] = 10020;
    values[valuesById[10021] = "MailListReq"] = 10021;
    values[valuesById[10022] = "MailListRes"] = 10022;
    values[valuesById[10023] = "ModifyMailReq"] = 10023;
    values[valuesById[10024] = "ModifyMailRes"] = 10024;
    values[valuesById[10025] = "GuildInfoReq"] = 10025;
    values[valuesById[10026] = "GuildInfoRes"] = 10026;
    values[valuesById[10027] = "GuildListReq"] = 10027;
    values[valuesById[10028] = "GuildListRes"] = 10028;
    values[valuesById[10029] = "ApplyGuildReq"] = 10029;
    values[valuesById[10030] = "ApplyGuildRes"] = 10030;
    values[valuesById[10031] = "GuildApprovalReq"] = 10031;
    values[valuesById[10032] = "GuildApprovalRes"] = 10032;
    values[valuesById[10033] = "CreateGuildReq"] = 10033;
    values[valuesById[10034] = "CreateGuildRes"] = 10034;
    values[valuesById[20001] = "EnterRoomReq"] = 20001;
    values[valuesById[20002] = "EnterRoomRes"] = 20002;
    values[valuesById[20003] = "ApplyAthleticsReq"] = 20003;
    values[valuesById[20004] = "ApplyAthleticsRes"] = 20004;
    values[valuesById[20005] = "QuitRoomReq"] = 20005;
    values[valuesById[20006] = "QuitRoomRes"] = 20006;
    values[valuesById[20008] = "FishEnterRoomRes"] = 20008;
    values[valuesById[20010] = "RoomInfoRes"] = 20010;
    values[valuesById[20012] = "RoomChangeRes"] = 20012;
    values[valuesById[20013] = "UseSkillReq"] = 20013;
    values[valuesById[20014] = "UseSkillRes"] = 20014;
    values[valuesById[20015] = "FireReq"] = 20015;
    values[valuesById[20016] = "FireRes"] = 20016;
    values[valuesById[20017] = "FireResultReq"] = 20017;
    values[valuesById[20018] = "FireResultRes"] = 20018;
    values[valuesById[20019] = "GunLeveUpReq"] = 20019;
    values[valuesById[20020] = "GunLeveUpRes"] = 20020;
    return values;
})();

module.exports = $root;
