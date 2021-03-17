 $.import("./xsjslib/messages.xsjslib");
 
function main(){
	var body = "";
	var msgLib = $.xsjslib.messages;
	// вызывается как объект
	var myObj = new msgLib.replaceStr("hhjj b weq b ffbbaaa bbbppp oo");
	body += `${myObj.newStr()} </p>`;
	body += `${msgLib.getMessage('SEPM_BO_COMMON','046', 2, 7, 8, 0)} </p>`;  //параметры передаются из вне при ошибке для ее дальнейшего отображения                   
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
}

main();










