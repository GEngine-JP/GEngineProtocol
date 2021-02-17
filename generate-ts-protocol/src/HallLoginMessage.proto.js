/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LoginRequest = (function() {

    /**
     * Properties of a LoginRequest.
     * @exports ILoginRequest
     * @interface ILoginRequest
     * @property {MID|null} [mid] LoginRequest mid
     * @property {string|null} [account] LoginRequest account
     * @property {string|null} [password] LoginRequest password
     * @property {LoginType|null} [loginType] LoginRequest loginType
     * @property {number|Long|null} [sessionId] LoginRequest sessionId
     * @property {number|null} [gateId] LoginRequest gateId
     * @property {string|null} [ip] LoginRequest ip
     * @property {string|null} [version] LoginRequest version
     */

    /**
     * Constructs a new LoginRequest.
     * @exports LoginRequest
     * @classdesc Represents a LoginRequest.
     * @implements ILoginRequest
     * @constructor
     * @param {ILoginRequest=} [properties] Properties to set
     */
    function LoginRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginRequest mid.
     * @member {MID} mid
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.mid = 10001;

    /**
     * LoginRequest account.
     * @member {string} account
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.account = "";

    /**
     * LoginRequest password.
     * @member {string} password
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.password = "";

    /**
     * LoginRequest loginType.
     * @member {LoginType} loginType
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.loginType = 1;

    /**
     * LoginRequest sessionId.
     * @member {number|Long} sessionId
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LoginRequest gateId.
     * @member {number} gateId
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.gateId = 0;

    /**
     * LoginRequest ip.
     * @member {string} ip
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.ip = "";

    /**
     * LoginRequest version.
     * @member {string} version
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.version = "";

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @function create
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest=} [properties] Properties to set
     * @returns {LoginRequest} LoginRequest instance
     */
    LoginRequest.create = function create(properties) {
        return new LoginRequest(properties);
    };

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @function encode
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest} message LoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
        if (message.loginType != null && Object.hasOwnProperty.call(message, "loginType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.loginType);
        if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.sessionId);
        if (message.gateId != null && Object.hasOwnProperty.call(message, "gateId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gateId);
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.ip);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.version);
        return writer;
    };

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest} message LoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginRequest} LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.account = reader.string();
                break;
            case 3:
                message.password = reader.string();
                break;
            case 4:
                message.loginType = reader.int32();
                break;
            case 5:
                message.sessionId = reader.int64();
                break;
            case 6:
                message.gateId = reader.int32();
                break;
            case 7:
                message.ip = reader.string();
                break;
            case 8:
                message.version = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginRequest} LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginRequest message.
     * @function verify
     * @memberof LoginRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginRequest.verify = function verify(message) {
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
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        if (message.loginType != null && message.hasOwnProperty("loginType"))
            switch (message.loginType) {
            default:
                return "loginType: enum value expected";
            case 1:
                break;
            }
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                return "sessionId: integer|Long expected";
        if (message.gateId != null && message.hasOwnProperty("gateId"))
            if (!$util.isInteger(message.gateId))
                return "gateId: integer expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        return null;
    };

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginRequest} LoginRequest
     */
    LoginRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginRequest)
            return object;
        var message = new $root.LoginRequest();
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
        if (object.account != null)
            message.account = String(object.account);
        if (object.password != null)
            message.password = String(object.password);
        switch (object.loginType) {
        case "ACCOUNT":
        case 1:
            message.loginType = 1;
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
        if (object.gateId != null)
            message.gateId = object.gateId | 0;
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.version != null)
            message.version = String(object.version);
        return message;
    };

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginRequest
     * @static
     * @param {LoginRequest} message LoginRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "LoginReq" : 10001;
            object.account = "";
            object.password = "";
            object.loginType = options.enums === String ? "ACCOUNT" : 1;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sessionId = options.longs === String ? "0" : 0;
            object.gateId = 0;
            object.ip = "";
            object.version = "";
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.loginType != null && message.hasOwnProperty("loginType"))
            object.loginType = options.enums === String ? $root.LoginType[message.loginType] : message.loginType;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (typeof message.sessionId === "number")
                object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
            else
                object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber() : message.sessionId;
        if (message.gateId != null && message.hasOwnProperty("gateId"))
            object.gateId = message.gateId;
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this LoginRequest to JSON.
     * @function toJSON
     * @memberof LoginRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginRequest;
})();

$root.LoginResponse = (function() {

    /**
     * Properties of a LoginResponse.
     * @exports ILoginResponse
     * @interface ILoginResponse
     * @property {MID|null} [mid] LoginResponse mid
     * @property {boolean|null} [isOk] LoginResponse isOk
     * @property {number|Long|null} [uid] LoginResponse uid
     * @property {number|Long|null} [rid] LoginResponse rid
     * @property {number|Long|null} [sessionId] LoginResponse sessionId
     */

    /**
     * Constructs a new LoginResponse.
     * @exports LoginResponse
     * @classdesc Represents a LoginResponse.
     * @implements ILoginResponse
     * @constructor
     * @param {ILoginResponse=} [properties] Properties to set
     */
    function LoginResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginResponse mid.
     * @member {MID} mid
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.mid = 10002;

    /**
     * LoginResponse isOk.
     * @member {boolean} isOk
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.isOk = false;

    /**
     * LoginResponse uid.
     * @member {number|Long} uid
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LoginResponse rid.
     * @member {number|Long} rid
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LoginResponse sessionId.
     * @member {number|Long} sessionId
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @function create
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse=} [properties] Properties to set
     * @returns {LoginResponse} LoginResponse instance
     */
    LoginResponse.create = function create(properties) {
        return new LoginResponse(properties);
    };

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @function encode
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse} message LoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.isOk != null && Object.hasOwnProperty.call(message, "isOk"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOk);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.uid);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.rid);
        if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.sessionId);
        return writer;
    };

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse} message LoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof LoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginResponse} LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
                message.isOk = reader.bool();
                break;
            case 3:
                message.uid = reader.int64();
                break;
            case 4:
                message.rid = reader.int64();
                break;
            case 5:
                message.sessionId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginResponse} LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginResponse message.
     * @function verify
     * @memberof LoginResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginResponse.verify = function verify(message) {
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
        if (message.isOk != null && message.hasOwnProperty("isOk"))
            if (typeof message.isOk !== "boolean")
                return "isOk: boolean expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                return "uid: integer|Long expected";
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
                return "rid: integer|Long expected";
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                return "sessionId: integer|Long expected";
        return null;
    };

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginResponse} LoginResponse
     */
    LoginResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginResponse)
            return object;
        var message = new $root.LoginResponse();
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
        if (object.isOk != null)
            message.isOk = Boolean(object.isOk);
        if (object.uid != null)
            if ($util.Long)
                (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
            else if (typeof object.uid === "string")
                message.uid = parseInt(object.uid, 10);
            else if (typeof object.uid === "number")
                message.uid = object.uid;
            else if (typeof object.uid === "object")
                message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
        if (object.rid != null)
            if ($util.Long)
                (message.rid = $util.Long.fromValue(object.rid)).unsigned = false;
            else if (typeof object.rid === "string")
                message.rid = parseInt(object.rid, 10);
            else if (typeof object.rid === "number")
                message.rid = object.rid;
            else if (typeof object.rid === "object")
                message.rid = new $util.LongBits(object.rid.low >>> 0, object.rid.high >>> 0).toNumber();
        if (object.sessionId != null)
            if ($util.Long)
                (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = false;
            else if (typeof object.sessionId === "string")
                message.sessionId = parseInt(object.sessionId, 10);
            else if (typeof object.sessionId === "number")
                message.sessionId = object.sessionId;
            else if (typeof object.sessionId === "object")
                message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginResponse
     * @static
     * @param {LoginResponse} message LoginResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "LoginRes" : 10002;
            object.isOk = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sessionId = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.isOk != null && message.hasOwnProperty("isOk"))
            object.isOk = message.isOk;
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (typeof message.uid === "number")
                object.uid = options.longs === String ? String(message.uid) : message.uid;
            else
                object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (typeof message.sessionId === "number")
                object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
            else
                object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber() : message.sessionId;
        return object;
    };

    /**
     * Converts this LoginResponse to JSON.
     * @function toJSON
     * @memberof LoginResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginResponse;
})();

$root.QuitRequest = (function() {

    /**
     * Properties of a QuitRequest.
     * @exports IQuitRequest
     * @interface IQuitRequest
     * @property {MID|null} [mid] QuitRequest mid
     * @property {number|Long|null} [rid] QuitRequest rid
     */

    /**
     * Constructs a new QuitRequest.
     * @exports QuitRequest
     * @classdesc Represents a QuitRequest.
     * @implements IQuitRequest
     * @constructor
     * @param {IQuitRequest=} [properties] Properties to set
     */
    function QuitRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitRequest mid.
     * @member {MID} mid
     * @memberof QuitRequest
     * @instance
     */
    QuitRequest.prototype.mid = 10007;

    /**
     * QuitRequest rid.
     * @member {number|Long} rid
     * @memberof QuitRequest
     * @instance
     */
    QuitRequest.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new QuitRequest instance using the specified properties.
     * @function create
     * @memberof QuitRequest
     * @static
     * @param {IQuitRequest=} [properties] Properties to set
     * @returns {QuitRequest} QuitRequest instance
     */
    QuitRequest.create = function create(properties) {
        return new QuitRequest(properties);
    };

    /**
     * Encodes the specified QuitRequest message. Does not implicitly {@link QuitRequest.verify|verify} messages.
     * @function encode
     * @memberof QuitRequest
     * @static
     * @param {IQuitRequest} message QuitRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rid);
        return writer;
    };

    /**
     * Encodes the specified QuitRequest message, length delimited. Does not implicitly {@link QuitRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitRequest
     * @static
     * @param {IQuitRequest} message QuitRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitRequest message from the specified reader or buffer.
     * @function decode
     * @memberof QuitRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitRequest} QuitRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
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
     * Decodes a QuitRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitRequest} QuitRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitRequest message.
     * @function verify
     * @memberof QuitRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitRequest.verify = function verify(message) {
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
        return null;
    };

    /**
     * Creates a QuitRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitRequest} QuitRequest
     */
    QuitRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitRequest)
            return object;
        var message = new $root.QuitRequest();
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
        return message;
    };

    /**
     * Creates a plain object from a QuitRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitRequest
     * @static
     * @param {QuitRequest} message QuitRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "QuitReq" : 10007;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        return object;
    };

    /**
     * Converts this QuitRequest to JSON.
     * @function toJSON
     * @memberof QuitRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitRequest;
})();

$root.QuitResponse = (function() {

    /**
     * Properties of a QuitResponse.
     * @exports IQuitResponse
     * @interface IQuitResponse
     * @property {MID|null} [mid] QuitResponse mid
     * @property {number|null} [result] QuitResponse result
     */

    /**
     * Constructs a new QuitResponse.
     * @exports QuitResponse
     * @classdesc Represents a QuitResponse.
     * @implements IQuitResponse
     * @constructor
     * @param {IQuitResponse=} [properties] Properties to set
     */
    function QuitResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitResponse mid.
     * @member {MID} mid
     * @memberof QuitResponse
     * @instance
     */
    QuitResponse.prototype.mid = 10008;

    /**
     * QuitResponse result.
     * @member {number} result
     * @memberof QuitResponse
     * @instance
     */
    QuitResponse.prototype.result = 0;

    /**
     * Creates a new QuitResponse instance using the specified properties.
     * @function create
     * @memberof QuitResponse
     * @static
     * @param {IQuitResponse=} [properties] Properties to set
     * @returns {QuitResponse} QuitResponse instance
     */
    QuitResponse.create = function create(properties) {
        return new QuitResponse(properties);
    };

    /**
     * Encodes the specified QuitResponse message. Does not implicitly {@link QuitResponse.verify|verify} messages.
     * @function encode
     * @memberof QuitResponse
     * @static
     * @param {IQuitResponse} message QuitResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified QuitResponse message, length delimited. Does not implicitly {@link QuitResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitResponse
     * @static
     * @param {IQuitResponse} message QuitResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitResponse message from the specified reader or buffer.
     * @function decode
     * @memberof QuitResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitResponse} QuitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitResponse();
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
     * Decodes a QuitResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitResponse} QuitResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitResponse message.
     * @function verify
     * @memberof QuitResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitResponse.verify = function verify(message) {
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
     * Creates a QuitResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitResponse} QuitResponse
     */
    QuitResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitResponse)
            return object;
        var message = new $root.QuitResponse();
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
     * Creates a plain object from a QuitResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitResponse
     * @static
     * @param {QuitResponse} message QuitResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "QuitRes" : 10008;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this QuitResponse to JSON.
     * @function toJSON
     * @memberof QuitResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitResponse;
})();

$root.LoginSubGameRequest = (function() {

    /**
     * Properties of a LoginSubGameRequest.
     * @exports ILoginSubGameRequest
     * @interface ILoginSubGameRequest
     * @property {MID|null} [mid] LoginSubGameRequest mid
     * @property {number|Long} rid LoginSubGameRequest rid
     * @property {number|null} [type] LoginSubGameRequest type
     * @property {number|null} [gameType] LoginSubGameRequest gameType
     */

    /**
     * Constructs a new LoginSubGameRequest.
     * @exports LoginSubGameRequest
     * @classdesc Represents a LoginSubGameRequest.
     * @implements ILoginSubGameRequest
     * @constructor
     * @param {ILoginSubGameRequest=} [properties] Properties to set
     */
    function LoginSubGameRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginSubGameRequest mid.
     * @member {MID} mid
     * @memberof LoginSubGameRequest
     * @instance
     */
    LoginSubGameRequest.prototype.mid = 10003;

    /**
     * LoginSubGameRequest rid.
     * @member {number|Long} rid
     * @memberof LoginSubGameRequest
     * @instance
     */
    LoginSubGameRequest.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * LoginSubGameRequest type.
     * @member {number} type
     * @memberof LoginSubGameRequest
     * @instance
     */
    LoginSubGameRequest.prototype.type = 0;

    /**
     * LoginSubGameRequest gameType.
     * @member {number} gameType
     * @memberof LoginSubGameRequest
     * @instance
     */
    LoginSubGameRequest.prototype.gameType = 0;

    /**
     * Creates a new LoginSubGameRequest instance using the specified properties.
     * @function create
     * @memberof LoginSubGameRequest
     * @static
     * @param {ILoginSubGameRequest=} [properties] Properties to set
     * @returns {LoginSubGameRequest} LoginSubGameRequest instance
     */
    LoginSubGameRequest.create = function create(properties) {
        return new LoginSubGameRequest(properties);
    };

    /**
     * Encodes the specified LoginSubGameRequest message. Does not implicitly {@link LoginSubGameRequest.verify|verify} messages.
     * @function encode
     * @memberof LoginSubGameRequest
     * @static
     * @param {ILoginSubGameRequest} message LoginSubGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginSubGameRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rid);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
        if (message.gameType != null && Object.hasOwnProperty.call(message, "gameType"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gameType);
        return writer;
    };

    /**
     * Encodes the specified LoginSubGameRequest message, length delimited. Does not implicitly {@link LoginSubGameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginSubGameRequest
     * @static
     * @param {ILoginSubGameRequest} message LoginSubGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginSubGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginSubGameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LoginSubGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginSubGameRequest} LoginSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginSubGameRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginSubGameRequest();
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
                message.type = reader.int32();
                break;
            case 4:
                message.gameType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("rid"))
            throw $util.ProtocolError("missing required 'rid'", { instance: message });
        return message;
    };

    /**
     * Decodes a LoginSubGameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginSubGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginSubGameRequest} LoginSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginSubGameRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginSubGameRequest message.
     * @function verify
     * @memberof LoginSubGameRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginSubGameRequest.verify = function verify(message) {
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
        if (!$util.isInteger(message.rid) && !(message.rid && $util.isInteger(message.rid.low) && $util.isInteger(message.rid.high)))
            return "rid: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.gameType != null && message.hasOwnProperty("gameType"))
            if (!$util.isInteger(message.gameType))
                return "gameType: integer expected";
        return null;
    };

    /**
     * Creates a LoginSubGameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginSubGameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginSubGameRequest} LoginSubGameRequest
     */
    LoginSubGameRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginSubGameRequest)
            return object;
        var message = new $root.LoginSubGameRequest();
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
        if (object.type != null)
            message.type = object.type | 0;
        if (object.gameType != null)
            message.gameType = object.gameType | 0;
        return message;
    };

    /**
     * Creates a plain object from a LoginSubGameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginSubGameRequest
     * @static
     * @param {LoginSubGameRequest} message LoginSubGameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginSubGameRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "LoginSubGameReq" : 10003;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
            object.type = 0;
            object.gameType = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.gameType != null && message.hasOwnProperty("gameType"))
            object.gameType = message.gameType;
        return object;
    };

    /**
     * Converts this LoginSubGameRequest to JSON.
     * @function toJSON
     * @memberof LoginSubGameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginSubGameRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginSubGameRequest;
})();

$root.LoginSubGameResponse = (function() {

    /**
     * Properties of a LoginSubGameResponse.
     * @exports ILoginSubGameResponse
     * @interface ILoginSubGameResponse
     * @property {MID|null} [mid] LoginSubGameResponse mid
     * @property {number|null} [result] LoginSubGameResponse result
     */

    /**
     * Constructs a new LoginSubGameResponse.
     * @exports LoginSubGameResponse
     * @classdesc Represents a LoginSubGameResponse.
     * @implements ILoginSubGameResponse
     * @constructor
     * @param {ILoginSubGameResponse=} [properties] Properties to set
     */
    function LoginSubGameResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginSubGameResponse mid.
     * @member {MID} mid
     * @memberof LoginSubGameResponse
     * @instance
     */
    LoginSubGameResponse.prototype.mid = 10004;

    /**
     * LoginSubGameResponse result.
     * @member {number} result
     * @memberof LoginSubGameResponse
     * @instance
     */
    LoginSubGameResponse.prototype.result = 0;

    /**
     * Creates a new LoginSubGameResponse instance using the specified properties.
     * @function create
     * @memberof LoginSubGameResponse
     * @static
     * @param {ILoginSubGameResponse=} [properties] Properties to set
     * @returns {LoginSubGameResponse} LoginSubGameResponse instance
     */
    LoginSubGameResponse.create = function create(properties) {
        return new LoginSubGameResponse(properties);
    };

    /**
     * Encodes the specified LoginSubGameResponse message. Does not implicitly {@link LoginSubGameResponse.verify|verify} messages.
     * @function encode
     * @memberof LoginSubGameResponse
     * @static
     * @param {ILoginSubGameResponse} message LoginSubGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginSubGameResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified LoginSubGameResponse message, length delimited. Does not implicitly {@link LoginSubGameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginSubGameResponse
     * @static
     * @param {ILoginSubGameResponse} message LoginSubGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginSubGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginSubGameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof LoginSubGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginSubGameResponse} LoginSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginSubGameResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginSubGameResponse();
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
     * Decodes a LoginSubGameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginSubGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginSubGameResponse} LoginSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginSubGameResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginSubGameResponse message.
     * @function verify
     * @memberof LoginSubGameResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginSubGameResponse.verify = function verify(message) {
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
     * Creates a LoginSubGameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginSubGameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginSubGameResponse} LoginSubGameResponse
     */
    LoginSubGameResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginSubGameResponse)
            return object;
        var message = new $root.LoginSubGameResponse();
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
     * Creates a plain object from a LoginSubGameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginSubGameResponse
     * @static
     * @param {LoginSubGameResponse} message LoginSubGameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginSubGameResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "LoginSubGameRes" : 10004;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this LoginSubGameResponse to JSON.
     * @function toJSON
     * @memberof LoginSubGameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginSubGameResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginSubGameResponse;
})();

$root.QuitSubGameRequest = (function() {

    /**
     * Properties of a QuitSubGameRequest.
     * @exports IQuitSubGameRequest
     * @interface IQuitSubGameRequest
     * @property {MID|null} [mid] QuitSubGameRequest mid
     * @property {number|Long|null} [rid] QuitSubGameRequest rid
     */

    /**
     * Constructs a new QuitSubGameRequest.
     * @exports QuitSubGameRequest
     * @classdesc Represents a QuitSubGameRequest.
     * @implements IQuitSubGameRequest
     * @constructor
     * @param {IQuitSubGameRequest=} [properties] Properties to set
     */
    function QuitSubGameRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitSubGameRequest mid.
     * @member {MID} mid
     * @memberof QuitSubGameRequest
     * @instance
     */
    QuitSubGameRequest.prototype.mid = 10009;

    /**
     * QuitSubGameRequest rid.
     * @member {number|Long} rid
     * @memberof QuitSubGameRequest
     * @instance
     */
    QuitSubGameRequest.prototype.rid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new QuitSubGameRequest instance using the specified properties.
     * @function create
     * @memberof QuitSubGameRequest
     * @static
     * @param {IQuitSubGameRequest=} [properties] Properties to set
     * @returns {QuitSubGameRequest} QuitSubGameRequest instance
     */
    QuitSubGameRequest.create = function create(properties) {
        return new QuitSubGameRequest(properties);
    };

    /**
     * Encodes the specified QuitSubGameRequest message. Does not implicitly {@link QuitSubGameRequest.verify|verify} messages.
     * @function encode
     * @memberof QuitSubGameRequest
     * @static
     * @param {IQuitSubGameRequest} message QuitSubGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitSubGameRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.rid != null && Object.hasOwnProperty.call(message, "rid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rid);
        return writer;
    };

    /**
     * Encodes the specified QuitSubGameRequest message, length delimited. Does not implicitly {@link QuitSubGameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitSubGameRequest
     * @static
     * @param {IQuitSubGameRequest} message QuitSubGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitSubGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitSubGameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof QuitSubGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitSubGameRequest} QuitSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitSubGameRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitSubGameRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mid = reader.int32();
                break;
            case 2:
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
     * Decodes a QuitSubGameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitSubGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitSubGameRequest} QuitSubGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitSubGameRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitSubGameRequest message.
     * @function verify
     * @memberof QuitSubGameRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitSubGameRequest.verify = function verify(message) {
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
        return null;
    };

    /**
     * Creates a QuitSubGameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitSubGameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitSubGameRequest} QuitSubGameRequest
     */
    QuitSubGameRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitSubGameRequest)
            return object;
        var message = new $root.QuitSubGameRequest();
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
        return message;
    };

    /**
     * Creates a plain object from a QuitSubGameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitSubGameRequest
     * @static
     * @param {QuitSubGameRequest} message QuitSubGameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitSubGameRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "QuitSubGameReq" : 10009;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rid = options.longs === String ? "0" : 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.rid != null && message.hasOwnProperty("rid"))
            if (typeof message.rid === "number")
                object.rid = options.longs === String ? String(message.rid) : message.rid;
            else
                object.rid = options.longs === String ? $util.Long.prototype.toString.call(message.rid) : options.longs === Number ? new $util.LongBits(message.rid.low >>> 0, message.rid.high >>> 0).toNumber() : message.rid;
        return object;
    };

    /**
     * Converts this QuitSubGameRequest to JSON.
     * @function toJSON
     * @memberof QuitSubGameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitSubGameRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitSubGameRequest;
})();

$root.QuitSubGameResponse = (function() {

    /**
     * Properties of a QuitSubGameResponse.
     * @exports IQuitSubGameResponse
     * @interface IQuitSubGameResponse
     * @property {MID|null} [mid] QuitSubGameResponse mid
     * @property {number|null} [result] QuitSubGameResponse result
     */

    /**
     * Constructs a new QuitSubGameResponse.
     * @exports QuitSubGameResponse
     * @classdesc Represents a QuitSubGameResponse.
     * @implements IQuitSubGameResponse
     * @constructor
     * @param {IQuitSubGameResponse=} [properties] Properties to set
     */
    function QuitSubGameResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QuitSubGameResponse mid.
     * @member {MID} mid
     * @memberof QuitSubGameResponse
     * @instance
     */
    QuitSubGameResponse.prototype.mid = 10010;

    /**
     * QuitSubGameResponse result.
     * @member {number} result
     * @memberof QuitSubGameResponse
     * @instance
     */
    QuitSubGameResponse.prototype.result = 0;

    /**
     * Creates a new QuitSubGameResponse instance using the specified properties.
     * @function create
     * @memberof QuitSubGameResponse
     * @static
     * @param {IQuitSubGameResponse=} [properties] Properties to set
     * @returns {QuitSubGameResponse} QuitSubGameResponse instance
     */
    QuitSubGameResponse.create = function create(properties) {
        return new QuitSubGameResponse(properties);
    };

    /**
     * Encodes the specified QuitSubGameResponse message. Does not implicitly {@link QuitSubGameResponse.verify|verify} messages.
     * @function encode
     * @memberof QuitSubGameResponse
     * @static
     * @param {IQuitSubGameResponse} message QuitSubGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitSubGameResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mid != null && Object.hasOwnProperty.call(message, "mid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mid);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified QuitSubGameResponse message, length delimited. Does not implicitly {@link QuitSubGameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QuitSubGameResponse
     * @static
     * @param {IQuitSubGameResponse} message QuitSubGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QuitSubGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QuitSubGameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof QuitSubGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QuitSubGameResponse} QuitSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitSubGameResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QuitSubGameResponse();
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
     * Decodes a QuitSubGameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QuitSubGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QuitSubGameResponse} QuitSubGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QuitSubGameResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QuitSubGameResponse message.
     * @function verify
     * @memberof QuitSubGameResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QuitSubGameResponse.verify = function verify(message) {
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
     * Creates a QuitSubGameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QuitSubGameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QuitSubGameResponse} QuitSubGameResponse
     */
    QuitSubGameResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.QuitSubGameResponse)
            return object;
        var message = new $root.QuitSubGameResponse();
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
     * Creates a plain object from a QuitSubGameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QuitSubGameResponse
     * @static
     * @param {QuitSubGameResponse} message QuitSubGameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QuitSubGameResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mid = options.enums === String ? "QuitSubGameRes" : 10010;
            object.result = 0;
        }
        if (message.mid != null && message.hasOwnProperty("mid"))
            object.mid = options.enums === String ? $root.MID[message.mid] : message.mid;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this QuitSubGameResponse to JSON.
     * @function toJSON
     * @memberof QuitSubGameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QuitSubGameResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QuitSubGameResponse;
})();

/**
 * LoginType enum.
 * @exports LoginType
 * @enum {number}
 * @property {number} ACCOUNT=1 ACCOUNT value
 */
$root.LoginType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "ACCOUNT"] = 1;
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
