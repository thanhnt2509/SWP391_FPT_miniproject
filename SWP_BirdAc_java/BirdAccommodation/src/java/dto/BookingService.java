package dto;

/**
 *
 * @author RaeKyo
 */
public class BookingService {
    public static final Boolean ON_USING = true;
    public static final Boolean ON_STOPING = false;
    
    private String booking_service_id;
    private String service_name;
    private Boolean status;
    private Float price;
    private String description; 

    public BookingService(String booking_service_id, String service_name, Float price, String description, Boolean status) {
        this.booking_service_id = booking_service_id;
        this.service_name = service_name;
        this.price = price;
        this.description = description;
        this.status = status;
    }

    public String getBooking_service_id() {
        return booking_service_id;
    }

    public void setBooking_service_id(String booking_service_id) {
        this.booking_service_id = booking_service_id;
    }

    public String getService_name() {
        return service_name;
    }

    public void setService_name(String service_name) {
        this.service_name = service_name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "BookingService{" + "booking_service_id=" + booking_service_id + ", service_name=" + service_name + ", price=" + price + ", description=" + description + ", status=" + status + '}';
    }
    
    
}
