/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PacketItemsRequest = (function() {

    /**
     * Properties of a PacketItemsRequest.
     * @exports IPacketItemsRequest
     * @interface IPacketItemsRequest
     * @property {MID|null} [mid] PacketItemsRequest mid
     */

    /**
     * Constructs a new PacketItemsRequest.
     * @exports PacketItemsRequest
     * @classdesc Represents a PacketItemsRequest.
     * @implements IPacketItemsRequest
     * @constructor
     * @param {IPacketItemsRequest=} [properties] Properties to set
     */
    function PacketItemsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PacketItemsRequest mid.
     * @member {MID} mid
     * @memberof PacketItemsRequest
     * @instance
     */
    PacketItemsRequest.prototype.mid = 10017;

    /**
     * Creates a new PacketItemsRequest instance using the specified properties.
     * @function create
     * @memberof PacketItemsRequest
     * @static
     * @param {IPacketItemsRequest=} [properties] Properties to set
     * @returns {PacketItemsRequest} PacketItemsRequest instance
     */
    PacketItemsRequest.create = function create(properties) {
        return new PacketItemsRequest(properties);
    };

    /**
     * Encodes the specified PacketItemsRequest message. Does not implicitly {@link PacketItemsRequest.verify|verify} messages.
     * @function encode
     * @memberof PacketItemsRequest
     * @static
     * @param {IPacketItemsRequest} message PacketItemsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PacketItemsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        return writer;
    };

    /**
     * Encodes the specified PacketItemsRequest message, length delimited. Does not implicitly {@link PacketItemsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PacketItemsRequest
     * @static
     * @param {IPacketItemsRequest} message PacketItemsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PacketItemsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PacketItemsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PacketItemsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PacketItemsRequest} PacketItemsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PacketItemsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PacketItemsRequest();
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
     * Decodes a PacketItemsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PacketItemsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PacketItemsRequest} PacketItemsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PacketItemsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PacketItemsRequest message.
     * @function verify
     * @memberof PacketItemsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PacketItemsRequest.verify = function verify(message) {
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
     * Creates a PacketItemsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PacketItemsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PacketItemsRequest} PacketItemsRequest
     */
    PacketItemsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PacketItemsRequest)
            return object;
        var message = new $root.PacketItemsRequest();
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
     * Creates a plain object from a PacketItemsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PacketItemsRequest
     * @static
     * @param {PacketItemsRequest} message PacketItemsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PacketItemsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mid = options.enums === String ? "PacketItemsReq" : 10017;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        return object;
    };

    /**
     * Converts this PacketItemsRequest to JSON.
     * @function toJSON
     * @memberof PacketItemsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PacketItemsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PacketItemsRequest;
})();

$root.PacketItemsResponse = (function() {

    /**
     * Properties of a PacketItemsResponse.
     * @exports IPacketItemsResponse
     * @interface IPacketItemsResponse
     * @property {MID|null} [mid] PacketItemsResponse mid
     * @property {Array.<IPacketItem>|null} [items] PacketItemsResponse items
     */

    /**
     * Constructs a new PacketItemsResponse.
     * @exports PacketItemsResponse
     * @classdesc Represents a PacketItemsResponse.
     * @implements IPacketItemsResponse
     * @constructor
     * @param {IPacketItemsResponse=} [properties] Properties to set
     */
    function PacketItemsResponse(properties) {
        this.items = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PacketItemsResponse mid.
     * @member {MID} mid
     * @memberof PacketItemsResponse
     * @instance
     */
    PacketItemsResponse.prototype.mid = 10018;

    /**
     * PacketItemsResponse items.
     * @member {Array.<IPacketItem>} items
     * @memberof PacketItemsResponse
     * @instance
     */
    PacketItemsResponse.prototype.items = $util.emptyArray;

    /**
     * Creates a new PacketItemsResponse instance using the specified properties.
     * @function create
     * @memberof PacketItemsResponse
     * @static
     * @param {IPacketItemsResponse=} [properties] Properties to set
     * @returns {PacketItemsResponse} PacketItemsResponse instance
     */
    PacketItemsResponse.create = function create(properties) {
        return new PacketItemsResponse(properties);
    };

    /**
     * Encodes the specified PacketItemsResponse message. Does not implicitly {@link PacketItemsResponse.verify|verify} messages.
     * @function encode
     * @memberof PacketItemsResponse
     * @static
     * @param {IPacketItemsResponse} message PacketItemsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PacketItemsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.items != null && message.items.length)
            for (var i = 0; i < message.items.length; ++i)
                $root.PacketItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PacketItemsResponse message, length delimited. Does not implicitly {@link PacketItemsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PacketItemsResponse
     * @static
     * @param {IPacketItemsResponse} message PacketItemsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PacketItemsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PacketItemsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PacketItemsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PacketItemsResponse} PacketItemsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PacketItemsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PacketItemsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.PacketItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PacketItemsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PacketItemsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PacketItemsResponse} PacketItemsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PacketItemsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PacketItemsResponse message.
     * @function verify
     * @memberof PacketItemsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PacketItemsResponse.verify = function verify(message) {
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
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.PacketItem.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PacketItemsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PacketItemsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PacketItemsResponse} PacketItemsResponse
     */
    PacketItemsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PacketItemsResponse)
            return object;
        var message = new $root.PacketItemsResponse();
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
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".PacketItemsResponse.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".PacketItemsResponse.items: object expected");
                message.items[i] = $root.PacketItem.fromObject(object.items[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PacketItemsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PacketItemsResponse
     * @static
     * @param {PacketItemsResponse} message PacketItemsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PacketItemsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults)
            object.mid = options.enums === String ? "PacketItemsRes" : 10018;
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.items && message.items.length) {
            object.items = [];
            for (var j = 0; j < message.items.length; ++j)
                object.items[j] = $root.PacketItem.toObject(message.items[j], options);
        }
        return object;
    };

    /**
     * Converts this PacketItemsResponse to JSON.
     * @function toJSON
     * @memberof PacketItemsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PacketItemsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PacketItemsResponse;
})();

$root.UseItemRequest = (function() {

    /**
     * Properties of a UseItemRequest.
     * @exports IUseItemRequest
     * @interface IUseItemRequest
     * @property {MID|null} [mid] UseItemRequest mid
     * @property {number|Long} itemId UseItemRequest itemId
     */

    /**
     * Constructs a new UseItemRequest.
     * @exports UseItemRequest
     * @classdesc Represents a UseItemRequest.
     * @implements IUseItemRequest
     * @constructor
     * @param {IUseItemRequest=} [properties] Properties to set
     */
    function UseItemRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UseItemRequest mid.
     * @member {MID} mid
     * @memberof UseItemRequest
     * @instance
     */
    UseItemRequest.prototype.mid = 10019;

    /**
     * UseItemRequest itemId.
     * @member {number|Long} itemId
     * @memberof UseItemRequest
     * @instance
     */
    UseItemRequest.prototype.itemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UseItemRequest instance using the specified properties.
     * @function create
     * @memberof UseItemRequest
     * @static
     * @param {IUseItemRequest=} [properties] Properties to set
     * @returns {UseItemRequest} UseItemRequest instance
     */
    UseItemRequest.create = function create(properties) {
        return new UseItemRequest(properties);
    };

    /**
     * Encodes the specified UseItemRequest message. Does not implicitly {@link UseItemRequest.verify|verify} messages.
     * @function encode
     * @memberof UseItemRequest
     * @static
     * @param {IUseItemRequest} message UseItemRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseItemRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.itemId);
        return writer;
    };

    /**
     * Encodes the specified UseItemRequest message, length delimited. Does not implicitly {@link UseItemRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UseItemRequest
     * @static
     * @param {IUseItemRequest} message UseItemRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseItemRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UseItemRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UseItemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UseItemRequest} UseItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseItemRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UseItemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.itemId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("itemId"))
            throw $util.ProtocolError("missing required 'itemId'", { instance: message });
        return message;
    };

    /**
     * Decodes a UseItemRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UseItemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UseItemRequest} UseItemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseItemRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UseItemRequest message.
     * @function verify
     * @memberof UseItemRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UseItemRequest.verify = function verify(message) {
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
        if (!$util.isInteger(message.itemId) && !(message.itemId && $util.isInteger(message.itemId.low) && $util.isInteger(message.itemId.high)))
            return "itemId: integer|Long expected";
        return null;
    };

    /**
     * Creates a UseItemRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UseItemRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UseItemRequest} UseItemRequest
     */
    UseItemRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UseItemRequest)
            return object;
        var message = new $root.UseItemRequest();
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
        if (object.itemId != null)
            if ($util.Long)
                (message.itemId = $util.Long.fromValue(object.itemId)).unsigned = false;
            else if (typeof object.itemId === "string")
                message.itemId = parseInt(object.itemId, 10);
            else if (typeof object.itemId === "number")
                message.itemId = object.itemId;
            else if (typeof object.itemId === "object")
                message.itemId = new $util.LongBits(object.itemId.low >>> 0, object.itemId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UseItemRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UseItemRequest
     * @static
     * @param {UseItemRequest} message UseItemRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UseItemRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "UseItemReq" : 10019;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.itemId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.itemId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.itemId != null && message.hasOwnProperty("itemId"))
            if (typeof message.itemId === "number")
                object.itemId = options.longs === String ? String(message.itemId) : message.itemId;
            else
                object.itemId = options.longs === String ? $util.Long.prototype.toString.call(message.itemId) : options.longs === Number ? new $util.LongBits(message.itemId.low >>> 0, message.itemId.high >>> 0).toNumber() : message.itemId;
        return object;
    };

    /**
     * Converts this UseItemRequest to JSON.
     * @function toJSON
     * @memberof UseItemRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UseItemRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UseItemRequest;
})();

$root.UseItemResponse = (function() {

    /**
     * Properties of a UseItemResponse.
     * @exports IUseItemResponse
     * @interface IUseItemResponse
     * @property {MID|null} [mid] UseItemResponse mid
     * @property {number|null} [result] UseItemResponse result
     */

    /**
     * Constructs a new UseItemResponse.
     * @exports UseItemResponse
     * @classdesc Represents a UseItemResponse.
     * @implements IUseItemResponse
     * @constructor
     * @param {IUseItemResponse=} [properties] Properties to set
     */
    function UseItemResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UseItemResponse mid.
     * @member {MID} mid
     * @memberof UseItemResponse
     * @instance
     */
    UseItemResponse.prototype.mid = 10020;

    /**
     * UseItemResponse result.
     * @member {number} result
     * @memberof UseItemResponse
     * @instance
     */
    UseItemResponse.prototype.result = 0;

    /**
     * Creates a new UseItemResponse instance using the specified properties.
     * @function create
     * @memberof UseItemResponse
     * @static
     * @param {IUseItemResponse=} [properties] Properties to set
     * @returns {UseItemResponse} UseItemResponse instance
     */
    UseItemResponse.create = function create(properties) {
        return new UseItemResponse(properties);
    };

    /**
     * Encodes the specified UseItemResponse message. Does not implicitly {@link UseItemResponse.verify|verify} messages.
     * @function encode
     * @memberof UseItemResponse
     * @static
     * @param {IUseItemResponse} message UseItemResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseItemResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified UseItemResponse message, length delimited. Does not implicitly {@link UseItemResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UseItemResponse
     * @static
     * @param {IUseItemResponse} message UseItemResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UseItemResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UseItemResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UseItemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UseItemResponse} UseItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseItemResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UseItemResponse();
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
     * Decodes a UseItemResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UseItemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UseItemResponse} UseItemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UseItemResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UseItemResponse message.
     * @function verify
     * @memberof UseItemResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UseItemResponse.verify = function verify(message) {
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
     * Creates a UseItemResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UseItemResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UseItemResponse} UseItemResponse
     */
    UseItemResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.UseItemResponse)
            return object;
        var message = new $root.UseItemResponse();
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
     * Creates a plain object from a UseItemResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UseItemResponse
     * @static
     * @param {UseItemResponse} message UseItemResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UseItemResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "UseItemRes" : 10020;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this UseItemResponse to JSON.
     * @function toJSON
     * @memberof UseItemResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UseItemResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UseItemResponse;
})();

$root.PacketItem = (function() {

    /**
     * Properties of a PacketItem.
     * @exports IPacketItem
     * @interface IPacketItem
     * @property {number|Long} id PacketItem id
     * @property {number} configId PacketItem configId
     * @property {number} num PacketItem num
     */

    /**
     * Constructs a new PacketItem.
     * @exports PacketItem
     * @classdesc Represents a PacketItem.
     * @implements IPacketItem
     * @constructor
     * @param {IPacketItem=} [properties] Properties to set
     */
    function PacketItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PacketItem id.
     * @member {number|Long} id
     * @memberof PacketItem
     * @instance
     */
    PacketItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PacketItem configId.
     * @member {number} configId
     * @memberof PacketItem
     * @instance
     */
    PacketItem.prototype.configId = 0;

    /**
     * PacketItem num.
     * @member {number} num
     * @memberof PacketItem
     * @instance
     */
    PacketItem.prototype.num = 0;

    /**
     * Creates a new PacketItem instance using the specified properties.
     * @function create
     * @memberof PacketItem
     * @static
     * @param {IPacketItem=} [properties] Properties to set
     * @returns {PacketItem} PacketItem instance
     */
    PacketItem.create = function create(properties) {
        return new PacketItem(properties);
    };

    /**
     * Encodes the specified PacketItem message. Does not implicitly {@link PacketItem.verify|verify} messages.
     * @function encode
     * @memberof PacketItem
     * @static
     * @param {IPacketItem} message PacketItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PacketItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.configId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
        return writer;
    };

    /**
     * Encodes the specified PacketItem message, length delimited. Does not implicitly {@link PacketItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PacketItem
     * @static
     * @param {IPacketItem} message PacketItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PacketItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PacketItem message from the specified reader or buffer.
     * @function decode
     * @memberof PacketItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PacketItem} PacketItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PacketItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PacketItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.configId = reader.int32();
                break;
            case 3:
                message.num = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("configId"))
            throw $util.ProtocolError("missing required 'configId'", { instance: message });
        if (!message.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: message });
        return message;
    };

    /**
     * Decodes a PacketItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PacketItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PacketItem} PacketItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PacketItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PacketItem message.
     * @function verify
     * @memberof PacketItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PacketItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
            return "id: integer|Long expected";
        if (!$util.isInteger(message.configId))
            return "configId: integer expected";
        if (!$util.isInteger(message.num))
            return "num: integer expected";
        return null;
    };

    /**
     * Creates a PacketItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PacketItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PacketItem} PacketItem
     */
    PacketItem.fromObject = function fromObject(object) {
        if (object instanceof $root.PacketItem)
            return object;
        var message = new $root.PacketItem();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.configId != null)
            message.configId = object.configId | 0;
        if (object.num != null)
            message.num = object.num | 0;
        return message;
    };

    /**
     * Creates a plain object from a PacketItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PacketItem
     * @static
     * @param {PacketItem} message PacketItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PacketItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.configId = 0;
            object.num = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.configId != null && message.hasOwnProperty("configId"))
            object.configId = message.configId;
        if (message.num != null && message.hasOwnProperty("num"))
            object.num = message.num;
        return object;
    };

    /**
     * Converts this PacketItem to JSON.
     * @function toJSON
     * @memberof PacketItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PacketItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PacketItem;
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
