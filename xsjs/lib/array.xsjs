function arrayBasic() {
	var colors = [ "<font color=\"red\">Red</font>", 
				 "<font color=\"green\">Green</font>",
				"<font color=\"blue\">Blue</font>"
		];
	var extColors = [ "<font color = \"black\">Black</font>",
				"<font color=\"white\">White</font>",
				"<font color=\"orange\">Orange</font>",
				"<font color=\"purple\">Purple</font>"
		]
	var body = "";	
	// выводим весь массив
	body = `Complete Array: ${colors.toString()} </p>`;
	// выводим элемент массива
	body += `First Element ${colors[0]}  </p>`;
	// количество элементов в массиве, длину
	body += `Number of Elements: ${colors.length.toString()}</p>`;
	// позиция указанного элемента в a функции indexOf, отсчитанная от нуля
	body += `Position of Blue: ${colors.indexOf("Blue").toString()}</p>`;
	// loop по массиву
	body += "Loop of Elements: ";
	for (let color in colors){
		body +=  color + "</p>"
	}
	// объединение двух массивов
	colors = colors.concat (extColors);
	body += `Combined Array: ${colors.toString()} </p>`;
	// восходящая сортировка
	colors.sort()
	body+= `Sort Ascending: ${colors.toString()}</p>`;
	// обратная сортировка
	colors.reverse()
	body += `Reverse Sort: ${colors.toString()}</p>`;
	//  копирование с заданной позиции slice(start,end)
	var slColors = colors.slice(2,4);
	body += `Slice out the 3rd and 4th element: ${slColors.toString()} </p>`;
	// вставка элементов в заданную позицию splice(insertion Index, number of elements, value1, ...)
	var splColors = colors.splice(2,2, "<font color=\"malachite\">Malachite</font>", "<font color =\"fallow\">Fallow</font>");
	body +=  `Add two values at position 3: ${colors.toString()} </p>`;
	// добавить элемент в начало массива - unshift
	colors.unshift("<font color=\"brown\">Brown</font>");
	body += `Add element to the beginning of the array: ${colors.toString()}</p>`;
	
	$.response.status = $.net.http.OK;
	$.response.contentType = "text/html";
	$.response.setBody(body);
	
}

arrayBasic();