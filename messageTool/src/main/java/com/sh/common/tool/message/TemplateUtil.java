package com.sh.common.tool.message;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class TemplateUtil {

    public static final String base = "G:\\ChessGame\\ConfigProtocol\\messageTool\\";


    public static String messageTemplate() throws IOException {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(base + "template\\message.template")))) {
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

    public static String messageEmptyTemplate() throws IOException {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(base + "template\\message_empty.template")))) {
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

    public static String handlerTemplate() throws IOException {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(base + "template\\handler.template")))) {
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


}
