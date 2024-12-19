let gosha = {
  name: "Гоша",
  age: 11,
  hobby: ["игры", "плаванье", "музыка"],
  friend: ["Кира", "Вася", "Петя"]
};

let friends = [
  { name: "Кира", age: 10, hobby: ["рисование", "музыка"] },
  { name: "Вася", age: 12},
  { name: "Петя", age: 11, hobby: ["музыка", "игры", "рисование"] }
];

let goshaJSON = JSON.stringify(gosha);
let friendsJSON = JSON.stringify(friends);

console.log("Гоша:", goshaJSON);
console.log("Друзья Гоши:", friendsJSON);

let jsons = JSON.stringify([gosha, ...friends]);
let hobbies = [];
JSON.parse(jsons, (key, value) => {
if (value && value.hobby) {
  hobbies.push(...value.hobby);
}
return value;
});
let uniqueHobbies = [...new Set(hobbies)];
console.log("Все хобби:", uniqueHobbies);

let hobbieCount = 0;
JSON.parse(jsons, (key, value) => {
if (value && value.hobby && value.hobby.length > 0) {
  hobbieCount++;
}
return value;
});
console.log("Кол-во детей с хобби:", hobbieCount);

let totalAge = 0;
JSON.parse(jsons, (key, value) => {
if (value && value.age) {
  totalAge += value.age;
}
return value;
});
const avgAge = totalAge / 4;
console.log("Средний возраст:", avgAge);

let count = 0;
JSON.parse(jsons, (key, value) => {
  if (key === 'friend' && Array.isArray(value)) {
      value.forEach(friendName => {
          const friend = friends.find(friend => friend.name === friendName);
          if (friend && friend.age > 10 && friend.hobby && friend.hobby.includes("музыка")) {
              count++;
          }
      });
  }
  return value;
});
console.log("Друзья Гоши старше 10 и увлекающихся музыкой:", count);