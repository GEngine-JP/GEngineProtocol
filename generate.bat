@echo off

::协议文件路径, 最后不要跟“\”符号
set SOURCE_FOLDER=proto
::Java编译器路径
set COMPILER_PATH=protoc.exe

::删除之前创建的文件
del Code\*.* /f /s /q

::如果目录不存在则创建
if not exist Code md Code
if not exist Code\cpp md Code\cpp
if not exist Code\cs md Code\cs
if not exist Code\java md Code\java
if not exist Code\js md Code\js
if not exist Code\python md Code\python
if not exist Code\tx md Code\ts

::文件生成路径, 最后不要跟“\”符号
set CPP_TARGET_PATH=Code\cpp
set CS_TARGET_PATH=Code\cs
set JAVA_TARGET_PATH=Code\java
set JS_TARGET_PATH=Code\js
set PYTHON_TARGET_PATH=Code\python
set TS_TARGET_PATH=Code\ts
set MESSAGE_TARGET_PATH=Code



::遍历所有文件
for /f "delims=" %%i in ('dir /b "%SOURCE_FOLDER%\*.proto"') do (

    ::生成 c++ 代码
    %COMPILER_PATH% --cpp_out=%CPP_TARGET_PATH%  %SOURCE_FOLDER%\%%i

    ::生成 C# 代码
    %COMPILER_PATH% --csharp_out=%CS_TARGET_PATH%  %SOURCE_FOLDER%\%%i

    ::生成 Java 代码
    %COMPILER_PATH% --java_out=%JAVA_TARGET_PATH%  %SOURCE_FOLDER%\%%i

    ::生成 js 代码
    %COMPILER_PATH% --js_out=%JS_TARGET_PATH%  %SOURCE_FOLDER%\%%i


    ::生成 python 代码
    %COMPILER_PATH% --python_out=%PYTHON_TARGET_PATH%  %SOURCE_FOLDER%\%%i

    ::生成 ts 代码 不会写，后面再补充，先用sh生成

    echo generate:%%i
    
)

echo Finish!
pause
