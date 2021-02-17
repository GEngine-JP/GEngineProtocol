/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ChatRequest = (function() {

    /**
     * Properties of a ChatRequest.
     * @exports IChatRequest
     * @interface IChatRequest
     * @property {MID|null} [mid] ChatRequest mid
     * @property {ChatType} chatType ChatRequest chatType
     * @property {number|Long|null} [receiverId] ChatRequest receiverId
     * @property {string|null} [msg] ChatRequest msg
     */

    /**
     * Constructs a new ChatRequest.
     * @exports ChatRequest
     * @classdesc Represents a ChatRequest.
     * @implements IChatRequest
     * @constructor
     * @param {IChatRequest=} [properties] Properties to set
     */
    function ChatRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatRequest mid.
     * @member {MID} mid
     * @memberof ChatRequest
     * @instance
     */
    ChatRequest.prototype.mid = 10015;

    /**
     * ChatRequest chatType.
     * @member {ChatType} chatType
     * @memberof ChatRequest
     * @instance
     */
    ChatRequest.prototype.chatType = 1;

    /**
     * ChatRequest receiverId.
     * @member {number|Long} receiverId
     * @memberof ChatRequest
     * @instance
     */
    ChatRequest.prototype.receiverId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ChatRequest msg.
     * @member {string} msg
     * @memberof ChatRequest
     * @instance
     */
    ChatRequest.prototype.msg = "";

    /**
     * Creates a new ChatRequest instance using the specified properties.
     * @function create
     * @memberof ChatRequest
     * @static
     * @param {IChatRequest=} [properties] Properties to set
     * @returns {ChatRequest} ChatRequest instance
     */
    ChatRequest.create = function create(properties) {
        return new ChatRequest(properties);
    };

    /**
     * Encodes the specified ChatRequest message. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @function encode
     * @memberof ChatRequest
     * @static
     * @param {IChatRequest} message ChatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chatType);
        if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.receiverId);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified ChatRequest message, length delimited. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatRequest
     * @static
     * @param {IChatRequest} message ChatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ChatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatRequest} ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.chatType = reader.int32();
                break;
            case 3:
                message.receiverId = reader.int64();
                break;
            case 4:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chatType"))
            throw $util.ProtocolError("missing required 'chatType'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChatRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatRequest} ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatRequest message.
     * @function verify
     * @memberof ChatRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatRequest.verify = function verify(message) {
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
        switch (message.chatType) {
        default:
            return "chatType: enum value expected";
        case 1:
        case 2:
        case 3:
        case 4:
            break;
        }
        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
            if (!$util.isInteger(message.receiverId) && !(message.receiverId && $util.isInteger(message.receiverId.low) && $util.isInteger(message.receiverId.high)))
                return "receiverId: integer|Long expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a ChatRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatRequest} ChatRequest
     */
    ChatRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatRequest)
            return object;
        var message = new $root.ChatRequest();
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
        switch (object.chatType) {
        case "PRIVATE":
        case 1:
            message.chatType = 1;
            break;
        case "GUILD":
        case 2:
            message.chatType = 2;
            break;
        case "WORLD":
        case 3:
            message.chatType = 3;
            break;
        case "PMD":
        case 4:
            message.chatType = 4;
            break;
        }
        if (object.receiverId != null)
            if ($util.Long)
                (message.receiverId = $util.Long.fromValue(object.receiverId)).unsigned = false;
            else if (typeof object.receiverId === "string")
                message.receiverId = parseInt(object.receiverId, 10);
            else if (typeof object.receiverId === "number")
                message.receiverId = object.receiverId;
            else if (typeof object.receiverId === "object")
                message.receiverId = new $util.LongBits(object.receiverId.low >>> 0, object.receiverId.high >>> 0).toNumber();
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a ChatRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatRequest
     * @static
     * @param {ChatRequest} message ChatRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ChatReq" : 10015;
            object.chatType = options.enums === String ? "PRIVATE" : 1;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.receiverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.receiverId = options.longs === String ? "0" : 0;
            object.msg = "";
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            object.chatType = options.enums === String ? $root.ChatType[message.chatType] : message.chatType;
        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
            if (typeof message.receiverId === "number")
                object.receiverId = options.longs === String ? String(message.receiverId) : message.receiverId;
            else
                object.receiverId = options.longs === String ? $util.Long.prototype.toString.call(message.receiverId) : options.longs === Number ? new $util.LongBits(message.receiverId.low >>> 0, message.receiverId.high >>> 0).toNumber() : message.receiverId;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this ChatRequest to JSON.
     * @function toJSON
     * @memberof ChatRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatRequest;
})();

$root.ChatResponse = (function() {

    /**
     * Properties of a ChatResponse.
     * @exports IChatResponse
     * @interface IChatResponse
     * @property {MID|null} [mid] ChatResponse mid
     * @property {number|Long|null} [senderId] ChatResponse senderId
     * @property {string|null} [senderHead] ChatResponse senderHead
     * @property {string|null} [senderNick] ChatResponse senderNick
     * @property {ChatType} chatType ChatResponse chatType
     * @property {string|null} [msg] ChatResponse msg
     */

    /**
     * Constructs a new ChatResponse.
     * @exports ChatResponse
     * @classdesc Represents a ChatResponse.
     * @implements IChatResponse
     * @constructor
     * @param {IChatResponse=} [properties] Properties to set
     */
    function ChatResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatResponse mid.
     * @member {MID} mid
     * @memberof ChatResponse
     * @instance
     */
    ChatResponse.prototype.mid = 10016;

    /**
     * ChatResponse senderId.
     * @member {number|Long} senderId
     * @memberof ChatResponse
     * @instance
     */
    ChatResponse.prototype.senderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ChatResponse senderHead.
     * @member {string} senderHead
     * @memberof ChatResponse
     * @instance
     */
    ChatResponse.prototype.senderHead = "";

    /**
     * ChatResponse senderNick.
     * @member {string} senderNick
     * @memberof ChatResponse
     * @instance
     */
    ChatResponse.prototype.senderNick = "";

    /**
     * ChatResponse chatType.
     * @member {ChatType} chatType
     * @memberof ChatResponse
     * @instance
     */
    ChatResponse.prototype.chatType = 1;

    /**
     * ChatResponse msg.
     * @member {string} msg
     * @memberof ChatResponse
     * @instance
     */
    ChatResponse.prototype.msg = "";

    /**
     * Creates a new ChatResponse instance using the specified properties.
     * @function create
     * @memberof ChatResponse
     * @static
     * @param {IChatResponse=} [properties] Properties to set
     * @returns {ChatResponse} ChatResponse instance
     */
    ChatResponse.create = function create(properties) {
        return new ChatResponse(properties);
    };

    /**
     * Encodes the specified ChatResponse message. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @function encode
     * @memberof ChatResponse
     * @static
     * @param {IChatResponse} message ChatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.senderId);
        if (message.senderHead != null && Object.hasOwnProperty.call(message, "senderHead"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.senderHead);
        if (message.senderNick != null && Object.hasOwnProperty.call(message, "senderNick"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderNick);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.chatType);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified ChatResponse message, length delimited. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatResponse
     * @static
     * @param {IChatResponse} message ChatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ChatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatResponse} ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.senderId = reader.int64();
                break;
            case 3:
                message.senderHead = reader.string();
                break;
            case 4:
                message.senderNick = reader.string();
                break;
            case 5:
                message.chatType = reader.int32();
                break;
            case 6:
                message.msg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chatType"))
            throw $util.ProtocolError("missing required 'chatType'", { instance: message });
        return message;
    };

    /**
     * Decodes a ChatResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatResponse} ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatResponse message.
     * @function verify
     * @memberof ChatResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatResponse.verify = function verify(message) {
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
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isInteger(message.senderId) && !(message.senderId && $util.isInteger(message.senderId.low) && $util.isInteger(message.senderId.high)))
                return "senderId: integer|Long expected";
        if (message.senderHead != null && message.hasOwnProperty("senderHead"))
            if (!$util.isString(message.senderHead))
                return "senderHead: string expected";
        if (message.senderNick != null && message.hasOwnProperty("senderNick"))
            if (!$util.isString(message.senderNick))
                return "senderNick: string expected";
        switch (message.chatType) {
        default:
            return "chatType: enum value expected";
        case 1:
        case 2:
        case 3:
        case 4:
            break;
        }
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a ChatResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatResponse} ChatResponse
     */
    ChatResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatResponse)
            return object;
        var message = new $root.ChatResponse();
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
        if (object.senderId != null)
            if ($util.Long)
                (message.senderId = $util.Long.fromValue(object.senderId)).unsigned = false;
            else if (typeof object.senderId === "string")
                message.senderId = parseInt(object.senderId, 10);
            else if (typeof object.senderId === "number")
                message.senderId = object.senderId;
            else if (typeof object.senderId === "object")
                message.senderId = new $util.LongBits(object.senderId.low >>> 0, object.senderId.high >>> 0).toNumber();
        if (object.senderHead != null)
            message.senderHead = String(object.senderHead);
        if (object.senderNick != null)
            message.senderNick = String(object.senderNick);
        switch (object.chatType) {
        case "PRIVATE":
        case 1:
            message.chatType = 1;
            break;
        case "GUILD":
        case 2:
            message.chatType = 2;
            break;
        case "WORLD":
        case 3:
            message.chatType = 3;
            break;
        case "PMD":
        case 4:
            message.chatType = 4;
            break;
        }
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a ChatResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatResponse
     * @static
     * @param {ChatResponse} message ChatResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ChatRes" : 10016;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.senderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.senderId = options.longs === String ? "0" : 0;
            object.senderHead = "";
            object.senderNick = "";
            object.chatType = options.enums === String ? "PRIVATE" : 1;
            object.msg = "";
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (typeof message.senderId === "number")
                object.senderId = options.longs === String ? String(message.senderId) : message.senderId;
            else
                object.senderId = options.longs === String ? $util.Long.prototype.toString.call(message.senderId) : options.longs === Number ? new $util.LongBits(message.senderId.low >>> 0, message.senderId.high >>> 0).toNumber() : message.senderId;
        if (message.senderHead != null && message.hasOwnProperty("senderHead"))
            object.senderHead = message.senderHead;
        if (message.senderNick != null && message.hasOwnProperty("senderNick"))
            object.senderNick = message.senderNick;
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            object.chatType = options.enums === String ? $root.ChatType[message.chatType] : message.chatType;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this ChatResponse to JSON.
     * @function toJSON
     * @memberof ChatResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatResponse;
})();

$root.MailListRequest = (function() {

    /**
     * Properties of a MailListRequest.
     * @exports IMailListRequest
     * @interface IMailListRequest
     * @property {MID|null} [mid] MailListRequest mid
     */

    /**
     * Constructs a new MailListRequest.
     * @exports MailListRequest
     * @classdesc Represents a MailListRequest.
     * @implements IMailListRequest
     * @constructor
     * @param {IMailListRequest=} [properties] Properties to set
     */
    function MailListRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MailListRequest mid.
     * @member {MID} mid
     * @memberof MailListRequest
     * @instance
     */
    MailListRequest.prototype.mid = 10021;

    /**
     * Creates a new MailListRequest instance using the specified properties.
     * @function create
     * @memberof MailListRequest
     * @static
     * @param {IMailListRequest=} [properties] Properties to set
     * @returns {MailListRequest} MailListRequest instance
     */
    MailListRequest.create = function create(properties) {
        return new MailListRequest(properties);
    };

    /**
     * Encodes the specified MailListRequest message. Does not implicitly {@link MailListRequest.verify|verify} messages.
     * @function encode
     * @memberof MailListRequest
     * @static
     * @param {IMailListRequest} message MailListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        return writer;
    };

    /**
     * Encodes the specified MailListRequest message, length delimited. Does not implicitly {@link MailListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MailListRequest
     * @static
     * @param {IMailListRequest} message MailListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MailListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MailListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MailListRequest} MailListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MailListRequest();
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
     * Decodes a MailListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MailListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MailListRequest} MailListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MailListRequest message.
     * @function verify
     * @memberof MailListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MailListRequest.verify = function verify(message) {
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
     * Creates a MailListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MailListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MailListRequest} MailListRequest
     */
    MailListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MailListRequest)
            return object;
        var message = new $root.MailListRequest();
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
     * Creates a plain object from a MailListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MailListRequest
     * @static
     * @param {MailListRequest} message MailListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MailListRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mid = options.enums === String ? "MailListReq" : 10021;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        return object;
    };

    /**
     * Converts this MailListRequest to JSON.
     * @function toJSON
     * @memberof MailListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MailListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MailListRequest;
})();

$root.MailListResponse = (function() {

    /**
     * Properties of a MailListResponse.
     * @exports IMailListResponse
     * @interface IMailListResponse
     * @property {MID|null} [mid] MailListResponse mid
     * @property {Array.<IMailInfo>|null} [mails] MailListResponse mails
     */

    /**
     * Constructs a new MailListResponse.
     * @exports MailListResponse
     * @classdesc Represents a MailListResponse.
     * @implements IMailListResponse
     * @constructor
     * @param {IMailListResponse=} [properties] Properties to set
     */
    function MailListResponse(properties) {
        this.mails = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MailListResponse mid.
     * @member {MID} mid
     * @memberof MailListResponse
     * @instance
     */
    MailListResponse.prototype.mid = 10022;

    /**
     * MailListResponse mails.
     * @member {Array.<IMailInfo>} mails
     * @memberof MailListResponse
     * @instance
     */
    MailListResponse.prototype.mails = $util.emptyArray;

    /**
     * Creates a new MailListResponse instance using the specified properties.
     * @function create
     * @memberof MailListResponse
     * @static
     * @param {IMailListResponse=} [properties] Properties to set
     * @returns {MailListResponse} MailListResponse instance
     */
    MailListResponse.create = function create(properties) {
        return new MailListResponse(properties);
    };

    /**
     * Encodes the specified MailListResponse message. Does not implicitly {@link MailListResponse.verify|verify} messages.
     * @function encode
     * @memberof MailListResponse
     * @static
     * @param {IMailListResponse} message MailListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.mails != null && message.mails.length)
            for (var i = 0; i < message.mails.length; ++i)
                $root.MailInfo.encode(message.mails[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MailListResponse message, length delimited. Does not implicitly {@link MailListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MailListResponse
     * @static
     * @param {IMailListResponse} message MailListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MailListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MailListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MailListResponse} MailListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MailListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                if (!(message.mails && message.mails.length))
                    message.mails = [];
                message.mails.push($root.MailInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MailListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MailListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MailListResponse} MailListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MailListResponse message.
     * @function verify
     * @memberof MailListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MailListResponse.verify = function verify(message) {
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
        if (message.mails != null && message.hasOwnProperty("mails")) {
            if (!Array.isArray(message.mails))
                return "mails: array expected";
            for (var i = 0; i < message.mails.length; ++i) {
                var error = $root.MailInfo.verify(message.mails[i]);
                if (error)
                    return "mails." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MailListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MailListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MailListResponse} MailListResponse
     */
    MailListResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MailListResponse)
            return object;
        var message = new $root.MailListResponse();
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
        if (object.mails) {
            if (!Array.isArray(object.mails))
                throw TypeError(".MailListResponse.mails: array expected");
            message.mails = [];
            for (var i = 0; i < object.mails.length; ++i) {
                if (typeof object.mails[i] !== "object")
                    throw TypeError(".MailListResponse.mails: object expected");
                message.mails[i] = $root.MailInfo.fromObject(object.mails[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MailListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MailListResponse
     * @static
     * @param {MailListResponse} message MailListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MailListResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mails = [];
        if (options.defaults)
            object.mid = options.enums === String ? "MailListRes" : 10022;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.mails && message.mails.length) {
            object.mails = [];
            for (var j = 0; j < message.mails.length; ++j)
                object.mails[j] = $root.MailInfo.toObject(message.mails[j], options);
        }
        return object;
    };

    /**
     * Converts this MailListResponse to JSON.
     * @function toJSON
     * @memberof MailListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MailListResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MailListResponse;
})();

$root.ModifyMailRequest = (function() {

    /**
     * Properties of a ModifyMailRequest.
     * @exports IModifyMailRequest
     * @interface IModifyMailRequest
     * @property {MID|null} [mid] ModifyMailRequest mid
     * @property {number|Long} mailId ModifyMailRequest mailId
     * @property {number} state ModifyMailRequest state
     */

    /**
     * Constructs a new ModifyMailRequest.
     * @exports ModifyMailRequest
     * @classdesc Represents a ModifyMailRequest.
     * @implements IModifyMailRequest
     * @constructor
     * @param {IModifyMailRequest=} [properties] Properties to set
     */
    function ModifyMailRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifyMailRequest mid.
     * @member {MID} mid
     * @memberof ModifyMailRequest
     * @instance
     */
    ModifyMailRequest.prototype.mid = 10023;

    /**
     * ModifyMailRequest mailId.
     * @member {number|Long} mailId
     * @memberof ModifyMailRequest
     * @instance
     */
    ModifyMailRequest.prototype.mailId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ModifyMailRequest state.
     * @member {number} state
     * @memberof ModifyMailRequest
     * @instance
     */
    ModifyMailRequest.prototype.state = 0;

    /**
     * Creates a new ModifyMailRequest instance using the specified properties.
     * @function create
     * @memberof ModifyMailRequest
     * @static
     * @param {IModifyMailRequest=} [properties] Properties to set
     * @returns {ModifyMailRequest} ModifyMailRequest instance
     */
    ModifyMailRequest.create = function create(properties) {
        return new ModifyMailRequest(properties);
    };

    /**
     * Encodes the specified ModifyMailRequest message. Does not implicitly {@link ModifyMailRequest.verify|verify} messages.
     * @function encode
     * @memberof ModifyMailRequest
     * @static
     * @param {IModifyMailRequest} message ModifyMailRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyMailRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.mailId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
        return writer;
    };

    /**
     * Encodes the specified ModifyMailRequest message, length delimited. Does not implicitly {@link ModifyMailRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifyMailRequest
     * @static
     * @param {IModifyMailRequest} message ModifyMailRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyMailRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifyMailRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyMailRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyMailRequest} ModifyMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyMailRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyMailRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.mailId = reader.int64();
                break;
            case 3:
                message.state = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("mailId"))
            throw $util.ProtocolError("missing required 'mailId'", { instance: message });
        if (!message.hasOwnProperty("state"))
            throw $util.ProtocolError("missing required 'state'", { instance: message });
        return message;
    };

    /**
     * Decodes a ModifyMailRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifyMailRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyMailRequest} ModifyMailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyMailRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifyMailRequest message.
     * @function verify
     * @memberof ModifyMailRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifyMailRequest.verify = function verify(message) {
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
        if (!$util.isInteger(message.mailId) && !(message.mailId && $util.isInteger(message.mailId.low) && $util.isInteger(message.mailId.high)))
            return "mailId: integer|Long expected";
        if (!$util.isInteger(message.state))
            return "state: integer expected";
        return null;
    };

    /**
     * Creates a ModifyMailRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifyMailRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyMailRequest} ModifyMailRequest
     */
    ModifyMailRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifyMailRequest)
            return object;
        var message = new $root.ModifyMailRequest();
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
        if (object.mailId != null)
            if ($util.Long)
                (message.mailId = $util.Long.fromValue(object.mailId)).unsigned = false;
            else if (typeof object.mailId === "string")
                message.mailId = parseInt(object.mailId, 10);
            else if (typeof object.mailId === "number")
                message.mailId = object.mailId;
            else if (typeof object.mailId === "object")
                message.mailId = new $util.LongBits(object.mailId.low >>> 0, object.mailId.high >>> 0).toNumber();
        if (object.state != null)
            message.state = object.state | 0;
        return message;
    };

    /**
     * Creates a plain object from a ModifyMailRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifyMailRequest
     * @static
     * @param {ModifyMailRequest} message ModifyMailRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifyMailRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ModifyMailReq" : 10023;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.mailId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.mailId = options.longs === String ? "0" : 0;
            object.state = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.mailId != null && message.hasOwnProperty("mailId"))
            if (typeof message.mailId === "number")
                object.mailId = options.longs === String ? String(message.mailId) : message.mailId;
            else
                object.mailId = options.longs === String ? $util.Long.prototype.toString.call(message.mailId) : options.longs === Number ? new $util.LongBits(message.mailId.low >>> 0, message.mailId.high >>> 0).toNumber() : message.mailId;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        return object;
    };

    /**
     * Converts this ModifyMailRequest to JSON.
     * @function toJSON
     * @memberof ModifyMailRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifyMailRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifyMailRequest;
})();

$root.ModifyMailResponse = (function() {

    /**
     * Properties of a ModifyMailResponse.
     * @exports IModifyMailResponse
     * @interface IModifyMailResponse
     * @property {MID|null} [mid] ModifyMailResponse mid
     * @property {number|null} [result] ModifyMailResponse result
     */

    /**
     * Constructs a new ModifyMailResponse.
     * @exports ModifyMailResponse
     * @classdesc Represents a ModifyMailResponse.
     * @implements IModifyMailResponse
     * @constructor
     * @param {IModifyMailResponse=} [properties] Properties to set
     */
    function ModifyMailResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifyMailResponse mid.
     * @member {MID} mid
     * @memberof ModifyMailResponse
     * @instance
     */
    ModifyMailResponse.prototype.mid = 10024;

    /**
     * ModifyMailResponse result.
     * @member {number} result
     * @memberof ModifyMailResponse
     * @instance
     */
    ModifyMailResponse.prototype.result = 0;

    /**
     * Creates a new ModifyMailResponse instance using the specified properties.
     * @function create
     * @memberof ModifyMailResponse
     * @static
     * @param {IModifyMailResponse=} [properties] Properties to set
     * @returns {ModifyMailResponse} ModifyMailResponse instance
     */
    ModifyMailResponse.create = function create(properties) {
        return new ModifyMailResponse(properties);
    };

    /**
     * Encodes the specified ModifyMailResponse message. Does not implicitly {@link ModifyMailResponse.verify|verify} messages.
     * @function encode
     * @memberof ModifyMailResponse
     * @static
     * @param {IModifyMailResponse} message ModifyMailResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyMailResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified ModifyMailResponse message, length delimited. Does not implicitly {@link ModifyMailResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifyMailResponse
     * @static
     * @param {IModifyMailResponse} message ModifyMailResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifyMailResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifyMailResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ModifyMailResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifyMailResponse} ModifyMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyMailResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifyMailResponse();
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
     * Decodes a ModifyMailResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifyMailResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifyMailResponse} ModifyMailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifyMailResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifyMailResponse message.
     * @function verify
     * @memberof ModifyMailResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifyMailResponse.verify = function verify(message) {
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
     * Creates a ModifyMailResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifyMailResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifyMailResponse} ModifyMailResponse
     */
    ModifyMailResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifyMailResponse)
            return object;
        var message = new $root.ModifyMailResponse();
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
     * Creates a plain object from a ModifyMailResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifyMailResponse
     * @static
     * @param {ModifyMailResponse} message ModifyMailResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifyMailResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "ModifyMailRes" : 10024;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this ModifyMailResponse to JSON.
     * @function toJSON
     * @memberof ModifyMailResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifyMailResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifyMailResponse;
})();

$root.MailInfo = (function() {

    /**
     * Properties of a MailInfo.
     * @exports IMailInfo
     * @interface IMailInfo
     * @property {number|Long} id MailInfo id
     * @property {number|Long|null} [senderId] MailInfo senderId
     * @property {string} title MailInfo title
     * @property {string} content MailInfo content
     * @property {number} state MailInfo state
     * @property {number|Long} createTime MailInfo createTime
     */

    /**
     * Constructs a new MailInfo.
     * @exports MailInfo
     * @classdesc Represents a MailInfo.
     * @implements IMailInfo
     * @constructor
     * @param {IMailInfo=} [properties] Properties to set
     */
    function MailInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MailInfo id.
     * @member {number|Long} id
     * @memberof MailInfo
     * @instance
     */
    MailInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MailInfo senderId.
     * @member {number|Long} senderId
     * @memberof MailInfo
     * @instance
     */
    MailInfo.prototype.senderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MailInfo title.
     * @member {string} title
     * @memberof MailInfo
     * @instance
     */
    MailInfo.prototype.title = "";

    /**
     * MailInfo content.
     * @member {string} content
     * @memberof MailInfo
     * @instance
     */
    MailInfo.prototype.content = "";

    /**
     * MailInfo state.
     * @member {number} state
     * @memberof MailInfo
     * @instance
     */
    MailInfo.prototype.state = 0;

    /**
     * MailInfo createTime.
     * @member {number|Long} createTime
     * @memberof MailInfo
     * @instance
     */
    MailInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new MailInfo instance using the specified properties.
     * @function create
     * @memberof MailInfo
     * @static
     * @param {IMailInfo=} [properties] Properties to set
     * @returns {MailInfo} MailInfo instance
     */
    MailInfo.create = function create(properties) {
        return new MailInfo(properties);
    };

    /**
     * Encodes the specified MailInfo message. Does not implicitly {@link MailInfo.verify|verify} messages.
     * @function encode
     * @memberof MailInfo
     * @static
     * @param {IMailInfo} message MailInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.senderId);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
        writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createTime);
        return writer;
    };

    /**
     * Encodes the specified MailInfo message, length delimited. Does not implicitly {@link MailInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MailInfo
     * @static
     * @param {IMailInfo} message MailInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MailInfo message from the specified reader or buffer.
     * @function decode
     * @memberof MailInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MailInfo} MailInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MailInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.senderId = reader.int64();
                break;
            case 3:
                message.title = reader.string();
                break;
            case 4:
                message.content = reader.string();
                break;
            case 5:
                message.state = reader.int32();
                break;
            case 6:
                message.createTime = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("title"))
            throw $util.ProtocolError("missing required 'title'", { instance: message });
        if (!message.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: message });
        if (!message.hasOwnProperty("state"))
            throw $util.ProtocolError("missing required 'state'", { instance: message });
        if (!message.hasOwnProperty("createTime"))
            throw $util.ProtocolError("missing required 'createTime'", { instance: message });
        return message;
    };

    /**
     * Decodes a MailInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MailInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MailInfo} MailInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MailInfo message.
     * @function verify
     * @memberof MailInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MailInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
            return "id: integer|Long expected";
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isInteger(message.senderId) && !(message.senderId && $util.isInteger(message.senderId.low) && $util.isInteger(message.senderId.high)))
                return "senderId: integer|Long expected";
        if (!$util.isString(message.title))
            return "title: string expected";
        if (!$util.isString(message.content))
            return "content: string expected";
        if (!$util.isInteger(message.state))
            return "state: integer expected";
        if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
            return "createTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a MailInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MailInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MailInfo} MailInfo
     */
    MailInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.MailInfo)
            return object;
        var message = new $root.MailInfo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.senderId != null)
            if ($util.Long)
                (message.senderId = $util.Long.fromValue(object.senderId)).unsigned = false;
            else if (typeof object.senderId === "string")
                message.senderId = parseInt(object.senderId, 10);
            else if (typeof object.senderId === "number")
                message.senderId = object.senderId;
            else if (typeof object.senderId === "object")
                message.senderId = new $util.LongBits(object.senderId.low >>> 0, object.senderId.high >>> 0).toNumber();
        if (object.title != null)
            message.title = String(object.title);
        if (object.content != null)
            message.content = String(object.content);
        if (object.state != null)
            message.state = object.state | 0;
        if (object.createTime != null)
            if ($util.Long)
                (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
            else if (typeof object.createTime === "string")
                message.createTime = parseInt(object.createTime, 10);
            else if (typeof object.createTime === "number")
                message.createTime = object.createTime;
            else if (typeof object.createTime === "object")
                message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a MailInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MailInfo
     * @static
     * @param {MailInfo} message MailInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MailInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.senderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.senderId = options.longs === String ? "0" : 0;
            object.title = "";
            object.content = "";
            object.state = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createTime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (typeof message.senderId === "number")
                object.senderId = options.longs === String ? String(message.senderId) : message.senderId;
            else
                object.senderId = options.longs === String ? $util.Long.prototype.toString.call(message.senderId) : options.longs === Number ? new $util.LongBits(message.senderId.low >>> 0, message.senderId.high >>> 0).toNumber() : message.senderId;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.createTime != null && message.hasOwnProperty("createTime"))
            if (typeof message.createTime === "number")
                object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
            else
                object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
        return object;
    };

    /**
     * Converts this MailInfo to JSON.
     * @function toJSON
     * @memberof MailInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MailInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MailInfo;
})();

/**
 * ChatType enum.
 * @exports ChatType
 * @enum {number}
 * @property {number} PRIVATE=1 PRIVATE value
 * @property {number} GUILD=2 GUILD value
 * @property {number} WORLD=3 WORLD value
 * @property {number} PMD=4 PMD value
 */
$root.ChatType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "PRIVATE"] = 1;
    values[valuesById[2] = "GUILD"] = 2;
    values[valuesById[3] = "WORLD"] = 3;
    values[valuesById[4] = "PMD"] = 4;
    return values;
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
