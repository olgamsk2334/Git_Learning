function loadProc(){
	var conn = $.hdb.getConnection();
	// получили ссылку на процедуру
	var getUserData = conn.loadProcedure("P_USER_NAME");
	// запустили полученную процедуру через ()
	var result = getUserData();
	return result;
}

function getResult(){
	var result = loadProc();
	// результат - в массиве map
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(result));
}

function outputJSON(jsonOut){
	var out = [];
	for(var i=0; i<jsonOut.length; i++){
		out.push(jsonOut[i]);
	}
	$.response.status = $.net.http.OK;
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(out));
}

	// вывод результата сплющенно в одну строку
	function getFlattenedResult(){
		outputJSON(loadProc().EV_USER_NAME ) ;
	}

	function main(){
		var aCmd = $.request.parameters.get("cmd");
		switch(aCmd){
			case "1": 
				getResult();
				break;
			case "2": 
				getFlattenedResult();
				break;
			default:  
				getResult();
				break;
		}
	}

main();

