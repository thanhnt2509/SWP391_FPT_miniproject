package dto;

/**
 *
 * @author RaeKyo
 */
public class Contract {
    private String cons_id;
    private String provider_id;
    private ContractService contract_service;
    private Float contract_price;

    public Contract(String cons_id, String provider_id, ContractService contract_service, Float contract_price) {
        this.cons_id = cons_id;
        this.provider_id = provider_id;
        this.contract_service = contract_service;
        this.contract_price = contract_price;
    }

    public String getCons_id() {
        return cons_id;
    }

    public void setCons_id(String cons_id) {
        this.cons_id = cons_id;
    }

    public String getProvider_id() {
        return provider_id;
    }

    public void setProvider_id(String provider_id) {
        this.provider_id = provider_id;
    }

    public ContractService getContract_service() {
        return contract_service;
    }

    public void setContract_service(ContractService contract_service) {
        this.contract_service = contract_service;
    }

    public Float getContract_price() {
        return contract_price;
    }

    public void setContract_price(Float contract_price) {
        this.contract_price = contract_price;
    }

    @Override
    public String toString() {
        return "Contract{" + "cons_id=" + cons_id + ", provider_id=" + provider_id + ", contract_service=" + contract_service + ", contract_price=" + contract_price + '}';
    }
    
    
}
