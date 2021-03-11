$.response.contentType = "text/html";
var conn = $.hdb.getConnection();
var query = `select * from COLORS`;
var res = conn.executeQuery(query);

if (res.length <1) {
	$.response.setBody("Failed to retrieve data");
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
} 
else {
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(res));
	var sOutput = "This is the response from my SQL: " + res[0].COLOR;
	$.response.setBody(sOutput);
}
conn.close();
