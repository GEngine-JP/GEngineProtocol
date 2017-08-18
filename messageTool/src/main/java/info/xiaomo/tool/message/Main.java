package info.xiaomo.tool.message;

import info.xiaomo.tool.message.config.ConfigReader;
import info.xiaomo.tool.message.config.FileConfig;
import info.xiaomo.tool.message.config.MessageConfig;
import org.dom4j.DocumentException;

import java.io.*;
import java.util.*;

public class Main {
	
	public final static Map<String, FileConfig> CONFIGS = new HashMap<>();
	
	public static void main(String[] args) throws IOException, DocumentException {
		
		String input = ".";
		String output = ".";
		String configPath = "G:\\ChessGame\\ConfigProtocol\\messageTool\\config.txt";
		try(BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(configPath))))
		{
			String line = in.readLine();
			while(line != null){
				if(line.startsWith("input")){
					input = line.split("=")[1].trim();
				}else if(line.startsWith("output")){
					output = line.split("=")[1].trim();
				}
				line = in.readLine();
			}
		}
		
		
		File file = new File(input);
		if(file.isDirectory()){
			 String[] fileList = file.list(new FilenameFilter() {
				@Override
				public boolean accept(File dir, String name) {
					if(name.endsWith(".xml")){
						return true;
					}
					return false;
				}
			});
			 
			for(String fileName : fileList){
				System.out.println("处理：" + fileName + "...");
				FileConfig ret = ConfigReader.read(file.getAbsolutePath() + "/" + fileName);
				CONFIGS.put(fileName,ret);
			}
			
		}else{
			FileConfig ret = ConfigReader.read(input);
			CONFIGS.put(file.getName(), ret);
		}
		
		checkId();
		for(String fileName : CONFIGS.keySet()){
			FileConfig config = CONFIGS.get(fileName);
			FileGenerator.generator(config, output);
		}
		System.out.println("生成完毕.");
	}
	
	public static void checkId(){
		Set<Integer> existedGroupSet = new HashSet<>();
		for(String fileName : CONFIGS.keySet()){
			FileConfig config = CONFIGS.get(fileName);
			if(existedGroupSet.contains(config.getGroup())){
				throw new RuntimeException("组id重复:" + config.getGroup());
			}
			Set<Integer> existedIdSet = new HashSet<>();
			for(MessageConfig msgConfig : config.getMessageList()){
				if(existedIdSet.contains(msgConfig.getId())){
					throw new RuntimeException("组内id重复:" + msgConfig.getId());
				}
				existedIdSet.add(msgConfig.getId());
			}
		}
	}
}
