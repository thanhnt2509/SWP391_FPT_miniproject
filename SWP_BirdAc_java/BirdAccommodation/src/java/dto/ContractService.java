
package dto;

/**
 *
 * @author RaeKyo
 */
public class ContractService {
    private String contract_service_id;
    private String service_name;
    private String description;
    private Float service_price;

    public ContractService(String contract_service_id, String service_name, String description, Float service_price) {
        this.contract_service_id = contract_service_id;
        this.service_name = service_name;
        this.description = description;
        this.service_price = service_price;
    }

    public String getContract_service_id() {
        return contract_service_id;
    }

    public void setContract_service_id(String contract_service_id) {
        this.contract_service_id = contract_service_id;
    }

    public String getService_name() {
        return service_name;
    }

    public void setService_name(String service_name) {
        this.service_name = service_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getService_price() {
        return service_price;
    }

    public void setService_price(Float service_price) {
        this.service_price = service_price;
    }

    @Override
    public String toString() {
        return "ContractService{" + "contract_service_id=" + contract_service_id + ", service_name=" + service_name + ", description=" + description + ", service_price=" + service_price + '}';
    }
    
    
}
