//1
function max(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  function min(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    return min;
  }
  
//2
  function avg(grades) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += grades[i];
    }
    return sum / 10;
  }


//3
  function fact(n) {
    if (n === 0) {
      return 1;
    }
    else {
      return n * fact(n - 1);
    }
  }

//4
  function sumOfDigits(n) {
    let h = 0;
    let d = 0;
    let e = 0;
    h = Math.floor(n/100);
    d = Math.floor(n % 100 / 10);
    e = n % 10;
    return h + d + e;
  }
  
//5
  function sortNumbers(numbers) {
    for (let i = 1; i < numbers.length; i++) {
      let x = numbers[i];
      let j = i;
      while (j>0 && numbers[j-1] > x) {
        numbers[j] = numbers[j-1];
        j--;
      }
      numbers[j] = x;
    }
    return numbers;
  }
 
//6
  function countA(text) {
    let count = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
      if (text[i] === 'а') {
        count++;
      }
    }
    return count;
  }
 
//7
  function countWords(sentence) {
    let words = sentence.toLowerCase().split(" ");
    words.sort();
    let count = 0;
    let current = "";
    let wordCount = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] == current) {
          wordCount++;
      }
      else {
        if (wordCount > 1) {
            count += wordCount;
        }
            current = words[i];
            wordCount = 1;
        }
      }
    if (wordCount > 1) {
      count += wordCount;
    }
    return count;
  }

  let nums = [9, 8, 2, 3, 0, -2];
  document.write("Задание 1<br>");
  document.write("Массив: 9 8 2 3 0 -2<br>")
  document.write("Max: " + max(nums)+"<br>");
  document.write("Min" + min(nums)+"<br>");
  document.write("================<br>");

  let gr = [5, 5, 5, 4, 3, 4, 3, 5, 5, 5];
  document.write("Задание 2<br>");
  document.write("Оценки: 5 5 5 4 3 4 3 5 5 5<br>");
  document.write("Avg: " + avg(gr) + "<br>");
  document.write("================<br>");

  let a = 6;
  document.write("Задание 3<br>");
  document.write("Число: " + a + "<br>");
  document.write("Факториал " + a + ":" + fact(a) + "<br>");
  document.write("================<br>");

  let b = 548;
  document.write("Задание 4<br>");
  document.write("Число: " + b + "<br>");
  document.write("Сумма цифр: " + sumOfDigits(b) + "<br>");
  document.write("================<br>");

  let nums2 = [14.1, 15.5, 16.1, 20.1, 14.9];
  document.write("Задание 5<br>");
  document.write("Массив: 14.1, 15.5, 16.1, 20.1, 14.9<br>");
  document.write("Отсортированный массив: " + sortNumbers(nums2) + "<br>");
  document.write("================<br>");

  let text = "Авокадо";
  document.write("Задание 6<br>");
  document.write("Текст: " + text + "<br>");
  document.write("Кол-во букв А: " + countA(text) + "<br>");
  document.write("================<br>");
  
  let text2 = "Синий белый красный синий красный синий";
  document.write("Задание 7<br>");
  document.write("Текст: " + text2 + "<br>");
  document.write("Кол-во одинаковых слов: " + countWords(text2) + "<br>");
  document.write("================<br>");
