package info.xiaomo.tool.message;

import info.xiaomo.tool.message.config.ConfigReader;
import info.xiaomo.tool.message.config.FileConfig;
import info.xiaomo.tool.message.constant.GenerateConst;
import info.xiaomo.tool.message.util.FileGenerator;
import info.xiaomo.tool.message.util.TemplateUtil;
import org.dom4j.DocumentException;

import java.io.File;
import java.io.FileInputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class Main {

    public final static Map<String, FileConfig> CONFIGS = new HashMap<>();


    public static void main(String[] args) throws IOException, DocumentException {

        String configPath = "G:\\ChessGame\\ConfigProtocol\\src\\main\\resources\\config.properties";
        FileInputStream in = new FileInputStream(configPath);
        Properties properties = new Properties();
        properties.load(in);
        String input = properties.getProperty(GenerateConst.INPUT);
        String output = properties.getProperty(GenerateConst.OUTPUT);

        File file = new File(input);
        if (file.isDirectory()) {
            String[] fileList = file.list(new FilenameFilter() {
                @Override
                public boolean accept(File dir, String name) {
                    return name.endsWith(GenerateConst.SUFFIX);
                }
            });
            if (fileList == null) {
                System.out.println("fileList为空");
                return;
            }

            for (String fileName : fileList) {
                System.out.println("处理：" + fileName + "...");
                FileConfig ret = ConfigReader.read(file.getAbsolutePath() + "/" + fileName);
                CONFIGS.put(fileName, ret);
            }

        } else {
            FileConfig ret = ConfigReader.read(input);
            CONFIGS.put(file.getName(), ret);
        }

        TemplateUtil.checkId();


        for (String fileName : CONFIGS.keySet()) {
            FileConfig config = CONFIGS.get(fileName);
            FileGenerator.generator(config, output);
        }
        System.out.println("生成完毕.");
    }




}
