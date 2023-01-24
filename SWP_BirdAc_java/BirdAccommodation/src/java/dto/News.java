package dto;

/**
 *
 * @author RaeKyo
 */
public class News {
    private String new_id;
    private String title;
    private String description;
    private String new_img;
    private String reference;

    public News(String new_id, String title, String description, String new_img, String reference) {
        this.new_id = new_id;
        this.title = title;
        this.description = description;
        this.new_img = new_img;
        this.reference = reference;
    }

    public String getNew_id() {
        return new_id;
    }

    public void setNew_id(String new_id) {
        this.new_id = new_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNew_img() {
        return new_img;
    }

    public void setNew_img(String new_img) {
        this.new_img = new_img;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    @Override
    public String toString() {
        return "News{" + "new_id=" + new_id + ", title=" + title + ", description=" + description + ", new_img=" + new_img + ", reference=" + reference + '}';
    }
    
    
}
