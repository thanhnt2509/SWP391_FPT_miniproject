package dto;

/**
 *
 * @author RaeKyo
 */
public class Bird {
    private String bird_id;
    private Customer customer;
    private String type;
    private Integer age;
    private String bird_img;

    public Bird(String bird_id, Customer customer, String type, Integer age, String bird_img) {
        this.bird_id = bird_id;
        this.customer = customer;
        this.type = type;
        this.age = age;
        this.bird_img = bird_img;
    }

    public String getBird_id() {
        return bird_id;
    }

    public void setBird_id(String bird_id) {
        this.bird_id = bird_id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getBird_img() {
        return bird_img;
    }

    public void setBird_img(String bird_img) {
        this.bird_img = bird_img;
    }

    @Override
    public String toString() {
        return "Bird{" + "bird_id=" + bird_id + ", customer=" + customer + ", type=" + type + ", age=" + age + ", bird_img=" + bird_img + '}';
    }
    
    
}
