<%-- 
    Document   : guest_H
    Created on : Jan 24, 2023, 8:45:42 AM
    Author     : RaeKyo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>HOME</title>
    </head>
    <body>
        <div>
            <!--nav bar-->

            <a href="<c:url value="/guest"/>">DISPATCH COMPANY</a>

            <a class="nav-item nav-link active" href="<c:url value="/guest">
               </c:url>">Home</a>

            <a class="nav-item nav-link" href="<c:url value="/guest?action=login">
               </c:url>">Login</a>

            <a class="nav-item nav-link" href="<c:url value="/guest?action=register">
               </c:url>">Register</a>
        </div>
    </body>
</html>
