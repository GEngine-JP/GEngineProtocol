@echo off

::Proto文件路径
set SOURCE_PATH=proto

set PROTON_PATH=protoc-net.exe
::C#文件生成路径
set TARGET_PATH=..\Code\cs_net

::删除之前创建的文件
del %TARGET_PATH%\*.* /f /s /q
echo -------------------------------------------------------------

for /f "delims=" %%i in ('dir /b "%SOURCE_PATH%\*.proto"') do (

    echo %%i
    %PROTON_PATH% -i:%SOURCE_PATH%\%%i -o:%TARGET_PATH%\%%~ni.cs -ns:ProtoData

)

echo 转换完成

pause