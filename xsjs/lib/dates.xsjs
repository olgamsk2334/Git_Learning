function datesBasic(){
	var body = "";
	var now = new Date();
	var next_month = new Date();
	
	body += `Now: ${now} </p>`;
	body += `Now UTC: ${now.toUTCString()} </p>`;
	body += `Now Date String: ${now.toDateString()} </p>`;
	body += `Now Locale Date String: ${now.toLocaleDateString()} </p>`;	
	body += `Now Locale Time String: ${now.toLocaleTimeString()} </p>`;
	body += `Now Locale String: ${now.toLocaleString()} </p>`;
	body += `Now ISO String: ${now.toISOString()} </p>`;	
	body += `Now JSON String: ${now.toJSON()} </p>`;
	body += `Now Year: ${now.getFullYear()} </p>`;
	body += `Now Month: ${now.getMonth()} </p>`;
	body += `Now Day of Week: ${now.getDay()} </p>`;
	body += `Now Day of Month: ${now.getDate()} </p>`;
	body += `Now number of milliseconds since midnight Jan 1, 1970: ${now.getTime()} </p>`;
	body += `Now Hours: ${now.getHours()} </p>`;
	body += `Now Minutes: ${now.getMinutes()} </p>`;
	body += `Now Seconds: ${now.getSeconds()} </p>`;
	
	next_month.setDate(now.getDate()+30);
	body +=`${next_month}</p>` ;
	/* let- локальная переменная с огран областью видимости ;
	Объект Intl является пространством имён для API, 
	предосталяющим форматирование чисел и дат со временем.*/
	/* объявляем объекты с определенным форматом,
	далее форматируем объект в строкус текущей датой*/
	let dateUS = new Intl.DateTimeFormat("en-US");
	let dateDE = new Intl.DateTimeFormat("de-DE");
	body += `US: ${dateUS.format(new Date())}, DE:${dateDE.format(new Date())} </p>`;
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
	
}

datesBasic();