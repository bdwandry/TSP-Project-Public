<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<% @language="vbscript" %>
<!--#include virtual="/logon/_private/logon.inc"-->
<html>
<head><title>Password-Protected Page</title></head>
<body>
<h3>Password-Protected Page</h3>
<p>You are logged on as: 
<%
  If Len(Session("UID")) = 0 Then
    Response.Write "<b>You are not logged on.</b>"
  Else
    Response.Write "<b>" & Session("UID") & "</b>"
  End If
%>
</p>
<p><a href="default.asp">Back to default</a>
</body>
</html>