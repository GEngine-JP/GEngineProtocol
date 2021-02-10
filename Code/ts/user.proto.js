/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.RoleInfo = (function() {

        /**
         * Properties of a RoleInfo.
         * @memberof user
         * @interface IRoleInfo
         * @property {number|Long|null} [roleId] RoleInfo roleId
         * @property {string|null} [roleName] RoleInfo roleName
         * @property {number|null} [level] RoleInfo level
         * @property {number|null} [sex] RoleInfo sex
         * @property {number|null} [mapId] RoleInfo mapId
         * @property {number|null} [line] RoleInfo line
         * @property {number|null} [curServerType] RoleInfo curServerType
         */

        /**
         * Constructs a new RoleInfo.
         * @memberof user
         * @classdesc Represents a RoleInfo.
         * @implements IRoleInfo
         * @constructor
         * @param {user.IRoleInfo=} [properties] Properties to set
         */
        function RoleInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleInfo roleId.
         * @member {number|Long} roleId
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoleInfo roleName.
         * @member {string} roleName
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.roleName = "";

        /**
         * RoleInfo level.
         * @member {number} level
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.level = 0;

        /**
         * RoleInfo sex.
         * @member {number} sex
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.sex = 0;

        /**
         * RoleInfo mapId.
         * @member {number} mapId
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.mapId = 0;

        /**
         * RoleInfo line.
         * @member {number} line
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.line = 0;

        /**
         * RoleInfo curServerType.
         * @member {number} curServerType
         * @memberof user.RoleInfo
         * @instance
         */
        RoleInfo.prototype.curServerType = 0;

        /**
         * Creates a new RoleInfo instance using the specified properties.
         * @function create
         * @memberof user.RoleInfo
         * @static
         * @param {user.IRoleInfo=} [properties] Properties to set
         * @returns {user.RoleInfo} RoleInfo instance
         */
        RoleInfo.create = function create(properties) {
            return new RoleInfo(properties);
        };

        /**
         * Encodes the specified RoleInfo message. Does not implicitly {@link user.RoleInfo.verify|verify} messages.
         * @function encode
         * @memberof user.RoleInfo
         * @static
         * @param {user.IRoleInfo} message RoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roleId);
            if (message.roleName != null && Object.hasOwnProperty.call(message, "roleName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roleName);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            if (message.mapId != null && Object.hasOwnProperty.call(message, "mapId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mapId);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.line);
            if (message.curServerType != null && Object.hasOwnProperty.call(message, "curServerType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.curServerType);
            return writer;
        };

        /**
         * Encodes the specified RoleInfo message, length delimited. Does not implicitly {@link user.RoleInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RoleInfo
         * @static
         * @param {user.IRoleInfo} message RoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof user.RoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RoleInfo} RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RoleInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.int64();
                    break;
                case 2:
                    message.roleName = reader.string();
                    break;
                case 3:
                    message.level = reader.int32();
                    break;
                case 4:
                    message.sex = reader.int32();
                    break;
                case 5:
                    message.mapId = reader.int32();
                    break;
                case 6:
                    message.line = reader.int32();
                    break;
                case 7:
                    message.curServerType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RoleInfo} RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleInfo message.
         * @function verify
         * @memberof user.RoleInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                if (!$util.isString(message.roleName))
                    return "roleName: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                if (!$util.isInteger(message.mapId))
                    return "mapId: integer expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.curServerType != null && message.hasOwnProperty("curServerType"))
                if (!$util.isInteger(message.curServerType))
                    return "curServerType: integer expected";
            return null;
        };

        /**
         * Creates a RoleInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RoleInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RoleInfo} RoleInfo
         */
        RoleInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RoleInfo)
                return object;
            var message = new $root.user.RoleInfo();
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.mapId != null)
                message.mapId = object.mapId | 0;
            if (object.line != null)
                message.line = object.line | 0;
            if (object.curServerType != null)
                message.curServerType = object.curServerType | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoleInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RoleInfo
         * @static
         * @param {user.RoleInfo} message RoleInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.roleName = "";
                object.level = 0;
                object.sex = 0;
                object.mapId = 0;
                object.line = 0;
                object.curServerType = 0;
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.mapId != null && message.hasOwnProperty("mapId"))
                object.mapId = message.mapId;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.curServerType != null && message.hasOwnProperty("curServerType"))
                object.curServerType = message.curServerType;
            return object;
        };

        /**
         * Converts this RoleInfo to JSON.
         * @function toJSON
         * @memberof user.RoleInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleInfo;
    })();

    user.PlayerAttribute = (function() {

        /**
         * Properties of a PlayerAttribute.
         * @memberof user
         * @interface IPlayerAttribute
         * @property {number|null} [phyAttMax] PlayerAttribute phyAttMax
         * @property {number|null} [phyAttMin] PlayerAttribute phyAttMin
         * @property {number|null} [magicAttMax] PlayerAttribute magicAttMax
         * @property {number|null} [magicAttMin] PlayerAttribute magicAttMin
         * @property {number|null} [taoAttMax] PlayerAttribute taoAttMax
         * @property {number|null} [taoAttMin] PlayerAttribute taoAttMin
         * @property {number|null} [phyDefMax] PlayerAttribute phyDefMax
         * @property {number|null} [phyDefMin] PlayerAttribute phyDefMin
         * @property {number|null} [magicDefMax] PlayerAttribute magicDefMax
         * @property {number|null} [magicDefMin] PlayerAttribute magicDefMin
         * @property {number|null} [accurate] PlayerAttribute accurate
         * @property {number|null} [dodge] PlayerAttribute dodge
         * @property {number|null} [poisonRecover] PlayerAttribute poisonRecover
         * @property {number|null} [heathRecover] PlayerAttribute heathRecover
         * @property {number|null} [attackSpeed] PlayerAttribute attackSpeed
         * @property {number|null} [maxHp] PlayerAttribute maxHp
         * @property {number|null} [maxMp] PlayerAttribute maxMp
         * @property {number|null} [magicRecover] PlayerAttribute magicRecover
         * @property {number|null} [luck] PlayerAttribute luck
         * @property {number|null} [critical] PlayerAttribute critical
         * @property {number|null} [nbValue] PlayerAttribute nbValue
         * @property {number|null} [criticalDamage] PlayerAttribute criticalDamage
         * @property {number|null} [maxInnerPower] PlayerAttribute maxInnerPower
         * @property {number|null} [resistance] PlayerAttribute resistance
         * @property {number|null} [holyAtt] PlayerAttribute holyAtt
         * @property {number|null} [pkAtk] PlayerAttribute pkAtk
         * @property {number|null} [pkDef] PlayerAttribute pkDef
         */

        /**
         * Constructs a new PlayerAttribute.
         * @memberof user
         * @classdesc Represents a PlayerAttribute.
         * @implements IPlayerAttribute
         * @constructor
         * @param {user.IPlayerAttribute=} [properties] Properties to set
         */
        function PlayerAttribute(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerAttribute phyAttMax.
         * @member {number} phyAttMax
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.phyAttMax = 0;

        /**
         * PlayerAttribute phyAttMin.
         * @member {number} phyAttMin
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.phyAttMin = 0;

        /**
         * PlayerAttribute magicAttMax.
         * @member {number} magicAttMax
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.magicAttMax = 0;

        /**
         * PlayerAttribute magicAttMin.
         * @member {number} magicAttMin
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.magicAttMin = 0;

        /**
         * PlayerAttribute taoAttMax.
         * @member {number} taoAttMax
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.taoAttMax = 0;

        /**
         * PlayerAttribute taoAttMin.
         * @member {number} taoAttMin
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.taoAttMin = 0;

        /**
         * PlayerAttribute phyDefMax.
         * @member {number} phyDefMax
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.phyDefMax = 0;

        /**
         * PlayerAttribute phyDefMin.
         * @member {number} phyDefMin
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.phyDefMin = 0;

        /**
         * PlayerAttribute magicDefMax.
         * @member {number} magicDefMax
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.magicDefMax = 0;

        /**
         * PlayerAttribute magicDefMin.
         * @member {number} magicDefMin
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.magicDefMin = 0;

        /**
         * PlayerAttribute accurate.
         * @member {number} accurate
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.accurate = 0;

        /**
         * PlayerAttribute dodge.
         * @member {number} dodge
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.dodge = 0;

        /**
         * PlayerAttribute poisonRecover.
         * @member {number} poisonRecover
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.poisonRecover = 0;

        /**
         * PlayerAttribute heathRecover.
         * @member {number} heathRecover
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.heathRecover = 0;

        /**
         * PlayerAttribute attackSpeed.
         * @member {number} attackSpeed
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.attackSpeed = 0;

        /**
         * PlayerAttribute maxHp.
         * @member {number} maxHp
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.maxHp = 0;

        /**
         * PlayerAttribute maxMp.
         * @member {number} maxMp
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.maxMp = 0;

        /**
         * PlayerAttribute magicRecover.
         * @member {number} magicRecover
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.magicRecover = 0;

        /**
         * PlayerAttribute luck.
         * @member {number} luck
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.luck = 0;

        /**
         * PlayerAttribute critical.
         * @member {number} critical
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.critical = 0;

        /**
         * PlayerAttribute nbValue.
         * @member {number} nbValue
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.nbValue = 0;

        /**
         * PlayerAttribute criticalDamage.
         * @member {number} criticalDamage
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.criticalDamage = 0;

        /**
         * PlayerAttribute maxInnerPower.
         * @member {number} maxInnerPower
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.maxInnerPower = 0;

        /**
         * PlayerAttribute resistance.
         * @member {number} resistance
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.resistance = 0;

        /**
         * PlayerAttribute holyAtt.
         * @member {number} holyAtt
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.holyAtt = 0;

        /**
         * PlayerAttribute pkAtk.
         * @member {number} pkAtk
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.pkAtk = 0;

        /**
         * PlayerAttribute pkDef.
         * @member {number} pkDef
         * @memberof user.PlayerAttribute
         * @instance
         */
        PlayerAttribute.prototype.pkDef = 0;

        /**
         * Creates a new PlayerAttribute instance using the specified properties.
         * @function create
         * @memberof user.PlayerAttribute
         * @static
         * @param {user.IPlayerAttribute=} [properties] Properties to set
         * @returns {user.PlayerAttribute} PlayerAttribute instance
         */
        PlayerAttribute.create = function create(properties) {
            return new PlayerAttribute(properties);
        };

        /**
         * Encodes the specified PlayerAttribute message. Does not implicitly {@link user.PlayerAttribute.verify|verify} messages.
         * @function encode
         * @memberof user.PlayerAttribute
         * @static
         * @param {user.IPlayerAttribute} message PlayerAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAttribute.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phyAttMax != null && Object.hasOwnProperty.call(message, "phyAttMax"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phyAttMax);
            if (message.phyAttMin != null && Object.hasOwnProperty.call(message, "phyAttMin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.phyAttMin);
            if (message.magicAttMax != null && Object.hasOwnProperty.call(message, "magicAttMax"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.magicAttMax);
            if (message.magicAttMin != null && Object.hasOwnProperty.call(message, "magicAttMin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.magicAttMin);
            if (message.taoAttMax != null && Object.hasOwnProperty.call(message, "taoAttMax"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.taoAttMax);
            if (message.taoAttMin != null && Object.hasOwnProperty.call(message, "taoAttMin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.taoAttMin);
            if (message.phyDefMax != null && Object.hasOwnProperty.call(message, "phyDefMax"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.phyDefMax);
            if (message.phyDefMin != null && Object.hasOwnProperty.call(message, "phyDefMin"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.phyDefMin);
            if (message.magicDefMax != null && Object.hasOwnProperty.call(message, "magicDefMax"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.magicDefMax);
            if (message.magicDefMin != null && Object.hasOwnProperty.call(message, "magicDefMin"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.magicDefMin);
            if (message.accurate != null && Object.hasOwnProperty.call(message, "accurate"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.accurate);
            if (message.dodge != null && Object.hasOwnProperty.call(message, "dodge"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.dodge);
            if (message.poisonRecover != null && Object.hasOwnProperty.call(message, "poisonRecover"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.poisonRecover);
            if (message.heathRecover != null && Object.hasOwnProperty.call(message, "heathRecover"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.heathRecover);
            if (message.attackSpeed != null && Object.hasOwnProperty.call(message, "attackSpeed"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.attackSpeed);
            if (message.maxHp != null && Object.hasOwnProperty.call(message, "maxHp"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.maxHp);
            if (message.maxMp != null && Object.hasOwnProperty.call(message, "maxMp"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.maxMp);
            if (message.magicRecover != null && Object.hasOwnProperty.call(message, "magicRecover"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.magicRecover);
            if (message.luck != null && Object.hasOwnProperty.call(message, "luck"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.luck);
            if (message.critical != null && Object.hasOwnProperty.call(message, "critical"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.critical);
            if (message.nbValue != null && Object.hasOwnProperty.call(message, "nbValue"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.nbValue);
            if (message.criticalDamage != null && Object.hasOwnProperty.call(message, "criticalDamage"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.criticalDamage);
            if (message.maxInnerPower != null && Object.hasOwnProperty.call(message, "maxInnerPower"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.maxInnerPower);
            if (message.resistance != null && Object.hasOwnProperty.call(message, "resistance"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.resistance);
            if (message.holyAtt != null && Object.hasOwnProperty.call(message, "holyAtt"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.holyAtt);
            if (message.pkAtk != null && Object.hasOwnProperty.call(message, "pkAtk"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.pkAtk);
            if (message.pkDef != null && Object.hasOwnProperty.call(message, "pkDef"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.pkDef);
            return writer;
        };

        /**
         * Encodes the specified PlayerAttribute message, length delimited. Does not implicitly {@link user.PlayerAttribute.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.PlayerAttribute
         * @static
         * @param {user.IPlayerAttribute} message PlayerAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAttribute.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerAttribute message from the specified reader or buffer.
         * @function decode
         * @memberof user.PlayerAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.PlayerAttribute} PlayerAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAttribute.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.PlayerAttribute();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phyAttMax = reader.int32();
                    break;
                case 2:
                    message.phyAttMin = reader.int32();
                    break;
                case 3:
                    message.magicAttMax = reader.int32();
                    break;
                case 4:
                    message.magicAttMin = reader.int32();
                    break;
                case 5:
                    message.taoAttMax = reader.int32();
                    break;
                case 6:
                    message.taoAttMin = reader.int32();
                    break;
                case 7:
                    message.phyDefMax = reader.int32();
                    break;
                case 8:
                    message.phyDefMin = reader.int32();
                    break;
                case 9:
                    message.magicDefMax = reader.int32();
                    break;
                case 10:
                    message.magicDefMin = reader.int32();
                    break;
                case 11:
                    message.accurate = reader.int32();
                    break;
                case 12:
                    message.dodge = reader.int32();
                    break;
                case 13:
                    message.poisonRecover = reader.int32();
                    break;
                case 14:
                    message.heathRecover = reader.int32();
                    break;
                case 15:
                    message.attackSpeed = reader.int32();
                    break;
                case 16:
                    message.maxHp = reader.int32();
                    break;
                case 17:
                    message.maxMp = reader.int32();
                    break;
                case 18:
                    message.magicRecover = reader.int32();
                    break;
                case 19:
                    message.luck = reader.int32();
                    break;
                case 20:
                    message.critical = reader.int32();
                    break;
                case 21:
                    message.nbValue = reader.int32();
                    break;
                case 22:
                    message.criticalDamage = reader.int32();
                    break;
                case 23:
                    message.maxInnerPower = reader.int32();
                    break;
                case 24:
                    message.resistance = reader.int32();
                    break;
                case 25:
                    message.holyAtt = reader.int32();
                    break;
                case 26:
                    message.pkAtk = reader.int32();
                    break;
                case 27:
                    message.pkDef = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerAttribute message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.PlayerAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.PlayerAttribute} PlayerAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAttribute.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerAttribute message.
         * @function verify
         * @memberof user.PlayerAttribute
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerAttribute.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phyAttMax != null && message.hasOwnProperty("phyAttMax"))
                if (!$util.isInteger(message.phyAttMax))
                    return "phyAttMax: integer expected";
            if (message.phyAttMin != null && message.hasOwnProperty("phyAttMin"))
                if (!$util.isInteger(message.phyAttMin))
                    return "phyAttMin: integer expected";
            if (message.magicAttMax != null && message.hasOwnProperty("magicAttMax"))
                if (!$util.isInteger(message.magicAttMax))
                    return "magicAttMax: integer expected";
            if (message.magicAttMin != null && message.hasOwnProperty("magicAttMin"))
                if (!$util.isInteger(message.magicAttMin))
                    return "magicAttMin: integer expected";
            if (message.taoAttMax != null && message.hasOwnProperty("taoAttMax"))
                if (!$util.isInteger(message.taoAttMax))
                    return "taoAttMax: integer expected";
            if (message.taoAttMin != null && message.hasOwnProperty("taoAttMin"))
                if (!$util.isInteger(message.taoAttMin))
                    return "taoAttMin: integer expected";
            if (message.phyDefMax != null && message.hasOwnProperty("phyDefMax"))
                if (!$util.isInteger(message.phyDefMax))
                    return "phyDefMax: integer expected";
            if (message.phyDefMin != null && message.hasOwnProperty("phyDefMin"))
                if (!$util.isInteger(message.phyDefMin))
                    return "phyDefMin: integer expected";
            if (message.magicDefMax != null && message.hasOwnProperty("magicDefMax"))
                if (!$util.isInteger(message.magicDefMax))
                    return "magicDefMax: integer expected";
            if (message.magicDefMin != null && message.hasOwnProperty("magicDefMin"))
                if (!$util.isInteger(message.magicDefMin))
                    return "magicDefMin: integer expected";
            if (message.accurate != null && message.hasOwnProperty("accurate"))
                if (!$util.isInteger(message.accurate))
                    return "accurate: integer expected";
            if (message.dodge != null && message.hasOwnProperty("dodge"))
                if (!$util.isInteger(message.dodge))
                    return "dodge: integer expected";
            if (message.poisonRecover != null && message.hasOwnProperty("poisonRecover"))
                if (!$util.isInteger(message.poisonRecover))
                    return "poisonRecover: integer expected";
            if (message.heathRecover != null && message.hasOwnProperty("heathRecover"))
                if (!$util.isInteger(message.heathRecover))
                    return "heathRecover: integer expected";
            if (message.attackSpeed != null && message.hasOwnProperty("attackSpeed"))
                if (!$util.isInteger(message.attackSpeed))
                    return "attackSpeed: integer expected";
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                if (!$util.isInteger(message.maxHp))
                    return "maxHp: integer expected";
            if (message.maxMp != null && message.hasOwnProperty("maxMp"))
                if (!$util.isInteger(message.maxMp))
                    return "maxMp: integer expected";
            if (message.magicRecover != null && message.hasOwnProperty("magicRecover"))
                if (!$util.isInteger(message.magicRecover))
                    return "magicRecover: integer expected";
            if (message.luck != null && message.hasOwnProperty("luck"))
                if (!$util.isInteger(message.luck))
                    return "luck: integer expected";
            if (message.critical != null && message.hasOwnProperty("critical"))
                if (!$util.isInteger(message.critical))
                    return "critical: integer expected";
            if (message.nbValue != null && message.hasOwnProperty("nbValue"))
                if (!$util.isInteger(message.nbValue))
                    return "nbValue: integer expected";
            if (message.criticalDamage != null && message.hasOwnProperty("criticalDamage"))
                if (!$util.isInteger(message.criticalDamage))
                    return "criticalDamage: integer expected";
            if (message.maxInnerPower != null && message.hasOwnProperty("maxInnerPower"))
                if (!$util.isInteger(message.maxInnerPower))
                    return "maxInnerPower: integer expected";
            if (message.resistance != null && message.hasOwnProperty("resistance"))
                if (!$util.isInteger(message.resistance))
                    return "resistance: integer expected";
            if (message.holyAtt != null && message.hasOwnProperty("holyAtt"))
                if (!$util.isInteger(message.holyAtt))
                    return "holyAtt: integer expected";
            if (message.pkAtk != null && message.hasOwnProperty("pkAtk"))
                if (!$util.isInteger(message.pkAtk))
                    return "pkAtk: integer expected";
            if (message.pkDef != null && message.hasOwnProperty("pkDef"))
                if (!$util.isInteger(message.pkDef))
                    return "pkDef: integer expected";
            return null;
        };

        /**
         * Creates a PlayerAttribute message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.PlayerAttribute
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.PlayerAttribute} PlayerAttribute
         */
        PlayerAttribute.fromObject = function fromObject(object) {
            if (object instanceof $root.user.PlayerAttribute)
                return object;
            var message = new $root.user.PlayerAttribute();
            if (object.phyAttMax != null)
                message.phyAttMax = object.phyAttMax | 0;
            if (object.phyAttMin != null)
                message.phyAttMin = object.phyAttMin | 0;
            if (object.magicAttMax != null)
                message.magicAttMax = object.magicAttMax | 0;
            if (object.magicAttMin != null)
                message.magicAttMin = object.magicAttMin | 0;
            if (object.taoAttMax != null)
                message.taoAttMax = object.taoAttMax | 0;
            if (object.taoAttMin != null)
                message.taoAttMin = object.taoAttMin | 0;
            if (object.phyDefMax != null)
                message.phyDefMax = object.phyDefMax | 0;
            if (object.phyDefMin != null)
                message.phyDefMin = object.phyDefMin | 0;
            if (object.magicDefMax != null)
                message.magicDefMax = object.magicDefMax | 0;
            if (object.magicDefMin != null)
                message.magicDefMin = object.magicDefMin | 0;
            if (object.accurate != null)
                message.accurate = object.accurate | 0;
            if (object.dodge != null)
                message.dodge = object.dodge | 0;
            if (object.poisonRecover != null)
                message.poisonRecover = object.poisonRecover | 0;
            if (object.heathRecover != null)
                message.heathRecover = object.heathRecover | 0;
            if (object.attackSpeed != null)
                message.attackSpeed = object.attackSpeed | 0;
            if (object.maxHp != null)
                message.maxHp = object.maxHp | 0;
            if (object.maxMp != null)
                message.maxMp = object.maxMp | 0;
            if (object.magicRecover != null)
                message.magicRecover = object.magicRecover | 0;
            if (object.luck != null)
                message.luck = object.luck | 0;
            if (object.critical != null)
                message.critical = object.critical | 0;
            if (object.nbValue != null)
                message.nbValue = object.nbValue | 0;
            if (object.criticalDamage != null)
                message.criticalDamage = object.criticalDamage | 0;
            if (object.maxInnerPower != null)
                message.maxInnerPower = object.maxInnerPower | 0;
            if (object.resistance != null)
                message.resistance = object.resistance | 0;
            if (object.holyAtt != null)
                message.holyAtt = object.holyAtt | 0;
            if (object.pkAtk != null)
                message.pkAtk = object.pkAtk | 0;
            if (object.pkDef != null)
                message.pkDef = object.pkDef | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerAttribute message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.PlayerAttribute
         * @static
         * @param {user.PlayerAttribute} message PlayerAttribute
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerAttribute.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phyAttMax = 0;
                object.phyAttMin = 0;
                object.magicAttMax = 0;
                object.magicAttMin = 0;
                object.taoAttMax = 0;
                object.taoAttMin = 0;
                object.phyDefMax = 0;
                object.phyDefMin = 0;
                object.magicDefMax = 0;
                object.magicDefMin = 0;
                object.accurate = 0;
                object.dodge = 0;
                object.poisonRecover = 0;
                object.heathRecover = 0;
                object.attackSpeed = 0;
                object.maxHp = 0;
                object.maxMp = 0;
                object.magicRecover = 0;
                object.luck = 0;
                object.critical = 0;
                object.nbValue = 0;
                object.criticalDamage = 0;
                object.maxInnerPower = 0;
                object.resistance = 0;
                object.holyAtt = 0;
                object.pkAtk = 0;
                object.pkDef = 0;
            }
            if (message.phyAttMax != null && message.hasOwnProperty("phyAttMax"))
                object.phyAttMax = message.phyAttMax;
            if (message.phyAttMin != null && message.hasOwnProperty("phyAttMin"))
                object.phyAttMin = message.phyAttMin;
            if (message.magicAttMax != null && message.hasOwnProperty("magicAttMax"))
                object.magicAttMax = message.magicAttMax;
            if (message.magicAttMin != null && message.hasOwnProperty("magicAttMin"))
                object.magicAttMin = message.magicAttMin;
            if (message.taoAttMax != null && message.hasOwnProperty("taoAttMax"))
                object.taoAttMax = message.taoAttMax;
            if (message.taoAttMin != null && message.hasOwnProperty("taoAttMin"))
                object.taoAttMin = message.taoAttMin;
            if (message.phyDefMax != null && message.hasOwnProperty("phyDefMax"))
                object.phyDefMax = message.phyDefMax;
            if (message.phyDefMin != null && message.hasOwnProperty("phyDefMin"))
                object.phyDefMin = message.phyDefMin;
            if (message.magicDefMax != null && message.hasOwnProperty("magicDefMax"))
                object.magicDefMax = message.magicDefMax;
            if (message.magicDefMin != null && message.hasOwnProperty("magicDefMin"))
                object.magicDefMin = message.magicDefMin;
            if (message.accurate != null && message.hasOwnProperty("accurate"))
                object.accurate = message.accurate;
            if (message.dodge != null && message.hasOwnProperty("dodge"))
                object.dodge = message.dodge;
            if (message.poisonRecover != null && message.hasOwnProperty("poisonRecover"))
                object.poisonRecover = message.poisonRecover;
            if (message.heathRecover != null && message.hasOwnProperty("heathRecover"))
                object.heathRecover = message.heathRecover;
            if (message.attackSpeed != null && message.hasOwnProperty("attackSpeed"))
                object.attackSpeed = message.attackSpeed;
            if (message.maxHp != null && message.hasOwnProperty("maxHp"))
                object.maxHp = message.maxHp;
            if (message.maxMp != null && message.hasOwnProperty("maxMp"))
                object.maxMp = message.maxMp;
            if (message.magicRecover != null && message.hasOwnProperty("magicRecover"))
                object.magicRecover = message.magicRecover;
            if (message.luck != null && message.hasOwnProperty("luck"))
                object.luck = message.luck;
            if (message.critical != null && message.hasOwnProperty("critical"))
                object.critical = message.critical;
            if (message.nbValue != null && message.hasOwnProperty("nbValue"))
                object.nbValue = message.nbValue;
            if (message.criticalDamage != null && message.hasOwnProperty("criticalDamage"))
                object.criticalDamage = message.criticalDamage;
            if (message.maxInnerPower != null && message.hasOwnProperty("maxInnerPower"))
                object.maxInnerPower = message.maxInnerPower;
            if (message.resistance != null && message.hasOwnProperty("resistance"))
                object.resistance = message.resistance;
            if (message.holyAtt != null && message.hasOwnProperty("holyAtt"))
                object.holyAtt = message.holyAtt;
            if (message.pkAtk != null && message.hasOwnProperty("pkAtk"))
                object.pkAtk = message.pkAtk;
            if (message.pkDef != null && message.hasOwnProperty("pkDef"))
                object.pkDef = message.pkDef;
            return object;
        };

        /**
         * Converts this PlayerAttribute to JSON.
         * @function toJSON
         * @memberof user.PlayerAttribute
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerAttribute.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerAttribute;
    })();

    user.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof user
         * @interface ILoginRequest
         * @property {string|null} [loginName] LoginRequest loginName
         * @property {number|null} [platformId] LoginRequest platformId
         * @property {number|null} [serverId] LoginRequest serverId
         * @property {string|null} [sign] LoginRequest sign
         * @property {number|Long|null} [time] LoginRequest time
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof user
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {user.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest loginName.
         * @member {string} loginName
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.loginName = "";

        /**
         * LoginRequest platformId.
         * @member {number} platformId
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.platformId = 0;

        /**
         * LoginRequest serverId.
         * @member {number} serverId
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.serverId = 0;

        /**
         * LoginRequest sign.
         * @member {string} sign
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.sign = "";

        /**
         * LoginRequest time.
         * @member {number|Long} time
         * @memberof user.LoginRequest
         * @instance
         */
        LoginRequest.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest=} [properties] Properties to set
         * @returns {user.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginName != null && Object.hasOwnProperty.call(message, "loginName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.loginName);
            if (message.platformId != null && Object.hasOwnProperty.call(message, "platformId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.platformId);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverId);
            if (message.sign != null && Object.hasOwnProperty.call(message, "sign"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sign);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginRequest
         * @static
         * @param {user.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginName = reader.string();
                    break;
                case 2:
                    message.platformId = reader.int32();
                    break;
                case 3:
                    message.serverId = reader.int32();
                    break;
                case 4:
                    message.sign = reader.string();
                    break;
                case 5:
                    message.time = reader.int64();
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
         * @memberof user.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginRequest} LoginRequest
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
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginName != null && message.hasOwnProperty("loginName"))
                if (!$util.isString(message.loginName))
                    return "loginName: string expected";
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                if (!$util.isInteger(message.platformId))
                    return "platformId: integer expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginRequest)
                return object;
            var message = new $root.user.LoginRequest();
            if (object.loginName != null)
                message.loginName = String(object.loginName);
            if (object.platformId != null)
                message.platformId = object.platformId | 0;
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.sign != null)
                message.sign = String(object.sign);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginRequest
         * @static
         * @param {user.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.loginName = "";
                object.platformId = 0;
                object.serverId = 0;
                object.sign = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.loginName != null && message.hasOwnProperty("loginName"))
                object.loginName = message.loginName;
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                object.platformId = message.platformId;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof user.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    user.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof user
         * @interface ILoginResponse
         * @property {Array.<user.IRoleInfo>|null} [roleList] LoginResponse roleList
         * @property {number|Long|null} [userId] LoginResponse userId
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof user
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {user.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            this.roleList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse roleList.
         * @member {Array.<user.IRoleInfo>} roleList
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.roleList = $util.emptyArray;

        /**
         * LoginResponse userId.
         * @member {number|Long} userId
         * @memberof user.LoginResponse
         * @instance
         */
        LoginResponse.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse=} [properties] Properties to set
         * @returns {user.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleList != null && message.roleList.length)
                for (var i = 0; i < message.roleList.length; ++i)
                    $root.user.RoleInfo.encode(message.roleList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.LoginResponse
         * @static
         * @param {user.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roleList && message.roleList.length))
                        message.roleList = [];
                    message.roleList.push($root.user.RoleInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.userId = reader.int64();
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
         * @memberof user.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.LoginResponse} LoginResponse
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
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleList != null && message.hasOwnProperty("roleList")) {
                if (!Array.isArray(message.roleList))
                    return "roleList: array expected";
                for (var i = 0; i < message.roleList.length; ++i) {
                    var error = $root.user.RoleInfo.verify(message.roleList[i]);
                    if (error)
                        return "roleList." + error;
                }
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.LoginResponse)
                return object;
            var message = new $root.user.LoginResponse();
            if (object.roleList) {
                if (!Array.isArray(object.roleList))
                    throw TypeError(".user.LoginResponse.roleList: array expected");
                message.roleList = [];
                for (var i = 0; i < object.roleList.length; ++i) {
                    if (typeof object.roleList[i] !== "object")
                        throw TypeError(".user.LoginResponse.roleList: object expected");
                    message.roleList[i] = $root.user.RoleInfo.fromObject(object.roleList[i]);
                }
            }
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.LoginResponse
         * @static
         * @param {user.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roleList = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.roleList && message.roleList.length) {
                object.roleList = [];
                for (var j = 0; j < message.roleList.length; ++j)
                    object.roleList[j] = $root.user.RoleInfo.toObject(message.roleList[j], options);
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof user.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    user.CreateRoleRequest = (function() {

        /**
         * Properties of a CreateRoleRequest.
         * @memberof user
         * @interface ICreateRoleRequest
         * @property {string|null} [name] CreateRoleRequest name
         * @property {number|null} [sex] CreateRoleRequest sex
         * @property {number|null} [career] CreateRoleRequest career
         */

        /**
         * Constructs a new CreateRoleRequest.
         * @memberof user
         * @classdesc Represents a CreateRoleRequest.
         * @implements ICreateRoleRequest
         * @constructor
         * @param {user.ICreateRoleRequest=} [properties] Properties to set
         */
        function CreateRoleRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoleRequest name.
         * @member {string} name
         * @memberof user.CreateRoleRequest
         * @instance
         */
        CreateRoleRequest.prototype.name = "";

        /**
         * CreateRoleRequest sex.
         * @member {number} sex
         * @memberof user.CreateRoleRequest
         * @instance
         */
        CreateRoleRequest.prototype.sex = 0;

        /**
         * CreateRoleRequest career.
         * @member {number} career
         * @memberof user.CreateRoleRequest
         * @instance
         */
        CreateRoleRequest.prototype.career = 0;

        /**
         * Creates a new CreateRoleRequest instance using the specified properties.
         * @function create
         * @memberof user.CreateRoleRequest
         * @static
         * @param {user.ICreateRoleRequest=} [properties] Properties to set
         * @returns {user.CreateRoleRequest} CreateRoleRequest instance
         */
        CreateRoleRequest.create = function create(properties) {
            return new CreateRoleRequest(properties);
        };

        /**
         * Encodes the specified CreateRoleRequest message. Does not implicitly {@link user.CreateRoleRequest.verify|verify} messages.
         * @function encode
         * @memberof user.CreateRoleRequest
         * @static
         * @param {user.ICreateRoleRequest} message CreateRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sex);
            if (message.career != null && Object.hasOwnProperty.call(message, "career"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.career);
            return writer;
        };

        /**
         * Encodes the specified CreateRoleRequest message, length delimited. Does not implicitly {@link user.CreateRoleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.CreateRoleRequest
         * @static
         * @param {user.ICreateRoleRequest} message CreateRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.CreateRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.CreateRoleRequest} CreateRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.CreateRoleRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.sex = reader.int32();
                    break;
                case 3:
                    message.career = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoleRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.CreateRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.CreateRoleRequest} CreateRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoleRequest message.
         * @function verify
         * @memberof user.CreateRoleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.career != null && message.hasOwnProperty("career"))
                if (!$util.isInteger(message.career))
                    return "career: integer expected";
            return null;
        };

        /**
         * Creates a CreateRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.CreateRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.CreateRoleRequest} CreateRoleRequest
         */
        CreateRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.CreateRoleRequest)
                return object;
            var message = new $root.user.CreateRoleRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.career != null)
                message.career = object.career | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.CreateRoleRequest
         * @static
         * @param {user.CreateRoleRequest} message CreateRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoleRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.sex = 0;
                object.career = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.career != null && message.hasOwnProperty("career"))
                object.career = message.career;
            return object;
        };

        /**
         * Converts this CreateRoleRequest to JSON.
         * @function toJSON
         * @memberof user.CreateRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoleRequest;
    })();

    user.RandomRoleNameResponse = (function() {

        /**
         * Properties of a RandomRoleNameResponse.
         * @memberof user
         * @interface IRandomRoleNameResponse
         * @property {string|null} [name] RandomRoleNameResponse name
         */

        /**
         * Constructs a new RandomRoleNameResponse.
         * @memberof user
         * @classdesc Represents a RandomRoleNameResponse.
         * @implements IRandomRoleNameResponse
         * @constructor
         * @param {user.IRandomRoleNameResponse=} [properties] Properties to set
         */
        function RandomRoleNameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RandomRoleNameResponse name.
         * @member {string} name
         * @memberof user.RandomRoleNameResponse
         * @instance
         */
        RandomRoleNameResponse.prototype.name = "";

        /**
         * Creates a new RandomRoleNameResponse instance using the specified properties.
         * @function create
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {user.IRandomRoleNameResponse=} [properties] Properties to set
         * @returns {user.RandomRoleNameResponse} RandomRoleNameResponse instance
         */
        RandomRoleNameResponse.create = function create(properties) {
            return new RandomRoleNameResponse(properties);
        };

        /**
         * Encodes the specified RandomRoleNameResponse message. Does not implicitly {@link user.RandomRoleNameResponse.verify|verify} messages.
         * @function encode
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {user.IRandomRoleNameResponse} message RandomRoleNameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RandomRoleNameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified RandomRoleNameResponse message, length delimited. Does not implicitly {@link user.RandomRoleNameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {user.IRandomRoleNameResponse} message RandomRoleNameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RandomRoleNameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RandomRoleNameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RandomRoleNameResponse} RandomRoleNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RandomRoleNameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RandomRoleNameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RandomRoleNameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RandomRoleNameResponse} RandomRoleNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RandomRoleNameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RandomRoleNameResponse message.
         * @function verify
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RandomRoleNameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a RandomRoleNameResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RandomRoleNameResponse} RandomRoleNameResponse
         */
        RandomRoleNameResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RandomRoleNameResponse)
                return object;
            var message = new $root.user.RandomRoleNameResponse();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a RandomRoleNameResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RandomRoleNameResponse
         * @static
         * @param {user.RandomRoleNameResponse} message RandomRoleNameResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RandomRoleNameResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this RandomRoleNameResponse to JSON.
         * @function toJSON
         * @memberof user.RandomRoleNameResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RandomRoleNameResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RandomRoleNameResponse;
    })();

    user.RandomRoleNameRequest = (function() {

        /**
         * Properties of a RandomRoleNameRequest.
         * @memberof user
         * @interface IRandomRoleNameRequest
         * @property {number|null} [sex] RandomRoleNameRequest sex
         */

        /**
         * Constructs a new RandomRoleNameRequest.
         * @memberof user
         * @classdesc Represents a RandomRoleNameRequest.
         * @implements IRandomRoleNameRequest
         * @constructor
         * @param {user.IRandomRoleNameRequest=} [properties] Properties to set
         */
        function RandomRoleNameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RandomRoleNameRequest sex.
         * @member {number} sex
         * @memberof user.RandomRoleNameRequest
         * @instance
         */
        RandomRoleNameRequest.prototype.sex = 0;

        /**
         * Creates a new RandomRoleNameRequest instance using the specified properties.
         * @function create
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {user.IRandomRoleNameRequest=} [properties] Properties to set
         * @returns {user.RandomRoleNameRequest} RandomRoleNameRequest instance
         */
        RandomRoleNameRequest.create = function create(properties) {
            return new RandomRoleNameRequest(properties);
        };

        /**
         * Encodes the specified RandomRoleNameRequest message. Does not implicitly {@link user.RandomRoleNameRequest.verify|verify} messages.
         * @function encode
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {user.IRandomRoleNameRequest} message RandomRoleNameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RandomRoleNameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sex);
            return writer;
        };

        /**
         * Encodes the specified RandomRoleNameRequest message, length delimited. Does not implicitly {@link user.RandomRoleNameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {user.IRandomRoleNameRequest} message RandomRoleNameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RandomRoleNameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RandomRoleNameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RandomRoleNameRequest} RandomRoleNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RandomRoleNameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RandomRoleNameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RandomRoleNameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RandomRoleNameRequest} RandomRoleNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RandomRoleNameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RandomRoleNameRequest message.
         * @function verify
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RandomRoleNameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            return null;
        };

        /**
         * Creates a RandomRoleNameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RandomRoleNameRequest} RandomRoleNameRequest
         */
        RandomRoleNameRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RandomRoleNameRequest)
                return object;
            var message = new $root.user.RandomRoleNameRequest();
            if (object.sex != null)
                message.sex = object.sex | 0;
            return message;
        };

        /**
         * Creates a plain object from a RandomRoleNameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RandomRoleNameRequest
         * @static
         * @param {user.RandomRoleNameRequest} message RandomRoleNameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RandomRoleNameRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.sex = 0;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            return object;
        };

        /**
         * Converts this RandomRoleNameRequest to JSON.
         * @function toJSON
         * @memberof user.RandomRoleNameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RandomRoleNameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RandomRoleNameRequest;
    })();

    user.RoleIdMsg = (function() {

        /**
         * Properties of a RoleIdMsg.
         * @memberof user
         * @interface IRoleIdMsg
         * @property {number|Long|null} [roleId] RoleIdMsg roleId
         */

        /**
         * Constructs a new RoleIdMsg.
         * @memberof user
         * @classdesc Represents a RoleIdMsg.
         * @implements IRoleIdMsg
         * @constructor
         * @param {user.IRoleIdMsg=} [properties] Properties to set
         */
        function RoleIdMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleIdMsg roleId.
         * @member {number|Long} roleId
         * @memberof user.RoleIdMsg
         * @instance
         */
        RoleIdMsg.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoleIdMsg instance using the specified properties.
         * @function create
         * @memberof user.RoleIdMsg
         * @static
         * @param {user.IRoleIdMsg=} [properties] Properties to set
         * @returns {user.RoleIdMsg} RoleIdMsg instance
         */
        RoleIdMsg.create = function create(properties) {
            return new RoleIdMsg(properties);
        };

        /**
         * Encodes the specified RoleIdMsg message. Does not implicitly {@link user.RoleIdMsg.verify|verify} messages.
         * @function encode
         * @memberof user.RoleIdMsg
         * @static
         * @param {user.IRoleIdMsg} message RoleIdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleIdMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roleId);
            return writer;
        };

        /**
         * Encodes the specified RoleIdMsg message, length delimited. Does not implicitly {@link user.RoleIdMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RoleIdMsg
         * @static
         * @param {user.IRoleIdMsg} message RoleIdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleIdMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleIdMsg message from the specified reader or buffer.
         * @function decode
         * @memberof user.RoleIdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RoleIdMsg} RoleIdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleIdMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RoleIdMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleIdMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RoleIdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RoleIdMsg} RoleIdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleIdMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleIdMsg message.
         * @function verify
         * @memberof user.RoleIdMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleIdMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoleIdMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RoleIdMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RoleIdMsg} RoleIdMsg
         */
        RoleIdMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RoleIdMsg)
                return object;
            var message = new $root.user.RoleIdMsg();
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
         * Creates a plain object from a RoleIdMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RoleIdMsg
         * @static
         * @param {user.RoleIdMsg} message RoleIdMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleIdMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            return object;
        };

        /**
         * Converts this RoleIdMsg to JSON.
         * @function toJSON
         * @memberof user.RoleIdMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleIdMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleIdMsg;
    })();

    user.GMCommand = (function() {

        /**
         * Properties of a GMCommand.
         * @memberof user
         * @interface IGMCommand
         * @property {string|null} [command] GMCommand command
         */

        /**
         * Constructs a new GMCommand.
         * @memberof user
         * @classdesc Represents a GMCommand.
         * @implements IGMCommand
         * @constructor
         * @param {user.IGMCommand=} [properties] Properties to set
         */
        function GMCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GMCommand command.
         * @member {string} command
         * @memberof user.GMCommand
         * @instance
         */
        GMCommand.prototype.command = "";

        /**
         * Creates a new GMCommand instance using the specified properties.
         * @function create
         * @memberof user.GMCommand
         * @static
         * @param {user.IGMCommand=} [properties] Properties to set
         * @returns {user.GMCommand} GMCommand instance
         */
        GMCommand.create = function create(properties) {
            return new GMCommand(properties);
        };

        /**
         * Encodes the specified GMCommand message. Does not implicitly {@link user.GMCommand.verify|verify} messages.
         * @function encode
         * @memberof user.GMCommand
         * @static
         * @param {user.IGMCommand} message GMCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            return writer;
        };

        /**
         * Encodes the specified GMCommand message, length delimited. Does not implicitly {@link user.GMCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.GMCommand
         * @static
         * @param {user.IGMCommand} message GMCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GMCommand message from the specified reader or buffer.
         * @function decode
         * @memberof user.GMCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.GMCommand} GMCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.GMCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GMCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.GMCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.GMCommand} GMCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GMCommand message.
         * @function verify
         * @memberof user.GMCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GMCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            return null;
        };

        /**
         * Creates a GMCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GMCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GMCommand} GMCommand
         */
        GMCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GMCommand)
                return object;
            var message = new $root.user.GMCommand();
            if (object.command != null)
                message.command = String(object.command);
            return message;
        };

        /**
         * Creates a plain object from a GMCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GMCommand
         * @static
         * @param {user.GMCommand} message GMCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GMCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.command = "";
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            return object;
        };

        /**
         * Converts this GMCommand to JSON.
         * @function toJSON
         * @memberof user.GMCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GMCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GMCommand;
    })();

    user.CloseServerResponse = (function() {

        /**
         * Properties of a CloseServerResponse.
         * @memberof user
         * @interface ICloseServerResponse
         * @property {number|null} [code] CloseServerResponse code
         * @property {string|null} [msg] CloseServerResponse msg
         */

        /**
         * Constructs a new CloseServerResponse.
         * @memberof user
         * @classdesc Represents a CloseServerResponse.
         * @implements ICloseServerResponse
         * @constructor
         * @param {user.ICloseServerResponse=} [properties] Properties to set
         */
        function CloseServerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CloseServerResponse code.
         * @member {number} code
         * @memberof user.CloseServerResponse
         * @instance
         */
        CloseServerResponse.prototype.code = 0;

        /**
         * CloseServerResponse msg.
         * @member {string} msg
         * @memberof user.CloseServerResponse
         * @instance
         */
        CloseServerResponse.prototype.msg = "";

        /**
         * Creates a new CloseServerResponse instance using the specified properties.
         * @function create
         * @memberof user.CloseServerResponse
         * @static
         * @param {user.ICloseServerResponse=} [properties] Properties to set
         * @returns {user.CloseServerResponse} CloseServerResponse instance
         */
        CloseServerResponse.create = function create(properties) {
            return new CloseServerResponse(properties);
        };

        /**
         * Encodes the specified CloseServerResponse message. Does not implicitly {@link user.CloseServerResponse.verify|verify} messages.
         * @function encode
         * @memberof user.CloseServerResponse
         * @static
         * @param {user.ICloseServerResponse} message CloseServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseServerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified CloseServerResponse message, length delimited. Does not implicitly {@link user.CloseServerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.CloseServerResponse
         * @static
         * @param {user.ICloseServerResponse} message CloseServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CloseServerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.CloseServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.CloseServerResponse} CloseServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseServerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.CloseServerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
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
         * Decodes a CloseServerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.CloseServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.CloseServerResponse} CloseServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseServerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CloseServerResponse message.
         * @function verify
         * @memberof user.CloseServerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CloseServerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a CloseServerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.CloseServerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.CloseServerResponse} CloseServerResponse
         */
        CloseServerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.CloseServerResponse)
                return object;
            var message = new $root.user.CloseServerResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a CloseServerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.CloseServerResponse
         * @static
         * @param {user.CloseServerResponse} message CloseServerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CloseServerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this CloseServerResponse to JSON.
         * @function toJSON
         * @memberof user.CloseServerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CloseServerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CloseServerResponse;
    })();

    user.ReconnectRequest = (function() {

        /**
         * Properties of a ReconnectRequest.
         * @memberof user
         * @interface IReconnectRequest
         * @property {string|null} [loginName] ReconnectRequest loginName
         * @property {number|null} [serverId] ReconnectRequest serverId
         * @property {number|null} [platformId] ReconnectRequest platformId
         * @property {number|Long|null} [roleId] ReconnectRequest roleId
         * @property {string|null} [sign] ReconnectRequest sign
         * @property {number|Long|null} [time] ReconnectRequest time
         * @property {boolean|null} [changeLine] ReconnectRequest changeLine
         */

        /**
         * Constructs a new ReconnectRequest.
         * @memberof user
         * @classdesc Represents a ReconnectRequest.
         * @implements IReconnectRequest
         * @constructor
         * @param {user.IReconnectRequest=} [properties] Properties to set
         */
        function ReconnectRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnectRequest loginName.
         * @member {string} loginName
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.loginName = "";

        /**
         * ReconnectRequest serverId.
         * @member {number} serverId
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.serverId = 0;

        /**
         * ReconnectRequest platformId.
         * @member {number} platformId
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.platformId = 0;

        /**
         * ReconnectRequest roleId.
         * @member {number|Long} roleId
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReconnectRequest sign.
         * @member {string} sign
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.sign = "";

        /**
         * ReconnectRequest time.
         * @member {number|Long} time
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReconnectRequest changeLine.
         * @member {boolean} changeLine
         * @memberof user.ReconnectRequest
         * @instance
         */
        ReconnectRequest.prototype.changeLine = false;

        /**
         * Creates a new ReconnectRequest instance using the specified properties.
         * @function create
         * @memberof user.ReconnectRequest
         * @static
         * @param {user.IReconnectRequest=} [properties] Properties to set
         * @returns {user.ReconnectRequest} ReconnectRequest instance
         */
        ReconnectRequest.create = function create(properties) {
            return new ReconnectRequest(properties);
        };

        /**
         * Encodes the specified ReconnectRequest message. Does not implicitly {@link user.ReconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof user.ReconnectRequest
         * @static
         * @param {user.IReconnectRequest} message ReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginName != null && Object.hasOwnProperty.call(message, "loginName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.loginName);
            if (message.serverId != null && Object.hasOwnProperty.call(message, "serverId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
            if (message.platformId != null && Object.hasOwnProperty.call(message, "platformId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platformId);
            if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.roleId);
            if (message.sign != null && Object.hasOwnProperty.call(message, "sign"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.time);
            if (message.changeLine != null && Object.hasOwnProperty.call(message, "changeLine"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.changeLine);
            return writer;
        };

        /**
         * Encodes the specified ReconnectRequest message, length delimited. Does not implicitly {@link user.ReconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.ReconnectRequest
         * @static
         * @param {user.IReconnectRequest} message ReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.ReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.ReconnectRequest} ReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.ReconnectRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginName = reader.string();
                    break;
                case 2:
                    message.serverId = reader.int32();
                    break;
                case 3:
                    message.platformId = reader.int32();
                    break;
                case 4:
                    message.roleId = reader.int64();
                    break;
                case 5:
                    message.sign = reader.string();
                    break;
                case 6:
                    message.time = reader.int64();
                    break;
                case 7:
                    message.changeLine = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReconnectRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.ReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.ReconnectRequest} ReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnectRequest message.
         * @function verify
         * @memberof user.ReconnectRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnectRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginName != null && message.hasOwnProperty("loginName"))
                if (!$util.isString(message.loginName))
                    return "loginName: string expected";
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                if (!$util.isInteger(message.serverId))
                    return "serverId: integer expected";
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                if (!$util.isInteger(message.platformId))
                    return "platformId: integer expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.changeLine != null && message.hasOwnProperty("changeLine"))
                if (typeof message.changeLine !== "boolean")
                    return "changeLine: boolean expected";
            return null;
        };

        /**
         * Creates a ReconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.ReconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.ReconnectRequest} ReconnectRequest
         */
        ReconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.ReconnectRequest)
                return object;
            var message = new $root.user.ReconnectRequest();
            if (object.loginName != null)
                message.loginName = String(object.loginName);
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.platformId != null)
                message.platformId = object.platformId | 0;
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.sign != null)
                message.sign = String(object.sign);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.changeLine != null)
                message.changeLine = Boolean(object.changeLine);
            return message;
        };

        /**
         * Creates a plain object from a ReconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.ReconnectRequest
         * @static
         * @param {user.ReconnectRequest} message ReconnectRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReconnectRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.loginName = "";
                object.serverId = 0;
                object.platformId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.sign = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.changeLine = false;
            }
            if (message.loginName != null && message.hasOwnProperty("loginName"))
                object.loginName = message.loginName;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                object.platformId = message.platformId;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.changeLine != null && message.hasOwnProperty("changeLine"))
                object.changeLine = message.changeLine;
            return object;
        };

        /**
         * Converts this ReconnectRequest to JSON.
         * @function toJSON
         * @memberof user.ReconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReconnectRequest;
    })();

    /**
     * GoingDownReason enum.
     * @name user.GoingDownReason
     * @enum {number}
     * @property {number} Maintain=0 Maintain value
     * @property {number} Block=1 Block value
     * @property {number} AnotherSession=2 AnotherSession value
     */
    user.GoingDownReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Maintain"] = 0;
        values[valuesById[1] = "Block"] = 1;
        values[valuesById[2] = "AnotherSession"] = 2;
        return values;
    })();

    user.DisconnectResponse = (function() {

        /**
         * Properties of a DisconnectResponse.
         * @memberof user
         * @interface IDisconnectResponse
         * @property {user.GoingDownReason|null} [reason] DisconnectResponse reason
         */

        /**
         * Constructs a new DisconnectResponse.
         * @memberof user
         * @classdesc Represents a DisconnectResponse.
         * @implements IDisconnectResponse
         * @constructor
         * @param {user.IDisconnectResponse=} [properties] Properties to set
         */
        function DisconnectResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisconnectResponse reason.
         * @member {user.GoingDownReason} reason
         * @memberof user.DisconnectResponse
         * @instance
         */
        DisconnectResponse.prototype.reason = 0;

        /**
         * Creates a new DisconnectResponse instance using the specified properties.
         * @function create
         * @memberof user.DisconnectResponse
         * @static
         * @param {user.IDisconnectResponse=} [properties] Properties to set
         * @returns {user.DisconnectResponse} DisconnectResponse instance
         */
        DisconnectResponse.create = function create(properties) {
            return new DisconnectResponse(properties);
        };

        /**
         * Encodes the specified DisconnectResponse message. Does not implicitly {@link user.DisconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof user.DisconnectResponse
         * @static
         * @param {user.IDisconnectResponse} message DisconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified DisconnectResponse message, length delimited. Does not implicitly {@link user.DisconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.DisconnectResponse
         * @static
         * @param {user.IDisconnectResponse} message DisconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof user.DisconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.DisconnectResponse} DisconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.DisconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisconnectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.DisconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.DisconnectResponse} DisconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisconnectResponse message.
         * @function verify
         * @memberof user.DisconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                switch (message.reason) {
                default:
                    return "reason: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a DisconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.DisconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.DisconnectResponse} DisconnectResponse
         */
        DisconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.user.DisconnectResponse)
                return object;
            var message = new $root.user.DisconnectResponse();
            switch (object.reason) {
            case "Maintain":
            case 0:
                message.reason = 0;
                break;
            case "Block":
            case 1:
                message.reason = 1;
                break;
            case "AnotherSession":
            case 2:
                message.reason = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a DisconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.DisconnectResponse
         * @static
         * @param {user.DisconnectResponse} message DisconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = options.enums === String ? "Maintain" : 0;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = options.enums === String ? $root.user.GoingDownReason[message.reason] : message.reason;
            return object;
        };

        /**
         * Converts this DisconnectResponse to JSON.
         * @function toJSON
         * @memberof user.DisconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DisconnectResponse;
    })();

    user.UserFeedbackRequest = (function() {

        /**
         * Properties of a UserFeedbackRequest.
         * @memberof user
         * @interface IUserFeedbackRequest
         * @property {string|null} [content] UserFeedbackRequest content
         * @property {string|null} [phoneType] UserFeedbackRequest phoneType
         * @property {string|null} [qq] UserFeedbackRequest qq
         */

        /**
         * Constructs a new UserFeedbackRequest.
         * @memberof user
         * @classdesc Represents a UserFeedbackRequest.
         * @implements IUserFeedbackRequest
         * @constructor
         * @param {user.IUserFeedbackRequest=} [properties] Properties to set
         */
        function UserFeedbackRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserFeedbackRequest content.
         * @member {string} content
         * @memberof user.UserFeedbackRequest
         * @instance
         */
        UserFeedbackRequest.prototype.content = "";

        /**
         * UserFeedbackRequest phoneType.
         * @member {string} phoneType
         * @memberof user.UserFeedbackRequest
         * @instance
         */
        UserFeedbackRequest.prototype.phoneType = "";

        /**
         * UserFeedbackRequest qq.
         * @member {string} qq
         * @memberof user.UserFeedbackRequest
         * @instance
         */
        UserFeedbackRequest.prototype.qq = "";

        /**
         * Creates a new UserFeedbackRequest instance using the specified properties.
         * @function create
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {user.IUserFeedbackRequest=} [properties] Properties to set
         * @returns {user.UserFeedbackRequest} UserFeedbackRequest instance
         */
        UserFeedbackRequest.create = function create(properties) {
            return new UserFeedbackRequest(properties);
        };

        /**
         * Encodes the specified UserFeedbackRequest message. Does not implicitly {@link user.UserFeedbackRequest.verify|verify} messages.
         * @function encode
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {user.IUserFeedbackRequest} message UserFeedbackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserFeedbackRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.phoneType != null && Object.hasOwnProperty.call(message, "phoneType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneType);
            if (message.qq != null && Object.hasOwnProperty.call(message, "qq"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.qq);
            return writer;
        };

        /**
         * Encodes the specified UserFeedbackRequest message, length delimited. Does not implicitly {@link user.UserFeedbackRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {user.IUserFeedbackRequest} message UserFeedbackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserFeedbackRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserFeedbackRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.UserFeedbackRequest} UserFeedbackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserFeedbackRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.UserFeedbackRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.phoneType = reader.string();
                    break;
                case 3:
                    message.qq = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserFeedbackRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.UserFeedbackRequest} UserFeedbackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserFeedbackRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserFeedbackRequest message.
         * @function verify
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserFeedbackRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.phoneType != null && message.hasOwnProperty("phoneType"))
                if (!$util.isString(message.phoneType))
                    return "phoneType: string expected";
            if (message.qq != null && message.hasOwnProperty("qq"))
                if (!$util.isString(message.qq))
                    return "qq: string expected";
            return null;
        };

        /**
         * Creates a UserFeedbackRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.UserFeedbackRequest} UserFeedbackRequest
         */
        UserFeedbackRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.UserFeedbackRequest)
                return object;
            var message = new $root.user.UserFeedbackRequest();
            if (object.content != null)
                message.content = String(object.content);
            if (object.phoneType != null)
                message.phoneType = String(object.phoneType);
            if (object.qq != null)
                message.qq = String(object.qq);
            return message;
        };

        /**
         * Creates a plain object from a UserFeedbackRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.UserFeedbackRequest
         * @static
         * @param {user.UserFeedbackRequest} message UserFeedbackRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserFeedbackRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.phoneType = "";
                object.qq = "";
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.phoneType != null && message.hasOwnProperty("phoneType"))
                object.phoneType = message.phoneType;
            if (message.qq != null && message.hasOwnProperty("qq"))
                object.qq = message.qq;
            return object;
        };

        /**
         * Converts this UserFeedbackRequest to JSON.
         * @function toJSON
         * @memberof user.UserFeedbackRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserFeedbackRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserFeedbackRequest;
    })();

    user.BindPhoneNumberRequest = (function() {

        /**
         * Properties of a BindPhoneNumberRequest.
         * @memberof user
         * @interface IBindPhoneNumberRequest
         * @property {string|null} [phoneNumber] BindPhoneNumberRequest phoneNumber
         */

        /**
         * Constructs a new BindPhoneNumberRequest.
         * @memberof user
         * @classdesc Represents a BindPhoneNumberRequest.
         * @implements IBindPhoneNumberRequest
         * @constructor
         * @param {user.IBindPhoneNumberRequest=} [properties] Properties to set
         */
        function BindPhoneNumberRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BindPhoneNumberRequest phoneNumber.
         * @member {string} phoneNumber
         * @memberof user.BindPhoneNumberRequest
         * @instance
         */
        BindPhoneNumberRequest.prototype.phoneNumber = "";

        /**
         * Creates a new BindPhoneNumberRequest instance using the specified properties.
         * @function create
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {user.IBindPhoneNumberRequest=} [properties] Properties to set
         * @returns {user.BindPhoneNumberRequest} BindPhoneNumberRequest instance
         */
        BindPhoneNumberRequest.create = function create(properties) {
            return new BindPhoneNumberRequest(properties);
        };

        /**
         * Encodes the specified BindPhoneNumberRequest message. Does not implicitly {@link user.BindPhoneNumberRequest.verify|verify} messages.
         * @function encode
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {user.IBindPhoneNumberRequest} message BindPhoneNumberRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindPhoneNumberRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
            return writer;
        };

        /**
         * Encodes the specified BindPhoneNumberRequest message, length delimited. Does not implicitly {@link user.BindPhoneNumberRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {user.IBindPhoneNumberRequest} message BindPhoneNumberRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindPhoneNumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BindPhoneNumberRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.BindPhoneNumberRequest} BindPhoneNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindPhoneNumberRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.BindPhoneNumberRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BindPhoneNumberRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.BindPhoneNumberRequest} BindPhoneNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindPhoneNumberRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BindPhoneNumberRequest message.
         * @function verify
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BindPhoneNumberRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            return null;
        };

        /**
         * Creates a BindPhoneNumberRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.BindPhoneNumberRequest} BindPhoneNumberRequest
         */
        BindPhoneNumberRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.BindPhoneNumberRequest)
                return object;
            var message = new $root.user.BindPhoneNumberRequest();
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            return message;
        };

        /**
         * Creates a plain object from a BindPhoneNumberRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.BindPhoneNumberRequest
         * @static
         * @param {user.BindPhoneNumberRequest} message BindPhoneNumberRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BindPhoneNumberRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.phoneNumber = "";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            return object;
        };

        /**
         * Converts this BindPhoneNumberRequest to JSON.
         * @function toJSON
         * @memberof user.BindPhoneNumberRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BindPhoneNumberRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BindPhoneNumberRequest;
    })();

    user.RechargeRequest = (function() {

        /**
         * Properties of a RechargeRequest.
         * @memberof user
         * @interface IRechargeRequest
         * @property {string|null} [rechargeId] RechargeRequest rechargeId
         */

        /**
         * Constructs a new RechargeRequest.
         * @memberof user
         * @classdesc Represents a RechargeRequest.
         * @implements IRechargeRequest
         * @constructor
         * @param {user.IRechargeRequest=} [properties] Properties to set
         */
        function RechargeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RechargeRequest rechargeId.
         * @member {string} rechargeId
         * @memberof user.RechargeRequest
         * @instance
         */
        RechargeRequest.prototype.rechargeId = "";

        /**
         * Creates a new RechargeRequest instance using the specified properties.
         * @function create
         * @memberof user.RechargeRequest
         * @static
         * @param {user.IRechargeRequest=} [properties] Properties to set
         * @returns {user.RechargeRequest} RechargeRequest instance
         */
        RechargeRequest.create = function create(properties) {
            return new RechargeRequest(properties);
        };

        /**
         * Encodes the specified RechargeRequest message. Does not implicitly {@link user.RechargeRequest.verify|verify} messages.
         * @function encode
         * @memberof user.RechargeRequest
         * @static
         * @param {user.IRechargeRequest} message RechargeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RechargeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rechargeId != null && Object.hasOwnProperty.call(message, "rechargeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.rechargeId);
            return writer;
        };

        /**
         * Encodes the specified RechargeRequest message, length delimited. Does not implicitly {@link user.RechargeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.RechargeRequest
         * @static
         * @param {user.IRechargeRequest} message RechargeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RechargeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RechargeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.RechargeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.RechargeRequest} RechargeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RechargeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.RechargeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rechargeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RechargeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.RechargeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.RechargeRequest} RechargeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RechargeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RechargeRequest message.
         * @function verify
         * @memberof user.RechargeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RechargeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rechargeId != null && message.hasOwnProperty("rechargeId"))
                if (!$util.isString(message.rechargeId))
                    return "rechargeId: string expected";
            return null;
        };

        /**
         * Creates a RechargeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.RechargeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.RechargeRequest} RechargeRequest
         */
        RechargeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.RechargeRequest)
                return object;
            var message = new $root.user.RechargeRequest();
            if (object.rechargeId != null)
                message.rechargeId = String(object.rechargeId);
            return message;
        };

        /**
         * Creates a plain object from a RechargeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.RechargeRequest
         * @static
         * @param {user.RechargeRequest} message RechargeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RechargeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.rechargeId = "";
            if (message.rechargeId != null && message.hasOwnProperty("rechargeId"))
                object.rechargeId = message.rechargeId;
            return object;
        };

        /**
         * Converts this RechargeRequest to JSON.
         * @function toJSON
         * @memberof user.RechargeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RechargeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RechargeRequest;
    })();

    return user;
})();

module.exports = $root;
