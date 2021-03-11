function objectsBasic() {
	var body = "";
	body +="<b>Object Literals</b></p>";
	//Object Literal
	// коллекция map ключ: значение 
	var colors = {
		red: "#FF0000",
		blue: "#0000FF",
		green: "#00FF00",
		// значением ключа является тело функции
		favoriteColor: () => {
			var now = new Date();
			if (now.getDay()===1){ //If Monday
				return this.blue;
			} else {
				return this.red;
			}
		}
	};
	 body += `<span style = "color: ${colors.red}">Red</span></p>`;
	 body += `<span style = "color: ${colors.blue}">Blue</span></p>`;
	 body += `<span style = "color: ${colors.green}">Green</span></p>`;
	 // в данном случае если после favouriteColor не указать тело функции, то функция не 
	 // не запстится,а выведется ее тело. НУЖНО указать ()
	 body += `<span slyle = "color :${colors.favoriteColor()}">Favorite Color</span></p>`;
	 
	 body += "<b>References</b></p>";
	//References 
	//regular data types are assigned by value
	var value1 = "First Value";
	var value2 = value1;
	body += `Value1 = ${value1} </p>`;
	body += `Value2 = ${value2} </p>`;
	value1 = "New Value";
	body += `New Value1 = ${value1} </p>`;
	
	//objects are assigned by reference
	var value3 = {
		val: "Value 3"
	};
	var value4 = value3;
	body += `Value3 = ${value3.val} </p>`;
	body += `Value4 = ${value4.val} </p>`;
	
	body += "<b>Object Constructor</b></p>";
	//Object Constructor
	function getColors(ID){
		var conn = $.db.getConnection();
		var prepStat ;
		var res;
		var query;
		query = `SELECT * 
				FROM "COLORS"
				WHERE ID = ?`;
		prepStat = conn.prepareStatement(query);
		prepStat.setInteger(1, ID);
		res = prepStat.executeQuery();
			// перебор значений, полученных в результате запроса
			while(res.next()) {
				// возвращает значение указанного столбца, 1-й столбец типа Integer
				this.ID = res.getInteger(1);
				// возвращает значение указанного столбца, 3-й столбец типа nvarchar
				this.Number = res.getNString(3);
			}
			res.close();
			prepStat.close();
			
			this.value5 = function() {
				return this.Number ;
			};
			
			
	}
	// такой вызов функции делает ее объектом
	var func = new getColors(2);
	
	body += `<span slyle = "color: ${func.value5()}">Color from table </span></p>`;
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
}

objectsBasic();