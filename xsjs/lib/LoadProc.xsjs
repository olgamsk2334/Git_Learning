function LoadProc(){
	var conn = $.hdb.getConnection();
	var procLoad = conn.loadProcedure("P_USER_NAME");
	var execProc = procLoad();
	var users = execProc['EV_USER_NAME'];
	var resultSets = execProc["$resultSets"];
	
	$.response.contentType = "application/json";
	$.response.status = $.net.http.OK;
	$.response.setBody(JSON.stringify(resultSets));
}
LoadProc();