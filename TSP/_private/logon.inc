<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%
  ' Do not cache this page.
  Response.CacheControl = "no-cache"

  ' Define the name of the users table.
  Const USERS_TABLE  = "tblUsers"
  ' Define the path to the logon page.
  Const LOGON_PAGE   = "/logon/logon.asp"
  ' Define the path to the logon database.
  Const MDB_URL      = "/logon/_private/logon.mdb"

  ' Check to see whether you have a current user name.
  If Len(Session("UID")) = 0 Then
    ' Are you currently on the logon page?
    If LCase(LOGON_PAGE) <> LCase(Request.ServerVariables("URL")) Then
      ' If not, set a session variable for the page that made the request...
      Session("REFERRER") = Request.ServerVariables("URL")
      ' ...and redirect to the logon page.
      Response.Redirect LOGON_PAGE
    End If
  End If

  ' This function checks for a username/password combination.
  Function ComparePassword(UID,PWD)
    ' Define your variables.
    Dim strSQL, objCN, objRS
    ' Set up your SQL string.
    strSQL = "SELECT * FROM " & USERS_TABLE & _
      " WHERE (UID='" & ParseText(UID) & _
      "' AND PWD='" & ParseText(PWD) & "');"
    ' Create a database connection object.
    Set objCN = Server.CreateObject("ADODB.Connection")
    ' Open the database connection object.
    objCN.Open "driver={Microsoft Access Driver (*.mdb)}; dbq=" & _
      Server.MapPath(MDB_URL) & "; uid=admin; pwd="
    ' Run the database query.
    Set objRS = objCN.Execute(strSQL)
    ' Set the status to true/false for the database lookup.
    ComparePassword = Not(objRS.EOF)
    ' Close your database objects.
    Set objRS = Nothing
    Set objCN = Nothing
  End Function

  ' This function restricts text to alpha-numeric data only.
  Function ParseText(TXT)
    Dim intPos, strText, intText
    For intPos = 1 TO Len(TXT)
      intText = Asc(Mid(TXT,intPos,1))
      If (intText > 47 And intText < 58) Or _
         (intText > 64 And intText < 91) Or _
         (intText > 96 And intText < 123) Then
          strText = strText & Mid(TXT,intPos,1)
      End if
    Next
    ParseText = strText
  End Function
%>