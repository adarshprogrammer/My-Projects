
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse;
public class myDispatch extends  HttpServlet
{ 

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String u = req.getParameter("user");
        String p = req.getParameter("pass");
        if(p.equals("adarsh@"))
        {
            resp.sendRedirect("https://adarshprogrammer.github.io/My-Projects/");
          
        }
        else
        {
         resp.sendRedirect("login.jsp");
        }  
    }

        
}
