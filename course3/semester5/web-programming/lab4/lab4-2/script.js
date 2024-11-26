// Шаблон игры "Найди одинаковые картинки"

var arr = []; // массив случайных чисел для генерации картинок
var trabl = 0; // счетчик открытых квадратов
var finish = 0; // подсчет выигрышей
var gameStarted = false; // флаг для запуска игры

// Кликаем на квадратик
function ClickBox(elem, i) {
  if (!gameStarted) return; // игнорируем клики, если игра не началась

  var box = document.getElementById(elem.id);

  if (box.classList.contains('open')) return; // игнорируем повторные клики

  var c = arr[i - 1] + 1;
  box.style.backgroundImage = 'url("images/img' + c + '.jpg")';
  box.classList.add('open');

  if (trabl === 0) {
    trabl = elem;
  } else {
    var tr = document.getElementById(trabl.id);

    if (tr.style.backgroundImage === box.style.backgroundImage) {
      setTimeout(DeleteBox, 100, elem);
      document.getElementById('correctSound').play(); // звук совпадения
    } else {
      trabl = elem;
      setTimeout(CloseBox, 100);
      document.getElementById('errorSound').play(); // звук ошибки
    }
  }
}

// Закрашиваем угаданные квадраты желтым цветом
function DeleteBox(el) {
  var box1 = document.getElementById(el.id);
  var box2 = document.getElementById(trabl.id);
  box1.style.background = 'yellow'; 
  box2.style.background = 'yellow';
  trabl = 0;
  finish++;

  if (finish === 8) {
    var span = document.getElementById('span');
    span.innerHTML = 'Молодец!!!';
    document.getElementById('winSound').play(); // звук победы
  }
}

// Закрываем квадраты
function CloseBox() {
  var chDiv = document.getElementsByClassName('div1');
  for (var i = 0; i < chDiv.length; i++) {
    if (getComputedStyle(chDiv[i], '').backgroundColor === 'rgba(0, 0, 0, 0)') {
      chDiv[i].style.backgroundImage = 'url("images/rub.jpg")';
      chDiv[i].classList.remove('open');
    }
  }
  trabl = 0;
}

// Возвращаем случайное число
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Возвращаем количество одинаковых чисел
function ReturnTr(tr) {
  var t = 0;
  for (var i = 0; i < arr.length; i++) {
    if (tr === arr[i]) t++;
  }
  return t;
}

// Заполняем массив arr случайными числами
function Start(elem) {
  arr = []; // Очищаем массив для новой игры
  finish = 0; // Сбрасываем счетчик выигрышей
  gameStarted = true; // Разрешаем клики
  document.getElementById('startSound').play(); // звук начала игры
  elem.innerHTML = '';
  var chDiv = document.getElementsByClassName('div1');
  for (var i = 0; i < chDiv.length; i++) {
    chDiv[i].style.backgroundImage = 'url("images/rub.jpg")';
    chDiv[i].style.backgroundColor = 'transparent'; // Сбрасываем цвет
    chDiv[i].classList.remove('open'); // Сбрасываем открытый статус
  }
  for (var i = 0; i < 16; i++) {
    var tr = getRandomInt(0, 7); 
    if (ReturnTr(tr) < 2) arr[i] = tr;
    else i--;
  }
}