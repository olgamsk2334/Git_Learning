
function replaceStr(str){
	this.newStr = function(){
	strRep = str.replace('b', 'p').replace('a', 'o');
	return strRep;
	}
}

function getMessage(messageClass, messageNumber, p1, p2, p3, p4){
	var messageText = '';
	var lang = $.session.language.substring(0, 2).toLowerCase();
	
	var conn = $.db.getConnection();
	var query = 'SELECT "DESCRIPTION" FROM "MESSAGES" ' +
        'WHERE "MESSAGECLASS" = ? AND "MESSAGENUMBER" = ? AND "LANGUAGE" = ? ';
	var prepStat = conn.prepareStatement(query);
	prepStat.setString(1, messageClass);
	prepStat.setString(2, messageNumber);
	prepStat.setString(3, lang);
	var rs = prepStat.executeQuery(query);
	
	while(rs.next()) {
		messageText = rs.getNString(1);
	}
	
	if(messageText ==='') {
		lang = 'en';
		prepStat = conn.prepareStatement(query);
		prepStat.setString(1, messageClass);
		prepStat.setString(2, messageNumber);
		prepStat.setString(3, lang);
		rs = prepStat.executeQuery(query);
		while (rs.next()) {
			messageText = rs.getNString(1); 
		}
 	}
 	conn.close();
 	prepStat.close();
 	if (p1) {
 		messageText = messageText.replace("&1", escape(p1.toString()));
 	}
 	if (p2) {
 		messageText = messageText.replace("&2", escape(p2.toString()));
 	}
 	if (p3) {
 		messageText = messageText.replace("&3", escape(p3.toString()));
 	}
 	if (p4) {
 		messageText = messageText.replace("&4", escape(p4.toString()));
 	} 	
 	return messageText;
} 	

	 