/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
