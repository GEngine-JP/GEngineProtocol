package info.xiaomo.app.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class News {

    private List<NewItem> newsItem;

}
