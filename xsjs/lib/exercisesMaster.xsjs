function fillSessionInfo(){
var body = "";
body = JSON.stringify({
	"session":[{ "UserName": $.session.getUsername(), "Language":$.session.language}]
});

$.response.contentType = "application/json";
$.response.setBody(body);
$.response.status = $.net.http.OK;
}

var param = $.request.parameters.get("cmd");
switch(param){
	case "error":
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody("Invalid Request Method");
	break; 
	default: 
	fillSessionInfo();

}