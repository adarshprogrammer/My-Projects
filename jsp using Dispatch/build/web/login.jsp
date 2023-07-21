<%-- 
    Document   : login
    Created on : Jul 21, 2023, 12:44:17 AM
    Author     : Student
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registration Form</title>
         <style>
       #style{font-family:"arial"}
    </style>
    </head>
   
    <body bgcolor="lightyellow">
        <div id="style">
         <form action="myDispatch" method="POST">
             <fieldset>
            <legend style="">Login User..</legend>
                    <label for="user">UserId:</label>
                    <input type="text" id="user" name="user" placeholder="UserId Type Here...." required><br><br>
                    <label for="pass">Password:</label>
                    <input type="password" id="pass" name="pass" placeholder="Password Type Here...." required><br><br>
                    <input type="submit" value="Submit">
                    <input type="reset" value="reset">
        </fieldset>
        </form>
        </div>
      
      
    </body>
</html>
