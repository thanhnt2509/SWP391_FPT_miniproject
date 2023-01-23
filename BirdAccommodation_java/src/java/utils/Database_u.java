package utils;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author RaeKyo
 */
public class Database_u {
    public static final Connection makeConnection() throws Exception{
        Connection con = null;
        String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
        
        String instanceName = "DESKTOP-HN7O125";
        String portNumber = "1433";
        String databaseName = "PlantShop";
        String urls = "jdbc:sqlserver://localhost\\" + instanceName +":" + portNumber + ";databaseName=PlantShop;"
            + "integratedSecurity=false;trustServerCertificate=true;";
        
        Class.forName(driver);
        con = DriverManager.getConnection(urls, "sa", "145632897");
        
        return con;
    }
}
