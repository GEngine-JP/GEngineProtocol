/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.EnterRoomRequest = (function() {

    /**
     * Properties of an EnterRoomRequest.
     * @exports IEnterRoomRequest
     * @interface IEnterRoomRequest
     * @property {MID|null} [mid] EnterRoomRequest mid
     * @property {RoomType} type EnterRoomRequest type
     * @property {number} rank EnterRoomRequest rank
     */

    /**
     * Constructs a new EnterRoomRequest.
     * @exports EnterRoomRequest
     * @classdesc Represents an EnterRoomRequest.
     * @implements IEnterRoomRequest
     * @constructor
     * @param {IEnterRoomRequest=} [properties] Properties to set
     */
    function EnterRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterRoomRequest mid.
     * @member {MID} mid
     * @memberof EnterRoomRequest
     * @instance
     */
    EnterRoomRequest.prototype.mid = 20001;

    /**
     * EnterRoomRequest type.
     * @member {RoomType} type
     * @memberof EnterRoomRequest
     * @instance
     */
    EnterRoomRequest.prototype.type = 1;

    /**
     * EnterRoomRequest rank.
     * @member {number} rank
     * @memberof EnterRoomRequest
     * @instance
     */
    EnterRoomRequest.prototype.rank = 0;

    /**
     * Creates a new EnterRoomRequest instance using the specified properties.
     * @function create
     * @memberof EnterRoomRequest
     * @static
     * @param {IEnterRoomRequest=} [properties] Properties to set
     * @returns {EnterRoomRequest} EnterRoomRequest instance
     */
    EnterRoomRequest.create = function create(properties) {
        return new EnterRoomRequest(properties);
    };

    /**
     * Encodes the specified EnterRoomRequest message. Does not implicitly {@link EnterRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof EnterRoomRequest
     * @static
     * @param {IEnterRoomRequest} message EnterRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rank);
        return writer;
    };

    /**
     * Encodes the specified EnterRoomRequest message, length delimited. Does not implicitly {@link EnterRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterRoomRequest
     * @static
     * @param {IEnterRoomRequest} message EnterRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EnterRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterRoomRequest} EnterRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterRoomRequest();
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
                message.rank = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("rank"))
            throw $util.ProtocolError("missing required 'rank'", { instance: message });
        return message;
    };

    /**
     * Decodes an EnterRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterRoomRequest} EnterRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterRoomRequest message.
     * @function verify
     * @memberof EnterRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterRoomRequest.verify = function verify(message) {
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
        switch (message.type) {
        default:
            return "type: enum value expected";
        case 1:
        case 2:
            break;
        }
        if (!$util.isInteger(message.rank))
            return "rank: integer expected";
        return null;
    };

    /**
     * Creates an EnterRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterRoomRequest} EnterRoomRequest
     */
    EnterRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterRoomRequest)
            return object;
        var message = new $root.EnterRoomRequest();
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
        switch (object.type) {
        case "CLASSICS":
        case 1:
            message.type = 1;
            break;
        case "ARENA":
        case 2:
            message.type = 2;
            break;
        }
        if (object.rank != null)
            message.rank = object.rank | 0;
        return message;
    };

    /**
     * Creates a plain object from an EnterRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterRoomRequest
     * @static
     * @param {EnterRoomRequest} message EnterRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "EnterRoomReq" : 20001;
            object.type = options.enums === String ? "CLASSICS" : 1;
            object.rank = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.RoomType[message.type] : message.type;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        return object;
    };

    /**
     * Converts this EnterRoomRequest to JSON.
     * @function toJSON
     * @memberof EnterRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterRoomRequest;
})();

$root.EnterRoomResponse = (function() {

    /**
     * Properties of an EnterRoomResponse.
     * @exports IEnterRoomResponse
     * @interface IEnterRoomResponse
     * @property {MID|null} [mid] EnterRoomResponse mid
     * @property {number|null} [result] EnterRoomResponse result
     * @property {IRoomInfo|null} [roomInfo] EnterRoomResponse roomInfo
     * @property {Array.<IFishInfo>|null} [fishInfo] EnterRoomResponse fishInfo
     * @property {Array.<IRoomRoleInfo>|null} [roleInfo] EnterRoomResponse roleInfo
     */

    /**
     * Constructs a new EnterRoomResponse.
     * @exports EnterRoomResponse
     * @classdesc Represents an EnterRoomResponse.
     * @implements IEnterRoomResponse
     * @constructor
     * @param {IEnterRoomResponse=} [properties] Properties to set
     */
    function EnterRoomResponse(properties) {
        this.fishInfo = [];
        this.roleInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterRoomResponse mid.
     * @member {MID} mid
     * @memberof EnterRoomResponse
     * @instance
     */
    EnterRoomResponse.prototype.mid = 20002;

    /**
     * EnterRoomResponse result.
     * @member {number} result
     * @memberof EnterRoomResponse
     * @instance
     */
    EnterRoomResponse.prototype.result = 0;

    /**
     * EnterRoomResponse roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof EnterRoomResponse
     * @instance
     */
    EnterRoomResponse.prototype.roomInfo = null;

    /**
     * EnterRoomResponse fishInfo.
     * @member {Array.<IFishInfo>} fishInfo
     * @memberof EnterRoomResponse
     * @instance
     */
    EnterRoomResponse.prototype.fishInfo = $util.emptyArray;

    /**
     * EnterRoomResponse roleInfo.
     * @member {Array.<IRoomRoleInfo>} roleInfo
     * @memberof EnterRoomResponse
     * @instance
     */
    EnterRoomResponse.prototype.roleInfo = $util.emptyArray;

    /**
     * Creates a new EnterRoomResponse instance using the specified properties.
     * @function create
     * @memberof EnterRoomResponse
     * @static
     * @param {IEnterRoomResponse=} [properties] Properties to set
     * @returns {EnterRoomResponse} EnterRoomResponse instance
     */
    EnterRoomResponse.create = function create(properties) {
        return new EnterRoomResponse(properties);
    };

    /**
     * Encodes the specified EnterRoomResponse message. Does not implicitly {@link EnterRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof EnterRoomResponse
     * @static
     * @param {IEnterRoomResponse} message EnterRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.fishInfo != null && message.fishInfo.length)
            for (var i = 0; i < message.fishInfo.length; ++i)
                $root.FishInfo.encode(message.fishInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.roleInfo != null && message.roleInfo.length)
            for (var i = 0; i < message.roleInfo.length; ++i)
                $root.RoomRoleInfo.encode(message.roleInfo[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EnterRoomResponse message, length delimited. Does not implicitly {@link EnterRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterRoomResponse
     * @static
     * @param {IEnterRoomResponse} message EnterRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EnterRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterRoomResponse} EnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterRoomResponse();
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
                message.roomInfo = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.fishInfo && message.fishInfo.length))
                    message.fishInfo = [];
                message.fishInfo.push($root.FishInfo.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.roleInfo && message.roleInfo.length))
                    message.roleInfo = [];
                message.roleInfo.push($root.RoomRoleInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterRoomResponse} EnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterRoomResponse message.
     * @function verify
     * @memberof EnterRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterRoomResponse.verify = function verify(message) {
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
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            var error = $root.RoomInfo.verify(message.roomInfo);
            if (error)
                return "roomInfo." + error;
        }
        if (message.fishInfo != null && message.hasOwnProperty("fishInfo")) {
            if (!Array.isArray(message.fishInfo))
                return "fishInfo: array expected";
            for (var i = 0; i < message.fishInfo.length; ++i) {
                var error = $root.FishInfo.verify(message.fishInfo[i]);
                if (error)
                    return "fishInfo." + error;
            }
        }
        if (message.roleInfo != null && message.hasOwnProperty("roleInfo")) {
            if (!Array.isArray(message.roleInfo))
                return "roleInfo: array expected";
            for (var i = 0; i < message.roleInfo.length; ++i) {
                var error = $root.RoomRoleInfo.verify(message.roleInfo[i]);
                if (error)
                    return "roleInfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EnterRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterRoomResponse} EnterRoomResponse
     */
    EnterRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterRoomResponse)
            return object;
        var message = new $root.EnterRoomResponse();
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
        if (object.roomInfo != null) {
            if (typeof object.roomInfo !== "object")
                throw TypeError(".EnterRoomResponse.roomInfo: object expected");
            message.roomInfo = $root.RoomInfo.fromObject(object.roomInfo);
        }
        if (object.fishInfo) {
            if (!Array.isArray(object.fishInfo))
                throw TypeError(".EnterRoomResponse.fishInfo: array expected");
            message.fishInfo = [];
            for (var i = 0; i < object.fishInfo.length; ++i) {
                if (typeof object.fishInfo[i] !== "object")
                    throw TypeError(".EnterRoomResponse.fishInfo: object expected");
                message.fishInfo[i] = $root.FishInfo.fromObject(object.fishInfo[i]);
            }
        }
        if (object.roleInfo) {
            if (!Array.isArray(object.roleInfo))
                throw TypeError(".EnterRoomResponse.roleInfo: array expected");
            message.roleInfo = [];
            for (var i = 0; i < object.roleInfo.length; ++i) {
                if (typeof object.roleInfo[i] !== "object")
                    throw TypeError(".EnterRoomResponse.roleInfo: object expected");
                message.roleInfo[i] = $root.RoomRoleInfo.fromObject(object.roleInfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EnterRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterRoomResponse
     * @static
     * @param {EnterRoomResponse} message EnterRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.fishInfo = [];
            object.roleInfo = [];
        }
        if (options.defaults) {
            object.mid = options.enums === String ? "EnterRoomRes" : 20002;
            object.result = 0;
            object.roomInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
            object.roomInfo = $root.RoomInfo.toObject(message.roomInfo, options);
        if (message.fishInfo && message.fishInfo.length) {
            object.fishInfo = [];
            for (var j = 0; j < message.fishInfo.length; ++j)
                object.fishInfo[j] = $root.FishInfo.toObject(message.fishInfo[j], options);
        }
        if (message.roleInfo && message.roleInfo.length) {
            object.roleInfo = [];
            for (var j = 0; j < message.roleInfo.length; ++j)
                object.roleInfo[j] = $root.RoomRoleInfo.toObject(message.roleInfo[j], options);
        }
        return object;
    };

    /**
     * Converts this EnterRoomResponse to JSON.
     * @function toJSON
     * @memberof EnterRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EnterRoomResponse;
})();

$root.ApplyAthleticsRequest = (function() {

    /**
     * Properties of an ApplyAthleticsRequest.
     * @exports IApplyAthleticsRequest
     * @interface IApplyAthleticsRequest
     * @property {MID|null} [mid] ApplyAthleticsRequest mid
     * @property {RoomType|null} [type] ApplyAthleticsRequest type
     * @property {number|null} [rank] ApplyAthleticsRequest rank
     */

    /**
     * Constructs a new ApplyAthleticsRequest.
     * @exports ApplyAthleticsRequest
     * @classdesc Represents an ApplyAthleticsRequest.
     * @implements IApplyAthleticsRequest
     * @constructor
     * @param {IApplyAthleticsRequest=} [properties] Properties to set
     */
    function ApplyAthleticsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ApplyAthleticsRequest mid.
     * @member {MID} mid
     * @memberof ApplyAthleticsRequest
     * @instance
     */
    ApplyAthleticsRequest.prototype.mid = 20003;

    /**
     * ApplyAthleticsRequest type.
     * @member {RoomType} type
     * @memberof ApplyAthleticsRequest
     * @instance
     */
    ApplyAthleticsRequest.prototype.type = 1;

    /**
     * ApplyAthleticsRequest rank.
     * @member {number} rank
     * @memberof ApplyAthleticsRequest
     * @instance
     */
    ApplyAthleticsRequest.prototype.rank = 0;

    /**
     * Creates a new ApplyAthleticsRequest instance using the specified properties.
     * @function create
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {IApplyAthleticsRequest=} [properties] Properties to set
     * @returns {ApplyAthleticsRequest} ApplyAthleticsRequest instance
     */
    ApplyAthleticsRequest.create = function create(properties) {
        return new ApplyAthleticsRequest(properties);
    };

    /**
     * Encodes the specified ApplyAthleticsRequest message. Does not implicitly {@link ApplyAthleticsRequest.verify|verify} messages.
     * @function encode
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {IApplyAthleticsRequest} message ApplyAthleticsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyAthleticsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rank);
        return writer;
    };

    /**
     * Encodes the specified ApplyAthleticsRequest message, length delimited. Does not implicitly {@link ApplyAthleticsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {IApplyAthleticsRequest} message ApplyAthleticsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyAthleticsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ApplyAthleticsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ApplyAthleticsRequest} ApplyAthleticsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyAthleticsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ApplyAthleticsRequest();
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
                message.rank = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ApplyAthleticsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ApplyAthleticsRequest} ApplyAthleticsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyAthleticsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ApplyAthleticsRequest message.
     * @function verify
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ApplyAthleticsRequest.verify = function verify(message) {
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
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 1:
            case 2:
                break;
            }
        if (message.rank != null && message.hasOwnProperty("rank"))
            if (!$util.isInteger(message.rank))
                return "rank: integer expected";
        return null;
    };

    /**
     * Creates an ApplyAthleticsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ApplyAthleticsRequest} ApplyAthleticsRequest
     */
    ApplyAthleticsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ApplyAthleticsRequest)
            return object;
        var message = new $root.ApplyAthleticsRequest();
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
        switch (object.type) {
        case "CLASSICS":
        case 1:
            message.type = 1;
            break;
        case "ARENA":
        case 2:
            message.type = 2;
            break;
        }
        if (object.rank != null)
            message.rank = object.rank | 0;
        return message;
    };

    /**
     * Creates a plain object from an ApplyAthleticsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ApplyAthleticsRequest
     * @static
     * @param {ApplyAthleticsRequest} message ApplyAthleticsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ApplyAthleticsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ApplyAthleticsReq" : 20003;
            object.type = options.enums === String ? "CLASSICS" : 1;
            object.rank = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.RoomType[message.type] : message.type;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        return object;
    };

    /**
     * Converts this ApplyAthleticsRequest to JSON.
     * @function toJSON
     * @memberof ApplyAthleticsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ApplyAthleticsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ApplyAthleticsRequest;
})();

$root.ApplyAthleticsResponse = (function() {

    /**
     * Properties of an ApplyAthleticsResponse.
     * @exports IApplyAthleticsResponse
     * @interface IApplyAthleticsResponse
     * @property {MID|null} [mid] ApplyAthleticsResponse mid
     * @property {number|null} [result] ApplyAthleticsResponse result
     * @property {Array.<number|Long>|null} [roleId] ApplyAthleticsResponse roleId
     */

    /**
     * Constructs a new ApplyAthleticsResponse.
     * @exports ApplyAthleticsResponse
     * @classdesc Represents an ApplyAthleticsResponse.
     * @implements IApplyAthleticsResponse
     * @constructor
     * @param {IApplyAthleticsResponse=} [properties] Properties to set
     */
    function ApplyAthleticsResponse(properties) {
        this.roleId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ApplyAthleticsResponse mid.
     * @member {MID} mid
     * @memberof ApplyAthleticsResponse
     * @instance
     */
    ApplyAthleticsResponse.prototype.mid = 20004;

    /**
     * ApplyAthleticsResponse result.
     * @member {number} result
     * @memberof ApplyAthleticsResponse
     * @instance
     */
    ApplyAthleticsResponse.prototype.result = 0;

    /**
     * ApplyAthleticsResponse roleId.
     * @member {Array.<number|Long>} roleId
     * @memberof ApplyAthleticsResponse
     * @instance
     */
    ApplyAthleticsResponse.prototype.roleId = $util.emptyArray;

    /**
     * Creates a new ApplyAthleticsResponse instance using the specified properties.
     * @function create
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {IApplyAthleticsResponse=} [properties] Properties to set
     * @returns {ApplyAthleticsResponse} ApplyAthleticsResponse instance
     */
    ApplyAthleticsResponse.create = function create(properties) {
        return new ApplyAthleticsResponse(properties);
    };

    /**
     * Encodes the specified ApplyAthleticsResponse message. Does not implicitly {@link ApplyAthleticsResponse.verify|verify} messages.
     * @function encode
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {IApplyAthleticsResponse} message ApplyAthleticsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyAthleticsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        if (message.roleId != null && message.roleId.length)
            for (var i = 0; i < message.roleId.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.roleId[i]);
        return writer;
    };

    /**
     * Encodes the specified ApplyAthleticsResponse message, length delimited. Does not implicitly {@link ApplyAthleticsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {IApplyAthleticsResponse} message ApplyAthleticsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApplyAthleticsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ApplyAthleticsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ApplyAthleticsResponse} ApplyAthleticsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyAthleticsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ApplyAthleticsResponse();
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
                if (!(message.roleId && message.roleId.length))
                    message.roleId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.roleId.push(reader.int64());
                } else
                    message.roleId.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ApplyAthleticsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ApplyAthleticsResponse} ApplyAthleticsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApplyAthleticsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ApplyAthleticsResponse message.
     * @function verify
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ApplyAthleticsResponse.verify = function verify(message) {
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
        if (message.roleId != null && message.hasOwnProperty("roleId")) {
            if (!Array.isArray(message.roleId))
                return "roleId: array expected";
            for (var i = 0; i < message.roleId.length; ++i)
                if (!$util.isInteger(message.roleId[i]) && !(message.roleId[i] && $util.isInteger(message.roleId[i].low) && $util.isInteger(message.roleId[i].high)))
                    return "roleId: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates an ApplyAthleticsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ApplyAthleticsResponse} ApplyAthleticsResponse
     */
    ApplyAthleticsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ApplyAthleticsResponse)
            return object;
        var message = new $root.ApplyAthleticsResponse();
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
        if (object.roleId) {
            if (!Array.isArray(object.roleId))
                throw TypeError(".ApplyAthleticsResponse.roleId: array expected");
            message.roleId = [];
            for (var i = 0; i < object.roleId.length; ++i)
                if ($util.Long)
                    (message.roleId[i] = $util.Long.fromValue(object.roleId[i])).unsigned = false;
                else if (typeof object.roleId[i] === "string")
                    message.roleId[i] = parseInt(object.roleId[i], 10);
                else if (typeof object.roleId[i] === "number")
                    message.roleId[i] = object.roleId[i];
                else if (typeof object.roleId[i] === "object")
                    message.roleId[i] = new $util.LongBits(object.roleId[i].low >>> 0, object.roleId[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from an ApplyAthleticsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ApplyAthleticsResponse
     * @static
     * @param {ApplyAthleticsResponse} message ApplyAthleticsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ApplyAthleticsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.roleId = [];
        if (options.defaults) {
            object.mid = options.enums === String ? "ApplyAthleticsRes" : 20004;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.roleId && message.roleId.length) {
            object.roleId = [];
            for (var j = 0; j < message.roleId.length; ++j)
                if (typeof message.roleId[j] === "number")
                    object.roleId[j] = options.longs === String ? String(message.roleId[j]) : message.roleId[j];
                else
                    object.roleId[j] = options.longs === String ? $util.Long.prototype.toString.call(message.roleId[j]) : options.longs === Number ? new $util.LongBits(message.roleId[j].low >>> 0, message.roleId[j].high >>> 0).toNumber() : message.roleId[j];
        }
        return object;
    };

    /**
     * Converts this ApplyAthleticsResponse to JSON.
     * @function toJSON
     * @memberof ApplyAthleticsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ApplyAthleticsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ApplyAthleticsResponse;
})();

$root.QuitRoomRequest = (function() {

    /**
     * Properties of a QuitRoomRequest.
     * @exports IQuitRoomRequest
     * @interface IQuitRoomRequest
     * @property {MID|null} [mid] QuitRoomRequest mid
     */

    /**
     * Constructs a new QuitRoomRequest.
     * @exports QuitRoomRequest
     * @classdesc Represents a QuitRoomRequest.
     * @implements IQuitRoomRequest
     * @constructor
     * @param {IQuitRoomRequest=} [properties] Properties to set
     */
    function QuitRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitRoomRequest mid.
     * @member {MID} mid
     * @memberof QuitRoomRequest
     * @instance
     */
    QuitRoomRequest.prototype.mid = 20005;

    /**
     * Creates a new QuitRoomRequest instance using the specified properties.
     * @function create
     * @memberof QuitRoomRequest
     * @static
     * @param {IQuitRoomRequest=} [properties] Properties to set
     * @returns {QuitRoomRequest} QuitRoomRequest instance
     */
    QuitRoomRequest.create = function create(properties) {
        return new QuitRoomRequest(properties);
    };

    /**
     * Encodes the specified QuitRoomRequest message. Does not implicitly {@link QuitRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof QuitRoomRequest
     * @static
     * @param {IQuitRoomRequest} message QuitRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        return writer;
    };

    /**
     * Encodes the specified QuitRoomRequest message, length delimited. Does not implicitly {@link QuitRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitRoomRequest
     * @static
     * @param {IQuitRoomRequest} message QuitRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof QuitRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitRoomRequest} QuitRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitRoomRequest();
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
     * Decodes a QuitRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitRoomRequest} QuitRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitRoomRequest message.
     * @function verify
     * @memberof QuitRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitRoomRequest.verify = function verify(message) {
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
     * Creates a QuitRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitRoomRequest} QuitRoomRequest
     */
    QuitRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitRoomRequest)
            return object;
        var message = new $root.QuitRoomRequest();
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
     * Creates a plain object from a QuitRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitRoomRequest
     * @static
     * @param {QuitRoomRequest} message QuitRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mid = options.enums === String ? "QuitRoomReq" : 20005;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        return object;
    };

    /**
     * Converts this QuitRoomRequest to JSON.
     * @function toJSON
     * @memberof QuitRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitRoomRequest;
})();

$root.QuitRoomResponse = (function() {

    /**
     * Properties of a QuitRoomResponse.
     * @exports IQuitRoomResponse
     * @interface IQuitRoomResponse
     * @property {MID|null} [mid] QuitRoomResponse mid
     * @property {number|null} [result] QuitRoomResponse result
     * @property {number|null} [rid] QuitRoomResponse rid
     */

    /**
     * Constructs a new QuitRoomResponse.
     * @exports QuitRoomResponse
     * @classdesc Represents a QuitRoomResponse.
     * @implements IQuitRoomResponse
     * @constructor
     * @param {IQuitRoomResponse=} [properties] Properties to set
     */
    function QuitRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitRoomResponse mid.
     * @member {MID} mid
     * @memberof QuitRoomResponse
     * @instance
     */
    QuitRoomResponse.prototype.mid = 20006;

    /**
     * QuitRoomResponse result.
     * @member {number} result
     * @memberof QuitRoomResponse
     * @instance
     */
    QuitRoomResponse.prototype.result = 0;

    /**
     * QuitRoomResponse rid.
     * @member {number} rid
     * @memberof QuitRoomResponse
     * @instance
     */
    QuitRoomResponse.prototype.rid = 0;

    /**
     * Creates a new QuitRoomResponse instance using the specified properties.
     * @function create
     * @memberof QuitRoomResponse
     * @static
     * @param {IQuitRoomResponse=} [properties] Properties to set
     * @returns {QuitRoomResponse} QuitRoomResponse instance
     */
    QuitRoomResponse.create = function create(properties) {
        return new QuitRoomResponse(properties);
    };

    /**
     * Encodes the specified QuitRoomResponse message. Does not implicitly {@link QuitRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof QuitRoomResponse
     * @static
     * @param {IQuitRoomResponse} message QuitRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rid);
        return writer;
    };

    /**
     * Encodes the specified QuitRoomResponse message, length delimited. Does not implicitly {@link QuitRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitRoomResponse
     * @static
     * @param {IQuitRoomResponse} message QuitRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof QuitRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitRoomResponse} QuitRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitRoomResponse();
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
                message.rid = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a QuitRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitRoomResponse} QuitRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitRoomResponse message.
     * @function verify
     * @memberof QuitRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitRoomResponse.verify = function verify(message) {
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
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (!$util.isInteger(message.rid))
                return "rid: integer expected";
        return null;
    };

    /**
     * Creates a QuitRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitRoomResponse} QuitRoomResponse
     */
    QuitRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitRoomResponse)
            return object;
        var message = new $root.QuitRoomResponse();
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
        if (object.rid != null)
            message.rid = object.rid | 0;
        return message;
    };

    /**
     * Creates a plain object from a QuitRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitRoomResponse
     * @static
     * @param {QuitRoomResponse} message QuitRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "QuitRoomRes" : 20006;
            object.result = 0;
            object.rid = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.rid != null && message.hasOwnProperty("rid"))
            object.rid = message.rid;
        return object;
    };

    /**
     * Converts this QuitRoomResponse to JSON.
     * @function toJSON
     * @memberof QuitRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitRoomResponse;
})();

$root.FishEnterRoomResponse = (function() {

    /**
     * Properties of a FishEnterRoomResponse.
     * @exports IFishEnterRoomResponse
     * @interface IFishEnterRoomResponse
     * @property {MID|null} [mid] FishEnterRoomResponse mid
     * @property {Array.<IFishInfo>|null} [fishInfo] FishEnterRoomResponse fishInfo
     */

    /**
     * Constructs a new FishEnterRoomResponse.
     * @exports FishEnterRoomResponse
     * @classdesc Represents a FishEnterRoomResponse.
     * @implements IFishEnterRoomResponse
     * @constructor
     * @param {IFishEnterRoomResponse=} [properties] Properties to set
     */
    function FishEnterRoomResponse(properties) {
        this.fishInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FishEnterRoomResponse mid.
     * @member {MID} mid
     * @memberof FishEnterRoomResponse
     * @instance
     */
    FishEnterRoomResponse.prototype.mid = 20008;

    /**
     * FishEnterRoomResponse fishInfo.
     * @member {Array.<IFishInfo>} fishInfo
     * @memberof FishEnterRoomResponse
     * @instance
     */
    FishEnterRoomResponse.prototype.fishInfo = $util.emptyArray;

    /**
     * Creates a new FishEnterRoomResponse instance using the specified properties.
     * @function create
     * @memberof FishEnterRoomResponse
     * @static
     * @param {IFishEnterRoomResponse=} [properties] Properties to set
     * @returns {FishEnterRoomResponse} FishEnterRoomResponse instance
     */
    FishEnterRoomResponse.create = function create(properties) {
        return new FishEnterRoomResponse(properties);
    };

    /**
     * Encodes the specified FishEnterRoomResponse message. Does not implicitly {@link FishEnterRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof FishEnterRoomResponse
     * @static
     * @param {IFishEnterRoomResponse} message FishEnterRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishEnterRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.fishInfo != null && message.fishInfo.length)
            for (var i = 0; i < message.fishInfo.length; ++i)
                $root.FishInfo.encode(message.fishInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FishEnterRoomResponse message, length delimited. Does not implicitly {@link FishEnterRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FishEnterRoomResponse
     * @static
     * @param {IFishEnterRoomResponse} message FishEnterRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishEnterRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FishEnterRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FishEnterRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FishEnterRoomResponse} FishEnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishEnterRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishEnterRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                if (!(message.fishInfo && message.fishInfo.length))
                    message.fishInfo = [];
                message.fishInfo.push($root.FishInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FishEnterRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FishEnterRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FishEnterRoomResponse} FishEnterRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishEnterRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FishEnterRoomResponse message.
     * @function verify
     * @memberof FishEnterRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FishEnterRoomResponse.verify = function verify(message) {
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
        if (message.fishInfo != null && message.hasOwnProperty("fishInfo")) {
            if (!Array.isArray(message.fishInfo))
                return "fishInfo: array expected";
            for (var i = 0; i < message.fishInfo.length; ++i) {
                var error = $root.FishInfo.verify(message.fishInfo[i]);
                if (error)
                    return "fishInfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FishEnterRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FishEnterRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FishEnterRoomResponse} FishEnterRoomResponse
     */
    FishEnterRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.FishEnterRoomResponse)
            return object;
        var message = new $root.FishEnterRoomResponse();
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
        if (object.fishInfo) {
            if (!Array.isArray(object.fishInfo))
                throw TypeError(".FishEnterRoomResponse.fishInfo: array expected");
            message.fishInfo = [];
            for (var i = 0; i < object.fishInfo.length; ++i) {
                if (typeof object.fishInfo[i] !== "object")
                    throw TypeError(".FishEnterRoomResponse.fishInfo: object expected");
                message.fishInfo[i] = $root.FishInfo.fromObject(object.fishInfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FishEnterRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FishEnterRoomResponse
     * @static
     * @param {FishEnterRoomResponse} message FishEnterRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FishEnterRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.fishInfo = [];
        if (options.defaults)
            object.mid = options.enums === String ? "FishEnterRoomRes" : 20008;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.fishInfo && message.fishInfo.length) {
            object.fishInfo = [];
            for (var j = 0; j < message.fishInfo.length; ++j)
                object.fishInfo[j] = $root.FishInfo.toObject(message.fishInfo[j], options);
        }
        return object;
    };

    /**
     * Converts this FishEnterRoomResponse to JSON.
     * @function toJSON
     * @memberof FishEnterRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FishEnterRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FishEnterRoomResponse;
})();

$root.RoomInfoResponse = (function() {

    /**
     * Properties of a RoomInfoResponse.
     * @exports IRoomInfoResponse
     * @interface IRoomInfoResponse
     * @property {MID|null} [mid] RoomInfoResponse mid
     * @property {IRoomInfo|null} [roomInfo] RoomInfoResponse roomInfo
     * @property {Array.<IFishInfo>|null} [fishInfo] RoomInfoResponse fishInfo
     * @property {Array.<IRoomRoleInfo>|null} [roleInfo] RoomInfoResponse roleInfo
     */

    /**
     * Constructs a new RoomInfoResponse.
     * @exports RoomInfoResponse
     * @classdesc Represents a RoomInfoResponse.
     * @implements IRoomInfoResponse
     * @constructor
     * @param {IRoomInfoResponse=} [properties] Properties to set
     */
    function RoomInfoResponse(properties) {
        this.fishInfo = [];
        this.roleInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfoResponse mid.
     * @member {MID} mid
     * @memberof RoomInfoResponse
     * @instance
     */
    RoomInfoResponse.prototype.mid = 20010;

    /**
     * RoomInfoResponse roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof RoomInfoResponse
     * @instance
     */
    RoomInfoResponse.prototype.roomInfo = null;

    /**
     * RoomInfoResponse fishInfo.
     * @member {Array.<IFishInfo>} fishInfo
     * @memberof RoomInfoResponse
     * @instance
     */
    RoomInfoResponse.prototype.fishInfo = $util.emptyArray;

    /**
     * RoomInfoResponse roleInfo.
     * @member {Array.<IRoomRoleInfo>} roleInfo
     * @memberof RoomInfoResponse
     * @instance
     */
    RoomInfoResponse.prototype.roleInfo = $util.emptyArray;

    /**
     * Creates a new RoomInfoResponse instance using the specified properties.
     * @function create
     * @memberof RoomInfoResponse
     * @static
     * @param {IRoomInfoResponse=} [properties] Properties to set
     * @returns {RoomInfoResponse} RoomInfoResponse instance
     */
    RoomInfoResponse.create = function create(properties) {
        return new RoomInfoResponse(properties);
    };

    /**
     * Encodes the specified RoomInfoResponse message. Does not implicitly {@link RoomInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof RoomInfoResponse
     * @static
     * @param {IRoomInfoResponse} message RoomInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfoResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.fishInfo != null && message.fishInfo.length)
            for (var i = 0; i < message.fishInfo.length; ++i)
                $root.FishInfo.encode(message.fishInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.roleInfo != null && message.roleInfo.length)
            for (var i = 0; i < message.roleInfo.length; ++i)
                $root.RoomRoleInfo.encode(message.roleInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomInfoResponse message, length delimited. Does not implicitly {@link RoomInfoResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfoResponse
     * @static
     * @param {IRoomInfoResponse} message RoomInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfoResponse} RoomInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfoResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.roomInfo = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.fishInfo && message.fishInfo.length))
                    message.fishInfo = [];
                message.fishInfo.push($root.FishInfo.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.roleInfo && message.roleInfo.length))
                    message.roleInfo = [];
                message.roleInfo.push($root.RoomRoleInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomInfoResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfoResponse} RoomInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfoResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomInfoResponse message.
     * @function verify
     * @memberof RoomInfoResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomInfoResponse.verify = function verify(message) {
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
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            var error = $root.RoomInfo.verify(message.roomInfo);
            if (error)
                return "roomInfo." + error;
        }
        if (message.fishInfo != null && message.hasOwnProperty("fishInfo")) {
            if (!Array.isArray(message.fishInfo))
                return "fishInfo: array expected";
            for (var i = 0; i < message.fishInfo.length; ++i) {
                var error = $root.FishInfo.verify(message.fishInfo[i]);
                if (error)
                    return "fishInfo." + error;
            }
        }
        if (message.roleInfo != null && message.hasOwnProperty("roleInfo")) {
            if (!Array.isArray(message.roleInfo))
                return "roleInfo: array expected";
            for (var i = 0; i < message.roleInfo.length; ++i) {
                var error = $root.RoomRoleInfo.verify(message.roleInfo[i]);
                if (error)
                    return "roleInfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RoomInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomInfoResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomInfoResponse} RoomInfoResponse
     */
    RoomInfoResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomInfoResponse)
            return object;
        var message = new $root.RoomInfoResponse();
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
        if (object.roomInfo != null) {
            if (typeof object.roomInfo !== "object")
                throw TypeError(".RoomInfoResponse.roomInfo: object expected");
            message.roomInfo = $root.RoomInfo.fromObject(object.roomInfo);
        }
        if (object.fishInfo) {
            if (!Array.isArray(object.fishInfo))
                throw TypeError(".RoomInfoResponse.fishInfo: array expected");
            message.fishInfo = [];
            for (var i = 0; i < object.fishInfo.length; ++i) {
                if (typeof object.fishInfo[i] !== "object")
                    throw TypeError(".RoomInfoResponse.fishInfo: object expected");
                message.fishInfo[i] = $root.FishInfo.fromObject(object.fishInfo[i]);
            }
        }
        if (object.roleInfo) {
            if (!Array.isArray(object.roleInfo))
                throw TypeError(".RoomInfoResponse.roleInfo: array expected");
            message.roleInfo = [];
            for (var i = 0; i < object.roleInfo.length; ++i) {
                if (typeof object.roleInfo[i] !== "object")
                    throw TypeError(".RoomInfoResponse.roleInfo: object expected");
                message.roleInfo[i] = $root.RoomRoleInfo.fromObject(object.roleInfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RoomInfoResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomInfoResponse
     * @static
     * @param {RoomInfoResponse} message RoomInfoResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomInfoResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.fishInfo = [];
            object.roleInfo = [];
        }
        if (options.defaults) {
            object.mid = options.enums === String ? "RoomInfoRes" : 20010;
            object.roomInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
            object.roomInfo = $root.RoomInfo.toObject(message.roomInfo, options);
        if (message.fishInfo && message.fishInfo.length) {
            object.fishInfo = [];
            for (var j = 0; j < message.fishInfo.length; ++j)
                object.fishInfo[j] = $root.FishInfo.toObject(message.fishInfo[j], options);
        }
        if (message.roleInfo && message.roleInfo.length) {
            object.roleInfo = [];
            for (var j = 0; j < message.roleInfo.length; ++j)
                object.roleInfo[j] = $root.RoomRoleInfo.toObject(message.roleInfo[j], options);
        }
        return object;
    };

    /**
     * Converts this RoomInfoResponse to JSON.
     * @function toJSON
     * @memberof RoomInfoResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomInfoResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomInfoResponse;
})();

$root.RoomChangeResponse = (function() {

    /**
     * Properties of a RoomChangeResponse.
     * @exports IRoomChangeResponse
     * @interface IRoomChangeResponse
     * @property {MID|null} [mid] RoomChangeResponse mid
     * @property {IRoomInfo|null} [roomInfo] RoomChangeResponse roomInfo
     */

    /**
     * Constructs a new RoomChangeResponse.
     * @exports RoomChangeResponse
     * @classdesc Represents a RoomChangeResponse.
     * @implements IRoomChangeResponse
     * @constructor
     * @param {IRoomChangeResponse=} [properties] Properties to set
     */
    function RoomChangeResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomChangeResponse mid.
     * @member {MID} mid
     * @memberof RoomChangeResponse
     * @instance
     */
    RoomChangeResponse.prototype.mid = 20012;

    /**
     * RoomChangeResponse roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof RoomChangeResponse
     * @instance
     */
    RoomChangeResponse.prototype.roomInfo = null;

    /**
     * Creates a new RoomChangeResponse instance using the specified properties.
     * @function create
     * @memberof RoomChangeResponse
     * @static
     * @param {IRoomChangeResponse=} [properties] Properties to set
     * @returns {RoomChangeResponse} RoomChangeResponse instance
     */
    RoomChangeResponse.create = function create(properties) {
        return new RoomChangeResponse(properties);
    };

    /**
     * Encodes the specified RoomChangeResponse message. Does not implicitly {@link RoomChangeResponse.verify|verify} messages.
     * @function encode
     * @memberof RoomChangeResponse
     * @static
     * @param {IRoomChangeResponse} message RoomChangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomChangeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomChangeResponse message, length delimited. Does not implicitly {@link RoomChangeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomChangeResponse
     * @static
     * @param {IRoomChangeResponse} message RoomChangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomChangeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoomChangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomChangeResponse} RoomChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomChangeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomChangeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.roomInfo = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomChangeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomChangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomChangeResponse} RoomChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomChangeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomChangeResponse message.
     * @function verify
     * @memberof RoomChangeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomChangeResponse.verify = function verify(message) {
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
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            var error = $root.RoomInfo.verify(message.roomInfo);
            if (error)
                return "roomInfo." + error;
        }
        return null;
    };

    /**
     * Creates a RoomChangeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomChangeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomChangeResponse} RoomChangeResponse
     */
    RoomChangeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomChangeResponse)
            return object;
        var message = new $root.RoomChangeResponse();
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
        if (object.roomInfo != null) {
            if (typeof object.roomInfo !== "object")
                throw TypeError(".RoomChangeResponse.roomInfo: object expected");
            message.roomInfo = $root.RoomInfo.fromObject(object.roomInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a RoomChangeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomChangeResponse
     * @static
     * @param {RoomChangeResponse} message RoomChangeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomChangeResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "RoomChangeRes" : 20012;
            object.roomInfo = null;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo"))
            object.roomInfo = $root.RoomInfo.toObject(message.roomInfo, options);
        return object;
    };

    /**
     * Converts this RoomChangeResponse to JSON.
     * @function toJSON
     * @memberof RoomChangeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomChangeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomChangeResponse;
})();

/**
 * RoomType enum.
 * @exports RoomType
 * @enum {number}
 * @property {number} CLASSICS=1 CLASSICS value
 * @property {number} ARENA=2 ARENA value
 */
$root.RoomType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "CLASSICS"] = 1;
    values[valuesById[2] = "ARENA"] = 2;
    return values;
})();

$root.FishInfo = (function() {

    /**
     * Properties of a FishInfo.
     * @exports IFishInfo
     * @interface IFishInfo
     * @property {Array.<number|Long>|null} [id] FishInfo id
     * @property {Array.<number>|null} [configId] FishInfo configId
     * @property {Array.<number>|null} [trackId] FishInfo trackId
     * @property {number|null} [formation] FishInfo formation
     * @property {number|Long} bornTime FishInfo bornTime
     * @property {number|Long} serverTime FishInfo serverTime
     * @property {number|null} [speed] FishInfo speed
     * @property {number|null} [topSpeed] FishInfo topSpeed
     * @property {number|Long|null} [topSpeedStartTime] FishInfo topSpeedStartTime
     */

    /**
     * Constructs a new FishInfo.
     * @exports FishInfo
     * @classdesc Represents a FishInfo.
     * @implements IFishInfo
     * @constructor
     * @param {IFishInfo=} [properties] Properties to set
     */
    function FishInfo(properties) {
        this.id = [];
        this.configId = [];
        this.trackId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FishInfo id.
     * @member {Array.<number|Long>} id
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.id = $util.emptyArray;

    /**
     * FishInfo configId.
     * @member {Array.<number>} configId
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.configId = $util.emptyArray;

    /**
     * FishInfo trackId.
     * @member {Array.<number>} trackId
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.trackId = $util.emptyArray;

    /**
     * FishInfo formation.
     * @member {number} formation
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.formation = 0;

    /**
     * FishInfo bornTime.
     * @member {number|Long} bornTime
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.bornTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FishInfo serverTime.
     * @member {number|Long} serverTime
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FishInfo speed.
     * @member {number} speed
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.speed = 0;

    /**
     * FishInfo topSpeed.
     * @member {number} topSpeed
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.topSpeed = 0;

    /**
     * FishInfo topSpeedStartTime.
     * @member {number|Long} topSpeedStartTime
     * @memberof FishInfo
     * @instance
     */
    FishInfo.prototype.topSpeedStartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new FishInfo instance using the specified properties.
     * @function create
     * @memberof FishInfo
     * @static
     * @param {IFishInfo=} [properties] Properties to set
     * @returns {FishInfo} FishInfo instance
     */
    FishInfo.create = function create(properties) {
        return new FishInfo(properties);
    };

    /**
     * Encodes the specified FishInfo message. Does not implicitly {@link FishInfo.verify|verify} messages.
     * @function encode
     * @memberof FishInfo
     * @static
     * @param {IFishInfo} message FishInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.id.length)
            for (var i = 0; i < message.id.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id[i]);
        if (message.configId != null && message.configId.length)
            for (var i = 0; i < message.configId.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.configId[i]);
        if (message.trackId != null && message.trackId.length)
            for (var i = 0; i < message.trackId.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.trackId[i]);
        if (message.formation != null && Object.hasOwnProperty.call(message, "formation"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.formation);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.bornTime);
        writer.uint32(/* id 6, wireType 0 =*/48).int64(message.serverTime);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.speed);
        if (message.topSpeed != null && Object.hasOwnProperty.call(message, "topSpeed"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.topSpeed);
        if (message.topSpeedStartTime != null && Object.hasOwnProperty.call(message, "topSpeedStartTime"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.topSpeedStartTime);
        return writer;
    };

    /**
     * Encodes the specified FishInfo message, length delimited. Does not implicitly {@link FishInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FishInfo
     * @static
     * @param {IFishInfo} message FishInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FishInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FishInfo message from the specified reader or buffer.
     * @function decode
     * @memberof FishInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FishInfo} FishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FishInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.id && message.id.length))
                    message.id = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.id.push(reader.int64());
                } else
                    message.id.push(reader.int64());
                break;
            case 2:
                if (!(message.configId && message.configId.length))
                    message.configId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.configId.push(reader.int32());
                } else
                    message.configId.push(reader.int32());
                break;
            case 3:
                if (!(message.trackId && message.trackId.length))
                    message.trackId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.trackId.push(reader.int32());
                } else
                    message.trackId.push(reader.int32());
                break;
            case 4:
                message.formation = reader.int32();
                break;
            case 5:
                message.bornTime = reader.int64();
                break;
            case 6:
                message.serverTime = reader.int64();
                break;
            case 7:
                message.speed = reader.int32();
                break;
            case 9:
                message.topSpeed = reader.int32();
                break;
            case 10:
                message.topSpeedStartTime = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("bornTime"))
            throw $util.ProtocolError("missing required 'bornTime'", { instance: message });
        if (!message.hasOwnProperty("serverTime"))
            throw $util.ProtocolError("missing required 'serverTime'", { instance: message });
        return message;
    };

    /**
     * Decodes a FishInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FishInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FishInfo} FishInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FishInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FishInfo message.
     * @function verify
     * @memberof FishInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FishInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) {
            if (!Array.isArray(message.id))
                return "id: array expected";
            for (var i = 0; i < message.id.length; ++i)
                if (!$util.isInteger(message.id[i]) && !(message.id[i] && $util.isInteger(message.id[i].low) && $util.isInteger(message.id[i].high)))
                    return "id: integer|Long[] expected";
        }
        if (message.configId != null && message.hasOwnProperty("configId")) {
            if (!Array.isArray(message.configId))
                return "configId: array expected";
            for (var i = 0; i < message.configId.length; ++i)
                if (!$util.isInteger(message.configId[i]))
                    return "configId: integer[] expected";
        }
        if (message.trackId != null && message.hasOwnProperty("trackId")) {
            if (!Array.isArray(message.trackId))
                return "trackId: array expected";
            for (var i = 0; i < message.trackId.length; ++i)
                if (!$util.isInteger(message.trackId[i]))
                    return "trackId: integer[] expected";
        }
        if (message.formation != null && message.hasOwnProperty("formation"))
            if (!$util.isInteger(message.formation))
                return "formation: integer expected";
        if (!$util.isInteger(message.bornTime) && !(message.bornTime && $util.isInteger(message.bornTime.low) && $util.isInteger(message.bornTime.high)))
            return "bornTime: integer|Long expected";
        if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
            return "serverTime: integer|Long expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (!$util.isInteger(message.speed))
                return "speed: integer expected";
        if (message.topSpeed != null && message.hasOwnProperty("topSpeed"))
            if (!$util.isInteger(message.topSpeed))
                return "topSpeed: integer expected";
        if (message.topSpeedStartTime != null && message.hasOwnProperty("topSpeedStartTime"))
            if (!$util.isInteger(message.topSpeedStartTime) && !(message.topSpeedStartTime && $util.isInteger(message.topSpeedStartTime.low) && $util.isInteger(message.topSpeedStartTime.high)))
                return "topSpeedStartTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a FishInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FishInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FishInfo} FishInfo
     */
    FishInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.FishInfo)
            return object;
        var message = new $root.FishInfo();
        if (object.id) {
            if (!Array.isArray(object.id))
                throw TypeError(".FishInfo.id: array expected");
            message.id = [];
            for (var i = 0; i < object.id.length; ++i)
                if ($util.Long)
                    (message.id[i] = $util.Long.fromValue(object.id[i])).unsigned = false;
                else if (typeof object.id[i] === "string")
                    message.id[i] = parseInt(object.id[i], 10);
                else if (typeof object.id[i] === "number")
                    message.id[i] = object.id[i];
                else if (typeof object.id[i] === "object")
                    message.id[i] = new $util.LongBits(object.id[i].low >>> 0, object.id[i].high >>> 0).toNumber();
        }
        if (object.configId) {
            if (!Array.isArray(object.configId))
                throw TypeError(".FishInfo.configId: array expected");
            message.configId = [];
            for (var i = 0; i < object.configId.length; ++i)
                message.configId[i] = object.configId[i] | 0;
        }
        if (object.trackId) {
            if (!Array.isArray(object.trackId))
                throw TypeError(".FishInfo.trackId: array expected");
            message.trackId = [];
            for (var i = 0; i < object.trackId.length; ++i)
                message.trackId[i] = object.trackId[i] | 0;
        }
        if (object.formation != null)
            message.formation = object.formation | 0;
        if (object.bornTime != null)
            if ($util.Long)
                (message.bornTime = $util.Long.fromValue(object.bornTime)).unsigned = false;
            else if (typeof object.bornTime === "string")
                message.bornTime = parseInt(object.bornTime, 10);
            else if (typeof object.bornTime === "number")
                message.bornTime = object.bornTime;
            else if (typeof object.bornTime === "object")
                message.bornTime = new $util.LongBits(object.bornTime.low >>> 0, object.bornTime.high >>> 0).toNumber();
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
        if (object.speed != null)
            message.speed = object.speed | 0;
        if (object.topSpeed != null)
            message.topSpeed = object.topSpeed | 0;
        if (object.topSpeedStartTime != null)
            if ($util.Long)
                (message.topSpeedStartTime = $util.Long.fromValue(object.topSpeedStartTime)).unsigned = false;
            else if (typeof object.topSpeedStartTime === "string")
                message.topSpeedStartTime = parseInt(object.topSpeedStartTime, 10);
            else if (typeof object.topSpeedStartTime === "number")
                message.topSpeedStartTime = object.topSpeedStartTime;
            else if (typeof object.topSpeedStartTime === "object")
                message.topSpeedStartTime = new $util.LongBits(object.topSpeedStartTime.low >>> 0, object.topSpeedStartTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a FishInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FishInfo
     * @static
     * @param {FishInfo} message FishInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FishInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.id = [];
            object.configId = [];
            object.trackId = [];
        }
        if (options.defaults) {
            object.formation = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.bornTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.bornTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
            object.speed = 0;
            object.topSpeed = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.topSpeedStartTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.topSpeedStartTime = options.longs === String ? "0" : 0;
        }
        if (message.id && message.id.length) {
            object.id = [];
            for (var j = 0; j < message.id.length; ++j)
                if (typeof message.id[j] === "number")
                    object.id[j] = options.longs === String ? String(message.id[j]) : message.id[j];
                else
                    object.id[j] = options.longs === String ? $util.Long.prototype.toString.call(message.id[j]) : options.longs === Number ? new $util.LongBits(message.id[j].low >>> 0, message.id[j].high >>> 0).toNumber() : message.id[j];
        }
        if (message.configId && message.configId.length) {
            object.configId = [];
            for (var j = 0; j < message.configId.length; ++j)
                object.configId[j] = message.configId[j];
        }
        if (message.trackId && message.trackId.length) {
            object.trackId = [];
            for (var j = 0; j < message.trackId.length; ++j)
                object.trackId[j] = message.trackId[j];
        }
        if (message.formation != null && message.hasOwnProperty("formation"))
            object.formation = message.formation;
        if (message.bornTime != null && message.hasOwnProperty("bornTime"))
            if (typeof message.bornTime === "number")
                object.bornTime = options.longs === String ? String(message.bornTime) : message.bornTime;
            else
                object.bornTime = options.longs === String ? $util.Long.prototype.toString.call(message.bornTime) : options.longs === Number ? new $util.LongBits(message.bornTime.low >>> 0, message.bornTime.high >>> 0).toNumber() : message.bornTime;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed = message.speed;
        if (message.topSpeed != null && message.hasOwnProperty("topSpeed"))
            object.topSpeed = message.topSpeed;
        if (message.topSpeedStartTime != null && message.hasOwnProperty("topSpeedStartTime"))
            if (typeof message.topSpeedStartTime === "number")
                object.topSpeedStartTime = options.longs === String ? String(message.topSpeedStartTime) : message.topSpeedStartTime;
            else
                object.topSpeedStartTime = options.longs === String ? $util.Long.prototype.toString.call(message.topSpeedStartTime) : options.longs === Number ? new $util.LongBits(message.topSpeedStartTime.low >>> 0, message.topSpeedStartTime.high >>> 0).toNumber() : message.topSpeedStartTime;
        return object;
    };

    /**
     * Converts this FishInfo to JSON.
     * @function toJSON
     * @memberof FishInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FishInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FishInfo;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {number|Long} id RoomInfo id
     * @property {number|null} [rank] RoomInfo rank
     * @property {number|null} [type] RoomInfo type
     * @property {number|Long|null} [cumulativeGold] RoomInfo cumulativeGold
     * @property {number|Long|null} [state] RoomInfo state
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [properties] Properties to set
     */
    function RoomInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfo id.
     * @member {number|Long} id
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomInfo rank.
     * @member {number} rank
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.rank = 0;

    /**
     * RoomInfo type.
     * @member {number} type
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.type = 0;

    /**
     * RoomInfo cumulativeGold.
     * @member {number|Long} cumulativeGold
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.cumulativeGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomInfo state.
     * @member {number|Long} state
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.state = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.cumulativeGold != null && Object.hasOwnProperty.call(message, "cumulativeGold"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.cumulativeGold);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.state);
        return writer;
    };

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.rank = reader.int32();
                break;
            case 3:
                message.type = reader.int32();
                break;
            case 4:
                message.cumulativeGold = reader.int64();
                break;
            case 5:
                message.state = reader.int64();
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
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomInfo message.
     * @function verify
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
            return "id: integer|Long expected";
        if (message.rank != null && message.hasOwnProperty("rank"))
            if (!$util.isInteger(message.rank))
                return "rank: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.cumulativeGold != null && message.hasOwnProperty("cumulativeGold"))
            if (!$util.isInteger(message.cumulativeGold) && !(message.cumulativeGold && $util.isInteger(message.cumulativeGold.low) && $util.isInteger(message.cumulativeGold.high)))
                return "cumulativeGold: integer|Long expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state) && !(message.state && $util.isInteger(message.state.low) && $util.isInteger(message.state.high)))
                return "state: integer|Long expected";
        return null;
    };

    /**
     * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomInfo} RoomInfo
     */
    RoomInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomInfo)
            return object;
        var message = new $root.RoomInfo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.rank != null)
            message.rank = object.rank | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.cumulativeGold != null)
            if ($util.Long)
                (message.cumulativeGold = $util.Long.fromValue(object.cumulativeGold)).unsigned = false;
            else if (typeof object.cumulativeGold === "string")
                message.cumulativeGold = parseInt(object.cumulativeGold, 10);
            else if (typeof object.cumulativeGold === "number")
                message.cumulativeGold = object.cumulativeGold;
            else if (typeof object.cumulativeGold === "object")
                message.cumulativeGold = new $util.LongBits(object.cumulativeGold.low >>> 0, object.cumulativeGold.high >>> 0).toNumber();
        if (object.state != null)
            if ($util.Long)
                (message.state = $util.Long.fromValue(object.state)).unsigned = false;
            else if (typeof object.state === "string")
                message.state = parseInt(object.state, 10);
            else if (typeof object.state === "number")
                message.state = object.state;
            else if (typeof object.state === "object")
                message.state = new $util.LongBits(object.state.low >>> 0, object.state.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomInfo
     * @static
     * @param {RoomInfo} message RoomInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.rank = 0;
            object.type = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.cumulativeGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cumulativeGold = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.state = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.state = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.cumulativeGold != null && message.hasOwnProperty("cumulativeGold"))
            if (typeof message.cumulativeGold === "number")
                object.cumulativeGold = options.longs === String ? String(message.cumulativeGold) : message.cumulativeGold;
            else
                object.cumulativeGold = options.longs === String ? $util.Long.prototype.toString.call(message.cumulativeGold) : options.longs === Number ? new $util.LongBits(message.cumulativeGold.low >>> 0, message.cumulativeGold.high >>> 0).toNumber() : message.cumulativeGold;
        if (message.state != null && message.hasOwnProperty("state"))
            if (typeof message.state === "number")
                object.state = options.longs === String ? String(message.state) : message.state;
            else
                object.state = options.longs === String ? $util.Long.prototype.toString.call(message.state) : options.longs === Number ? new $util.LongBits(message.state.low >>> 0, message.state.high >>> 0).toNumber() : message.state;
        return object;
    };

    /**
     * Converts this RoomInfo to JSON.
     * @function toJSON
     * @memberof RoomInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomInfo;
})();

$root.RoomRoleInfo = (function() {

    /**
     * Properties of a RoomRoleInfo.
     * @exports IRoomRoleInfo
     * @interface IRoomRoleInfo
     * @property {string} nick RoomRoleInfo nick
     * @property {string} icon RoomRoleInfo icon
     * @property {number} level RoomRoleInfo level
     * @property {number|Long} gold RoomRoleInfo gold
     * @property {string|null} [sign] RoomRoleInfo sign
     * @property {number|null} [popularity] RoomRoleInfo popularity
     * @property {number|null} [seatNo] RoomRoleInfo seatNo
     * @property {boolean|null} [vip] RoomRoleInfo vip
     * @property {number|Long|null} [diamond] RoomRoleInfo diamond
     * @property {number|Long} rid RoomRoleInfo rid
     * @property {number|null} [robotNo] RoomRoleInfo robotNo
     * @property {number|null} [ownerId] RoomRoleInfo ownerId
     * @property {string|null} [sid] RoomRoleInfo sid
     */

    /**
     * Constructs a new RoomRoleInfo.
     * @exports RoomRoleInfo
     * @classdesc Represents a RoomRoleInfo.
     * @implements IRoomRoleInfo
     * @constructor
     * @param {IRoomRoleInfo=} [properties] Properties to set
     */
    function RoomRoleInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomRoleInfo nick.
     * @member {string} nick
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.nick = "";

    /**
     * RoomRoleInfo icon.
     * @member {string} icon
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.icon = "";

    /**
     * RoomRoleInfo level.
     * @member {number} level
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.level = 0;

    /**
     * RoomRoleInfo gold.
     * @member {number|Long} gold
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomRoleInfo sign.
     * @member {string} sign
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.sign = "";

    /**
     * RoomRoleInfo popularity.
     * @member {number} popularity
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.popularity = 0;

    /**
     * RoomRoleInfo seatNo.
     * @member {number} seatNo
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.seatNo = 0;

    /**
     * RoomRoleInfo vip.
     * @member {boolean} vip
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.vip = false;

    /**
     * RoomRoleInfo diamond.
     * @member {number|Long} diamond
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomRoleInfo rid.
     * @member {number|Long} rid
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoomRoleInfo robotNo.
     * @member {number} robotNo
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.robotNo = 0;

    /**
     * RoomRoleInfo ownerId.
     * @member {number} ownerId
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.ownerId = 0;

    /**
     * RoomRoleInfo sid.
     * @member {string} sid
     * @memberof RoomRoleInfo
     * @instance
     */
    RoomRoleInfo.prototype.sid = "";

    /**
     * Creates a new RoomRoleInfo instance using the specified properties.
     * @function create
     * @memberof RoomRoleInfo
     * @static
     * @param {IRoomRoleInfo=} [properties] Properties to set
     * @returns {RoomRoleInfo} RoomRoleInfo instance
     */
    RoomRoleInfo.create = function create(properties) {
        return new RoomRoleInfo(properties);
    };

    /**
     * Encodes the specified RoomRoleInfo message. Does not implicitly {@link RoomRoleInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomRoleInfo
     * @static
     * @param {IRoomRoleInfo} message RoomRoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomRoleInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.nick);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gold);
        if (message.sign != null && Object.hasOwnProperty.call(message, "sign"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
        if (message.popularity != null && Object.hasOwnProperty.call(message, "popularity"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.popularity);
        if (message.seatNo != null && Object.hasOwnProperty.call(message, "seatNo"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.seatNo);
        if (message.vip != null && Object.hasOwnProperty.call(message, "vip"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.vip);
        if (message.diamond != null && Object.hasOwnProperty.call(message, "diamond"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.diamond);
        writer.uint32(/* id 10, wireType 0 =*/80).int64(message.rid);
        if (message.robotNo != null && Object.hasOwnProperty.call(message, "robotNo"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.robotNo);
        if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ownerId);
        if (message.sid != null && Object.hasOwnProperty.call(message, "sid"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.sid);
        return writer;
    };

    /**
     * Encodes the specified RoomRoleInfo message, length delimited. Does not implicitly {@link RoomRoleInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomRoleInfo
     * @static
     * @param {IRoomRoleInfo} message RoomRoleInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomRoleInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomRoleInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomRoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomRoleInfo} RoomRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomRoleInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomRoleInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nick = reader.string();
                break;
            case 2:
                message.icon = reader.string();
                break;
            case 3:
                message.level = reader.int32();
                break;
            case 4:
                message.gold = reader.int64();
                break;
            case 5:
                message.sign = reader.string();
                break;
            case 6:
                message.popularity = reader.int32();
                break;
            case 7:
                message.seatNo = reader.int32();
                break;
            case 8:
                message.vip = reader.bool();
                break;
            case 9:
                message.diamond = reader.int64();
                break;
            case 10:
                message.rid = reader.int64();
                break;
            case 11:
                message.robotNo = reader.int32();
                break;
            case 12:
                message.ownerId = reader.int32();
                break;
            case 13:
                message.sid = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nick"))
            throw $util.ProtocolError("missing required 'nick'", { instance: message });
        if (!message.hasOwnProperty("icon"))
            throw $util.ProtocolError("missing required 'icon'", { instance: message });
        if (!message.hasOwnProperty("level"))
            throw $util.ProtocolError("missing required 'level'", { instance: message });
        if (!message.hasOwnProperty("gold"))
            throw $util.ProtocolError("missing required 'gold'", { instance: message });
        if (!message.hasOwnProperty("rid"))
            throw $util.ProtocolError("missing required 'rid'", { instance: message });
        return message;
    };

    /**
     * Decodes a RoomRoleInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomRoleInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomRoleInfo} RoomRoleInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomRoleInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomRoleInfo message.
     * @function verify
     * @memberof RoomRoleInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomRoleInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.nick))
            return "nick: string expected";
        if (!$util.isString(message.icon))
            return "icon: string expected";
        if (!$util.isInteger(message.level))
            return "level: integer expected";
        if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
            return "gold: integer|Long expected";
        if (message.sign != null && message.hasOwnProperty("sign"))
            if (!$util.isString(message.sign))
                return "sign: string expected";
        if (message.popularity != null && message.hasOwnProperty("popularity"))
            if (!$util.isInteger(message.popularity))
                return "popularity: integer expected";
        if (message.seatNo != null && message.hasOwnProperty("seatNo"))
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
        if (message.vip != null && message.hasOwnProperty("vip"))
            if (typeof message.vip !== "boolean")
                return "vip: boolean expected";
        if (message.diamond != null && message.hasOwnProperty("diamond"))
            if (!$util.isInteger(message.diamond) && !(message.diamond && $util.isInteger(message.diamond.low) && $util.isInteger(message.diamond.high)))
                return "diamond: integer|Long expected";
        if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
            return "rid: integer|Long expected";
        if (message.robotNo != null && message.hasOwnProperty("robotNo"))
            if (!$util.isInteger(message.robotNo))
                return "robotNo: integer expected";
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            if (!$util.isInteger(message.ownerId))
                return "ownerId: integer expected";
        if (message.sid != null && message.hasOwnProperty("sid"))
            if (!$util.isString(message.sid))
                return "sid: string expected";
        return null;
    };

    /**
     * Creates a RoomRoleInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomRoleInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomRoleInfo} RoomRoleInfo
     */
    RoomRoleInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomRoleInfo)
            return object;
        var message = new $root.RoomRoleInfo();
        if (object.nick != null)
            message.nick = String(object.nick);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.level != null)
            message.level = object.level | 0;
        if (object.gold != null)
            if ($util.Long)
                (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
            else if (typeof object.gold === "string")
                message.gold = parseInt(object.gold, 10);
            else if (typeof object.gold === "number")
                message.gold = object.gold;
            else if (typeof object.gold === "object")
                message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
        if (object.sign != null)
            message.sign = String(object.sign);
        if (object.popularity != null)
            message.popularity = object.popularity | 0;
        if (object.seatNo != null)
            message.seatNo = object.seatNo | 0;
        if (object.vip != null)
            message.vip = Boolean(object.vip);
        if (object.diamond != null)
            if ($util.Long)
                (message.diamond = $util.Long.fromValue(object.diamond)).unsigned = false;
            else if (typeof object.diamond === "string")
                message.diamond = parseInt(object.diamond, 10);
            else if (typeof object.diamond === "number")
                message.diamond = object.diamond;
            else if (typeof object.diamond === "object")
                message.diamond = new $util.LongBits(object.diamond.low >>> 0, object.diamond.high >>> 0).toNumber();
        if (object.rid != null)
            if ($util.Long)
                (message.rid = $util.Long.fromValue(object.rid)).unsigned = false;
            else if (typeof object.rid === "string")
                message.rid = parseInt(object.rid, 10);
            else if (typeof object.rid === "number")
                message.rid = object.rid;
            else if (typeof object.rid === "object")
                message.rid = new $util.LongBits(object.rid.low >>> 0, object.rid.high >>> 0).toNumber();
        if (object.robotNo != null)
            message.robotNo = object.robotNo | 0;
        if (object.ownerId != null)
            message.ownerId = object.ownerId | 0;
        if (object.sid != null)
            message.sid = String(object.sid);
        return message;
    };

    /**
     * Creates a plain object from a RoomRoleInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomRoleInfo
     * @static
     * @param {RoomRoleInfo} message RoomRoleInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomRoleInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nick = "";
            object.icon = "";
            object.level = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gold = options.longs === String ? "0" : 0;
            object.sign = "";
            object.popularity = 0;
            object.seatNo = 0;
            object.vip = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.diamond = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.diamond = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
            object.robotNo = 0;
            object.ownerId = 0;
            object.sid = "";
        }
        if (message.nick != null && message.hasOwnProperty("nick"))
            object.nick = message.nick;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.gold != null && message.hasOwnProperty("gold"))
            if (typeof message.gold === "number")
                object.gold = options.longs === String ? String(message.gold) : message.gold;
            else
                object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
        if (message.sign != null && message.hasOwnProperty("sign"))
            object.sign = message.sign;
        if (message.popularity != null && message.hasOwnProperty("popularity"))
            object.popularity = message.popularity;
        if (message.seatNo != null && message.hasOwnProperty("seatNo"))
            object.seatNo = message.seatNo;
        if (message.vip != null && message.hasOwnProperty("vip"))
            object.vip = message.vip;
        if (message.diamond != null && message.hasOwnProperty("diamond"))
            if (typeof message.diamond === "number")
                object.diamond = options.longs === String ? String(message.diamond) : message.diamond;
            else
                object.diamond = options.longs === String ? $util.Long.prototype.toString.call(message.diamond) : options.longs === Number ? new $util.LongBits(message.diamond.low >>> 0, message.diamond.high >>> 0).toNumber() : message.diamond;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        if (message.robotNo != null && message.hasOwnProperty("robotNo"))
            object.robotNo = message.robotNo;
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            object.ownerId = message.ownerId;
        if (message.sid != null && message.hasOwnProperty("sid"))
            object.sid = message.sid;
        return object;
    };

    /**
     * Converts this RoomRoleInfo to JSON.
     * @function toJSON
     * @memberof RoomRoleInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomRoleInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomRoleInfo;
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
