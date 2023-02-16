// // 4. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();
// 5. Виправте код, щоб він працював
// function callAction(action) {
//   action();
// }

// const item = {
//   getQuantity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };
// callAction(item.getQuantity.bind(item));
// 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль
// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   callback(product);
// };
// const showProduct = (product) => {
//   console.log(product);
// };
// makeProduct("apple", 10, showProduct);
// 3. Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"
// const makeShef = (shefName) => {
//   const makeDish = (dish) => {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
//   return makeDish;
// };
// const shef1 = makeShef("Mango");
// shef1("fish");
// shef1("rise");
// const shef2 = makeShef("Poly");
// shef2("meat");
// 7. Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка лічить і виводе в консоль кількість своїх викликів
// const makeCounter = () => {
//   let counter = 0;
//   return () => {
//     counter += 1;
//     console.log(counter);
//   };
// };
// const counter1 = makeCounter();
// counter1();
// counter1();
// counter1();
// counter1();
// const counter2 = makeCounter();
// counter2();
// counter2();
// counter1();
// 8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает
// const savePassword = (password) => {
//   const checkPassword = (newPassword) => {
//     return newPassword === password;
//   };
//   return checkPassword;
// };
// const checkPassword = savePassword(256);
// console.log(checkPassword(256));
// 9. Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.
// const cell = (discount) => {
//   const getResultPrice = (price) => {
//     return price - price * discount;
//   };
//   return getResultPrice;
// };
// const winterSale = cell(0.2);
// console.log(winterSale(500));
// 10. Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`
const User = function ({ userName, age, numberOfPost }) {
  this.userName = userName;
  this.age = age;
  this.numberOfPost = numberOfPost;
};
User.prototype.getInfo = function () {
  return `Пользователю ${this.userName} ${this.age} лет и у него ${this.numberOfPost} публикаций.`;
};
console.log(
  new User({ userName: "Mango", age: 19, numberOfPost: 200 }).getInfo()
);
