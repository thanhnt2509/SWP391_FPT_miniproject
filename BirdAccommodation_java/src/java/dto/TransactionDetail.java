package dto;

import java.sql.Date;

/**
 *
 * @author RaeKyo
 */
public class TransactionDetail {
    private String trans_detail_id;
    private Bird bird;
    private BookingService booking_service;
    private Date start_date;
    private Date end_date;
    private Float price;
    private Integer payment_status;
    private Integer payment_method;
    private String description;
    private String feedback;

    public TransactionDetail(String trans_detail_id, Bird bird, BookingService booking_service, String description, Date start_date, Date end_date, Float price, Integer payment_method, Integer payment_status, String feedback) {
        this.trans_detail_id = trans_detail_id;
        this.bird = bird;
        this.booking_service = booking_service;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.price = price;
        this.payment_method = payment_method;
        this.payment_status = payment_status;
        this.feedback = feedback;
    }

    public String getTrans_detail_id() {
        return trans_detail_id;
    }

    public void setTrans_detail_id(String trans_detail_id) {
        this.trans_detail_id = trans_detail_id;
    }

    public Bird getBird() {
        return bird;
    }

    public void setBird(Bird bird) {
        this.bird = bird;
    }

    public BookingService getBooking_service() {
        return booking_service;
    }

    public void setBooking_service(BookingService booking_service) {
        this.booking_service = booking_service;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(Integer payment_method) {
        this.payment_method = payment_method;
    }

    public Integer getPayment_status() {
        return payment_status;
    }

    public void setPayment_status(Integer payment_status) {
        this.payment_status = payment_status;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    @Override
    public String toString() {
        return "TransactionDetail{" + "trans_detail_id=" + trans_detail_id + ", bird=" + bird + ", booking_service=" + booking_service + ", description=" + description + ", start_date=" + start_date + ", end_date=" + end_date + ", price=" + price + ", payment_method=" + payment_method + ", payment_status=" + payment_status + ", feedback=" + feedback + '}';
    }
    
    
    
}
