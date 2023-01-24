package dto;

/**
 *
 * @author RaeKyo
 */
public class Provider extends Account{
    public static final int ROLE_ID = 1;

    private String provider_id;
    
    public Provider(String full_name, String password, String token, String account_img, String phone, String address, String email, Boolean status) {
        super(full_name, password, token, account_img, phone, address, email, status);
    }
    
    // provider mutation function goes there
    
}
