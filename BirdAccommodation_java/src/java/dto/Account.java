package dto;

/**
 *
 * @author RaeKyo
 */
public abstract class Account {
    public static final Boolean IS_BANED = false;
    public static final Boolean IS_NOT_BANNED = true;

    private String full_name;
    private String password;
    private String email;
    private Boolean status;
    private String phone;
    private String address;
    private String account_img;
    private String token;

    public Account(String full_name, String password, String token, String account_img, String phone, String address, String email, Boolean status) {
        this.full_name = full_name;
        this.password = password;
        this.token = token;
        this.account_img = account_img;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.status = status;
    }



    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAccount_img() {
        return account_img;
    }

    public void setAccount_img(String account_img) {
        this.account_img = account_img;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Account{" + "full_name=" + full_name + ", password=" + password + ", token=" + token + ", account_img=" + account_img + ", phone=" + phone + ", address=" + address + ", email=" + email + ", status=" + status + '}';
    }

    

        
}
