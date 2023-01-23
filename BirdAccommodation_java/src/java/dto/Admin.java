package dto;

/**
 *
 * @author RaeKyo
 */
public class Admin extends Account{
    public static final int ROLE_ID = 0;
    
    private String admin_id;
    
    public Admin(String full_name, String password, String token, String account_img, String phone, String address, String email, Boolean status) {
        super(full_name, password, token, account_img, phone, address, email, status);
    }
    
    
    // admin mutate function goes there
}
