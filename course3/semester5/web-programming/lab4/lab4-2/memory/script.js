//Шаблон игры "Найди одинаковые картинки"

var arr = []; //массив случайных чисел для генерации картинок
var trabl = 0; //счетчик открытых квадратов
var finish = 0; //подсчет выигрышей

//кликаем на квадратик
function ClickBox(elem, i) {
	var box = document.getElementById(elem.id);
	//var box2 = document.getElementByClassName("div1");
	var c = arr[i-1] + 1;
	box.style.backgroundImage = 'url("images/img' + c + '.jpg")';
	
	if(trabl == 0) trabl = elem;
	else 
	{
		var tr = document.getElementById(trabl.id);
		if(tr.style.backgroundImage == box.style.backgroundImage){ 
			setTimeout(DeleteBox, 300, elem);
		}
		else{
			trabl = elem;
			setTimeout(CloseBox, 300);
		}
	}
}

//закрашиваем угаданные квадраты желтым цветом
function DeleteBox(el){
	var box1 = document.getElementById(el.id);
	var box2 = document.getElementById(trabl.id);
	box1.style.background = 'yellow';
	box2.style.background = 'yellow';
	trabl=0;
	finish++;
	
	if(finish == 3) {
		var span = document.getElementById("span"); 
		span.innerHTML = "Молодец!!!";
	}
	return trabl;
}

//закрываем квадраты
function CloseBox(){
    var chDiv = document.getElementsByClassName("div1");
	for(var i=0; i<chDiv.length; i++)
	{
		if(getComputedStyle(chDiv[i], '').backgroundColor == 'rgba(0, 0, 0, 0)')
			chDiv[i].style.backgroundImage = 'url("images/rub.jpg")';
	}
	trabl=0;
	return trabl;
}

//возвращаем случайное число
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//возвращаем количество одинаковых чисел
function ReturnTr(tr){
	var t=0;
	for(var i=0; i<arr.length; i++)
	{
		if (tr == arr[i]) t++;
	}
	return t;
}

//заполняем массив arr случайными числами
function Start(elem) {
	for(var i=0; i<6; i++)
	{
		var tr = getRandomInt(0, 2);
		
		if (ReturnTr(tr) < 2) arr[i] = tr;
		else i--;
	}
	elem.innerHTML = "";
}
