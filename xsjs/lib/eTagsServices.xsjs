var resBody = {};

function readColors(){
	var res;
	var body = "";
	var conn = $.hdb.getConnection();
	try{
		res = conn.executeQuery(`select * from COLORS where ID=2`);
		conn.close();
		var	color = res[0].COLOR;
		resBody.readColors = color.toString();
	}
	catch(err){
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
		$.response.setBody("Error in READ");
	}
}

function  deleteColors(){
	var conn = $.hdb.getConnection();
	try {
	var res = conn.executeQuery(`Delete from COLORS where ID=3`);
	conn.commit();
	conn.close();
	}
	catch(err){
	    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
    	$.response.setBody("Error in DELETE");	
	}
}


function processRequest() {
try{
	switch($.request.method)
	{
		case $.net.http.GET:
			readColors();
			$.response.status = $.net.http.OK;
			$.response.setBody("READ succsessful  " + resBody.readColors);
			break;
		case $.net.http.DEL:
			deleteColors();
			$.response.status = $.net.http.OK;
			$.response.setBody("DELETE succsessful");
			break;
		default:
			$.response.status = $.net.http.METHOD_NOT_ALLOWED;
			$.response.setBody("Wrong request method");
			break;
	}
}	
catch(e){
	$.response.status =  $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody = ("Failed to execute action: " + e.toString());
}
}

processRequest();