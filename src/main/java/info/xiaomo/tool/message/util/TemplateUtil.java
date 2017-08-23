package info.xiaomo.tool.message.util;

import info.xiaomo.tool.message.Main;
import info.xiaomo.tool.message.config.FileConfig;
import info.xiaomo.tool.message.config.MessageConfig;

import java.io.*;
import java.util.HashSet;
import java.util.Set;

public class TemplateUtil {


    /**
     * message
     *
     * @param url
     * @return
     * @throws IOException
     */
    public static String messageTemplate(String url) throws IOException {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(url + "\\message.template")))) {
            StringBuilder builder = new StringBuilder();
            String line = in.readLine();
            while (line != null) {
                builder.append(line);
                builder.append("\n");
                line = in.readLine();
            }
            return builder.toString();
        }
    }

    /**
     * handler
     *
     * @param url
     * @return
     * @throws IOException
     */
    public static String handlerTemplate(String url) throws IOException {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(url + "\\handler.template")))) {
            StringBuilder builder = new StringBuilder();
            String line = in.readLine();
            while (line != null) {
                builder.append(line);
                builder.append("\n");
                line = in.readLine();
            }
            return builder.toString();
        }
    }

    /**
     * 写文件
     *
     * @param packagePath
     * @param fileName
     * @param content
     * @param output
     * @throws IOException
     */
    public static void write(String packagePath, String fileName, String content, String output) throws IOException {
        String path = packagePath.replaceAll("\\.", "/");
        path = output + "/" + path;
        File dir = new File(path);
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            if (created) {
                System.out.println("创建文件目录 ：" + dir);
            }
        }
        path += "/" + fileName + ".java";
        File file = new File(path);
        try (PrintWriter out = new PrintWriter(file)) {
            out.println(content);
            out.flush();
        }
    }

    /**
     * 首字母大写
     *
     * @param str
     * @return
     */
    public static String toFirstWordLower(String str) {
        if (str == null || str.length() == 0) {
            return str;
        }
        String first = str.substring(0, 1).toLowerCase();
        if (str.length() > 1) {
            first += str.substring(1, str.length());
        }
        return first;
    }

    /**
     * 获取 ProtoFiledType
     *
     * @param config
     * @return
     */
    public static String getProtoFiledType(MessageConfig config) {
        String[] array = config.getProtoClassName().split("\\.");
        return array[array.length - 1];
    }

    /**
     * 生成import
     *
     * @param messageConfig messageConfig
     * @return String
     */
    public static String generatorImport(MessageConfig messageConfig) {
        return "import " + messageConfig.getProtoClassName() + ";";
    }

    /**
     * 生成handler的import
     *
     * @param fileConfig
     * @param messageConfig
     * @return
     */
    public static String generatorHandlerImport(FileConfig fileConfig, MessageConfig messageConfig) {
        return "import " + fileConfig.getPackagePath() + ".message." + messageConfig.getClassName() + ";";
    }

    /**
     * 生成package名
     *
     * @param fileConfig
     * @return
     */
    public static String generatorPackage(FileConfig fileConfig) {
        return "package " + fileConfig.getPackagePath() + ".message;";
    }

    public static String generatorHandlerPackage(FileConfig fileConfig) {
        return "package " + fileConfig.getPackagePath() + ".message;";
    }

    /**
     * 检查id
     */
    public static void checkId() {
        Set<Integer> existedGroupSet = new HashSet<>();
        for (String fileName : Main.CONFIGS.keySet()) {
            FileConfig config = Main.CONFIGS.get(fileName);
            if (existedGroupSet.contains(config.getGroup())) {
                throw new RuntimeException("组id重复:" + config.getGroup());
            }
            existedGroupSet.add(config.getGroup());
            Set<Integer> existedIdSet = new HashSet<>();
            for (MessageConfig msgConfig : config.getMessageList()) {
                if (existedIdSet.contains(msgConfig.getId())) {
                    throw new RuntimeException("组内id重复:" + msgConfig.getId());
                }
                existedIdSet.add(msgConfig.getId());
            }
        }
    }

}
