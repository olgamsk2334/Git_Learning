function classes() {
	var body = "";
// жирный шрифт
	body += "<b>True Classes</b></p>";
	//Class Literal	
	class color {
		constructor() {
			// в конструкторе можно не объявлять переменные
			this.red = "#FF0000";
			this.green = "#00FF00";
			this.blue = "#0000FF";
		}

		favoriteColor() {
			var now = new Date();
			if (now.getDay() === 1) { //If Monday
				return this.blue;
			} else {
				return this.red;
			}
		}
	}
	let colors = new color();
	// Тег <span> предназначен для определения строчных элементов документа.
	body +=`<span style="color: ${colors.red}">Red</span></p>`;
	body +=`<span style= "color: ${colors["blue"]}">Blue</span></p>`;
	body +=`<span style= "color: ${colors.green}">Green</span></p>`;
	body +=`<span style= "color: ${colors.favoriteColor()}">Favorite Color</span></p>`;
	body += "<b>Class Constructor</b></p>";
	
	class ColorsTable {
		constructor(ID) {
			var conn = $.db.getConnection();
			var pstmt;
			var rs;
			var query;
			
			query = `SELECT * 
					 FROM "COLORS"
					 WHERE "ID" =  ?`;
			prepareStat = conn.prepareStatement(query);
			prepareStat.setInteger(1,ID);
			rs = prepareStat.executeQuery();
			// перебор значений, полученных в результате запроса
			while(rs.next) {
				// возвращает значение указанного столбца, 1-й столбец типа Integer
				this.ID = rs.getInteger(1);
				// возвращает значение указанного столбца, 2-й столбец типа nvarchar
				this.Color = rs.getNString(2);
			}
			rs.close();
			prepareStat.close();
		}
		}
	
	
	var col = new ColorsTable(2);
	body +=`ColorsTable: ${COLORS.ID} </p>`;
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
}	


	classes();
	
	