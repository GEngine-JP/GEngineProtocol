import * as $protobuf from "protobufjs";
/** Namespace user. */
export namespace user {

    /** Properties of a RoleInfo. */
    interface IRoleInfo {

        /** RoleInfo roleId */
        roleId?: (number|Long|null);

        /** RoleInfo roleName */
        roleName?: (string|null);

        /** RoleInfo level */
        level?: (number|null);

        /** RoleInfo sex */
        sex?: (number|null);

        /** RoleInfo mapId */
        mapId?: (number|null);

        /** RoleInfo line */
        line?: (number|null);

        /** RoleInfo curServerType */
        curServerType?: (number|null);
    }

    /** Represents a RoleInfo. */
    class RoleInfo implements IRoleInfo {

        /**
         * Constructs a new RoleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRoleInfo);

        /** RoleInfo roleId. */
        public roleId: (number|Long);

        /** RoleInfo roleName. */
        public roleName: string;

        /** RoleInfo level. */
        public level: number;

        /** RoleInfo sex. */
        public sex: number;

        /** RoleInfo mapId. */
        public mapId: number;

        /** RoleInfo line. */
        public line: number;

        /** RoleInfo curServerType. */
        public curServerType: number;

        /**
         * Creates a new RoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleInfo instance
         */
        public static create(properties?: user.IRoleInfo): user.RoleInfo;

        /**
         * Encodes the specified RoleInfo message. Does not implicitly {@link user.RoleInfo.verify|verify} messages.
         * @param message RoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleInfo message, length delimited. Does not implicitly {@link user.RoleInfo.verify|verify} messages.
         * @param message RoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RoleInfo;

        /**
         * Decodes a RoleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RoleInfo;

        /**
         * Verifies a RoleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleInfo
         */
        public static fromObject(object: { [k: string]: any }): user.RoleInfo;

        /**
         * Creates a plain object from a RoleInfo message. Also converts values to other types if specified.
         * @param message RoleInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RoleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerAttribute. */
    interface IPlayerAttribute {

        /** PlayerAttribute phyAttMax */
        phyAttMax?: (number|null);

        /** PlayerAttribute phyAttMin */
        phyAttMin?: (number|null);

        /** PlayerAttribute magicAttMax */
        magicAttMax?: (number|null);

        /** PlayerAttribute magicAttMin */
        magicAttMin?: (number|null);

        /** PlayerAttribute taoAttMax */
        taoAttMax?: (number|null);

        /** PlayerAttribute taoAttMin */
        taoAttMin?: (number|null);

        /** PlayerAttribute phyDefMax */
        phyDefMax?: (number|null);

        /** PlayerAttribute phyDefMin */
        phyDefMin?: (number|null);

        /** PlayerAttribute magicDefMax */
        magicDefMax?: (number|null);

        /** PlayerAttribute magicDefMin */
        magicDefMin?: (number|null);

        /** PlayerAttribute accurate */
        accurate?: (number|null);

        /** PlayerAttribute dodge */
        dodge?: (number|null);

        /** PlayerAttribute poisonRecover */
        poisonRecover?: (number|null);

        /** PlayerAttribute heathRecover */
        heathRecover?: (number|null);

        /** PlayerAttribute attackSpeed */
        attackSpeed?: (number|null);

        /** PlayerAttribute maxHp */
        maxHp?: (number|null);

        /** PlayerAttribute maxMp */
        maxMp?: (number|null);

        /** PlayerAttribute magicRecover */
        magicRecover?: (number|null);

        /** PlayerAttribute luck */
        luck?: (number|null);

        /** PlayerAttribute critical */
        critical?: (number|null);

        /** PlayerAttribute nbValue */
        nbValue?: (number|null);

        /** PlayerAttribute criticalDamage */
        criticalDamage?: (number|null);

        /** PlayerAttribute maxInnerPower */
        maxInnerPower?: (number|null);

        /** PlayerAttribute resistance */
        resistance?: (number|null);

        /** PlayerAttribute holyAtt */
        holyAtt?: (number|null);

        /** PlayerAttribute pkAtk */
        pkAtk?: (number|null);

        /** PlayerAttribute pkDef */
        pkDef?: (number|null);
    }

    /** Represents a PlayerAttribute. */
    class PlayerAttribute implements IPlayerAttribute {

        /**
         * Constructs a new PlayerAttribute.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IPlayerAttribute);

        /** PlayerAttribute phyAttMax. */
        public phyAttMax: number;

        /** PlayerAttribute phyAttMin. */
        public phyAttMin: number;

        /** PlayerAttribute magicAttMax. */
        public magicAttMax: number;

        /** PlayerAttribute magicAttMin. */
        public magicAttMin: number;

        /** PlayerAttribute taoAttMax. */
        public taoAttMax: number;

        /** PlayerAttribute taoAttMin. */
        public taoAttMin: number;

        /** PlayerAttribute phyDefMax. */
        public phyDefMax: number;

        /** PlayerAttribute phyDefMin. */
        public phyDefMin: number;

        /** PlayerAttribute magicDefMax. */
        public magicDefMax: number;

        /** PlayerAttribute magicDefMin. */
        public magicDefMin: number;

        /** PlayerAttribute accurate. */
        public accurate: number;

        /** PlayerAttribute dodge. */
        public dodge: number;

        /** PlayerAttribute poisonRecover. */
        public poisonRecover: number;

        /** PlayerAttribute heathRecover. */
        public heathRecover: number;

        /** PlayerAttribute attackSpeed. */
        public attackSpeed: number;

        /** PlayerAttribute maxHp. */
        public maxHp: number;

        /** PlayerAttribute maxMp. */
        public maxMp: number;

        /** PlayerAttribute magicRecover. */
        public magicRecover: number;

        /** PlayerAttribute luck. */
        public luck: number;

        /** PlayerAttribute critical. */
        public critical: number;

        /** PlayerAttribute nbValue. */
        public nbValue: number;

        /** PlayerAttribute criticalDamage. */
        public criticalDamage: number;

        /** PlayerAttribute maxInnerPower. */
        public maxInnerPower: number;

        /** PlayerAttribute resistance. */
        public resistance: number;

        /** PlayerAttribute holyAtt. */
        public holyAtt: number;

        /** PlayerAttribute pkAtk. */
        public pkAtk: number;

        /** PlayerAttribute pkDef. */
        public pkDef: number;

        /**
         * Creates a new PlayerAttribute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerAttribute instance
         */
        public static create(properties?: user.IPlayerAttribute): user.PlayerAttribute;

        /**
         * Encodes the specified PlayerAttribute message. Does not implicitly {@link user.PlayerAttribute.verify|verify} messages.
         * @param message PlayerAttribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IPlayerAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerAttribute message, length delimited. Does not implicitly {@link user.PlayerAttribute.verify|verify} messages.
         * @param message PlayerAttribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IPlayerAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerAttribute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.PlayerAttribute;

        /**
         * Decodes a PlayerAttribute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.PlayerAttribute;

        /**
         * Verifies a PlayerAttribute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerAttribute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerAttribute
         */
        public static fromObject(object: { [k: string]: any }): user.PlayerAttribute;

        /**
         * Creates a plain object from a PlayerAttribute message. Also converts values to other types if specified.
         * @param message PlayerAttribute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.PlayerAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerAttribute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest loginName */
        loginName?: (string|null);

        /** LoginRequest platformId */
        platformId?: (number|null);

        /** LoginRequest serverId */
        serverId?: (number|null);

        /** LoginRequest sign */
        sign?: (string|null);

        /** LoginRequest time */
        time?: (number|Long|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest loginName. */
        public loginName: string;

        /** LoginRequest platformId. */
        public platformId: number;

        /** LoginRequest serverId. */
        public serverId: number;

        /** LoginRequest sign. */
        public sign: string;

        /** LoginRequest time. */
        public time: (number|Long);

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: user.ILoginRequest): user.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse roleList */
        roleList?: (user.IRoleInfo[]|null);

        /** LoginResponse userId */
        userId?: (number|Long|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponse);

        /** LoginResponse roleList. */
        public roleList: user.IRoleInfo[];

        /** LoginResponse userId. */
        public userId: (number|Long);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: user.ILoginResponse): user.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoleRequest. */
    interface ICreateRoleRequest {

        /** CreateRoleRequest name */
        name?: (string|null);

        /** CreateRoleRequest sex */
        sex?: (number|null);

        /** CreateRoleRequest career */
        career?: (number|null);
    }

    /** Represents a CreateRoleRequest. */
    class CreateRoleRequest implements ICreateRoleRequest {

        /**
         * Constructs a new CreateRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ICreateRoleRequest);

        /** CreateRoleRequest name. */
        public name: string;

        /** CreateRoleRequest sex. */
        public sex: number;

        /** CreateRoleRequest career. */
        public career: number;

        /**
         * Creates a new CreateRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoleRequest instance
         */
        public static create(properties?: user.ICreateRoleRequest): user.CreateRoleRequest;

        /**
         * Encodes the specified CreateRoleRequest message. Does not implicitly {@link user.CreateRoleRequest.verify|verify} messages.
         * @param message CreateRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ICreateRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoleRequest message, length delimited. Does not implicitly {@link user.CreateRoleRequest.verify|verify} messages.
         * @param message CreateRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ICreateRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.CreateRoleRequest;

        /**
         * Decodes a CreateRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.CreateRoleRequest;

        /**
         * Verifies a CreateRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoleRequest
         */
        public static fromObject(object: { [k: string]: any }): user.CreateRoleRequest;

        /**
         * Creates a plain object from a CreateRoleRequest message. Also converts values to other types if specified.
         * @param message CreateRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.CreateRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RandomRoleNameResponse. */
    interface IRandomRoleNameResponse {

        /** RandomRoleNameResponse name */
        name?: (string|null);
    }

    /** Represents a RandomRoleNameResponse. */
    class RandomRoleNameResponse implements IRandomRoleNameResponse {

        /**
         * Constructs a new RandomRoleNameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRandomRoleNameResponse);

        /** RandomRoleNameResponse name. */
        public name: string;

        /**
         * Creates a new RandomRoleNameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RandomRoleNameResponse instance
         */
        public static create(properties?: user.IRandomRoleNameResponse): user.RandomRoleNameResponse;

        /**
         * Encodes the specified RandomRoleNameResponse message. Does not implicitly {@link user.RandomRoleNameResponse.verify|verify} messages.
         * @param message RandomRoleNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRandomRoleNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RandomRoleNameResponse message, length delimited. Does not implicitly {@link user.RandomRoleNameResponse.verify|verify} messages.
         * @param message RandomRoleNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRandomRoleNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RandomRoleNameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RandomRoleNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RandomRoleNameResponse;

        /**
         * Decodes a RandomRoleNameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RandomRoleNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RandomRoleNameResponse;

        /**
         * Verifies a RandomRoleNameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RandomRoleNameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RandomRoleNameResponse
         */
        public static fromObject(object: { [k: string]: any }): user.RandomRoleNameResponse;

        /**
         * Creates a plain object from a RandomRoleNameResponse message. Also converts values to other types if specified.
         * @param message RandomRoleNameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RandomRoleNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RandomRoleNameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RandomRoleNameRequest. */
    interface IRandomRoleNameRequest {

        /** RandomRoleNameRequest sex */
        sex?: (number|null);
    }

    /** Represents a RandomRoleNameRequest. */
    class RandomRoleNameRequest implements IRandomRoleNameRequest {

        /**
         * Constructs a new RandomRoleNameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRandomRoleNameRequest);

        /** RandomRoleNameRequest sex. */
        public sex: number;

        /**
         * Creates a new RandomRoleNameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RandomRoleNameRequest instance
         */
        public static create(properties?: user.IRandomRoleNameRequest): user.RandomRoleNameRequest;

        /**
         * Encodes the specified RandomRoleNameRequest message. Does not implicitly {@link user.RandomRoleNameRequest.verify|verify} messages.
         * @param message RandomRoleNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRandomRoleNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RandomRoleNameRequest message, length delimited. Does not implicitly {@link user.RandomRoleNameRequest.verify|verify} messages.
         * @param message RandomRoleNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRandomRoleNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RandomRoleNameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RandomRoleNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RandomRoleNameRequest;

        /**
         * Decodes a RandomRoleNameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RandomRoleNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RandomRoleNameRequest;

        /**
         * Verifies a RandomRoleNameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RandomRoleNameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RandomRoleNameRequest
         */
        public static fromObject(object: { [k: string]: any }): user.RandomRoleNameRequest;

        /**
         * Creates a plain object from a RandomRoleNameRequest message. Also converts values to other types if specified.
         * @param message RandomRoleNameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RandomRoleNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RandomRoleNameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoleIdMsg. */
    interface IRoleIdMsg {

        /** RoleIdMsg roleId */
        roleId?: (number|Long|null);
    }

    /** Represents a RoleIdMsg. */
    class RoleIdMsg implements IRoleIdMsg {

        /**
         * Constructs a new RoleIdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRoleIdMsg);

        /** RoleIdMsg roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new RoleIdMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleIdMsg instance
         */
        public static create(properties?: user.IRoleIdMsg): user.RoleIdMsg;

        /**
         * Encodes the specified RoleIdMsg message. Does not implicitly {@link user.RoleIdMsg.verify|verify} messages.
         * @param message RoleIdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRoleIdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleIdMsg message, length delimited. Does not implicitly {@link user.RoleIdMsg.verify|verify} messages.
         * @param message RoleIdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRoleIdMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleIdMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleIdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RoleIdMsg;

        /**
         * Decodes a RoleIdMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleIdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RoleIdMsg;

        /**
         * Verifies a RoleIdMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleIdMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleIdMsg
         */
        public static fromObject(object: { [k: string]: any }): user.RoleIdMsg;

        /**
         * Creates a plain object from a RoleIdMsg message. Also converts values to other types if specified.
         * @param message RoleIdMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RoleIdMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleIdMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GMCommand. */
    interface IGMCommand {

        /** GMCommand command */
        command?: (string|null);
    }

    /** Represents a GMCommand. */
    class GMCommand implements IGMCommand {

        /**
         * Constructs a new GMCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGMCommand);

        /** GMCommand command. */
        public command: string;

        /**
         * Creates a new GMCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMCommand instance
         */
        public static create(properties?: user.IGMCommand): user.GMCommand;

        /**
         * Encodes the specified GMCommand message. Does not implicitly {@link user.GMCommand.verify|verify} messages.
         * @param message GMCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IGMCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GMCommand message, length delimited. Does not implicitly {@link user.GMCommand.verify|verify} messages.
         * @param message GMCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IGMCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.GMCommand;

        /**
         * Decodes a GMCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GMCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.GMCommand;

        /**
         * Verifies a GMCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GMCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GMCommand
         */
        public static fromObject(object: { [k: string]: any }): user.GMCommand;

        /**
         * Creates a plain object from a GMCommand message. Also converts values to other types if specified.
         * @param message GMCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GMCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GMCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CloseServerResponse. */
    interface ICloseServerResponse {

        /** CloseServerResponse code */
        code?: (number|null);

        /** CloseServerResponse msg */
        msg?: (string|null);
    }

    /** Represents a CloseServerResponse. */
    class CloseServerResponse implements ICloseServerResponse {

        /**
         * Constructs a new CloseServerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ICloseServerResponse);

        /** CloseServerResponse code. */
        public code: number;

        /** CloseServerResponse msg. */
        public msg: string;

        /**
         * Creates a new CloseServerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseServerResponse instance
         */
        public static create(properties?: user.ICloseServerResponse): user.CloseServerResponse;

        /**
         * Encodes the specified CloseServerResponse message. Does not implicitly {@link user.CloseServerResponse.verify|verify} messages.
         * @param message CloseServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ICloseServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseServerResponse message, length delimited. Does not implicitly {@link user.CloseServerResponse.verify|verify} messages.
         * @param message CloseServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ICloseServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseServerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.CloseServerResponse;

        /**
         * Decodes a CloseServerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.CloseServerResponse;

        /**
         * Verifies a CloseServerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseServerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseServerResponse
         */
        public static fromObject(object: { [k: string]: any }): user.CloseServerResponse;

        /**
         * Creates a plain object from a CloseServerResponse message. Also converts values to other types if specified.
         * @param message CloseServerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.CloseServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseServerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReconnectRequest. */
    interface IReconnectRequest {

        /** ReconnectRequest loginName */
        loginName?: (string|null);

        /** ReconnectRequest serverId */
        serverId?: (number|null);

        /** ReconnectRequest platformId */
        platformId?: (number|null);

        /** ReconnectRequest roleId */
        roleId?: (number|Long|null);

        /** ReconnectRequest sign */
        sign?: (string|null);

        /** ReconnectRequest time */
        time?: (number|Long|null);

        /** ReconnectRequest changeLine */
        changeLine?: (boolean|null);
    }

    /** Represents a ReconnectRequest. */
    class ReconnectRequest implements IReconnectRequest {

        /**
         * Constructs a new ReconnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IReconnectRequest);

        /** ReconnectRequest loginName. */
        public loginName: string;

        /** ReconnectRequest serverId. */
        public serverId: number;

        /** ReconnectRequest platformId. */
        public platformId: number;

        /** ReconnectRequest roleId. */
        public roleId: (number|Long);

        /** ReconnectRequest sign. */
        public sign: string;

        /** ReconnectRequest time. */
        public time: (number|Long);

        /** ReconnectRequest changeLine. */
        public changeLine: boolean;

        /**
         * Creates a new ReconnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectRequest instance
         */
        public static create(properties?: user.IReconnectRequest): user.ReconnectRequest;

        /**
         * Encodes the specified ReconnectRequest message. Does not implicitly {@link user.ReconnectRequest.verify|verify} messages.
         * @param message ReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReconnectRequest message, length delimited. Does not implicitly {@link user.ReconnectRequest.verify|verify} messages.
         * @param message ReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReconnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.ReconnectRequest;

        /**
         * Decodes a ReconnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.ReconnectRequest;

        /**
         * Verifies a ReconnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReconnectRequest
         */
        public static fromObject(object: { [k: string]: any }): user.ReconnectRequest;

        /**
         * Creates a plain object from a ReconnectRequest message. Also converts values to other types if specified.
         * @param message ReconnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.ReconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReconnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GoingDownReason enum. */
    enum GoingDownReason {
        Maintain = 0,
        Block = 1,
        AnotherSession = 2
    }

    /** Properties of a DisconnectResponse. */
    interface IDisconnectResponse {

        /** DisconnectResponse reason */
        reason?: (user.GoingDownReason|null);
    }

    /** Represents a DisconnectResponse. */
    class DisconnectResponse implements IDisconnectResponse {

        /**
         * Constructs a new DisconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IDisconnectResponse);

        /** DisconnectResponse reason. */
        public reason: user.GoingDownReason;

        /**
         * Creates a new DisconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisconnectResponse instance
         */
        public static create(properties?: user.IDisconnectResponse): user.DisconnectResponse;

        /**
         * Encodes the specified DisconnectResponse message. Does not implicitly {@link user.DisconnectResponse.verify|verify} messages.
         * @param message DisconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IDisconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisconnectResponse message, length delimited. Does not implicitly {@link user.DisconnectResponse.verify|verify} messages.
         * @param message DisconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IDisconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.DisconnectResponse;

        /**
         * Decodes a DisconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.DisconnectResponse;

        /**
         * Verifies a DisconnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisconnectResponse
         */
        public static fromObject(object: { [k: string]: any }): user.DisconnectResponse;

        /**
         * Creates a plain object from a DisconnectResponse message. Also converts values to other types if specified.
         * @param message DisconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.DisconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserFeedbackRequest. */
    interface IUserFeedbackRequest {

        /** UserFeedbackRequest content */
        content?: (string|null);

        /** UserFeedbackRequest phoneType */
        phoneType?: (string|null);

        /** UserFeedbackRequest qq */
        qq?: (string|null);
    }

    /** Represents a UserFeedbackRequest. */
    class UserFeedbackRequest implements IUserFeedbackRequest {

        /**
         * Constructs a new UserFeedbackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserFeedbackRequest);

        /** UserFeedbackRequest content. */
        public content: string;

        /** UserFeedbackRequest phoneType. */
        public phoneType: string;

        /** UserFeedbackRequest qq. */
        public qq: string;

        /**
         * Creates a new UserFeedbackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserFeedbackRequest instance
         */
        public static create(properties?: user.IUserFeedbackRequest): user.UserFeedbackRequest;

        /**
         * Encodes the specified UserFeedbackRequest message. Does not implicitly {@link user.UserFeedbackRequest.verify|verify} messages.
         * @param message UserFeedbackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserFeedbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserFeedbackRequest message, length delimited. Does not implicitly {@link user.UserFeedbackRequest.verify|verify} messages.
         * @param message UserFeedbackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserFeedbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserFeedbackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserFeedbackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserFeedbackRequest;

        /**
         * Decodes a UserFeedbackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserFeedbackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserFeedbackRequest;

        /**
         * Verifies a UserFeedbackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserFeedbackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserFeedbackRequest
         */
        public static fromObject(object: { [k: string]: any }): user.UserFeedbackRequest;

        /**
         * Creates a plain object from a UserFeedbackRequest message. Also converts values to other types if specified.
         * @param message UserFeedbackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserFeedbackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserFeedbackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BindPhoneNumberRequest. */
    interface IBindPhoneNumberRequest {

        /** BindPhoneNumberRequest phoneNumber */
        phoneNumber?: (string|null);
    }

    /** Represents a BindPhoneNumberRequest. */
    class BindPhoneNumberRequest implements IBindPhoneNumberRequest {

        /**
         * Constructs a new BindPhoneNumberRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IBindPhoneNumberRequest);

        /** BindPhoneNumberRequest phoneNumber. */
        public phoneNumber: string;

        /**
         * Creates a new BindPhoneNumberRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BindPhoneNumberRequest instance
         */
        public static create(properties?: user.IBindPhoneNumberRequest): user.BindPhoneNumberRequest;

        /**
         * Encodes the specified BindPhoneNumberRequest message. Does not implicitly {@link user.BindPhoneNumberRequest.verify|verify} messages.
         * @param message BindPhoneNumberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IBindPhoneNumberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BindPhoneNumberRequest message, length delimited. Does not implicitly {@link user.BindPhoneNumberRequest.verify|verify} messages.
         * @param message BindPhoneNumberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IBindPhoneNumberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BindPhoneNumberRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BindPhoneNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.BindPhoneNumberRequest;

        /**
         * Decodes a BindPhoneNumberRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BindPhoneNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.BindPhoneNumberRequest;

        /**
         * Verifies a BindPhoneNumberRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BindPhoneNumberRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BindPhoneNumberRequest
         */
        public static fromObject(object: { [k: string]: any }): user.BindPhoneNumberRequest;

        /**
         * Creates a plain object from a BindPhoneNumberRequest message. Also converts values to other types if specified.
         * @param message BindPhoneNumberRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.BindPhoneNumberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BindPhoneNumberRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeRequest. */
    interface IRechargeRequest {

        /** RechargeRequest rechargeId */
        rechargeId?: (string|null);
    }

    /** Represents a RechargeRequest. */
    class RechargeRequest implements IRechargeRequest {

        /**
         * Constructs a new RechargeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRechargeRequest);

        /** RechargeRequest rechargeId. */
        public rechargeId: string;

        /**
         * Creates a new RechargeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RechargeRequest instance
         */
        public static create(properties?: user.IRechargeRequest): user.RechargeRequest;

        /**
         * Encodes the specified RechargeRequest message. Does not implicitly {@link user.RechargeRequest.verify|verify} messages.
         * @param message RechargeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRechargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RechargeRequest message, length delimited. Does not implicitly {@link user.RechargeRequest.verify|verify} messages.
         * @param message RechargeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRechargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RechargeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RechargeRequest;

        /**
         * Decodes a RechargeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RechargeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RechargeRequest;

        /**
         * Verifies a RechargeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RechargeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeRequest
         */
        public static fromObject(object: { [k: string]: any }): user.RechargeRequest;

        /**
         * Creates a plain object from a RechargeRequest message. Also converts values to other types if specified.
         * @param message RechargeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RechargeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
