#!/usr/bin/env bash

SOURCE_FOLDER=proto
CS_TARGET_PATH=Code/cs
JAVA_TARGET_PATH=Code/java


if [ ! -d JAVA_TARGET_PATH ]; then
	mkdir -p ${JAVA_TARGET_PATH}
    echo "开始创建${JAVA_TARGET_PATH}目录"
else
	echo "${JAVA_TARGET_PATH} 目录己存在"
fi


if [ ! -d CS_TARGET_PATH ]; then
	mkdir -p ${CS_TARGET_PATH}
    echo "开始创建${CS_TARGET_PATH}目录"
else
	echo "${CS_TARGET_PATH} 目录己存在"
fi




echo "开始清理老代码"
rm -rf ${JAVA_TARGET_PATH}/*
rm -rf ${CS_TARGET_PATH}/*

echo "开始生成java代码"
./protoc --proto_path=proto --java_out=${JAVA_TARGET_PATH} ${SOURCE_FOLDER}/*

echo "开始生成c#代码"
./protoc --proto_path=proto --csharp_out=${CS_TARGET_PATH} ${SOURCE_FOLDER}/*