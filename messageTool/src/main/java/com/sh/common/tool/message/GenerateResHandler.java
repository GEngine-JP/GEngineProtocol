package com.sh.common.tool.message;

import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created on 2016/8/2 13:43.
 *
 * @author 周锟
 */
public class GenerateResHandler {
	private static final String inputPath = "D:\\Mobile\\Server\\game-server\\src\\main\\java\\";
	private static final String outputPath = "D:\\Mobile\\Server\\game-robot\\generated\\";
	private static String TEMPLATE = "";

	public static void main(String[] args) {
		try (BufferedReader br = new BufferedReader(new FileReader("template\\res_handler.template"))) {
			String line;
			while ((line = br.readLine()) != null) {
				TEMPLATE += line + "\n";
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		File input = new File(inputPath);
		walkInDir(input);
	}

	private static void walkInDir(File file) {
		if (file.isDirectory()) {
			for (File f : file.listFiles()) {
				walkInDir(f);
			}
		} else if (file.isFile()) {
			String name = file.getName();
			if (name.matches("Res.+Message\\.java")) {
				generate(file);
			}
		}
	}

	private static void generate(File file) {
		String pkg = file.getAbsolutePath().replaceFirst(Pattern.quote(inputPath), "")
				.replaceFirst(Pattern.quote(file.getName()), "").replaceAll("\\\\", ".");
		String msgName = file.getName().replaceAll("\\.java", "");
		String fullMsgName = pkg + msgName;
		String handlerPkg = pkg.replaceFirst("\\.system", "")
				.replaceFirst("message\\.$", "handler");
		String handlerName = msgName.replaceAll("Message$", "Handler");

		String content = TEMPLATE.replaceAll("\\{package\\}", "package " + handlerPkg + ";")
				.replaceAll("\\{fullMsgName\\}", pkg + msgName)
				.replaceAll("\\{className\\}", handlerName)
				.replaceAll("\\{messageName\\}", msgName);
		String fileName = handlerPkg.replaceAll("\\.", Matcher.quoteReplacement("\\")) + "\\" + handlerName + ".java";
		File f = new File(outputPath + fileName);
		f.getParentFile().mkdirs();
		try (PrintWriter pw = new PrintWriter(new FileWriter(f))) {
			pw.println(content);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
