package info.xiaomo.tool.message;

import info.xiaomo.tool.message.config.FileConfig;
import info.xiaomo.tool.message.config.MessageConfig;
import info.xiaomo.tool.message.config.MessageDirection;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

public class FileGenerator {

	public static void generator(FileConfig fileConfig, String output) throws IOException {
		

		// 生成message
		for (MessageConfig messageConfig : fileConfig.getMessageList()) {
			String template;
			if(messageConfig.getProtoClassName() == null){
				template = TemplateUtil.messageEmptyTemplate();
			} else {
				template = TemplateUtil.messageTemplate();
			}
			if(messageConfig.getProtoClassName() != null){
				template = template.replaceAll("\\{import\\}", generatorImport(fileConfig, messageConfig));
			}
			
			template = template.replaceAll("\\{package\\}", generatorPackage(fileConfig, messageConfig));
			template = template.replaceAll("\\{className\\}", messageConfig.getClassName());
			if(messageConfig.getProtoClassName() != null){
				template = template.replaceAll("\\{protoFiledType\\}", getProtoFiledType(messageConfig));
				template = template.replaceAll("\\{protoFiled\\}", toFirstWordLower(getProtoFiledType(messageConfig)));
			}
			template = template.replaceAll("\\{doc\\}", messageConfig.getDesc() == null ? "" : messageConfig.getDesc());
			template = template.replaceAll("\\{id\\}", fileConfig.getGroup() + "" + messageConfig.getId());
			write(fileConfig.getPackagePath() + ".message" , messageConfig.getClassName(), template, output);
		}
		
		//生成Handler
		for (MessageConfig messageConfig : fileConfig.getMessageList()) {
			
			if(messageConfig.getDir() != MessageDirection.TOSERVER){
				continue;
			}
			String template = TemplateUtil.handlerTemplate();
			template = template.replaceAll("\\{package\\}", generatorHandlerPackage(fileConfig, messageConfig));
			template = template.replaceAll("\\{import\\}", generatorHandlerImport(fileConfig, messageConfig));
			template = template.replaceAll("\\{className\\}", messageConfig.getClassName().replace("Message", "Handler"));
			template = template.replaceAll("\\{messageName\\}", messageConfig.getClassName());
			write(fileConfig.getPackagePath() + ".handler" , messageConfig.getClassName().replace("Message", "Handler"), template, output);
		}
		
	}
	
	private static String getProtoFiledType(MessageConfig config){
		String[] array = config.getProtoClassName().split("\\.");
		return array[array.length - 1];
	}
	
/*	private static boolean checkId(FileConfig fileConfig){
		List<String> existList = new ArrayList<>();
		for(MessageConfig config : fileConfig.getMessageList()){
			if(existList.contains(config.getCmd() + "_" + config.getDir().name())){
				System.out.println("消息" + config.getClassName() + "重复：id->" + config.getCmd() + ",group->" + fileConfig.getGroup());
				return false;
			}
			existList.add(config.getCmd() + "_" + config.getDir().name());
		}
		return true;
	}*/


	private static String generatorImport(FileConfig fileConfig, MessageConfig messageConfig) {
		return "import " + messageConfig.getProtoClassName() + ";";
	}
	
	private static String generatorHandlerImport(FileConfig fileConfig, MessageConfig messageConfig) {
		return "import " + fileConfig.getPackagePath() + ".message." + messageConfig.getClassName() + ";";
	}

	private static String generatorPackage(FileConfig fileConfig, MessageConfig messageCOnfig) {
		return "package " + fileConfig.getPackagePath() + ".message;";
	}
	
	private static String generatorHandlerPackage(FileConfig fileConfig, MessageConfig beanConfig){
		return "package " + fileConfig.getPackagePath() + ".handler;";
	}


	private static void write(String packagePath, String fileName, String content, String output) throws IOException {
		String path = packagePath.replaceAll("\\.", "/");
		path = output + "/" + path;
		File dir = new File(path);
		if(!dir.exists()){
			dir.mkdirs();
		}
		path += "/" + fileName + ".java";
		File file = new File(path);
		try(PrintWriter out = new PrintWriter(file))
		{
			out.println(content);
			out.flush();
		}
	}

	private static String toFirstWordLower(String str) {
		if (str == null || str.length() == 0) {
			return str;
		}
		String first = str.substring(0, 1).toLowerCase();
		if (str.length() > 1) {
			first += str.substring(1, str.length());
		}
		return first;
	}

	
	public static void main(String[] args) {
		String ret = "wo ${like} ai".replaceAll("\\{like\\}", "xiaokeai");
		System.out.println(ret);
	}
}
