package servlet;


import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author RaeKyo
 */

@WebServlet(name = "guestPageServlet", urlPatterns = "/guest")
public class GuestServ extends HttpServlet{
    private static String path = "/WEB-INF/jsp/view/guest/";
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        String action = req.getParameter("action");
        switch(action){
            
            
            case "/":
            default: gListService(req, resp);
        }
    }
    
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        String action = req.getParameter("action");
        switch(action){
            case "login":
                gLogin(req, resp);
                break;
            
            case "/":
            default: gListService(req, resp);
        }
    }
    
    
    /**
     * List all provider service on homepage
     * @param req
     * @param resp
     * @throws ServletException
     * @throws IOException 
     */
    protected void gListService(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        RequestDispatcher dp = req.getRequestDispatcher(path + "home.jsp");
        dp.forward(req, resp);
    }
 
    
    
    /**
     * Allow customer to create account
     * @param req
     * @param resp
     * @throws ServletException
     * @throws IOException 
     */
    protected void gLogin(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
         
    }
}
