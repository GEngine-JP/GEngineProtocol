/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GuildInfoRequest = (function() {

    /**
     * Properties of a GuildInfoRequest.
     * @exports IGuildInfoRequest
     * @interface IGuildInfoRequest
     * @property {MID|null} [mid] GuildInfoRequest mid
     * @property {number|Long|null} [guildId] GuildInfoRequest guildId
     */

    /**
     * Constructs a new GuildInfoRequest.
     * @exports GuildInfoRequest
     * @classdesc Represents a GuildInfoRequest.
     * @implements IGuildInfoRequest
     * @constructor
     * @param {IGuildInfoRequest=} [properties] Properties to set
     */
    function GuildInfoRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildInfoRequest mid.
     * @member {MID} mid
     * @memberof GuildInfoRequest
     * @instance
     */
    GuildInfoRequest.prototype.mid = 10025;

    /**
     * GuildInfoRequest guildId.
     * @member {number|Long} guildId
     * @memberof GuildInfoRequest
     * @instance
     */
    GuildInfoRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GuildInfoRequest instance using the specified properties.
     * @function create
     * @memberof GuildInfoRequest
     * @static
     * @param {IGuildInfoRequest=} [properties] Properties to set
     * @returns {GuildInfoRequest} GuildInfoRequest instance
     */
    GuildInfoRequest.create = function create(properties) {
        return new GuildInfoRequest(properties);
    };

    /**
     * Encodes the specified GuildInfoRequest message. Does not implicitly {@link GuildInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof GuildInfoRequest
     * @static
     * @param {IGuildInfoRequest} message GuildInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildInfoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.guildId);
        return writer;
    };

    /**
     * Encodes the specified GuildInfoRequest message, length delimited. Does not implicitly {@link GuildInfoRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildInfoRequest
     * @static
     * @param {IGuildInfoRequest} message GuildInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GuildInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildInfoRequest} GuildInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.guildId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GuildInfoRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildInfoRequest} GuildInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildInfoRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildInfoRequest message.
     * @function verify
     * @memberof GuildInfoRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildInfoRequest.verify = function verify(message) {
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
        if (message.guildId != null && message.hasOwnProperty("guildId"))
            if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                return "guildId: integer|Long expected";
        return null;
    };

    /**
     * Creates a GuildInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildInfoRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildInfoRequest} GuildInfoRequest
     */
    GuildInfoRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildInfoRequest)
            return object;
        var message = new $root.GuildInfoRequest();
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
        if (object.guildId != null)
            if ($util.Long)
                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = false;
            else if (typeof object.guildId === "string")
                message.guildId = parseInt(object.guildId, 10);
            else if (typeof object.guildId === "number")
                message.guildId = object.guildId;
            else if (typeof object.guildId === "object")
                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GuildInfoRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildInfoRequest
     * @static
     * @param {GuildInfoRequest} message GuildInfoRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildInfoRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "GuildInfoReq" : 10025;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.guildId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.guildId != null && message.hasOwnProperty("guildId"))
            if (typeof message.guildId === "number")
                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
            else
                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber() : message.guildId;
        return object;
    };

    /**
     * Converts this GuildInfoRequest to JSON.
     * @function toJSON
     * @memberof GuildInfoRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildInfoRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildInfoRequest;
})();

$root.GuildInfoResponse = (function() {

    /**
     * Properties of a GuildInfoResponse.
     * @exports IGuildInfoResponse
     * @interface IGuildInfoResponse
     * @property {MID|null} [mid] GuildInfoResponse mid
     * @property {IGuildInfo|null} [guildInfo] GuildInfoResponse guildInfo
     */

    /**
     * Constructs a new GuildInfoResponse.
     * @exports GuildInfoResponse
     * @classdesc Represents a GuildInfoResponse.
     * @implements IGuildInfoResponse
     * @constructor
     * @param {IGuildInfoResponse=} [properties] Properties to set
     */
    function GuildInfoResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildInfoResponse mid.
     * @member {MID} mid
     * @memberof GuildInfoResponse
     * @instance
     */
    GuildInfoResponse.prototype.mid = 10026;

    /**
     * GuildInfoResponse guildInfo.
     * @member {IGuildInfo|null|undefined} guildInfo
     * @memberof GuildInfoResponse
     * @instance
     */
    GuildInfoResponse.prototype.guildInfo = null;

    /**
     * Creates a new GuildInfoResponse instance using the specified properties.
     * @function create
     * @memberof GuildInfoResponse
     * @static
     * @param {IGuildInfoResponse=} [properties] Properties to set
     * @returns {GuildInfoResponse} GuildInfoResponse instance
     */
    GuildInfoResponse.create = function create(properties) {
        return new GuildInfoResponse(properties);
    };

    /**
     * Encodes the specified GuildInfoResponse message. Does not implicitly {@link GuildInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof GuildInfoResponse
     * @static
     * @param {IGuildInfoResponse} message GuildInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildInfoResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.guildInfo != null && Object.hasOwnProperty.call(message, "guildInfo"))
            $root.GuildInfo.encode(message.guildInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GuildInfoResponse message, length delimited. Does not implicitly {@link GuildInfoResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildInfoResponse
     * @static
     * @param {IGuildInfoResponse} message GuildInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildInfoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GuildInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildInfoResponse} GuildInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildInfoResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.guildInfo = $root.GuildInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GuildInfoResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildInfoResponse} GuildInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildInfoResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildInfoResponse message.
     * @function verify
     * @memberof GuildInfoResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildInfoResponse.verify = function verify(message) {
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
        if (message.guildInfo != null && message.hasOwnProperty("guildInfo")) {
            var error = $root.GuildInfo.verify(message.guildInfo);
            if (error)
                return "guildInfo." + error;
        }
        return null;
    };

    /**
     * Creates a GuildInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildInfoResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildInfoResponse} GuildInfoResponse
     */
    GuildInfoResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildInfoResponse)
            return object;
        var message = new $root.GuildInfoResponse();
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
        if (object.guildInfo != null) {
            if (typeof object.guildInfo !== "object")
                throw TypeError(".GuildInfoResponse.guildInfo: object expected");
            message.guildInfo = $root.GuildInfo.fromObject(object.guildInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a GuildInfoResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildInfoResponse
     * @static
     * @param {GuildInfoResponse} message GuildInfoResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildInfoResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "GuildInfoRes" : 10026;
            object.guildInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.guildInfo != null && message.hasOwnProperty("guildInfo"))
            object.guildInfo = $root.GuildInfo.toObject(message.guildInfo, options);
        return object;
    };

    /**
     * Converts this GuildInfoResponse to JSON.
     * @function toJSON
     * @memberof GuildInfoResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildInfoResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildInfoResponse;
})();

$root.GuildListRequest = (function() {

    /**
     * Properties of a GuildListRequest.
     * @exports IGuildListRequest
     * @interface IGuildListRequest
     * @property {MID|null} [mid] GuildListRequest mid
     */

    /**
     * Constructs a new GuildListRequest.
     * @exports GuildListRequest
     * @classdesc Represents a GuildListRequest.
     * @implements IGuildListRequest
     * @constructor
     * @param {IGuildListRequest=} [properties] Properties to set
     */
    function GuildListRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildListRequest mid.
     * @member {MID} mid
     * @memberof GuildListRequest
     * @instance
     */
    GuildListRequest.prototype.mid = 10027;

    /**
     * Creates a new GuildListRequest instance using the specified properties.
     * @function create
     * @memberof GuildListRequest
     * @static
     * @param {IGuildListRequest=} [properties] Properties to set
     * @returns {GuildListRequest} GuildListRequest instance
     */
    GuildListRequest.create = function create(properties) {
        return new GuildListRequest(properties);
    };

    /**
     * Encodes the specified GuildListRequest message. Does not implicitly {@link GuildListRequest.verify|verify} messages.
     * @function encode
     * @memberof GuildListRequest
     * @static
     * @param {IGuildListRequest} message GuildListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        return writer;
    };

    /**
     * Encodes the specified GuildListRequest message, length delimited. Does not implicitly {@link GuildListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildListRequest
     * @static
     * @param {IGuildListRequest} message GuildListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GuildListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildListRequest} GuildListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildListRequest();
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
     * Decodes a GuildListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildListRequest} GuildListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildListRequest message.
     * @function verify
     * @memberof GuildListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildListRequest.verify = function verify(message) {
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
     * Creates a GuildListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildListRequest} GuildListRequest
     */
    GuildListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildListRequest)
            return object;
        var message = new $root.GuildListRequest();
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
     * Creates a plain object from a GuildListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildListRequest
     * @static
     * @param {GuildListRequest} message GuildListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildListRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mid = options.enums === String ? "GuildListReq" : 10027;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        return object;
    };

    /**
     * Converts this GuildListRequest to JSON.
     * @function toJSON
     * @memberof GuildListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildListRequest;
})();

$root.GuildListResponse = (function() {

    /**
     * Properties of a GuildListResponse.
     * @exports IGuildListResponse
     * @interface IGuildListResponse
     * @property {MID|null} [mid] GuildListResponse mid
     * @property {Array.<IGuildInfo>|null} [guilds] GuildListResponse guilds
     */

    /**
     * Constructs a new GuildListResponse.
     * @exports GuildListResponse
     * @classdesc Represents a GuildListResponse.
     * @implements IGuildListResponse
     * @constructor
     * @param {IGuildListResponse=} [properties] Properties to set
     */
    function GuildListResponse(properties) {
        this.guilds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildListResponse mid.
     * @member {MID} mid
     * @memberof GuildListResponse
     * @instance
     */
    GuildListResponse.prototype.mid = 10028;

    /**
     * GuildListResponse guilds.
     * @member {Array.<IGuildInfo>} guilds
     * @memberof GuildListResponse
     * @instance
     */
    GuildListResponse.prototype.guilds = $util.emptyArray;

    /**
     * Creates a new GuildListResponse instance using the specified properties.
     * @function create
     * @memberof GuildListResponse
     * @static
     * @param {IGuildListResponse=} [properties] Properties to set
     * @returns {GuildListResponse} GuildListResponse instance
     */
    GuildListResponse.create = function create(properties) {
        return new GuildListResponse(properties);
    };

    /**
     * Encodes the specified GuildListResponse message. Does not implicitly {@link GuildListResponse.verify|verify} messages.
     * @function encode
     * @memberof GuildListResponse
     * @static
     * @param {IGuildListResponse} message GuildListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.guilds != null && message.guilds.length)
            for (var i = 0; i < message.guilds.length; ++i)
                $root.GuildInfo.encode(message.guilds[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GuildListResponse message, length delimited. Does not implicitly {@link GuildListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildListResponse
     * @static
     * @param {IGuildListResponse} message GuildListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GuildListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildListResponse} GuildListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                if (!(message.guilds && message.guilds.length))
                    message.guilds = [];
                message.guilds.push($root.GuildInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GuildListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildListResponse} GuildListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildListResponse message.
     * @function verify
     * @memberof GuildListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildListResponse.verify = function verify(message) {
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
        if (message.guilds != null && message.hasOwnProperty("guilds")) {
            if (!Array.isArray(message.guilds))
                return "guilds: array expected";
            for (var i = 0; i < message.guilds.length; ++i) {
                var error = $root.GuildInfo.verify(message.guilds[i]);
                if (error)
                    return "guilds." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GuildListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildListResponse} GuildListResponse
     */
    GuildListResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildListResponse)
            return object;
        var message = new $root.GuildListResponse();
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
        if (object.guilds) {
            if (!Array.isArray(object.guilds))
                throw TypeError(".GuildListResponse.guilds: array expected");
            message.guilds = [];
            for (var i = 0; i < object.guilds.length; ++i) {
                if (typeof object.guilds[i] !== "object")
                    throw TypeError(".GuildListResponse.guilds: object expected");
                message.guilds[i] = $root.GuildInfo.fromObject(object.guilds[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GuildListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildListResponse
     * @static
     * @param {GuildListResponse} message GuildListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildListResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.guilds = [];
        if (options.defaults)
            object.mid = options.enums === String ? "GuildListRes" : 10028;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.guilds && message.guilds.length) {
            object.guilds = [];
            for (var j = 0; j < message.guilds.length; ++j)
                object.guilds[j] = $root.GuildInfo.toObject(message.guilds[j], options);
        }
        return object;
    };

    /**
     * Converts this GuildListResponse to JSON.
     * @function toJSON
     * @memberof GuildListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildListResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildListResponse;
})();

$root.ApplyGuildRequest = (function() {

    /**
     * Properties of an ApplyGuildRequest.
     * @exports IApplyGuildRequest
     * @interface IApplyGuildRequest
     * @property {MID|null} [mid] ApplyGuildRequest mid
     * @property {number|Long|null} [guildId] ApplyGuildRequest guildId
     */

    /**
     * Constructs a new ApplyGuildRequest.
     * @exports ApplyGuildRequest
     * @classdesc Represents an ApplyGuildRequest.
     * @implements IApplyGuildRequest
     * @constructor
     * @param {IApplyGuildRequest=} [properties] Properties to set
     */
    function ApplyGuildRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ApplyGuildRequest mid.
     * @member {MID} mid
     * @memberof ApplyGuildRequest
     * @instance
     */
    ApplyGuildRequest.prototype.mid = 10029;

    /**
     * ApplyGuildRequest guildId.
     * @member {number|Long} guildId
     * @memberof ApplyGuildRequest
     * @instance
     */
    ApplyGuildRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ApplyGuildRequest instance using the specified properties.
     * @function create
     * @memberof ApplyGuildRequest
     * @static
     * @param {IApplyGuildRequest=} [properties] Properties to set
     * @returns {ApplyGuildRequest} ApplyGuildRequest instance
     */
    ApplyGuildRequest.create = function create(properties) {
        return new ApplyGuildRequest(properties);
    };

    /**
     * Encodes the specified ApplyGuildRequest message. Does not implicitly {@link ApplyGuildRequest.verify|verify} messages.
     * @function encode
     * @memberof ApplyGuildRequest
     * @static
     * @param {IApplyGuildRequest} message ApplyGuildRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyGuildRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.guildId);
        return writer;
    };

    /**
     * Encodes the specified ApplyGuildRequest message, length delimited. Does not implicitly {@link ApplyGuildRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ApplyGuildRequest
     * @static
     * @param {IApplyGuildRequest} message ApplyGuildRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyGuildRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ApplyGuildRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyGuildRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ApplyGuildRequest} ApplyGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyGuildRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ApplyGuildRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.guildId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ApplyGuildRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ApplyGuildRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ApplyGuildRequest} ApplyGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyGuildRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ApplyGuildRequest message.
     * @function verify
     * @memberof ApplyGuildRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ApplyGuildRequest.verify = function verify(message) {
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
        if (message.guildId != null && message.hasOwnProperty("guildId"))
            if (!$util.isInteger(message.guildId) && !(message.guildId && $util.isInteger(message.guildId.low) && $util.isInteger(message.guildId.high)))
                return "guildId: integer|Long expected";
        return null;
    };

    /**
     * Creates an ApplyGuildRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ApplyGuildRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ApplyGuildRequest} ApplyGuildRequest
     */
    ApplyGuildRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ApplyGuildRequest)
            return object;
        var message = new $root.ApplyGuildRequest();
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
        if (object.guildId != null)
            if ($util.Long)
                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = false;
            else if (typeof object.guildId === "string")
                message.guildId = parseInt(object.guildId, 10);
            else if (typeof object.guildId === "number")
                message.guildId = object.guildId;
            else if (typeof object.guildId === "object")
                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an ApplyGuildRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ApplyGuildRequest
     * @static
     * @param {ApplyGuildRequest} message ApplyGuildRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ApplyGuildRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ApplyGuildReq" : 10029;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.guildId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.guildId != null && message.hasOwnProperty("guildId"))
            if (typeof message.guildId === "number")
                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
            else
                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber() : message.guildId;
        return object;
    };

    /**
     * Converts this ApplyGuildRequest to JSON.
     * @function toJSON
     * @memberof ApplyGuildRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ApplyGuildRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ApplyGuildRequest;
})();

$root.ApplyGuildResponse = (function() {

    /**
     * Properties of an ApplyGuildResponse.
     * @exports IApplyGuildResponse
     * @interface IApplyGuildResponse
     * @property {MID|null} [mid] ApplyGuildResponse mid
     * @property {number|null} [result] ApplyGuildResponse result
     */

    /**
     * Constructs a new ApplyGuildResponse.
     * @exports ApplyGuildResponse
     * @classdesc Represents an ApplyGuildResponse.
     * @implements IApplyGuildResponse
     * @constructor
     * @param {IApplyGuildResponse=} [properties] Properties to set
     */
    function ApplyGuildResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ApplyGuildResponse mid.
     * @member {MID} mid
     * @memberof ApplyGuildResponse
     * @instance
     */
    ApplyGuildResponse.prototype.mid = 10030;

    /**
     * ApplyGuildResponse result.
     * @member {number} result
     * @memberof ApplyGuildResponse
     * @instance
     */
    ApplyGuildResponse.prototype.result = 0;

    /**
     * Creates a new ApplyGuildResponse instance using the specified properties.
     * @function create
     * @memberof ApplyGuildResponse
     * @static
     * @param {IApplyGuildResponse=} [properties] Properties to set
     * @returns {ApplyGuildResponse} ApplyGuildResponse instance
     */
    ApplyGuildResponse.create = function create(properties) {
        return new ApplyGuildResponse(properties);
    };

    /**
     * Encodes the specified ApplyGuildResponse message. Does not implicitly {@link ApplyGuildResponse.verify|verify} messages.
     * @function encode
     * @memberof ApplyGuildResponse
     * @static
     * @param {IApplyGuildResponse} message ApplyGuildResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyGuildResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified ApplyGuildResponse message, length delimited. Does not implicitly {@link ApplyGuildResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ApplyGuildResponse
     * @static
     * @param {IApplyGuildResponse} message ApplyGuildResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ApplyGuildResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyGuildResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ApplyGuildResponse} ApplyGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyGuildResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ApplyGuildResponse();
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
     * Decodes an ApplyGuildResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ApplyGuildResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ApplyGuildResponse} ApplyGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyGuildResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ApplyGuildResponse message.
     * @function verify
     * @memberof ApplyGuildResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ApplyGuildResponse.verify = function verify(message) {
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
     * Creates an ApplyGuildResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ApplyGuildResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ApplyGuildResponse} ApplyGuildResponse
     */
    ApplyGuildResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ApplyGuildResponse)
            return object;
        var message = new $root.ApplyGuildResponse();
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
     * Creates a plain object from an ApplyGuildResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ApplyGuildResponse
     * @static
     * @param {ApplyGuildResponse} message ApplyGuildResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ApplyGuildResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ApplyGuildRes" : 10030;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this ApplyGuildResponse to JSON.
     * @function toJSON
     * @memberof ApplyGuildResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ApplyGuildResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ApplyGuildResponse;
})();

$root.GuildApprovalRequest = (function() {

    /**
     * Properties of a GuildApprovalRequest.
     * @exports IGuildApprovalRequest
     * @interface IGuildApprovalRequest
     * @property {MID|null} [mid] GuildApprovalRequest mid
     * @property {number|Long|null} [roleId] GuildApprovalRequest roleId
     * @property {number} type GuildApprovalRequest type
     */

    /**
     * Constructs a new GuildApprovalRequest.
     * @exports GuildApprovalRequest
     * @classdesc Represents a GuildApprovalRequest.
     * @implements IGuildApprovalRequest
     * @constructor
     * @param {IGuildApprovalRequest=} [properties] Properties to set
     */
    function GuildApprovalRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildApprovalRequest mid.
     * @member {MID} mid
     * @memberof GuildApprovalRequest
     * @instance
     */
    GuildApprovalRequest.prototype.mid = 10031;

    /**
     * GuildApprovalRequest roleId.
     * @member {number|Long} roleId
     * @memberof GuildApprovalRequest
     * @instance
     */
    GuildApprovalRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GuildApprovalRequest type.
     * @member {number} type
     * @memberof GuildApprovalRequest
     * @instance
     */
    GuildApprovalRequest.prototype.type = 0;

    /**
     * Creates a new GuildApprovalRequest instance using the specified properties.
     * @function create
     * @memberof GuildApprovalRequest
     * @static
     * @param {IGuildApprovalRequest=} [properties] Properties to set
     * @returns {GuildApprovalRequest} GuildApprovalRequest instance
     */
    GuildApprovalRequest.create = function create(properties) {
        return new GuildApprovalRequest(properties);
    };

    /**
     * Encodes the specified GuildApprovalRequest message. Does not implicitly {@link GuildApprovalRequest.verify|verify} messages.
     * @function encode
     * @memberof GuildApprovalRequest
     * @static
     * @param {IGuildApprovalRequest} message GuildApprovalRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildApprovalRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.roleId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified GuildApprovalRequest message, length delimited. Does not implicitly {@link GuildApprovalRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildApprovalRequest
     * @static
     * @param {IGuildApprovalRequest} message GuildApprovalRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildApprovalRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildApprovalRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GuildApprovalRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildApprovalRequest} GuildApprovalRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildApprovalRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildApprovalRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.roleId = reader.int64();
                break;
            case 3:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a GuildApprovalRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildApprovalRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildApprovalRequest} GuildApprovalRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildApprovalRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildApprovalRequest message.
     * @function verify
     * @memberof GuildApprovalRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildApprovalRequest.verify = function verify(message) {
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
        if (message.roleId != null && message.hasOwnProperty("roleId"))
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        return null;
    };

    /**
     * Creates a GuildApprovalRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildApprovalRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildApprovalRequest} GuildApprovalRequest
     */
    GuildApprovalRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildApprovalRequest)
            return object;
        var message = new $root.GuildApprovalRequest();
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
        if (object.roleId != null)
            if ($util.Long)
                (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
            else if (typeof object.roleId === "string")
                message.roleId = parseInt(object.roleId, 10);
            else if (typeof object.roleId === "number")
                message.roleId = object.roleId;
            else if (typeof object.roleId === "object")
                message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from a GuildApprovalRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildApprovalRequest
     * @static
     * @param {GuildApprovalRequest} message GuildApprovalRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildApprovalRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "GuildApprovalReq" : 10031;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roleId = options.longs === String ? "0" : 0;
            object.type = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.roleId != null && message.hasOwnProperty("roleId"))
            if (typeof message.roleId === "number")
                object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
            else
                object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this GuildApprovalRequest to JSON.
     * @function toJSON
     * @memberof GuildApprovalRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildApprovalRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildApprovalRequest;
})();

$root.GuildApprovalResponse = (function() {

    /**
     * Properties of a GuildApprovalResponse.
     * @exports IGuildApprovalResponse
     * @interface IGuildApprovalResponse
     * @property {MID|null} [mid] GuildApprovalResponse mid
     * @property {number} result GuildApprovalResponse result
     */

    /**
     * Constructs a new GuildApprovalResponse.
     * @exports GuildApprovalResponse
     * @classdesc Represents a GuildApprovalResponse.
     * @implements IGuildApprovalResponse
     * @constructor
     * @param {IGuildApprovalResponse=} [properties] Properties to set
     */
    function GuildApprovalResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildApprovalResponse mid.
     * @member {MID} mid
     * @memberof GuildApprovalResponse
     * @instance
     */
    GuildApprovalResponse.prototype.mid = 10032;

    /**
     * GuildApprovalResponse result.
     * @member {number} result
     * @memberof GuildApprovalResponse
     * @instance
     */
    GuildApprovalResponse.prototype.result = 0;

    /**
     * Creates a new GuildApprovalResponse instance using the specified properties.
     * @function create
     * @memberof GuildApprovalResponse
     * @static
     * @param {IGuildApprovalResponse=} [properties] Properties to set
     * @returns {GuildApprovalResponse} GuildApprovalResponse instance
     */
    GuildApprovalResponse.create = function create(properties) {
        return new GuildApprovalResponse(properties);
    };

    /**
     * Encodes the specified GuildApprovalResponse message. Does not implicitly {@link GuildApprovalResponse.verify|verify} messages.
     * @function encode
     * @memberof GuildApprovalResponse
     * @static
     * @param {IGuildApprovalResponse} message GuildApprovalResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildApprovalResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified GuildApprovalResponse message, length delimited. Does not implicitly {@link GuildApprovalResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildApprovalResponse
     * @static
     * @param {IGuildApprovalResponse} message GuildApprovalResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildApprovalResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildApprovalResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GuildApprovalResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildApprovalResponse} GuildApprovalResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildApprovalResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildApprovalResponse();
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
        if (!message.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: message });
        return message;
    };

    /**
     * Decodes a GuildApprovalResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildApprovalResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildApprovalResponse} GuildApprovalResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildApprovalResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildApprovalResponse message.
     * @function verify
     * @memberof GuildApprovalResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildApprovalResponse.verify = function verify(message) {
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
        if (!$util.isInteger(message.result))
            return "result: integer expected";
        return null;
    };

    /**
     * Creates a GuildApprovalResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildApprovalResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildApprovalResponse} GuildApprovalResponse
     */
    GuildApprovalResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildApprovalResponse)
            return object;
        var message = new $root.GuildApprovalResponse();
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
     * Creates a plain object from a GuildApprovalResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildApprovalResponse
     * @static
     * @param {GuildApprovalResponse} message GuildApprovalResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildApprovalResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "GuildApprovalRes" : 10032;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this GuildApprovalResponse to JSON.
     * @function toJSON
     * @memberof GuildApprovalResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildApprovalResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildApprovalResponse;
})();

$root.CreateGuildRequest = (function() {

    /**
     * Properties of a CreateGuildRequest.
     * @exports ICreateGuildRequest
     * @interface ICreateGuildRequest
     * @property {MID|null} [mid] CreateGuildRequest mid
     * @property {string} name CreateGuildRequest name
     */

    /**
     * Constructs a new CreateGuildRequest.
     * @exports CreateGuildRequest
     * @classdesc Represents a CreateGuildRequest.
     * @implements ICreateGuildRequest
     * @constructor
     * @param {ICreateGuildRequest=} [properties] Properties to set
     */
    function CreateGuildRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateGuildRequest mid.
     * @member {MID} mid
     * @memberof CreateGuildRequest
     * @instance
     */
    CreateGuildRequest.prototype.mid = 10033;

    /**
     * CreateGuildRequest name.
     * @member {string} name
     * @memberof CreateGuildRequest
     * @instance
     */
    CreateGuildRequest.prototype.name = "";

    /**
     * Creates a new CreateGuildRequest instance using the specified properties.
     * @function create
     * @memberof CreateGuildRequest
     * @static
     * @param {ICreateGuildRequest=} [properties] Properties to set
     * @returns {CreateGuildRequest} CreateGuildRequest instance
     */
    CreateGuildRequest.create = function create(properties) {
        return new CreateGuildRequest(properties);
    };

    /**
     * Encodes the specified CreateGuildRequest message. Does not implicitly {@link CreateGuildRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateGuildRequest
     * @static
     * @param {ICreateGuildRequest} message CreateGuildRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateGuildRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified CreateGuildRequest message, length delimited. Does not implicitly {@link CreateGuildRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateGuildRequest
     * @static
     * @param {ICreateGuildRequest} message CreateGuildRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateGuildRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateGuildRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateGuildRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateGuildRequest} CreateGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateGuildRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateGuildRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        return message;
    };

    /**
     * Decodes a CreateGuildRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateGuildRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateGuildRequest} CreateGuildRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateGuildRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateGuildRequest message.
     * @function verify
     * @memberof CreateGuildRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateGuildRequest.verify = function verify(message) {
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
        if (!$util.isString(message.name))
            return "name: string expected";
        return null;
    };

    /**
     * Creates a CreateGuildRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateGuildRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateGuildRequest} CreateGuildRequest
     */
    CreateGuildRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateGuildRequest)
            return object;
        var message = new $root.CreateGuildRequest();
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
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a CreateGuildRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateGuildRequest
     * @static
     * @param {CreateGuildRequest} message CreateGuildRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateGuildRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "CreateGuildReq" : 10033;
            object.name = "";
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this CreateGuildRequest to JSON.
     * @function toJSON
     * @memberof CreateGuildRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateGuildRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateGuildRequest;
})();

$root.CreateGuildResponse = (function() {

    /**
     * Properties of a CreateGuildResponse.
     * @exports ICreateGuildResponse
     * @interface ICreateGuildResponse
     * @property {MID|null} [mid] CreateGuildResponse mid
     * @property {number} result CreateGuildResponse result
     * @property {IGuildInfo|null} [guildInfo] CreateGuildResponse guildInfo
     */

    /**
     * Constructs a new CreateGuildResponse.
     * @exports CreateGuildResponse
     * @classdesc Represents a CreateGuildResponse.
     * @implements ICreateGuildResponse
     * @constructor
     * @param {ICreateGuildResponse=} [properties] Properties to set
     */
    function CreateGuildResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateGuildResponse mid.
     * @member {MID} mid
     * @memberof CreateGuildResponse
     * @instance
     */
    CreateGuildResponse.prototype.mid = 10034;

    /**
     * CreateGuildResponse result.
     * @member {number} result
     * @memberof CreateGuildResponse
     * @instance
     */
    CreateGuildResponse.prototype.result = 0;

    /**
     * CreateGuildResponse guildInfo.
     * @member {IGuildInfo|null|undefined} guildInfo
     * @memberof CreateGuildResponse
     * @instance
     */
    CreateGuildResponse.prototype.guildInfo = null;

    /**
     * Creates a new CreateGuildResponse instance using the specified properties.
     * @function create
     * @memberof CreateGuildResponse
     * @static
     * @param {ICreateGuildResponse=} [properties] Properties to set
     * @returns {CreateGuildResponse} CreateGuildResponse instance
     */
    CreateGuildResponse.create = function create(properties) {
        return new CreateGuildResponse(properties);
    };

    /**
     * Encodes the specified CreateGuildResponse message. Does not implicitly {@link CreateGuildResponse.verify|verify} messages.
     * @function encode
     * @memberof CreateGuildResponse
     * @static
     * @param {ICreateGuildResponse} message CreateGuildResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateGuildResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        if (message.guildInfo != null && Object.hasOwnProperty.call(message, "guildInfo"))
            $root.GuildInfo.encode(message.guildInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateGuildResponse message, length delimited. Does not implicitly {@link CreateGuildResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateGuildResponse
     * @static
     * @param {ICreateGuildResponse} message CreateGuildResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateGuildResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateGuildResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreateGuildResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateGuildResponse} CreateGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateGuildResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateGuildResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.result = reader.int32();
                break;
            case 3:
                message.guildInfo = $root.GuildInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: message });
        return message;
    };

    /**
     * Decodes a CreateGuildResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateGuildResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateGuildResponse} CreateGuildResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateGuildResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateGuildResponse message.
     * @function verify
     * @memberof CreateGuildResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateGuildResponse.verify = function verify(message) {
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
        if (!$util.isInteger(message.result))
            return "result: integer expected";
        if (message.guildInfo != null && message.hasOwnProperty("guildInfo")) {
            var error = $root.GuildInfo.verify(message.guildInfo);
            if (error)
                return "guildInfo." + error;
        }
        return null;
    };

    /**
     * Creates a CreateGuildResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateGuildResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateGuildResponse} CreateGuildResponse
     */
    CreateGuildResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateGuildResponse)
            return object;
        var message = new $root.CreateGuildResponse();
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
        if (object.guildInfo != null) {
            if (typeof object.guildInfo !== "object")
                throw TypeError(".CreateGuildResponse.guildInfo: object expected");
            message.guildInfo = $root.GuildInfo.fromObject(object.guildInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateGuildResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateGuildResponse
     * @static
     * @param {CreateGuildResponse} message CreateGuildResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateGuildResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "CreateGuildRes" : 10034;
            object.result = 0;
            object.guildInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.guildInfo != null && message.hasOwnProperty("guildInfo"))
            object.guildInfo = $root.GuildInfo.toObject(message.guildInfo, options);
        return object;
    };

    /**
     * Converts this CreateGuildResponse to JSON.
     * @function toJSON
     * @memberof CreateGuildResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateGuildResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateGuildResponse;
})();

$root.GuildInfo = (function() {

    /**
     * Properties of a GuildInfo.
     * @exports IGuildInfo
     * @interface IGuildInfo
     * @property {number|Long} id GuildInfo id
     * @property {string} name GuildInfo name
     * @property {number|Long} masterId GuildInfo masterId
     * @property {number} level GuildInfo level
     * @property {Array.<IGuildMemberInfo>|null} [members] GuildInfo members
     */

    /**
     * Constructs a new GuildInfo.
     * @exports GuildInfo
     * @classdesc Represents a GuildInfo.
     * @implements IGuildInfo
     * @constructor
     * @param {IGuildInfo=} [properties] Properties to set
     */
    function GuildInfo(properties) {
        this.members = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildInfo id.
     * @member {number|Long} id
     * @memberof GuildInfo
     * @instance
     */
    GuildInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GuildInfo name.
     * @member {string} name
     * @memberof GuildInfo
     * @instance
     */
    GuildInfo.prototype.name = "";

    /**
     * GuildInfo masterId.
     * @member {number|Long} masterId
     * @memberof GuildInfo
     * @instance
     */
    GuildInfo.prototype.masterId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GuildInfo level.
     * @member {number} level
     * @memberof GuildInfo
     * @instance
     */
    GuildInfo.prototype.level = 0;

    /**
     * GuildInfo members.
     * @member {Array.<IGuildMemberInfo>} members
     * @memberof GuildInfo
     * @instance
     */
    GuildInfo.prototype.members = $util.emptyArray;

    /**
     * Creates a new GuildInfo instance using the specified properties.
     * @function create
     * @memberof GuildInfo
     * @static
     * @param {IGuildInfo=} [properties] Properties to set
     * @returns {GuildInfo} GuildInfo instance
     */
    GuildInfo.create = function create(properties) {
        return new GuildInfo(properties);
    };

    /**
     * Encodes the specified GuildInfo message. Does not implicitly {@link GuildInfo.verify|verify} messages.
     * @function encode
     * @memberof GuildInfo
     * @static
     * @param {IGuildInfo} message GuildInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.masterId);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
        if (message.members != null && message.members.length)
            for (var i = 0; i < message.members.length; ++i)
                $root.GuildMemberInfo.encode(message.members[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GuildInfo message, length delimited. Does not implicitly {@link GuildInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildInfo
     * @static
     * @param {IGuildInfo} message GuildInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GuildInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildInfo} GuildInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.masterId = reader.int64();
                break;
            case 4:
                message.level = reader.int32();
                break;
            case 5:
                if (!(message.members && message.members.length))
                    message.members = [];
                message.members.push($root.GuildMemberInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("masterId"))
            throw $util.ProtocolError("missing required 'masterId'", { instance: message });
        if (!message.hasOwnProperty("level"))
            throw $util.ProtocolError("missing required 'level'", { instance: message });
        return message;
    };

    /**
     * Decodes a GuildInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildInfo} GuildInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildInfo message.
     * @function verify
     * @memberof GuildInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
            return "id: integer|Long expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isInteger(message.masterId) && !(message.masterId && $util.isInteger(message.masterId.low) && $util.isInteger(message.masterId.high)))
            return "masterId: integer|Long expected";
        if (!$util.isInteger(message.level))
            return "level: integer expected";
        if (message.members != null && message.hasOwnProperty("members")) {
            if (!Array.isArray(message.members))
                return "members: array expected";
            for (var i = 0; i < message.members.length; ++i) {
                var error = $root.GuildMemberInfo.verify(message.members[i]);
                if (error)
                    return "members." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GuildInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildInfo} GuildInfo
     */
    GuildInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildInfo)
            return object;
        var message = new $root.GuildInfo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        if (object.masterId != null)
            if ($util.Long)
                (message.masterId = $util.Long.fromValue(object.masterId)).unsigned = false;
            else if (typeof object.masterId === "string")
                message.masterId = parseInt(object.masterId, 10);
            else if (typeof object.masterId === "number")
                message.masterId = object.masterId;
            else if (typeof object.masterId === "object")
                message.masterId = new $util.LongBits(object.masterId.low >>> 0, object.masterId.high >>> 0).toNumber();
        if (object.level != null)
            message.level = object.level | 0;
        if (object.members) {
            if (!Array.isArray(object.members))
                throw TypeError(".GuildInfo.members: array expected");
            message.members = [];
            for (var i = 0; i < object.members.length; ++i) {
                if (typeof object.members[i] !== "object")
                    throw TypeError(".GuildInfo.members: object expected");
                message.members[i] = $root.GuildMemberInfo.fromObject(object.members[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GuildInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildInfo
     * @static
     * @param {GuildInfo} message GuildInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.members = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.name = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.masterId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.masterId = options.longs === String ? "0" : 0;
            object.level = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.masterId != null && message.hasOwnProperty("masterId"))
            if (typeof message.masterId === "number")
                object.masterId = options.longs === String ? String(message.masterId) : message.masterId;
            else
                object.masterId = options.longs === String ? $util.Long.prototype.toString.call(message.masterId) : options.longs === Number ? new $util.LongBits(message.masterId.low >>> 0, message.masterId.high >>> 0).toNumber() : message.masterId;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j)
                object.members[j] = $root.GuildMemberInfo.toObject(message.members[j], options);
        }
        return object;
    };

    /**
     * Converts this GuildInfo to JSON.
     * @function toJSON
     * @memberof GuildInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildInfo;
})();

$root.GuildMemberInfo = (function() {

    /**
     * Properties of a GuildMemberInfo.
     * @exports IGuildMemberInfo
     * @interface IGuildMemberInfo
     * @property {number|Long} roleId GuildMemberInfo roleId
     * @property {string} name GuildMemberInfo name
     * @property {number} level GuildMemberInfo level
     */

    /**
     * Constructs a new GuildMemberInfo.
     * @exports GuildMemberInfo
     * @classdesc Represents a GuildMemberInfo.
     * @implements IGuildMemberInfo
     * @constructor
     * @param {IGuildMemberInfo=} [properties] Properties to set
     */
    function GuildMemberInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GuildMemberInfo roleId.
     * @member {number|Long} roleId
     * @memberof GuildMemberInfo
     * @instance
     */
    GuildMemberInfo.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GuildMemberInfo name.
     * @member {string} name
     * @memberof GuildMemberInfo
     * @instance
     */
    GuildMemberInfo.prototype.name = "";

    /**
     * GuildMemberInfo level.
     * @member {number} level
     * @memberof GuildMemberInfo
     * @instance
     */
    GuildMemberInfo.prototype.level = 0;

    /**
     * Creates a new GuildMemberInfo instance using the specified properties.
     * @function create
     * @memberof GuildMemberInfo
     * @static
     * @param {IGuildMemberInfo=} [properties] Properties to set
     * @returns {GuildMemberInfo} GuildMemberInfo instance
     */
    GuildMemberInfo.create = function create(properties) {
        return new GuildMemberInfo(properties);
    };

    /**
     * Encodes the specified GuildMemberInfo message. Does not implicitly {@link GuildMemberInfo.verify|verify} messages.
     * @function encode
     * @memberof GuildMemberInfo
     * @static
     * @param {IGuildMemberInfo} message GuildMemberInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildMemberInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roleId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
        return writer;
    };

    /**
     * Encodes the specified GuildMemberInfo message, length delimited. Does not implicitly {@link GuildMemberInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GuildMemberInfo
     * @static
     * @param {IGuildMemberInfo} message GuildMemberInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GuildMemberInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GuildMemberInfo message from the specified reader or buffer.
     * @function decode
     * @memberof GuildMemberInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GuildMemberInfo} GuildMemberInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildMemberInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GuildMemberInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roleId = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.level = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("roleId"))
            throw $util.ProtocolError("missing required 'roleId'", { instance: message });
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("level"))
            throw $util.ProtocolError("missing required 'level'", { instance: message });
        return message;
    };

    /**
     * Decodes a GuildMemberInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GuildMemberInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GuildMemberInfo} GuildMemberInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GuildMemberInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GuildMemberInfo message.
     * @function verify
     * @memberof GuildMemberInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GuildMemberInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
            return "roleId: integer|Long expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isInteger(message.level))
            return "level: integer expected";
        return null;
    };

    /**
     * Creates a GuildMemberInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GuildMemberInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GuildMemberInfo} GuildMemberInfo
     */
    GuildMemberInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.GuildMemberInfo)
            return object;
        var message = new $root.GuildMemberInfo();
        if (object.roleId != null)
            if ($util.Long)
                (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
            else if (typeof object.roleId === "string")
                message.roleId = parseInt(object.roleId, 10);
            else if (typeof object.roleId === "number")
                message.roleId = object.roleId;
            else if (typeof object.roleId === "object")
                message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        if (object.level != null)
            message.level = object.level | 0;
        return message;
    };

    /**
     * Creates a plain object from a GuildMemberInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GuildMemberInfo
     * @static
     * @param {GuildMemberInfo} message GuildMemberInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GuildMemberInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roleId = options.longs === String ? "0" : 0;
            object.name = "";
            object.level = 0;
        }
        if (message.roleId != null && message.hasOwnProperty("roleId"))
            if (typeof message.roleId === "number")
                object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
            else
                object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        return object;
    };

    /**
     * Converts this GuildMemberInfo to JSON.
     * @function toJSON
     * @memberof GuildMemberInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GuildMemberInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GuildMemberInfo;
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
