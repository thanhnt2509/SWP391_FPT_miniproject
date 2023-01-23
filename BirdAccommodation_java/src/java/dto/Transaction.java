package dto;

/**
 *
 * @author RaeKyo
 */
public class Transaction {
    public static final Integer ONGOING = 0;
    public static final Integer SUCCESSFUL = 1;
    public static final Integer CANCELED = 2;
    
    private String trans_id;
    private TransactionDetail detail;
    private Customer customer;
    private Provider provider;
    private Integer status;

    public Transaction(String trans_id, TransactionDetail detail, Customer customer, Provider provider, Integer status) {
        this.trans_id = trans_id;
        this.detail = detail;
        this.customer = customer;
        this.provider = provider;
        this.status = status;
    }

    public String getTrans_id() {
        return trans_id;
    }

    public void setTrans_id(String trans_id) {
        this.trans_id = trans_id;
    }

    public TransactionDetail getDetail() {
        return detail;
    }

    public void setDetail(TransactionDetail detail) {
        this.detail = detail;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Transaction{" + "trans_id=" + trans_id + ", detail=" + detail + ", customer=" + customer + ", provider=" + provider + ", status=" + status + '}';
    }
    
    
}
