package dto;

/**
 *
 * @author RaeKyo
 */
public class Customer extends Account{
    public static final int ROLE_ID = 2;
    
    private String customer_id;
    
    public Customer(String full_name, String password, String token, String account_img, String phone, String address, String email, Boolean status) {
        super(full_name, password, token, account_img, phone, address, email, status);
    }
    
    // provider mutate function goes there
}
