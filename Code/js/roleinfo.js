// source: user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.user.RoleInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.RoleInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.RoleInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.RoleInfo.displayName = 'proto.user.RoleInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.user.RoleInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.user.RoleInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.RoleInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.RoleInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sex: jspb.Message.getFieldWithDefault(msg, 4, 0),
    mapid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    line: jspb.Message.getFieldWithDefault(msg, 6, 0),
    curservertype: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.RoleInfo}
 */
proto.user.RoleInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.RoleInfo;
  return proto.user.RoleInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.RoleInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.RoleInfo}
 */
proto.user.RoleInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMapid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLine(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurservertype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.RoleInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.RoleInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.RoleInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.RoleInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSex();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMapid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCurservertype();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int64 roleId = 1;
 * @return {number}
 */
proto.user.RoleInfo.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string roleName = 2;
 * @return {string}
 */
proto.user.RoleInfo.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 level = 3;
 * @return {number}
 */
proto.user.RoleInfo.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 sex = 4;
 * @return {number}
 */
proto.user.RoleInfo.prototype.getSex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setSex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 mapId = 5;
 * @return {number}
 */
proto.user.RoleInfo.prototype.getMapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setMapid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 line = 6;
 * @return {number}
 */
proto.user.RoleInfo.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 curServerType = 7;
 * @return {number}
 */
proto.user.RoleInfo.prototype.getCurservertype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.RoleInfo} returns this
 */
proto.user.RoleInfo.prototype.setCurservertype = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

