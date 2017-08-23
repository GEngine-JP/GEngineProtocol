package info.xiaomo.tool.message.util;

import info.xiaomo.tool.message.config.FileConfig;
import info.xiaomo.tool.message.config.MessageConfig;
import info.xiaomo.tool.message.config.MessageDirection;
import info.xiaomo.tool.message.constant.GenerateConst;

import java.io.IOException;

public class FileGenerator {

    public static void generator(FileConfig fileConfig, String output) throws IOException {


        // 生成message
        for (MessageConfig messageConfig : fileConfig.getMessageList()) {
            String template = TemplateUtil.messageTemplate(GenerateConst.TEMPLATE_URL);
            if (messageConfig.getProtoClassName() != null) {
                template = template.replaceAll("\\{ProtoName}", messageConfig.getProtoClassName());
            }

            template = template.replaceAll("\\{package}", TemplateUtil.generatorPackage(fileConfig));
            template = template.replaceAll("\\{className}", messageConfig.getClassName());
            if (messageConfig.getProtoClassName() != null) {
                template = template.replaceAll("\\{ProtoFiledType}", TemplateUtil.getProtoFiledType(messageConfig));
            }
            template = template.replaceAll("\\{doc}", messageConfig.getDesc() == null ? "" : messageConfig.getDesc());
            template = template.replaceAll("\\{id}", fileConfig.getGroup() + "" + messageConfig.getId());
            TemplateUtil.write(fileConfig.getPackagePath(), messageConfig.getClassName(), template, output);
        }

        //生成Handler
        for (MessageConfig messageConfig : fileConfig.getMessageList()) {

            if (messageConfig.getDir() != MessageDirection.TO_SERVER) {
                continue;
            }
            String template = TemplateUtil.handlerTemplate(GenerateConst.TEMPLATE_URL);
            template = template.replaceAll("\\{package}", TemplateUtil.generatorHandlerPackage(fileConfig));
            template = template.replaceAll("\\{import}", TemplateUtil.generatorHandlerImport(fileConfig, messageConfig));
            template = template.replaceAll("\\{className}", messageConfig.getClassName().replace("Message", "Message"));
            template = template.replaceAll("\\{messageName}", messageConfig.getClassName());
            template = template.replaceAll("\\{ProtoName}", messageConfig.getProtoClassName());
            template = template.replaceAll("\\{ProtoFiledType}", TemplateUtil.getProtoFiledType(messageConfig));
            template = template.replaceAll("\\{id}", messageConfig.getId() + "");
            TemplateUtil.write(fileConfig.getPackagePath(), messageConfig.getClassName().replace("Message", "Message"), template, output);
        }

    }


}
