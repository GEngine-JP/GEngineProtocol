#!/usr/bin/env bash

SOURCE_FOLDER=proto
CS_TARGET_PATH=Code/cs
JAVA_TARGET_PATH=generate-java-protocol/src/main/java
CPP_TARGET_PATH=Code/cpp
JS_TARGET_PATH=Code/js
PYTHON_TARGET_PATH=Code/python
TS_TARGET_PATH=generate-ts-protocol/src

echo "开始清理老代码"
rm -rf Code/
# shellcheck disable=SC2115
rm -rf "${JAVA_TARGET_PATH}/*"
# shellcheck disable=SC2115
rm -rf "${TS_TARGET_PATH}/*"

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

if [ ! -d CPP_TARGET_PATH ]; then
	mkdir -p ${CPP_TARGET_PATH}
    echo "开始创建${CPP_TARGET_PATH}目录"
else
	echo "${CPP_TARGET_PATH} 目录己存在"
fi

if [ ! -d JS_TARGET_PATH ]; then
	mkdir -p ${JS_TARGET_PATH}
    echo "开始创建${JS_TARGET_PATH}目录"
else
	echo "${JS_TARGET_PATH} 目录己存在"
fi

if [ ! -d PYTHON_TARGET_PATH ]; then
	mkdir -p ${PYTHON_TARGET_PATH}
    echo "开始创建${PYTHON_TARGET_PATH}目录"
else
	echo "${PYTHON_TARGET_PATH} 目录己存在"
fi

if [ ! -d TS_TARGET_PATH ]; then
	mkdir -p ${TS_TARGET_PATH}
    echo "开始创建${TS_TARGET_PATH}目录"
else
	echo "${TS_TARGET_PATH} 目录己存在"
fi


echo "开始生成java代码"
./protoc --proto_path=proto --java_out=${JAVA_TARGET_PATH} ${SOURCE_FOLDER}/*

echo "开始生成c#代码"
./protoc --proto_path=proto --csharp_out=${CS_TARGET_PATH} ${SOURCE_FOLDER}/*

#echo "开始生成c++代码"
#./protoc --proto_path=proto --cpp_out=${CPP_TARGET_PATH} ${SOURCE_FOLDER}/*
#
#echo "开始生成js代码"
#./protoc --proto_path=proto --js_out=${JS_TARGET_PATH} ${SOURCE_FOLDER}/*
#
#echo "开始生成python代码"
#./protoc --proto_path=proto --python_out=${PYTHON_TARGET_PATH} ${SOURCE_FOLDER}/*

#echo "开始生成ts代码"
## shellcheck disable=SC2045
## shellcheck disable=SC2006
#for line in `ls ${SOURCE_FOLDER}`
#do
# # shellcheck disable=SC2086
# pbjs -t static-module -w commonjs -o ${TS_TARGET_PATH}/${line}.js ${SOURCE_FOLDER}/"${line}"
# pbts -o ${TS_TARGET_PATH}/"${line}".d.ts ${TS_TARGET_PATH}/"${line}".js
#done

