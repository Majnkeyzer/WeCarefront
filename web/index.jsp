<%--
  Created by IntelliJ IDEA.
  User: A0758626
  Date: 3-3-2019
  Time: 9:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>

  <h1>Hallo Wereld Demo</h1>

  <%--<p>The onclick event is used to trigger a function when an element is clicked on.</p>--%>

  <%--<p>Click the button to trigger a function that will output "Hello World" in a p element with id="demo".</p>--%>

  <button onclick="myFunction()">Klik op mij</button>

  <p id="demo"></p>

  <script>
      function myFunction() {
          var h=document.createElement("p");
          var t=document.createTextNode("Hello World");
          h.appendChild(t);
          document.body.appendChild(h);
      }
  </script>

  </body>
  <%--<body><b><% out.println("Hello World!"); %></b></body>--%>
  <%--//$END$--%>
  </html>
