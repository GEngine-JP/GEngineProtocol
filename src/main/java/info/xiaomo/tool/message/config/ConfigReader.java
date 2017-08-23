package info.xiaomo.tool.message.config;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Iterator;

public class ConfigReader {

    private static final String MESSAGE = "message";
    private static final String CLAZZ = "class";
    private static final String TYPE = "type";
    private static final String ID = "id";
    private static final String PACKAGE = "package";
    private static final String DESC = "desc";


    /**
     * 文件配置
     *
     * @param fileName
     * @return
     * @throws FileNotFoundException
     * @throws DocumentException
     */
    @SuppressWarnings("unchecked")
    public static FileConfig read(String fileName) throws FileNotFoundException, DocumentException {
        SAXReader saxReader = new SAXReader();
        InputStream inputStream = new FileInputStream(fileName);
        Document document = saxReader.read(inputStream);
        Element root = document.getRootElement();

        final int group = Integer.parseInt(root.attributeValue(ID));
        final String packagePath = root.attributeValue(PACKAGE);
        FileConfig ret = new FileConfig();
        ret.setGroup(group);
        ret.setPackagePath(packagePath);
        Iterator<Element> messageIt = root.elementIterator(MESSAGE);
        while (messageIt.hasNext()) {
            Element element = messageIt.next();
            MessageConfig message = readMessage(element);
            ret.getMessageList().add(message);
        }
        return ret;
    }


    /**
     * 消息配置
     *
     * @param element
     * @return
     */
    @SuppressWarnings("unchecked")
    private static MessageConfig readMessage(Element element) {
        MessageConfig config = new MessageConfig();
        config.setId(Integer.parseInt(element.attributeValue(ID)));
        config.setClassName(element.attributeValue(CLAZZ));
        config.setDir(MessageDirection.parse(element.attributeValue(TYPE)));
        config.setDesc(element.attributeValue(DESC));
        Iterator<Element> it = element.elementIterator();
        if (it.hasNext()) {
            Element fieldElement = it.next();
            config.setProtoClassName(fieldElement.attribute(CLAZZ).getStringValue());
        }
        return config;

    }

}
