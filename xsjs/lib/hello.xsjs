function getInfo(){
var conn = $.hdb.getConnection();
var query = `select CURRENT_USER from "DUMMY"`;
var res = conn.executeQuery(query);
var currentUser = res[0].CURRENT_USER;

var greeting = 'Hello  ' + $.session.getUsername() + ' Database User: ' + currentUser;
$.response.contentType = 'text/plain; charset=utf-8';
$.response.setBody(greeting);
}
getInfo();