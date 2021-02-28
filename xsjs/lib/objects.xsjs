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
	 body += `<span style ="color: ${colors.red}">Red</span></p>`;
	 body += `<span style ="color: ${colors.blue}">Blue</span></p>`;
	 body +=`<span style = "color: ${colors.green}">Green</span></p>`;
	 // в данном случае если после favouriteColor не указать тело функции, то функция не 
	 // не запстится,а выведется ее тело. НУЖНО указать ()
	 body +=`<span slyle = "color :${colors.favouriteColor()}">Favorite Color</span></p>`;
	 
	 body += "<b>References</b></p>";
	//References 
	//regular data types are assigned by value
	var value1 = "First Value";
	var value2 = value1;
	
	
	
		
}
 