/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * GMMsgId enum.
 * @exports GMMsgId
 * @enum {number}
 * @property {number} GmUnknown=0 GmUnknown value
 * @property {number} CloseServerRequest=201001 CloseServerRequest value
 * @property {number} CloseServerResponse=201002 CloseServerResponse value
 */
$root.GMMsgId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GmUnknown"] = 0;
    values[valuesById[201001] = "CloseServerRequest"] = 201001;
    values[valuesById[201002] = "CloseServerResponse"] = 201002;
    return values;
})();

/**
 * UserMsgId enum.
 * @exports UserMsgId
 * @enum {number}
 * @property {number} UserUnknown=0 UserUnknown value
 * @property {number} LoginRequest=101001 LoginRequest value
 * @property {number} LoginResponse=101002 LoginResponse value
 */
$root.UserMsgId = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UserUnknown"] = 0;
    values[valuesById[101001] = "LoginRequest"] = 101001;
    values[valuesById[101002] = "LoginResponse"] = 101002;
    return values;
})();

module.exports = $root;
