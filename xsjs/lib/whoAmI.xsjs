var conn = $.hdb.getConnection();
var query = `SELECT CURRENT_USER 
				FROM DUMMY`;
var res = conn.executeQuery(query);
var currentUser = res[0].CURRENT_USER;

query = `SELECT SESSION_CONTEXT('APPLICATIONUSER') "APPLICATION_USER"
			FROM "DUMMY"`;
res = conn.executeQuery(query);
var applicationUser = res[0].APPLICATION_USER;

$.response.contentType = "text/html; charset=utf-8";
$.response.setBody(`${currentUser} </br> ${applicationUser}` );