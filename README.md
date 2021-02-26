# 消息协议配置文件

- [protoc.exe 3.13版](https://github.com/protocolbuffers/protobuf/releases)
- [proto写法参考文档](https://developers.google.com/protocol-buffers/docs/proto3#simple)

#### 目录结构预览

├─Code 生成的代码      
├─generate.bat 生成代码的执行文件               
├─protoc.exe proto生成工具                 
│ └─cpp c++代码             
│ ├─cs c#代码         
│ └─java java代码             
│ └─js js代码             
│ └─python python代码             
│ └─ts ts代码             
├─proto proto文件

#### 使用方式

运行 generate.bat即可生成java和c#的proto通讯文件

#### 模块

- 1=user
- 2=gm

### protobuf-net生成cs文件

如果找不到cs_net的话需要先创建文件夹，这里只是示例，在批处理文件中预先创建文件夹和循环proto文件批量生成
`protobuf-net.exe --proto_path=proto --csharp_out=Code\cs_net proto\MessageId.proto`

# [协议声明](LICENSE)

       Copyright 2017 ChessGame Group
    
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
    
           http://www.apache.org/licenses/LICENSE-2.0
    
       Unless by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.