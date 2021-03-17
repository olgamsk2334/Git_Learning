function helloWorld() {
	var sOutput = "Hello world!<br></br>";
	
	var conn = $.hdb.getConnection();
	var query = "select * from DUMMY";
	var res = conn.executeQuery(query);
	
	if(res.length<1) {
		$.response.setBody("Failed");
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	}
	else {
		sOutput += "This is the response from my SQL: " + res[0].DUMMY;
		$.response.setBody(sOutput);
	}
	conn.close();
}
helloWorld();