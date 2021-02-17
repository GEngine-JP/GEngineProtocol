/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.UseSkillRequest = (function() {

    /**
     * Properties of a UseSkillRequest.
     * @exports IUseSkillRequest
     * @interface IUseSkillRequest
     * @property {MID|null} [mid] UseSkillRequest mid
     * @property {number|null} [skillId] UseSkillRequest skillId
     */

    /**
     * Constructs a new UseSkillRequest.
     * @exports UseSkillRequest
     * @classdesc Represents a UseSkillRequest.
     * @implements IUseSkillRequest
     * @constructor
     * @param {IUseSkillRequest=} [properties] Properties to set
     */
    function UseSkillRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UseSkillRequest mid.
     * @member {MID} mid
     * @memberof UseSkillRequest
     * @instance
     */
    UseSkillRequest.prototype.mid = 20013;

    /**
     * UseSkillRequest skillId.
     * @member {number} skillId
     * @memberof UseSkillRequest
     * @instance
     */
    UseSkillRequest.prototype.skillId = 0;

    /**
     * Creates a new UseSkillRequest instance using the specified properties.
     * @function create
     * @memberof UseSkillRequest
     * @static
     * @param {IUseSkillRequest=} [properties] Properties to set
     * @returns {UseSkillRequest} UseSkillRequest instance
     */
    UseSkillRequest.create = function create(properties) {
        return new UseSkillRequest(properties);
    };

    /**
     * Encodes the specified UseSkillRequest message. Does not implicitly {@link UseSkillRequest.verify|verify} messages.
     * @function encode
     * @memberof UseSkillRequest
     * @static
     * @param {IUseSkillRequest} message UseSkillRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseSkillRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skillId);
        return writer;
    };

    /**
     * Encodes the specified UseSkillRequest message, length delimited. Does not implicitly {@link UseSkillRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UseSkillRequest
     * @static
     * @param {IUseSkillRequest} message UseSkillRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseSkillRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UseSkillRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UseSkillRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UseSkillRequest} UseSkillRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseSkillRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UseSkillRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.skillId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UseSkillRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UseSkillRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UseSkillRequest} UseSkillRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseSkillRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UseSkillRequest message.
     * @function verify
     * @memberof UseSkillRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UseSkillRequest.verify = function verify(message) {
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
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
        return null;
    };

    /**
     * Creates a UseSkillRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UseSkillRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UseSkillRequest} UseSkillRequest
     */
    UseSkillRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UseSkillRequest)
            return object;
        var message = new $root.UseSkillRequest();
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
        if (object.skillId != null)
            message.skillId = object.skillId | 0;
        return message;
    };

    /**
     * Creates a plain object from a UseSkillRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UseSkillRequest
     * @static
     * @param {UseSkillRequest} message UseSkillRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UseSkillRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "UseSkillReq" : 20013;
            object.skillId = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            object.skillId = message.skillId;
        return object;
    };

    /**
     * Converts this UseSkillRequest to JSON.
     * @function toJSON
     * @memberof UseSkillRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UseSkillRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UseSkillRequest;
})();

$root.UseSkillResponse = (function() {

    /**
     * Properties of a UseSkillResponse.
     * @exports IUseSkillResponse
     * @interface IUseSkillResponse
     * @property {MID|null} [mid] UseSkillResponse mid
     * @property {number|Long|null} [rid] UseSkillResponse rid
     * @property {number|null} [skillId] UseSkillResponse skillId
     * @property {number|null} [result] UseSkillResponse result
     */

    /**
     * Constructs a new UseSkillResponse.
     * @exports UseSkillResponse
     * @classdesc Represents a UseSkillResponse.
     * @implements IUseSkillResponse
     * @constructor
     * @param {IUseSkillResponse=} [properties] Properties to set
     */
    function UseSkillResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UseSkillResponse mid.
     * @member {MID} mid
     * @memberof UseSkillResponse
     * @instance
     */
    UseSkillResponse.prototype.mid = 20014;

    /**
     * UseSkillResponse rid.
     * @member {number|Long} rid
     * @memberof UseSkillResponse
     * @instance
     */
    UseSkillResponse.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UseSkillResponse skillId.
     * @member {number} skillId
     * @memberof UseSkillResponse
     * @instance
     */
    UseSkillResponse.prototype.skillId = 0;

    /**
     * UseSkillResponse result.
     * @member {number} result
     * @memberof UseSkillResponse
     * @instance
     */
    UseSkillResponse.prototype.result = 0;

    /**
     * Creates a new UseSkillResponse instance using the specified properties.
     * @function create
     * @memberof UseSkillResponse
     * @static
     * @param {IUseSkillResponse=} [properties] Properties to set
     * @returns {UseSkillResponse} UseSkillResponse instance
     */
    UseSkillResponse.create = function create(properties) {
        return new UseSkillResponse(properties);
    };

    /**
     * Encodes the specified UseSkillResponse message. Does not implicitly {@link UseSkillResponse.verify|verify} messages.
     * @function encode
     * @memberof UseSkillResponse
     * @static
     * @param {IUseSkillResponse} message UseSkillResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseSkillResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rid);
        if (message.skillId != null && Object.hasOwnProperty.call(message, "skillId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.skillId);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified UseSkillResponse message, length delimited. Does not implicitly {@link UseSkillResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UseSkillResponse
     * @static
     * @param {IUseSkillResponse} message UseSkillResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseSkillResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UseSkillResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UseSkillResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UseSkillResponse} UseSkillResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseSkillResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UseSkillResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.rid = reader.int64();
                break;
            case 3:
                message.skillId = reader.int32();
                break;
            case 4:
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
     * Decodes a UseSkillResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UseSkillResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UseSkillResponse} UseSkillResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseSkillResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UseSkillResponse message.
     * @function verify
     * @memberof UseSkillResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UseSkillResponse.verify = function verify(message) {
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
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
                return "rid: integer|Long expected";
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isInteger(message.result))
                return "result: integer expected";
        return null;
    };

    /**
     * Creates a UseSkillResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UseSkillResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UseSkillResponse} UseSkillResponse
     */
    UseSkillResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.UseSkillResponse)
            return object;
        var message = new $root.UseSkillResponse();
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
        if (object.rid != null)
            if ($util.Long)
                (message.rid = $util.Long.fromValue(object.rid)).unsigned = false;
            else if (typeof object.rid === "string")
                message.rid = parseInt(object.rid, 10);
            else if (typeof object.rid === "number")
                message.rid = object.rid;
            else if (typeof object.rid === "object")
                message.rid = new $util.LongBits(object.rid.low >>> 0, object.rid.high >>> 0).toNumber();
        if (object.skillId != null)
            message.skillId = object.skillId | 0;
        if (object.result != null)
            message.result = object.result | 0;
        return message;
    };

    /**
     * Creates a plain object from a UseSkillResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UseSkillResponse
     * @static
     * @param {UseSkillResponse} message UseSkillResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UseSkillResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "UseSkillRes" : 20014;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
            object.skillId = 0;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            object.skillId = message.skillId;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this UseSkillResponse to JSON.
     * @function toJSON
     * @memberof UseSkillResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UseSkillResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UseSkillResponse;
})();

$root.FireRequest = (function() {

    /**
     * Properties of a FireRequest.
     * @exports IFireRequest
     * @interface IFireRequest
     * @property {MID|null} [mid] FireRequest mid
     * @property {number|null} [gold] FireRequest gold
     * @property {number|null} [angleX] FireRequest angleX
     * @property {number|null} [angleY] FireRequest angleY
     * @property {number|Long|null} [targetFishId] FireRequest targetFishId
     */

    /**
     * Constructs a new FireRequest.
     * @exports FireRequest
     * @classdesc Represents a FireRequest.
     * @implements IFireRequest
     * @constructor
     * @param {IFireRequest=} [properties] Properties to set
     */
    function FireRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FireRequest mid.
     * @member {MID} mid
     * @memberof FireRequest
     * @instance
     */
    FireRequest.prototype.mid = 20015;

    /**
     * FireRequest gold.
     * @member {number} gold
     * @memberof FireRequest
     * @instance
     */
    FireRequest.prototype.gold = 0;

    /**
     * FireRequest angleX.
     * @member {number} angleX
     * @memberof FireRequest
     * @instance
     */
    FireRequest.prototype.angleX = 0;

    /**
     * FireRequest angleY.
     * @member {number} angleY
     * @memberof FireRequest
     * @instance
     */
    FireRequest.prototype.angleY = 0;

    /**
     * FireRequest targetFishId.
     * @member {number|Long} targetFishId
     * @memberof FireRequest
     * @instance
     */
    FireRequest.prototype.targetFishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new FireRequest instance using the specified properties.
     * @function create
     * @memberof FireRequest
     * @static
     * @param {IFireRequest=} [properties] Properties to set
     * @returns {FireRequest} FireRequest instance
     */
    FireRequest.create = function create(properties) {
        return new FireRequest(properties);
    };

    /**
     * Encodes the specified FireRequest message. Does not implicitly {@link FireRequest.verify|verify} messages.
     * @function encode
     * @memberof FireRequest
     * @static
     * @param {IFireRequest} message FireRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gold);
        if (message.angleX != null && Object.hasOwnProperty.call(message, "angleX"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.angleX);
        if (message.angleY != null && Object.hasOwnProperty.call(message, "angleY"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.angleY);
        if (message.targetFishId != null && Object.hasOwnProperty.call(message, "targetFishId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.targetFishId);
        return writer;
    };

    /**
     * Encodes the specified FireRequest message, length delimited. Does not implicitly {@link FireRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FireRequest
     * @static
     * @param {IFireRequest} message FireRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FireRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FireRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FireRequest} FireRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FireRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 3:
                message.gold = reader.int32();
                break;
            case 4:
                message.angleX = reader.float();
                break;
            case 5:
                message.angleY = reader.float();
                break;
            case 6:
                message.targetFishId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FireRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FireRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FireRequest} FireRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FireRequest message.
     * @function verify
     * @memberof FireRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FireRequest.verify = function verify(message) {
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
        if (message.gold != null && message.hasOwnProperty("gold"))
            if (!$util.isInteger(message.gold))
                return "gold: integer expected";
        if (message.angleX != null && message.hasOwnProperty("angleX"))
            if (typeof message.angleX !== "number")
                return "angleX: number expected";
        if (message.angleY != null && message.hasOwnProperty("angleY"))
            if (typeof message.angleY !== "number")
                return "angleY: number expected";
        if (message.targetFishId != null && message.hasOwnProperty("targetFishId"))
            if (!$util.isInteger(message.targetFishId) && !(message.targetFishId && $util.isInteger(message.targetFishId.low) && $util.isInteger(message.targetFishId.high)))
                return "targetFishId: integer|Long expected";
        return null;
    };

    /**
     * Creates a FireRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FireRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FireRequest} FireRequest
     */
    FireRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.FireRequest)
            return object;
        var message = new $root.FireRequest();
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
        if (object.gold != null)
            message.gold = object.gold | 0;
        if (object.angleX != null)
            message.angleX = Number(object.angleX);
        if (object.angleY != null)
            message.angleY = Number(object.angleY);
        if (object.targetFishId != null)
            if ($util.Long)
                (message.targetFishId = $util.Long.fromValue(object.targetFishId)).unsigned = false;
            else if (typeof object.targetFishId === "string")
                message.targetFishId = parseInt(object.targetFishId, 10);
            else if (typeof object.targetFishId === "number")
                message.targetFishId = object.targetFishId;
            else if (typeof object.targetFishId === "object")
                message.targetFishId = new $util.LongBits(object.targetFishId.low >>> 0, object.targetFishId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a FireRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FireRequest
     * @static
     * @param {FireRequest} message FireRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FireRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "FireReq" : 20015;
            object.gold = 0;
            object.angleX = 0;
            object.angleY = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.targetFishId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.targetFishId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.gold != null && message.hasOwnProperty("gold"))
            object.gold = message.gold;
        if (message.angleX != null && message.hasOwnProperty("angleX"))
            object.angleX = options.json && !isFinite(message.angleX) ? String(message.angleX) : message.angleX;
        if (message.angleY != null && message.hasOwnProperty("angleY"))
            object.angleY = options.json && !isFinite(message.angleY) ? String(message.angleY) : message.angleY;
        if (message.targetFishId != null && message.hasOwnProperty("targetFishId"))
            if (typeof message.targetFishId === "number")
                object.targetFishId = options.longs === String ? String(message.targetFishId) : message.targetFishId;
            else
                object.targetFishId = options.longs === String ? $util.Long.prototype.toString.call(message.targetFishId) : options.longs === Number ? new $util.LongBits(message.targetFishId.low >>> 0, message.targetFishId.high >>> 0).toNumber() : message.targetFishId;
        return object;
    };

    /**
     * Converts this FireRequest to JSON.
     * @function toJSON
     * @memberof FireRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FireRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FireRequest;
})();

$root.FireResponse = (function() {

    /**
     * Properties of a FireResponse.
     * @exports IFireResponse
     * @interface IFireResponse
     * @property {MID|null} [mid] FireResponse mid
     * @property {number|Long|null} [rid] FireResponse rid
     * @property {number|null} [gold] FireResponse gold
     * @property {number|null} [angleX] FireResponse angleX
     * @property {number|null} [angleY] FireResponse angleY
     * @property {number|Long|null} [targetFishId] FireResponse targetFishId
     */

    /**
     * Constructs a new FireResponse.
     * @exports FireResponse
     * @classdesc Represents a FireResponse.
     * @implements IFireResponse
     * @constructor
     * @param {IFireResponse=} [properties] Properties to set
     */
    function FireResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FireResponse mid.
     * @member {MID} mid
     * @memberof FireResponse
     * @instance
     */
    FireResponse.prototype.mid = 20016;

    /**
     * FireResponse rid.
     * @member {number|Long} rid
     * @memberof FireResponse
     * @instance
     */
    FireResponse.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FireResponse gold.
     * @member {number} gold
     * @memberof FireResponse
     * @instance
     */
    FireResponse.prototype.gold = 0;

    /**
     * FireResponse angleX.
     * @member {number} angleX
     * @memberof FireResponse
     * @instance
     */
    FireResponse.prototype.angleX = 0;

    /**
     * FireResponse angleY.
     * @member {number} angleY
     * @memberof FireResponse
     * @instance
     */
    FireResponse.prototype.angleY = 0;

    /**
     * FireResponse targetFishId.
     * @member {number|Long} targetFishId
     * @memberof FireResponse
     * @instance
     */
    FireResponse.prototype.targetFishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new FireResponse instance using the specified properties.
     * @function create
     * @memberof FireResponse
     * @static
     * @param {IFireResponse=} [properties] Properties to set
     * @returns {FireResponse} FireResponse instance
     */
    FireResponse.create = function create(properties) {
        return new FireResponse(properties);
    };

    /**
     * Encodes the specified FireResponse message. Does not implicitly {@link FireResponse.verify|verify} messages.
     * @function encode
     * @memberof FireResponse
     * @static
     * @param {IFireResponse} message FireResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.rid);
        if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gold);
        if (message.angleX != null && Object.hasOwnProperty.call(message, "angleX"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.angleX);
        if (message.angleY != null && Object.hasOwnProperty.call(message, "angleY"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.angleY);
        if (message.targetFishId != null && Object.hasOwnProperty.call(message, "targetFishId"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.targetFishId);
        return writer;
    };

    /**
     * Encodes the specified FireResponse message, length delimited. Does not implicitly {@link FireResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FireResponse
     * @static
     * @param {IFireResponse} message FireResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FireResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FireResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FireResponse} FireResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FireResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 3:
                message.rid = reader.int64();
                break;
            case 4:
                message.gold = reader.int32();
                break;
            case 5:
                message.angleX = reader.float();
                break;
            case 6:
                message.angleY = reader.float();
                break;
            case 7:
                message.targetFishId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FireResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FireResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FireResponse} FireResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FireResponse message.
     * @function verify
     * @memberof FireResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FireResponse.verify = function verify(message) {
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
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
                return "rid: integer|Long expected";
        if (message.gold != null && message.hasOwnProperty("gold"))
            if (!$util.isInteger(message.gold))
                return "gold: integer expected";
        if (message.angleX != null && message.hasOwnProperty("angleX"))
            if (typeof message.angleX !== "number")
                return "angleX: number expected";
        if (message.angleY != null && message.hasOwnProperty("angleY"))
            if (typeof message.angleY !== "number")
                return "angleY: number expected";
        if (message.targetFishId != null && message.hasOwnProperty("targetFishId"))
            if (!$util.isInteger(message.targetFishId) && !(message.targetFishId && $util.isInteger(message.targetFishId.low) && $util.isInteger(message.targetFishId.high)))
                return "targetFishId: integer|Long expected";
        return null;
    };

    /**
     * Creates a FireResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FireResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FireResponse} FireResponse
     */
    FireResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.FireResponse)
            return object;
        var message = new $root.FireResponse();
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
        if (object.rid != null)
            if ($util.Long)
                (message.rid = $util.Long.fromValue(object.rid)).unsigned = false;
            else if (typeof object.rid === "string")
                message.rid = parseInt(object.rid, 10);
            else if (typeof object.rid === "number")
                message.rid = object.rid;
            else if (typeof object.rid === "object")
                message.rid = new $util.LongBits(object.rid.low >>> 0, object.rid.high >>> 0).toNumber();
        if (object.gold != null)
            message.gold = object.gold | 0;
        if (object.angleX != null)
            message.angleX = Number(object.angleX);
        if (object.angleY != null)
            message.angleY = Number(object.angleY);
        if (object.targetFishId != null)
            if ($util.Long)
                (message.targetFishId = $util.Long.fromValue(object.targetFishId)).unsigned = false;
            else if (typeof object.targetFishId === "string")
                message.targetFishId = parseInt(object.targetFishId, 10);
            else if (typeof object.targetFishId === "number")
                message.targetFishId = object.targetFishId;
            else if (typeof object.targetFishId === "object")
                message.targetFishId = new $util.LongBits(object.targetFishId.low >>> 0, object.targetFishId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a FireResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FireResponse
     * @static
     * @param {FireResponse} message FireResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FireResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "FireRes" : 20016;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
            object.gold = 0;
            object.angleX = 0;
            object.angleY = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.targetFishId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.targetFishId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        if (message.gold != null && message.hasOwnProperty("gold"))
            object.gold = message.gold;
        if (message.angleX != null && message.hasOwnProperty("angleX"))
            object.angleX = options.json && !isFinite(message.angleX) ? String(message.angleX) : message.angleX;
        if (message.angleY != null && message.hasOwnProperty("angleY"))
            object.angleY = options.json && !isFinite(message.angleY) ? String(message.angleY) : message.angleY;
        if (message.targetFishId != null && message.hasOwnProperty("targetFishId"))
            if (typeof message.targetFishId === "number")
                object.targetFishId = options.longs === String ? String(message.targetFishId) : message.targetFishId;
            else
                object.targetFishId = options.longs === String ? $util.Long.prototype.toString.call(message.targetFishId) : options.longs === Number ? new $util.LongBits(message.targetFishId.low >>> 0, message.targetFishId.high >>> 0).toNumber() : message.targetFishId;
        return object;
    };

    /**
     * Converts this FireResponse to JSON.
     * @function toJSON
     * @memberof FireResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FireResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FireResponse;
})();

$root.FireResultRequest = (function() {

    /**
     * Properties of a FireResultRequest.
     * @exports IFireResultRequest
     * @interface IFireResultRequest
     * @property {MID|null} [mid] FireResultRequest mid
     * @property {Array.<number|Long>|null} [targetFishId] FireResultRequest targetFishId
     * @property {number|null} [multiple] FireResultRequest multiple
     * @property {number|Long|null} [specialFishId] FireResultRequest specialFishId
     * @property {number|null} [fireGold] FireResultRequest fireGold
     */

    /**
     * Constructs a new FireResultRequest.
     * @exports FireResultRequest
     * @classdesc Represents a FireResultRequest.
     * @implements IFireResultRequest
     * @constructor
     * @param {IFireResultRequest=} [properties] Properties to set
     */
    function FireResultRequest(properties) {
        this.targetFishId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FireResultRequest mid.
     * @member {MID} mid
     * @memberof FireResultRequest
     * @instance
     */
    FireResultRequest.prototype.mid = 20017;

    /**
     * FireResultRequest targetFishId.
     * @member {Array.<number|Long>} targetFishId
     * @memberof FireResultRequest
     * @instance
     */
    FireResultRequest.prototype.targetFishId = $util.emptyArray;

    /**
     * FireResultRequest multiple.
     * @member {number} multiple
     * @memberof FireResultRequest
     * @instance
     */
    FireResultRequest.prototype.multiple = 0;

    /**
     * FireResultRequest specialFishId.
     * @member {number|Long} specialFishId
     * @memberof FireResultRequest
     * @instance
     */
    FireResultRequest.prototype.specialFishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FireResultRequest fireGold.
     * @member {number} fireGold
     * @memberof FireResultRequest
     * @instance
     */
    FireResultRequest.prototype.fireGold = 0;

    /**
     * Creates a new FireResultRequest instance using the specified properties.
     * @function create
     * @memberof FireResultRequest
     * @static
     * @param {IFireResultRequest=} [properties] Properties to set
     * @returns {FireResultRequest} FireResultRequest instance
     */
    FireResultRequest.create = function create(properties) {
        return new FireResultRequest(properties);
    };

    /**
     * Encodes the specified FireResultRequest message. Does not implicitly {@link FireResultRequest.verify|verify} messages.
     * @function encode
     * @memberof FireResultRequest
     * @static
     * @param {IFireResultRequest} message FireResultRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireResultRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.targetFishId != null && message.targetFishId.length)
            for (var i = 0; i < message.targetFishId.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.targetFishId[i]);
        if (message.multiple != null && Object.hasOwnProperty.call(message, "multiple"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.multiple);
        if (message.specialFishId != null && Object.hasOwnProperty.call(message, "specialFishId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.specialFishId);
        if (message.fireGold != null && Object.hasOwnProperty.call(message, "fireGold"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.fireGold);
        return writer;
    };

    /**
     * Encodes the specified FireResultRequest message, length delimited. Does not implicitly {@link FireResultRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FireResultRequest
     * @static
     * @param {IFireResultRequest} message FireResultRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireResultRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FireResultRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FireResultRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FireResultRequest} FireResultRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireResultRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FireResultRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 3:
                if (!(message.targetFishId && message.targetFishId.length))
                    message.targetFishId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.targetFishId.push(reader.int64());
                } else
                    message.targetFishId.push(reader.int64());
                break;
            case 4:
                message.multiple = reader.int32();
                break;
            case 5:
                message.specialFishId = reader.int64();
                break;
            case 6:
                message.fireGold = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FireResultRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FireResultRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FireResultRequest} FireResultRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireResultRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FireResultRequest message.
     * @function verify
     * @memberof FireResultRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FireResultRequest.verify = function verify(message) {
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
        if (message.targetFishId != null && message.hasOwnProperty("targetFishId")) {
            if (!Array.isArray(message.targetFishId))
                return "targetFishId: array expected";
            for (var i = 0; i < message.targetFishId.length; ++i)
                if (!$util.isInteger(message.targetFishId[i]) && !(message.targetFishId[i] && $util.isInteger(message.targetFishId[i].low) && $util.isInteger(message.targetFishId[i].high)))
                    return "targetFishId: integer|Long[] expected";
        }
        if (message.multiple != null && message.hasOwnProperty("multiple"))
            if (!$util.isInteger(message.multiple))
                return "multiple: integer expected";
        if (message.specialFishId != null && message.hasOwnProperty("specialFishId"))
            if (!$util.isInteger(message.specialFishId) && !(message.specialFishId && $util.isInteger(message.specialFishId.low) && $util.isInteger(message.specialFishId.high)))
                return "specialFishId: integer|Long expected";
        if (message.fireGold != null && message.hasOwnProperty("fireGold"))
            if (!$util.isInteger(message.fireGold))
                return "fireGold: integer expected";
        return null;
    };

    /**
     * Creates a FireResultRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FireResultRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FireResultRequest} FireResultRequest
     */
    FireResultRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.FireResultRequest)
            return object;
        var message = new $root.FireResultRequest();
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
        if (object.targetFishId) {
            if (!Array.isArray(object.targetFishId))
                throw TypeError(".FireResultRequest.targetFishId: array expected");
            message.targetFishId = [];
            for (var i = 0; i < object.targetFishId.length; ++i)
                if ($util.Long)
                    (message.targetFishId[i] = $util.Long.fromValue(object.targetFishId[i])).unsigned = false;
                else if (typeof object.targetFishId[i] === "string")
                    message.targetFishId[i] = parseInt(object.targetFishId[i], 10);
                else if (typeof object.targetFishId[i] === "number")
                    message.targetFishId[i] = object.targetFishId[i];
                else if (typeof object.targetFishId[i] === "object")
                    message.targetFishId[i] = new $util.LongBits(object.targetFishId[i].low >>> 0, object.targetFishId[i].high >>> 0).toNumber();
        }
        if (object.multiple != null)
            message.multiple = object.multiple | 0;
        if (object.specialFishId != null)
            if ($util.Long)
                (message.specialFishId = $util.Long.fromValue(object.specialFishId)).unsigned = false;
            else if (typeof object.specialFishId === "string")
                message.specialFishId = parseInt(object.specialFishId, 10);
            else if (typeof object.specialFishId === "number")
                message.specialFishId = object.specialFishId;
            else if (typeof object.specialFishId === "object")
                message.specialFishId = new $util.LongBits(object.specialFishId.low >>> 0, object.specialFishId.high >>> 0).toNumber();
        if (object.fireGold != null)
            message.fireGold = object.fireGold | 0;
        return message;
    };

    /**
     * Creates a plain object from a FireResultRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FireResultRequest
     * @static
     * @param {FireResultRequest} message FireResultRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FireResultRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.targetFishId = [];
        if (options.defaults) {
            object.mid = options.enums === String ? "FireResultReq" : 20017;
            object.multiple = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.specialFishId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.specialFishId = options.longs === String ? "0" : 0;
            object.fireGold = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.targetFishId && message.targetFishId.length) {
            object.targetFishId = [];
            for (var j = 0; j < message.targetFishId.length; ++j)
                if (typeof message.targetFishId[j] === "number")
                    object.targetFishId[j] = options.longs === String ? String(message.targetFishId[j]) : message.targetFishId[j];
                else
                    object.targetFishId[j] = options.longs === String ? $util.Long.prototype.toString.call(message.targetFishId[j]) : options.longs === Number ? new $util.LongBits(message.targetFishId[j].low >>> 0, message.targetFishId[j].high >>> 0).toNumber() : message.targetFishId[j];
        }
        if (message.multiple != null && message.hasOwnProperty("multiple"))
            object.multiple = message.multiple;
        if (message.specialFishId != null && message.hasOwnProperty("specialFishId"))
            if (typeof message.specialFishId === "number")
                object.specialFishId = options.longs === String ? String(message.specialFishId) : message.specialFishId;
            else
                object.specialFishId = options.longs === String ? $util.Long.prototype.toString.call(message.specialFishId) : options.longs === Number ? new $util.LongBits(message.specialFishId.low >>> 0, message.specialFishId.high >>> 0).toNumber() : message.specialFishId;
        if (message.fireGold != null && message.hasOwnProperty("fireGold"))
            object.fireGold = message.fireGold;
        return object;
    };

    /**
     * Converts this FireResultRequest to JSON.
     * @function toJSON
     * @memberof FireResultRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FireResultRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FireResultRequest;
})();

$root.FireResultResponse = (function() {

    /**
     * Properties of a FireResultResponse.
     * @exports IFireResultResponse
     * @interface IFireResultResponse
     * @property {MID|null} [mid] FireResultResponse mid
     * @property {number|Long|null} [rid] FireResultResponse rid
     * @property {Array.<number|Long>|null} [dieFishId] FireResultResponse dieFishId
     * @property {number|Long|null} [gold] FireResultResponse gold
     * @property {number|null} [multiple] FireResultResponse multiple
     * @property {number|Long|null} [specialFishId] FireResultResponse specialFishId
     * @property {number|Long|null} [accumulateGold] FireResultResponse accumulateGold
     */

    /**
     * Constructs a new FireResultResponse.
     * @exports FireResultResponse
     * @classdesc Represents a FireResultResponse.
     * @implements IFireResultResponse
     * @constructor
     * @param {IFireResultResponse=} [properties] Properties to set
     */
    function FireResultResponse(properties) {
        this.dieFishId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FireResultResponse mid.
     * @member {MID} mid
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.mid = 20018;

    /**
     * FireResultResponse rid.
     * @member {number|Long} rid
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FireResultResponse dieFishId.
     * @member {Array.<number|Long>} dieFishId
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.dieFishId = $util.emptyArray;

    /**
     * FireResultResponse gold.
     * @member {number|Long} gold
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FireResultResponse multiple.
     * @member {number} multiple
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.multiple = 0;

    /**
     * FireResultResponse specialFishId.
     * @member {number|Long} specialFishId
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.specialFishId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FireResultResponse accumulateGold.
     * @member {number|Long} accumulateGold
     * @memberof FireResultResponse
     * @instance
     */
    FireResultResponse.prototype.accumulateGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new FireResultResponse instance using the specified properties.
     * @function create
     * @memberof FireResultResponse
     * @static
     * @param {IFireResultResponse=} [properties] Properties to set
     * @returns {FireResultResponse} FireResultResponse instance
     */
    FireResultResponse.create = function create(properties) {
        return new FireResultResponse(properties);
    };

    /**
     * Encodes the specified FireResultResponse message. Does not implicitly {@link FireResultResponse.verify|verify} messages.
     * @function encode
     * @memberof FireResultResponse
     * @static
     * @param {IFireResultResponse} message FireResultResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireResultResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rid);
        if (message.dieFishId != null && message.dieFishId.length)
            for (var i = 0; i < message.dieFishId.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.dieFishId[i]);
        if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gold);
        if (message.multiple != null && Object.hasOwnProperty.call(message, "multiple"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.multiple);
        if (message.specialFishId != null && Object.hasOwnProperty.call(message, "specialFishId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.specialFishId);
        if (message.accumulateGold != null && Object.hasOwnProperty.call(message, "accumulateGold"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.accumulateGold);
        return writer;
    };

    /**
     * Encodes the specified FireResultResponse message, length delimited. Does not implicitly {@link FireResultResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FireResultResponse
     * @static
     * @param {IFireResultResponse} message FireResultResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FireResultResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FireResultResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FireResultResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FireResultResponse} FireResultResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireResultResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FireResultResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.rid = reader.int64();
                break;
            case 3:
                if (!(message.dieFishId && message.dieFishId.length))
                    message.dieFishId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.dieFishId.push(reader.int64());
                } else
                    message.dieFishId.push(reader.int64());
                break;
            case 4:
                message.gold = reader.int64();
                break;
            case 5:
                message.multiple = reader.int32();
                break;
            case 6:
                message.specialFishId = reader.int64();
                break;
            case 7:
                message.accumulateGold = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FireResultResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FireResultResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FireResultResponse} FireResultResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FireResultResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FireResultResponse message.
     * @function verify
     * @memberof FireResultResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FireResultResponse.verify = function verify(message) {
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
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
                return "rid: integer|Long expected";
        if (message.dieFishId != null && message.hasOwnProperty("dieFishId")) {
            if (!Array.isArray(message.dieFishId))
                return "dieFishId: array expected";
            for (var i = 0; i < message.dieFishId.length; ++i)
                if (!$util.isInteger(message.dieFishId[i]) && !(message.dieFishId[i] && $util.isInteger(message.dieFishId[i].low) && $util.isInteger(message.dieFishId[i].high)))
                    return "dieFishId: integer|Long[] expected";
        }
        if (message.gold != null && message.hasOwnProperty("gold"))
            if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                return "gold: integer|Long expected";
        if (message.multiple != null && message.hasOwnProperty("multiple"))
            if (!$util.isInteger(message.multiple))
                return "multiple: integer expected";
        if (message.specialFishId != null && message.hasOwnProperty("specialFishId"))
            if (!$util.isInteger(message.specialFishId) && !(message.specialFishId && $util.isInteger(message.specialFishId.low) && $util.isInteger(message.specialFishId.high)))
                return "specialFishId: integer|Long expected";
        if (message.accumulateGold != null && message.hasOwnProperty("accumulateGold"))
            if (!$util.isInteger(message.accumulateGold) && !(message.accumulateGold && $util.isInteger(message.accumulateGold.low) && $util.isInteger(message.accumulateGold.high)))
                return "accumulateGold: integer|Long expected";
        return null;
    };

    /**
     * Creates a FireResultResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FireResultResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FireResultResponse} FireResultResponse
     */
    FireResultResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.FireResultResponse)
            return object;
        var message = new $root.FireResultResponse();
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
        if (object.rid != null)
            if ($util.Long)
                (message.rid = $util.Long.fromValue(object.rid)).unsigned = false;
            else if (typeof object.rid === "string")
                message.rid = parseInt(object.rid, 10);
            else if (typeof object.rid === "number")
                message.rid = object.rid;
            else if (typeof object.rid === "object")
                message.rid = new $util.LongBits(object.rid.low >>> 0, object.rid.high >>> 0).toNumber();
        if (object.dieFishId) {
            if (!Array.isArray(object.dieFishId))
                throw TypeError(".FireResultResponse.dieFishId: array expected");
            message.dieFishId = [];
            for (var i = 0; i < object.dieFishId.length; ++i)
                if ($util.Long)
                    (message.dieFishId[i] = $util.Long.fromValue(object.dieFishId[i])).unsigned = false;
                else if (typeof object.dieFishId[i] === "string")
                    message.dieFishId[i] = parseInt(object.dieFishId[i], 10);
                else if (typeof object.dieFishId[i] === "number")
                    message.dieFishId[i] = object.dieFishId[i];
                else if (typeof object.dieFishId[i] === "object")
                    message.dieFishId[i] = new $util.LongBits(object.dieFishId[i].low >>> 0, object.dieFishId[i].high >>> 0).toNumber();
        }
        if (object.gold != null)
            if ($util.Long)
                (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
            else if (typeof object.gold === "string")
                message.gold = parseInt(object.gold, 10);
            else if (typeof object.gold === "number")
                message.gold = object.gold;
            else if (typeof object.gold === "object")
                message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
        if (object.multiple != null)
            message.multiple = object.multiple | 0;
        if (object.specialFishId != null)
            if ($util.Long)
                (message.specialFishId = $util.Long.fromValue(object.specialFishId)).unsigned = false;
            else if (typeof object.specialFishId === "string")
                message.specialFishId = parseInt(object.specialFishId, 10);
            else if (typeof object.specialFishId === "number")
                message.specialFishId = object.specialFishId;
            else if (typeof object.specialFishId === "object")
                message.specialFishId = new $util.LongBits(object.specialFishId.low >>> 0, object.specialFishId.high >>> 0).toNumber();
        if (object.accumulateGold != null)
            if ($util.Long)
                (message.accumulateGold = $util.Long.fromValue(object.accumulateGold)).unsigned = false;
            else if (typeof object.accumulateGold === "string")
                message.accumulateGold = parseInt(object.accumulateGold, 10);
            else if (typeof object.accumulateGold === "number")
                message.accumulateGold = object.accumulateGold;
            else if (typeof object.accumulateGold === "object")
                message.accumulateGold = new $util.LongBits(object.accumulateGold.low >>> 0, object.accumulateGold.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a FireResultResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FireResultResponse
     * @static
     * @param {FireResultResponse} message FireResultResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FireResultResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.dieFishId = [];
        if (options.defaults) {
            object.mid = options.enums === String ? "FireResultRes" : 20018;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gold = options.longs === String ? "0" : 0;
            object.multiple = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.specialFishId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.specialFishId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.accumulateGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.accumulateGold = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        if (message.dieFishId && message.dieFishId.length) {
            object.dieFishId = [];
            for (var j = 0; j < message.dieFishId.length; ++j)
                if (typeof message.dieFishId[j] === "number")
                    object.dieFishId[j] = options.longs === String ? String(message.dieFishId[j]) : message.dieFishId[j];
                else
                    object.dieFishId[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dieFishId[j]) : options.longs === Number ? new $util.LongBits(message.dieFishId[j].low >>> 0, message.dieFishId[j].high >>> 0).toNumber() : message.dieFishId[j];
        }
        if (message.gold != null && message.hasOwnProperty("gold"))
            if (typeof message.gold === "number")
                object.gold = options.longs === String ? String(message.gold) : message.gold;
            else
                object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
        if (message.multiple != null && message.hasOwnProperty("multiple"))
            object.multiple = message.multiple;
        if (message.specialFishId != null && message.hasOwnProperty("specialFishId"))
            if (typeof message.specialFishId === "number")
                object.specialFishId = options.longs === String ? String(message.specialFishId) : message.specialFishId;
            else
                object.specialFishId = options.longs === String ? $util.Long.prototype.toString.call(message.specialFishId) : options.longs === Number ? new $util.LongBits(message.specialFishId.low >>> 0, message.specialFishId.high >>> 0).toNumber() : message.specialFishId;
        if (message.accumulateGold != null && message.hasOwnProperty("accumulateGold"))
            if (typeof message.accumulateGold === "number")
                object.accumulateGold = options.longs === String ? String(message.accumulateGold) : message.accumulateGold;
            else
                object.accumulateGold = options.longs === String ? $util.Long.prototype.toString.call(message.accumulateGold) : options.longs === Number ? new $util.LongBits(message.accumulateGold.low >>> 0, message.accumulateGold.high >>> 0).toNumber() : message.accumulateGold;
        return object;
    };

    /**
     * Converts this FireResultResponse to JSON.
     * @function toJSON
     * @memberof FireResultResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FireResultResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FireResultResponse;
})();

$root.GunLeveUpRequest = (function() {

    /**
     * Properties of a GunLeveUpRequest.
     * @exports IGunLeveUpRequest
     * @interface IGunLeveUpRequest
     * @property {MID|null} [mid] GunLeveUpRequest mid
     */

    /**
     * Constructs a new GunLeveUpRequest.
     * @exports GunLeveUpRequest
     * @classdesc Represents a GunLeveUpRequest.
     * @implements IGunLeveUpRequest
     * @constructor
     * @param {IGunLeveUpRequest=} [properties] Properties to set
     */
    function GunLeveUpRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GunLeveUpRequest mid.
     * @member {MID} mid
     * @memberof GunLeveUpRequest
     * @instance
     */
    GunLeveUpRequest.prototype.mid = 20019;

    /**
     * Creates a new GunLeveUpRequest instance using the specified properties.
     * @function create
     * @memberof GunLeveUpRequest
     * @static
     * @param {IGunLeveUpRequest=} [properties] Properties to set
     * @returns {GunLeveUpRequest} GunLeveUpRequest instance
     */
    GunLeveUpRequest.create = function create(properties) {
        return new GunLeveUpRequest(properties);
    };

    /**
     * Encodes the specified GunLeveUpRequest message. Does not implicitly {@link GunLeveUpRequest.verify|verify} messages.
     * @function encode
     * @memberof GunLeveUpRequest
     * @static
     * @param {IGunLeveUpRequest} message GunLeveUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunLeveUpRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        return writer;
    };

    /**
     * Encodes the specified GunLeveUpRequest message, length delimited. Does not implicitly {@link GunLeveUpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GunLeveUpRequest
     * @static
     * @param {IGunLeveUpRequest} message GunLeveUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunLeveUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GunLeveUpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GunLeveUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GunLeveUpRequest} GunLeveUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunLeveUpRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunLeveUpRequest();
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
     * Decodes a GunLeveUpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GunLeveUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GunLeveUpRequest} GunLeveUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunLeveUpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GunLeveUpRequest message.
     * @function verify
     * @memberof GunLeveUpRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GunLeveUpRequest.verify = function verify(message) {
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
     * Creates a GunLeveUpRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GunLeveUpRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GunLeveUpRequest} GunLeveUpRequest
     */
    GunLeveUpRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GunLeveUpRequest)
            return object;
        var message = new $root.GunLeveUpRequest();
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
     * Creates a plain object from a GunLeveUpRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GunLeveUpRequest
     * @static
     * @param {GunLeveUpRequest} message GunLeveUpRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GunLeveUpRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mid = options.enums === String ? "GunLeveUpReq" : 20019;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        return object;
    };

    /**
     * Converts this GunLeveUpRequest to JSON.
     * @function toJSON
     * @memberof GunLeveUpRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GunLeveUpRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GunLeveUpRequest;
})();

$root.GunLeveUpResponse = (function() {

    /**
     * Properties of a GunLeveUpResponse.
     * @exports IGunLeveUpResponse
     * @interface IGunLeveUpResponse
     * @property {MID|null} [mid] GunLeveUpResponse mid
     * @property {number|null} [result] GunLeveUpResponse result
     */

    /**
     * Constructs a new GunLeveUpResponse.
     * @exports GunLeveUpResponse
     * @classdesc Represents a GunLeveUpResponse.
     * @implements IGunLeveUpResponse
     * @constructor
     * @param {IGunLeveUpResponse=} [properties] Properties to set
     */
    function GunLeveUpResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GunLeveUpResponse mid.
     * @member {MID} mid
     * @memberof GunLeveUpResponse
     * @instance
     */
    GunLeveUpResponse.prototype.mid = 20020;

    /**
     * GunLeveUpResponse result.
     * @member {number} result
     * @memberof GunLeveUpResponse
     * @instance
     */
    GunLeveUpResponse.prototype.result = 0;

    /**
     * Creates a new GunLeveUpResponse instance using the specified properties.
     * @function create
     * @memberof GunLeveUpResponse
     * @static
     * @param {IGunLeveUpResponse=} [properties] Properties to set
     * @returns {GunLeveUpResponse} GunLeveUpResponse instance
     */
    GunLeveUpResponse.create = function create(properties) {
        return new GunLeveUpResponse(properties);
    };

    /**
     * Encodes the specified GunLeveUpResponse message. Does not implicitly {@link GunLeveUpResponse.verify|verify} messages.
     * @function encode
     * @memberof GunLeveUpResponse
     * @static
     * @param {IGunLeveUpResponse} message GunLeveUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunLeveUpResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified GunLeveUpResponse message, length delimited. Does not implicitly {@link GunLeveUpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GunLeveUpResponse
     * @static
     * @param {IGunLeveUpResponse} message GunLeveUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GunLeveUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GunLeveUpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GunLeveUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GunLeveUpResponse} GunLeveUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunLeveUpResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GunLeveUpResponse();
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
     * Decodes a GunLeveUpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GunLeveUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GunLeveUpResponse} GunLeveUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GunLeveUpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GunLeveUpResponse message.
     * @function verify
     * @memberof GunLeveUpResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GunLeveUpResponse.verify = function verify(message) {
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
     * Creates a GunLeveUpResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GunLeveUpResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GunLeveUpResponse} GunLeveUpResponse
     */
    GunLeveUpResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GunLeveUpResponse)
            return object;
        var message = new $root.GunLeveUpResponse();
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
     * Creates a plain object from a GunLeveUpResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GunLeveUpResponse
     * @static
     * @param {GunLeveUpResponse} message GunLeveUpResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GunLeveUpResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "GunLeveUpRes" : 20020;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this GunLeveUpResponse to JSON.
     * @function toJSON
     * @memberof GunLeveUpResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GunLeveUpResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GunLeveUpResponse;
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
