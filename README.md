# 消息协议配置文件

protoc.exe 3.3.1版

#### 目录结构预览
        
├─Code           生成的代码      
├─generate.bat   生成代码的执行文件               
├─protoc.exe     proto生成工具                 
│  ├─cs          c#代码         
│  └─java        java代码             
├─proto          proto文件              
├─xml            通讯配置文件              
└─src       
    └─Main.java 消息生成工具入口           
       
#### 使用方式
运行 generate.bat即可生成java和c#的proto通讯文件
运行 Main.java 生成消息协议文件

#### 模块
- 1=user
- 2=gm