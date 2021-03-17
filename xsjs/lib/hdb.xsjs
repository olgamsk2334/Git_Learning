if(!$.session.hasAppPrivilege("Display")) {
	$.response.setBody("Not Authorized");
	$.response.status = $.net.http.UNAUTHORIZED;
}
else {
	var conn = $.hdb.getConnection();
	var query =`Select * from Colors`;
	var rs = conn.executeQuery(query);
	$.response.setBody(JSON.stringify(rs));
	$.response.contentType = "application/json";
	$.response.status = $.net.http.OK;
	
}