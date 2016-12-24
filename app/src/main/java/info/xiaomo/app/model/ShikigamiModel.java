package info.xiaomo.app.model;

import info.xiaomo.app.model.base.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 * @author 小莫 (https://xiaomo.info) (https://github.com/syoubaku)
 * @created : 2016/12/24 15:09
 */

@Data
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class ShikigamiModel extends BaseModel {

    /**
     * 名字
     */
    private String name;

    /**
     * 图片
     */
    private String image;

    /**
     * 声优
     */
    private String seiyou;


    /**
     * 性别
     */
    private String sex;

    /**
     * 星级
     */
    private String star;

    /**
     * 获取方式
     */
    private String getWay;


    /**
     * N/R/SR/SSR
     */
    private String level;


    /**
     * 描述
     */
    private String des;


}
