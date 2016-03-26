var div
var text = {
	wrapper: function() {
		div = document.createElement('div');
		div.classList.add('wrapper');
		document.body.appendChild(div);
		div.innerHTML = '<h1>Тест по программированию</h1>';
	},
	quetion_1: function () {
		var newDiv = document.createElement('div');
		newDiv.classList.add('test');
		div.appendChild(newDiv);
		newDiv.innerHTML = '<h2>1.  Вопрос №1</h2>' 
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №1</p>'
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №2</p>'
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №3</p>'
	},
	quetion_2: function () {
		var newDiv = document.createElement('div');
		newDiv.classList.add('test');
		div.appendChild(newDiv);
		newDiv.innerHTML = '<h2>2.  Вопрос №2</h2>' 
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №1</p>'
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №2</p>'
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №3</p>'
	},
	quetion_3: function () {
		var newDiv = document.createElement('div');
		newDiv.classList.add('test');
		div.appendChild(newDiv);
		newDiv.innerHTML = '<h2>3.  Вопрос №3</h2>' 
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №1</p>'
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №2</p>'
		+ '<p><input type="checkbox" name="" value=""> Вариант ответа №3</p>'
	},
	button: function () {
		var newDiv = document.createElement('p');
		newDiv.classList.add('button');
		div.appendChild(newDiv);
		newDiv.innerHTML = '<input type="submit" name="" value="Проверить мои результаты">'		
	},
}
text.wrapper();
text.quetion_1();
text.quetion_2();
text.quetion_3();
text.button();