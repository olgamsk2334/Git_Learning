var conn = $.hdb.getConnection();
var rs;
var query;

query = `SELECT * 
		FROM USERS 
		LIMIT 4`;

rs = conn.executeQuery(query);

for(let i of rs){
	i.FIRSTNAME = i.LASTNAME + ' '+ i.FIRSTNAME;        
}
 
$.response.contentType = "application/json";
$.response.setBody(JSON.stringify(rs));
//$.response.setBody("");
$.response.status = $.net.http.OK;