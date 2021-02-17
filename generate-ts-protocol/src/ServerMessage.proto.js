/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ServerRegisterRequest = (function() {

    /**
     * Properties of a ServerRegisterRequest.
     * @exports IServerRegisterRequest
     * @interface IServerRegisterRequest
     * @property {MID|null} [mid] ServerRegisterRequest mid
     * @property {IServerInfo} serverInfo ServerRegisterRequest serverInfo
     */

    /**
     * Constructs a new ServerRegisterRequest.
     * @exports ServerRegisterRequest
     * @classdesc Represents a ServerRegisterRequest.
     * @implements IServerRegisterRequest
     * @constructor
     * @param {IServerRegisterRequest=} [properties] Properties to set
     */
    function ServerRegisterRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerRegisterRequest mid.
     * @member {MID} mid
     * @memberof ServerRegisterRequest
     * @instance
     */
    ServerRegisterRequest.prototype.mid = 1001;

    /**
     * ServerRegisterRequest serverInfo.
     * @member {IServerInfo} serverInfo
     * @memberof ServerRegisterRequest
     * @instance
     */
    ServerRegisterRequest.prototype.serverInfo = null;

    /**
     * Creates a new ServerRegisterRequest instance using the specified properties.
     * @function create
     * @memberof ServerRegisterRequest
     * @static
     * @param {IServerRegisterRequest=} [properties] Properties to set
     * @returns {ServerRegisterRequest} ServerRegisterRequest instance
     */
    ServerRegisterRequest.create = function create(properties) {
        return new ServerRegisterRequest(properties);
    };

    /**
     * Encodes the specified ServerRegisterRequest message. Does not implicitly {@link ServerRegisterRequest.verify|verify} messages.
     * @function encode
     * @memberof ServerRegisterRequest
     * @static
     * @param {IServerRegisterRequest} message ServerRegisterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerRegisterRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        $root.ServerInfo.encode(message.serverInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerRegisterRequest message, length delimited. Does not implicitly {@link ServerRegisterRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerRegisterRequest
     * @static
     * @param {IServerRegisterRequest} message ServerRegisterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerRegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerRegisterRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ServerRegisterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerRegisterRequest} ServerRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerRegisterRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRegisterRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.serverInfo = $root.ServerInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("serverInfo"))
            throw $util.ProtocolError("missing required 'serverInfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a ServerRegisterRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerRegisterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerRegisterRequest} ServerRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerRegisterRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerRegisterRequest message.
     * @function verify
     * @memberof ServerRegisterRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerRegisterRequest.verify = function verify(message) {
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
        {
            var error = $root.ServerInfo.verify(message.serverInfo);
            if (error)
                return "serverInfo." + error;
        }
        return null;
    };

    /**
     * Creates a ServerRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerRegisterRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerRegisterRequest} ServerRegisterRequest
     */
    ServerRegisterRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerRegisterRequest)
            return object;
        var message = new $root.ServerRegisterRequest();
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
        if (object.serverInfo != null) {
            if (typeof object.serverInfo !== "object")
                throw TypeError(".ServerRegisterRequest.serverInfo: object expected");
            message.serverInfo = $root.ServerInfo.fromObject(object.serverInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerRegisterRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerRegisterRequest
     * @static
     * @param {ServerRegisterRequest} message ServerRegisterRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerRegisterRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ServerRegisterReq" : 1001;
            object.serverInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.serverInfo != null && message.hasOwnProperty("serverInfo"))
            object.serverInfo = $root.ServerInfo.toObject(message.serverInfo, options);
        return object;
    };

    /**
     * Converts this ServerRegisterRequest to JSON.
     * @function toJSON
     * @memberof ServerRegisterRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerRegisterRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerRegisterRequest;
})();

$root.ServerRegisterResponse = (function() {

    /**
     * Properties of a ServerRegisterResponse.
     * @exports IServerRegisterResponse
     * @interface IServerRegisterResponse
     * @property {MID|null} [mid] ServerRegisterResponse mid
     * @property {IServerInfo|null} [serverInfo] ServerRegisterResponse serverInfo
     */

    /**
     * Constructs a new ServerRegisterResponse.
     * @exports ServerRegisterResponse
     * @classdesc Represents a ServerRegisterResponse.
     * @implements IServerRegisterResponse
     * @constructor
     * @param {IServerRegisterResponse=} [properties] Properties to set
     */
    function ServerRegisterResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerRegisterResponse mid.
     * @member {MID} mid
     * @memberof ServerRegisterResponse
     * @instance
     */
    ServerRegisterResponse.prototype.mid = 1002;

    /**
     * ServerRegisterResponse serverInfo.
     * @member {IServerInfo|null|undefined} serverInfo
     * @memberof ServerRegisterResponse
     * @instance
     */
    ServerRegisterResponse.prototype.serverInfo = null;

    /**
     * Creates a new ServerRegisterResponse instance using the specified properties.
     * @function create
     * @memberof ServerRegisterResponse
     * @static
     * @param {IServerRegisterResponse=} [properties] Properties to set
     * @returns {ServerRegisterResponse} ServerRegisterResponse instance
     */
    ServerRegisterResponse.create = function create(properties) {
        return new ServerRegisterResponse(properties);
    };

    /**
     * Encodes the specified ServerRegisterResponse message. Does not implicitly {@link ServerRegisterResponse.verify|verify} messages.
     * @function encode
     * @memberof ServerRegisterResponse
     * @static
     * @param {IServerRegisterResponse} message ServerRegisterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerRegisterResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.serverInfo != null && Object.hasOwnProperty.call(message, "serverInfo"))
            $root.ServerInfo.encode(message.serverInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerRegisterResponse message, length delimited. Does not implicitly {@link ServerRegisterResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerRegisterResponse
     * @static
     * @param {IServerRegisterResponse} message ServerRegisterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerRegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerRegisterResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ServerRegisterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerRegisterResponse} ServerRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerRegisterResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRegisterResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.serverInfo = $root.ServerInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerRegisterResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerRegisterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerRegisterResponse} ServerRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerRegisterResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerRegisterResponse message.
     * @function verify
     * @memberof ServerRegisterResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerRegisterResponse.verify = function verify(message) {
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
        if (message.serverInfo != null && message.hasOwnProperty("serverInfo")) {
            var error = $root.ServerInfo.verify(message.serverInfo);
            if (error)
                return "serverInfo." + error;
        }
        return null;
    };

    /**
     * Creates a ServerRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerRegisterResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerRegisterResponse} ServerRegisterResponse
     */
    ServerRegisterResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerRegisterResponse)
            return object;
        var message = new $root.ServerRegisterResponse();
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
        if (object.serverInfo != null) {
            if (typeof object.serverInfo !== "object")
                throw TypeError(".ServerRegisterResponse.serverInfo: object expected");
            message.serverInfo = $root.ServerInfo.fromObject(object.serverInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerRegisterResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerRegisterResponse
     * @static
     * @param {ServerRegisterResponse} message ServerRegisterResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerRegisterResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ServerRegisterRes" : 1002;
            object.serverInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.serverInfo != null && message.hasOwnProperty("serverInfo"))
            object.serverInfo = $root.ServerInfo.toObject(message.serverInfo, options);
        return object;
    };

    /**
     * Converts this ServerRegisterResponse to JSON.
     * @function toJSON
     * @memberof ServerRegisterResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerRegisterResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerRegisterResponse;
})();

$root.ServerListRequest = (function() {

    /**
     * Properties of a ServerListRequest.
     * @exports IServerListRequest
     * @interface IServerListRequest
     * @property {MID|null} [mid] ServerListRequest mid
     * @property {number} serverType ServerListRequest serverType
     */

    /**
     * Constructs a new ServerListRequest.
     * @exports ServerListRequest
     * @classdesc Represents a ServerListRequest.
     * @implements IServerListRequest
     * @constructor
     * @param {IServerListRequest=} [properties] Properties to set
     */
    function ServerListRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerListRequest mid.
     * @member {MID} mid
     * @memberof ServerListRequest
     * @instance
     */
    ServerListRequest.prototype.mid = 1003;

    /**
     * ServerListRequest serverType.
     * @member {number} serverType
     * @memberof ServerListRequest
     * @instance
     */
    ServerListRequest.prototype.serverType = 0;

    /**
     * Creates a new ServerListRequest instance using the specified properties.
     * @function create
     * @memberof ServerListRequest
     * @static
     * @param {IServerListRequest=} [properties] Properties to set
     * @returns {ServerListRequest} ServerListRequest instance
     */
    ServerListRequest.create = function create(properties) {
        return new ServerListRequest(properties);
    };

    /**
     * Encodes the specified ServerListRequest message. Does not implicitly {@link ServerListRequest.verify|verify} messages.
     * @function encode
     * @memberof ServerListRequest
     * @static
     * @param {IServerListRequest} message ServerListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverType);
        return writer;
    };

    /**
     * Encodes the specified ServerListRequest message, length delimited. Does not implicitly {@link ServerListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerListRequest
     * @static
     * @param {IServerListRequest} message ServerListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ServerListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerListRequest} ServerListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.serverType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("serverType"))
            throw $util.ProtocolError("missing required 'serverType'", { instance: message });
        return message;
    };

    /**
     * Decodes a ServerListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerListRequest} ServerListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerListRequest message.
     * @function verify
     * @memberof ServerListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerListRequest.verify = function verify(message) {
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
        if (!$util.isInteger(message.serverType))
            return "serverType: integer expected";
        return null;
    };

    /**
     * Creates a ServerListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerListRequest} ServerListRequest
     */
    ServerListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerListRequest)
            return object;
        var message = new $root.ServerListRequest();
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
        if (object.serverType != null)
            message.serverType = object.serverType | 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerListRequest
     * @static
     * @param {ServerListRequest} message ServerListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerListRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ServerListReq" : 1003;
            object.serverType = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.serverType != null && message.hasOwnProperty("serverType"))
            object.serverType = message.serverType;
        return object;
    };

    /**
     * Converts this ServerListRequest to JSON.
     * @function toJSON
     * @memberof ServerListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerListRequest;
})();

$root.ServerListResponse = (function() {

    /**
     * Properties of a ServerListResponse.
     * @exports IServerListResponse
     * @interface IServerListResponse
     * @property {MID|null} [mid] ServerListResponse mid
     * @property {Array.<IServerInfo>|null} [serverInfo] ServerListResponse serverInfo
     */

    /**
     * Constructs a new ServerListResponse.
     * @exports ServerListResponse
     * @classdesc Represents a ServerListResponse.
     * @implements IServerListResponse
     * @constructor
     * @param {IServerListResponse=} [properties] Properties to set
     */
    function ServerListResponse(properties) {
        this.serverInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerListResponse mid.
     * @member {MID} mid
     * @memberof ServerListResponse
     * @instance
     */
    ServerListResponse.prototype.mid = 1004;

    /**
     * ServerListResponse serverInfo.
     * @member {Array.<IServerInfo>} serverInfo
     * @memberof ServerListResponse
     * @instance
     */
    ServerListResponse.prototype.serverInfo = $util.emptyArray;

    /**
     * Creates a new ServerListResponse instance using the specified properties.
     * @function create
     * @memberof ServerListResponse
     * @static
     * @param {IServerListResponse=} [properties] Properties to set
     * @returns {ServerListResponse} ServerListResponse instance
     */
    ServerListResponse.create = function create(properties) {
        return new ServerListResponse(properties);
    };

    /**
     * Encodes the specified ServerListResponse message. Does not implicitly {@link ServerListResponse.verify|verify} messages.
     * @function encode
     * @memberof ServerListResponse
     * @static
     * @param {IServerListResponse} message ServerListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.serverInfo != null && message.serverInfo.length)
            for (var i = 0; i < message.serverInfo.length; ++i)
                $root.ServerInfo.encode(message.serverInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerListResponse message, length delimited. Does not implicitly {@link ServerListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerListResponse
     * @static
     * @param {IServerListResponse} message ServerListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ServerListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerListResponse} ServerListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                if (!(message.serverInfo && message.serverInfo.length))
                    message.serverInfo = [];
                message.serverInfo.push($root.ServerInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerListResponse} ServerListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerListResponse message.
     * @function verify
     * @memberof ServerListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerListResponse.verify = function verify(message) {
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
        if (message.serverInfo != null && message.hasOwnProperty("serverInfo")) {
            if (!Array.isArray(message.serverInfo))
                return "serverInfo: array expected";
            for (var i = 0; i < message.serverInfo.length; ++i) {
                var error = $root.ServerInfo.verify(message.serverInfo[i]);
                if (error)
                    return "serverInfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerListResponse} ServerListResponse
     */
    ServerListResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerListResponse)
            return object;
        var message = new $root.ServerListResponse();
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
        if (object.serverInfo) {
            if (!Array.isArray(object.serverInfo))
                throw TypeError(".ServerListResponse.serverInfo: array expected");
            message.serverInfo = [];
            for (var i = 0; i < object.serverInfo.length; ++i) {
                if (typeof object.serverInfo[i] !== "object")
                    throw TypeError(".ServerListResponse.serverInfo: object expected");
                message.serverInfo[i] = $root.ServerInfo.fromObject(object.serverInfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerListResponse
     * @static
     * @param {ServerListResponse} message ServerListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerListResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.serverInfo = [];
        if (options.defaults)
            object.mid = options.enums === String ? "ServerListRes" : 1004;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.serverInfo && message.serverInfo.length) {
            object.serverInfo = [];
            for (var j = 0; j < message.serverInfo.length; ++j)
                object.serverInfo[j] = $root.ServerInfo.toObject(message.serverInfo[j], options);
        }
        return object;
    };

    /**
     * Converts this ServerListResponse to JSON.
     * @function toJSON
     * @memberof ServerListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerListResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerListResponse;
})();

$root.ChangeRoleServerRequest = (function() {

    /**
     * Properties of a ChangeRoleServerRequest.
     * @exports IChangeRoleServerRequest
     * @interface IChangeRoleServerRequest
     * @property {MID|null} [mid] ChangeRoleServerRequest mid
     * @property {number|null} [serverId] ChangeRoleServerRequest serverId
     * @property {number} serverType ChangeRoleServerRequest serverType
     * @property {number|Long} roleId ChangeRoleServerRequest roleId
     */

    /**
     * Constructs a new ChangeRoleServerRequest.
     * @exports ChangeRoleServerRequest
     * @classdesc Represents a ChangeRoleServerRequest.
     * @implements IChangeRoleServerRequest
     * @constructor
     * @param {IChangeRoleServerRequest=} [properties] Properties to set
     */
    function ChangeRoleServerRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeRoleServerRequest mid.
     * @member {MID} mid
     * @memberof ChangeRoleServerRequest
     * @instance
     */
    ChangeRoleServerRequest.prototype.mid = 1005;

    /**
     * ChangeRoleServerRequest serverId.
     * @member {number} serverId
     * @memberof ChangeRoleServerRequest
     * @instance
     */
    ChangeRoleServerRequest.prototype.serverId = 0;

    /**
     * ChangeRoleServerRequest serverType.
     * @member {number} serverType
     * @memberof ChangeRoleServerRequest
     * @instance
     */
    ChangeRoleServerRequest.prototype.serverType = 0;

    /**
     * ChangeRoleServerRequest roleId.
     * @member {number|Long} roleId
     * @memberof ChangeRoleServerRequest
     * @instance
     */
    ChangeRoleServerRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ChangeRoleServerRequest instance using the specified properties.
     * @function create
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {IChangeRoleServerRequest=} [properties] Properties to set
     * @returns {ChangeRoleServerRequest} ChangeRoleServerRequest instance
     */
    ChangeRoleServerRequest.create = function create(properties) {
        return new ChangeRoleServerRequest(properties);
    };

    /**
     * Encodes the specified ChangeRoleServerRequest message. Does not implicitly {@link ChangeRoleServerRequest.verify|verify} messages.
     * @function encode
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {IChangeRoleServerRequest} message ChangeRoleServerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeRoleServerRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverType);
        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.roleId);
        return writer;
    };

    /**
     * Encodes the specified ChangeRoleServerRequest message, length delimited. Does not implicitly {@link ChangeRoleServerRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {IChangeRoleServerRequest} message ChangeRoleServerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeRoleServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeRoleServerRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeRoleServerRequest} ChangeRoleServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeRoleServerRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeRoleServerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.serverId = reader.int32();
                break;
            case 3:
                message.serverType = reader.int32();
                break;
            case 4:
                message.roleId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("serverType"))
            throw $util.ProtocolError("missing required 'serverType'", { instance: message });
        if (!message.hasOwnProperty("roleId"))
            throw $util.ProtocolError("missing required 'roleId'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChangeRoleServerRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeRoleServerRequest} ChangeRoleServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeRoleServerRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeRoleServerRequest message.
     * @function verify
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeRoleServerRequest.verify = function verify(message) {
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
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            if (!$util.isInteger(message.serverId))
                return "serverId: integer expected";
        if (!$util.isInteger(message.serverType))
            return "serverType: integer expected";
        if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
            return "roleId: integer|Long expected";
        return null;
    };

    /**
     * Creates a ChangeRoleServerRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeRoleServerRequest} ChangeRoleServerRequest
     */
    ChangeRoleServerRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeRoleServerRequest)
            return object;
        var message = new $root.ChangeRoleServerRequest();
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
        if (object.serverId != null)
            message.serverId = object.serverId | 0;
        if (object.serverType != null)
            message.serverType = object.serverType | 0;
        if (object.roleId != null)
            if ($util.Long)
                (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
            else if (typeof object.roleId === "string")
                message.roleId = parseInt(object.roleId, 10);
            else if (typeof object.roleId === "number")
                message.roleId = object.roleId;
            else if (typeof object.roleId === "object")
                message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ChangeRoleServerRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeRoleServerRequest
     * @static
     * @param {ChangeRoleServerRequest} message ChangeRoleServerRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeRoleServerRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ChangeRoleServerReq" : 1005;
            object.serverId = 0;
            object.serverType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.roleId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            object.serverId = message.serverId;
        if (message.serverType != null && message.hasOwnProperty("serverType"))
            object.serverType = message.serverType;
        if (message.roleId != null && message.hasOwnProperty("roleId"))
            if (typeof message.roleId === "number")
                object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
            else
                object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
        return object;
    };

    /**
     * Converts this ChangeRoleServerRequest to JSON.
     * @function toJSON
     * @memberof ChangeRoleServerRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeRoleServerRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeRoleServerRequest;
})();

$root.ChangeRoleServerResponse = (function() {

    /**
     * Properties of a ChangeRoleServerResponse.
     * @exports IChangeRoleServerResponse
     * @interface IChangeRoleServerResponse
     * @property {MID|null} [mid] ChangeRoleServerResponse mid
     * @property {number|null} [result] ChangeRoleServerResponse result
     */

    /**
     * Constructs a new ChangeRoleServerResponse.
     * @exports ChangeRoleServerResponse
     * @classdesc Represents a ChangeRoleServerResponse.
     * @implements IChangeRoleServerResponse
     * @constructor
     * @param {IChangeRoleServerResponse=} [properties] Properties to set
     */
    function ChangeRoleServerResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeRoleServerResponse mid.
     * @member {MID} mid
     * @memberof ChangeRoleServerResponse
     * @instance
     */
    ChangeRoleServerResponse.prototype.mid = 1006;

    /**
     * ChangeRoleServerResponse result.
     * @member {number} result
     * @memberof ChangeRoleServerResponse
     * @instance
     */
    ChangeRoleServerResponse.prototype.result = 0;

    /**
     * Creates a new ChangeRoleServerResponse instance using the specified properties.
     * @function create
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {IChangeRoleServerResponse=} [properties] Properties to set
     * @returns {ChangeRoleServerResponse} ChangeRoleServerResponse instance
     */
    ChangeRoleServerResponse.create = function create(properties) {
        return new ChangeRoleServerResponse(properties);
    };

    /**
     * Encodes the specified ChangeRoleServerResponse message. Does not implicitly {@link ChangeRoleServerResponse.verify|verify} messages.
     * @function encode
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {IChangeRoleServerResponse} message ChangeRoleServerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeRoleServerResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified ChangeRoleServerResponse message, length delimited. Does not implicitly {@link ChangeRoleServerResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {IChangeRoleServerResponse} message ChangeRoleServerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeRoleServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeRoleServerResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeRoleServerResponse} ChangeRoleServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeRoleServerResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeRoleServerResponse();
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
     * Decodes a ChangeRoleServerResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeRoleServerResponse} ChangeRoleServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeRoleServerResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeRoleServerResponse message.
     * @function verify
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeRoleServerResponse.verify = function verify(message) {
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
     * Creates a ChangeRoleServerResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeRoleServerResponse} ChangeRoleServerResponse
     */
    ChangeRoleServerResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeRoleServerResponse)
            return object;
        var message = new $root.ChangeRoleServerResponse();
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
     * Creates a plain object from a ChangeRoleServerResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeRoleServerResponse
     * @static
     * @param {ChangeRoleServerResponse} message ChangeRoleServerResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeRoleServerResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ChangeRoleServerRes" : 1006;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this ChangeRoleServerResponse to JSON.
     * @function toJSON
     * @memberof ChangeRoleServerResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeRoleServerResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeRoleServerResponse;
})();

$root.ServerEventRequest = (function() {

    /**
     * Properties of a ServerEventRequest.
     * @exports IServerEventRequest
     * @interface IServerEventRequest
     * @property {MID|null} [mid] ServerEventRequest mid
     * @property {number} type ServerEventRequest type
     * @property {number|null} [serverId] ServerEventRequest serverId
     * @property {number|Long|null} [id] ServerEventRequest id
     * @property {Array.<number|Long>|null} [ids] ServerEventRequest ids
     * @property {string|null} [info] ServerEventRequest info
     */

    /**
     * Constructs a new ServerEventRequest.
     * @exports ServerEventRequest
     * @classdesc Represents a ServerEventRequest.
     * @implements IServerEventRequest
     * @constructor
     * @param {IServerEventRequest=} [properties] Properties to set
     */
    function ServerEventRequest(properties) {
        this.ids = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerEventRequest mid.
     * @member {MID} mid
     * @memberof ServerEventRequest
     * @instance
     */
    ServerEventRequest.prototype.mid = 1007;

    /**
     * ServerEventRequest type.
     * @member {number} type
     * @memberof ServerEventRequest
     * @instance
     */
    ServerEventRequest.prototype.type = 0;

    /**
     * ServerEventRequest serverId.
     * @member {number} serverId
     * @memberof ServerEventRequest
     * @instance
     */
    ServerEventRequest.prototype.serverId = 0;

    /**
     * ServerEventRequest id.
     * @member {number|Long} id
     * @memberof ServerEventRequest
     * @instance
     */
    ServerEventRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ServerEventRequest ids.
     * @member {Array.<number|Long>} ids
     * @memberof ServerEventRequest
     * @instance
     */
    ServerEventRequest.prototype.ids = $util.emptyArray;

    /**
     * ServerEventRequest info.
     * @member {string} info
     * @memberof ServerEventRequest
     * @instance
     */
    ServerEventRequest.prototype.info = "";

    /**
     * Creates a new ServerEventRequest instance using the specified properties.
     * @function create
     * @memberof ServerEventRequest
     * @static
     * @param {IServerEventRequest=} [properties] Properties to set
     * @returns {ServerEventRequest} ServerEventRequest instance
     */
    ServerEventRequest.create = function create(properties) {
        return new ServerEventRequest(properties);
    };

    /**
     * Encodes the specified ServerEventRequest message. Does not implicitly {@link ServerEventRequest.verify|verify} messages.
     * @function encode
     * @memberof ServerEventRequest
     * @static
     * @param {IServerEventRequest} message ServerEventRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerEventRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverId);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.id);
        if (message.ids != null && message.ids.length)
            for (var i = 0; i < message.ids.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.ids[i]);
        if (message.info != null && Object.hasOwnProperty.call(message, "info"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.info);
        return writer;
    };

    /**
     * Encodes the specified ServerEventRequest message, length delimited. Does not implicitly {@link ServerEventRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerEventRequest
     * @static
     * @param {IServerEventRequest} message ServerEventRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerEventRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerEventRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ServerEventRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerEventRequest} ServerEventRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerEventRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerEventRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.serverId = reader.int32();
                break;
            case 4:
                message.id = reader.int64();
                break;
            case 5:
                if (!(message.ids && message.ids.length))
                    message.ids = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.ids.push(reader.int64());
                } else
                    message.ids.push(reader.int64());
                break;
            case 6:
                message.info = reader.string();
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
     * Decodes a ServerEventRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerEventRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerEventRequest} ServerEventRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerEventRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerEventRequest message.
     * @function verify
     * @memberof ServerEventRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerEventRequest.verify = function verify(message) {
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
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            if (!$util.isInteger(message.serverId))
                return "serverId: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.ids != null && message.hasOwnProperty("ids")) {
            if (!Array.isArray(message.ids))
                return "ids: array expected";
            for (var i = 0; i < message.ids.length; ++i)
                if (!$util.isInteger(message.ids[i]) && !(message.ids[i] && $util.isInteger(message.ids[i].low) && $util.isInteger(message.ids[i].high)))
                    return "ids: integer|Long[] expected";
        }
        if (message.info != null && message.hasOwnProperty("info"))
            if (!$util.isString(message.info))
                return "info: string expected";
        return null;
    };

    /**
     * Creates a ServerEventRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerEventRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerEventRequest} ServerEventRequest
     */
    ServerEventRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerEventRequest)
            return object;
        var message = new $root.ServerEventRequest();
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
        if (object.type != null)
            message.type = object.type | 0;
        if (object.serverId != null)
            message.serverId = object.serverId | 0;
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.ids) {
            if (!Array.isArray(object.ids))
                throw TypeError(".ServerEventRequest.ids: array expected");
            message.ids = [];
            for (var i = 0; i < object.ids.length; ++i)
                if ($util.Long)
                    (message.ids[i] = $util.Long.fromValue(object.ids[i])).unsigned = false;
                else if (typeof object.ids[i] === "string")
                    message.ids[i] = parseInt(object.ids[i], 10);
                else if (typeof object.ids[i] === "number")
                    message.ids[i] = object.ids[i];
                else if (typeof object.ids[i] === "object")
                    message.ids[i] = new $util.LongBits(object.ids[i].low >>> 0, object.ids[i].high >>> 0).toNumber();
        }
        if (object.info != null)
            message.info = String(object.info);
        return message;
    };

    /**
     * Creates a plain object from a ServerEventRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerEventRequest
     * @static
     * @param {ServerEventRequest} message ServerEventRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerEventRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ids = [];
        if (options.defaults) {
            object.mid = options.enums === String ? "ServerEventReq" : 1007;
            object.type = 0;
            object.serverId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.info = "";
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.serverId != null && message.hasOwnProperty("serverId"))
            object.serverId = message.serverId;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.ids && message.ids.length) {
            object.ids = [];
            for (var j = 0; j < message.ids.length; ++j)
                if (typeof message.ids[j] === "number")
                    object.ids[j] = options.longs === String ? String(message.ids[j]) : message.ids[j];
                else
                    object.ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ids[j]) : options.longs === Number ? new $util.LongBits(message.ids[j].low >>> 0, message.ids[j].high >>> 0).toNumber() : message.ids[j];
        }
        if (message.info != null && message.hasOwnProperty("info"))
            object.info = message.info;
        return object;
    };

    /**
     * Converts this ServerEventRequest to JSON.
     * @function toJSON
     * @memberof ServerEventRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerEventRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerEventRequest;
})();

$root.ServerEventResponse = (function() {

    /**
     * Properties of a ServerEventResponse.
     * @exports IServerEventResponse
     * @interface IServerEventResponse
     * @property {MID|null} [mid] ServerEventResponse mid
     * @property {number} type ServerEventResponse type
     * @property {number|null} [result] ServerEventResponse result
     */

    /**
     * Constructs a new ServerEventResponse.
     * @exports ServerEventResponse
     * @classdesc Represents a ServerEventResponse.
     * @implements IServerEventResponse
     * @constructor
     * @param {IServerEventResponse=} [properties] Properties to set
     */
    function ServerEventResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerEventResponse mid.
     * @member {MID} mid
     * @memberof ServerEventResponse
     * @instance
     */
    ServerEventResponse.prototype.mid = 1008;

    /**
     * ServerEventResponse type.
     * @member {number} type
     * @memberof ServerEventResponse
     * @instance
     */
    ServerEventResponse.prototype.type = 0;

    /**
     * ServerEventResponse result.
     * @member {number} result
     * @memberof ServerEventResponse
     * @instance
     */
    ServerEventResponse.prototype.result = 0;

    /**
     * Creates a new ServerEventResponse instance using the specified properties.
     * @function create
     * @memberof ServerEventResponse
     * @static
     * @param {IServerEventResponse=} [properties] Properties to set
     * @returns {ServerEventResponse} ServerEventResponse instance
     */
    ServerEventResponse.create = function create(properties) {
        return new ServerEventResponse(properties);
    };

    /**
     * Encodes the specified ServerEventResponse message. Does not implicitly {@link ServerEventResponse.verify|verify} messages.
     * @function encode
     * @memberof ServerEventResponse
     * @static
     * @param {IServerEventResponse} message ServerEventResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerEventResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified ServerEventResponse message, length delimited. Does not implicitly {@link ServerEventResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerEventResponse
     * @static
     * @param {IServerEventResponse} message ServerEventResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerEventResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerEventResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ServerEventResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerEventResponse} ServerEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerEventResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerEventResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.result = reader.int32();
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
     * Decodes a ServerEventResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerEventResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerEventResponse} ServerEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerEventResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerEventResponse message.
     * @function verify
     * @memberof ServerEventResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerEventResponse.verify = function verify(message) {
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
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isInteger(message.result))
                return "result: integer expected";
        return null;
    };

    /**
     * Creates a ServerEventResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerEventResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerEventResponse} ServerEventResponse
     */
    ServerEventResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerEventResponse)
            return object;
        var message = new $root.ServerEventResponse();
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
        if (object.type != null)
            message.type = object.type | 0;
        if (object.result != null)
            message.result = object.result | 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerEventResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerEventResponse
     * @static
     * @param {ServerEventResponse} message ServerEventResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerEventResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ServerEventRes" : 1008;
            object.type = 0;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this ServerEventResponse to JSON.
     * @function toJSON
     * @memberof ServerEventResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerEventResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerEventResponse;
})();

$root.ServerInfo = (function() {

    /**
     * Properties of a ServerInfo.
     * @exports IServerInfo
     * @interface IServerInfo
     * @property {number} id ServerInfo id
     * @property {string|null} [ip] ServerInfo ip
     * @property {number|null} [type] ServerInfo type
     * @property {number|null} [port] ServerInfo port
     * @property {number|null} [state] ServerInfo state
     * @property {number|null} [online] ServerInfo online
     * @property {number|null} [maxUserCount] ServerInfo maxUserCount
     * @property {number|null} [httpport] ServerInfo httpport
     * @property {string|null} [name] ServerInfo name
     * @property {string|null} [wwwip] ServerInfo wwwip
     * @property {number|null} [freeMemory] ServerInfo freeMemory
     * @property {number|null} [totalMemory] ServerInfo totalMemory
     * @property {string|null} [version] ServerInfo version
     */

    /**
     * Constructs a new ServerInfo.
     * @exports ServerInfo
     * @classdesc Represents a ServerInfo.
     * @implements IServerInfo
     * @constructor
     * @param {IServerInfo=} [properties] Properties to set
     */
    function ServerInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerInfo id.
     * @member {number} id
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.id = 0;

    /**
     * ServerInfo ip.
     * @member {string} ip
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.ip = "";

    /**
     * ServerInfo type.
     * @member {number} type
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.type = 0;

    /**
     * ServerInfo port.
     * @member {number} port
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.port = 0;

    /**
     * ServerInfo state.
     * @member {number} state
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.state = 0;

    /**
     * ServerInfo online.
     * @member {number} online
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.online = 0;

    /**
     * ServerInfo maxUserCount.
     * @member {number} maxUserCount
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.maxUserCount = 0;

    /**
     * ServerInfo httpport.
     * @member {number} httpport
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.httpport = 0;

    /**
     * ServerInfo name.
     * @member {string} name
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.name = "";

    /**
     * ServerInfo wwwip.
     * @member {string} wwwip
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.wwwip = "";

    /**
     * ServerInfo freeMemory.
     * @member {number} freeMemory
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.freeMemory = 0;

    /**
     * ServerInfo totalMemory.
     * @member {number} totalMemory
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.totalMemory = 0;

    /**
     * ServerInfo version.
     * @member {string} version
     * @memberof ServerInfo
     * @instance
     */
    ServerInfo.prototype.version = "";

    /**
     * Creates a new ServerInfo instance using the specified properties.
     * @function create
     * @memberof ServerInfo
     * @static
     * @param {IServerInfo=} [properties] Properties to set
     * @returns {ServerInfo} ServerInfo instance
     */
    ServerInfo.create = function create(properties) {
        return new ServerInfo(properties);
    };

    /**
     * Encodes the specified ServerInfo message. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @function encode
     * @memberof ServerInfo
     * @static
     * @param {IServerInfo} message ServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.port);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
        if (message.online != null && Object.hasOwnProperty.call(message, "online"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.online);
        if (message.maxUserCount != null && Object.hasOwnProperty.call(message, "maxUserCount"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.maxUserCount);
        if (message.httpport != null && Object.hasOwnProperty.call(message, "httpport"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.httpport);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.name);
        if (message.wwwip != null && Object.hasOwnProperty.call(message, "wwwip"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.wwwip);
        if (message.freeMemory != null && Object.hasOwnProperty.call(message, "freeMemory"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.freeMemory);
        if (message.totalMemory != null && Object.hasOwnProperty.call(message, "totalMemory"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.totalMemory);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.version);
        return writer;
    };

    /**
     * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link ServerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerInfo
     * @static
     * @param {IServerInfo} message ServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerInfo} ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.ip = reader.string();
                break;
            case 3:
                message.type = reader.int32();
                break;
            case 4:
                message.port = reader.int32();
                break;
            case 5:
                message.state = reader.int32();
                break;
            case 6:
                message.online = reader.int32();
                break;
            case 7:
                message.maxUserCount = reader.int32();
                break;
            case 8:
                message.httpport = reader.int32();
                break;
            case 9:
                message.name = reader.string();
                break;
            case 10:
                message.wwwip = reader.string();
                break;
            case 11:
                message.freeMemory = reader.int32();
                break;
            case 12:
                message.totalMemory = reader.int32();
                break;
            case 13:
                message.version = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        return message;
    };

    /**
     * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerInfo} ServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerInfo message.
     * @function verify
     * @memberof ServerInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id))
            return "id: integer expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.online != null && message.hasOwnProperty("online"))
            if (!$util.isInteger(message.online))
                return "online: integer expected";
        if (message.maxUserCount != null && message.hasOwnProperty("maxUserCount"))
            if (!$util.isInteger(message.maxUserCount))
                return "maxUserCount: integer expected";
        if (message.httpport != null && message.hasOwnProperty("httpport"))
            if (!$util.isInteger(message.httpport))
                return "httpport: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.wwwip != null && message.hasOwnProperty("wwwip"))
            if (!$util.isString(message.wwwip))
                return "wwwip: string expected";
        if (message.freeMemory != null && message.hasOwnProperty("freeMemory"))
            if (!$util.isInteger(message.freeMemory))
                return "freeMemory: integer expected";
        if (message.totalMemory != null && message.hasOwnProperty("totalMemory"))
            if (!$util.isInteger(message.totalMemory))
                return "totalMemory: integer expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        return null;
    };

    /**
     * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerInfo} ServerInfo
     */
    ServerInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerInfo)
            return object;
        var message = new $root.ServerInfo();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.type != null)
            message.type = object.type | 0;
        if (object.port != null)
            message.port = object.port | 0;
        if (object.state != null)
            message.state = object.state | 0;
        if (object.online != null)
            message.online = object.online | 0;
        if (object.maxUserCount != null)
            message.maxUserCount = object.maxUserCount | 0;
        if (object.httpport != null)
            message.httpport = object.httpport | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.wwwip != null)
            message.wwwip = String(object.wwwip);
        if (object.freeMemory != null)
            message.freeMemory = object.freeMemory | 0;
        if (object.totalMemory != null)
            message.totalMemory = object.totalMemory | 0;
        if (object.version != null)
            message.version = String(object.version);
        return message;
    };

    /**
     * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerInfo
     * @static
     * @param {ServerInfo} message ServerInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.ip = "";
            object.type = 0;
            object.port = 0;
            object.state = 0;
            object.online = 0;
            object.maxUserCount = 0;
            object.httpport = 0;
            object.name = "";
            object.wwwip = "";
            object.freeMemory = 0;
            object.totalMemory = 0;
            object.version = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.online != null && message.hasOwnProperty("online"))
            object.online = message.online;
        if (message.maxUserCount != null && message.hasOwnProperty("maxUserCount"))
            object.maxUserCount = message.maxUserCount;
        if (message.httpport != null && message.hasOwnProperty("httpport"))
            object.httpport = message.httpport;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.wwwip != null && message.hasOwnProperty("wwwip"))
            object.wwwip = message.wwwip;
        if (message.freeMemory != null && message.hasOwnProperty("freeMemory"))
            object.freeMemory = message.freeMemory;
        if (message.totalMemory != null && message.hasOwnProperty("totalMemory"))
            object.totalMemory = message.totalMemory;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this ServerInfo to JSON.
     * @function toJSON
     * @memberof ServerInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerInfo;
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
