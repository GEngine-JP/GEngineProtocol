@echo off

::协议文件路径, 最后不要跟“\”符号
set SOURCE_FOLDER=proto
::Java编译器路径
set JAVA_COMPILER_PATH=protoc.exe
::C#编译器路径
set CS_COMPILER_PATH=protoc.exe

::如果目录不存在则创建
if not exist Code md Code
if not exist Code\cs md Code\cs
if not exist Code\java md Code\java

::C#文件生成路径, 最后不要跟“\”符号
set CS_TARGET_PATH=Code\cs
::Java文件生成路径, 最后不要跟“\”符号
set JAVA_TARGET_PATH=Code\java
set MESSAGE_TARGET_PATH=Code\message

::删除之前创建的文件
del %CS_TARGET_PATH%\*.* /f /s /q
del %JAVA_TARGET_PATH%\*.* /f /s /q
del %MESSAGE_TARGET_PATH%\*.* /f /s /q

::遍历所有文件
for /f "delims=" %%i in ('dir /b "%SOURCE_FOLDER%\*.proto"') do (

    ::生成 C# 代码
    %CS_COMPILER_PATH% --csharp_out=%CS_TARGET_PATH%  %SOURCE_FOLDER%\%%i

    ::生成 Java 代码
    %JAVA_COMPILER_PATH% --java_out=%JAVA_TARGET_PATH%  %SOURCE_FOLDER%\%%i

    echo echo generate:%%i
    
)


"C:\Program Files\Java\jdk1.8.0_144\bin\java" "-javaagent:G:\Program Files\JetBrains\IntelliJ IDEA 2017.2\lib\idea_rt.jar=52936:G:\Program Files\JetBrains\IntelliJ IDEA 2017.2\bin" -Dfile.encoding=UTF-8 -classpath "C:\Program Files\Java\jdk1.8.0_144\jre\lib\charsets.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\deploy.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\access-bridge-64.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\cldrdata.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\dnsns.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\jaccess.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\jfxrt.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\localedata.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\nashorn.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\sunec.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\sunjce_provider.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\sunmscapi.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\sunpkcs11.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\ext\zipfs.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\javaws.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\jce.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\jfr.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\jfxswt.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\jsse.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\management-agent.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\plugin.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\resources.jar;C:\Program Files\Java\jdk1.8.0_144\jre\lib\rt.jar;G:\ChessGame\ConfigProtocol\messageTool\target\classes;C:\Users\qq\.m2\repository\dom4j\dom4j\1.6.1\dom4j-1.6.1.jar;C:\Users\qq\.m2\repository\xml-apis\xml-apis\1.0.b2\xml-apis-1.0.b2.jar" info.xiaomo.tool.message.Main

echo Finish!
::echo %CS_COMPILER_PATH% -i:%SOURCE_FOLDER%/%%i -o:%CS_TARGET_PATH%\%%~ni.cs
pause
