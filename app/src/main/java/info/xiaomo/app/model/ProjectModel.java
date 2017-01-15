package info.xiaomo.app.model;

import info.xiaomo.app.base.BaseModel;

public class ProjectModel extends BaseModel {

    private String name;

    private String url;

    private String pic;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }
}
