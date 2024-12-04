// function logItems(friends) {
//   for (let i = 0; i < friends.length; i++) {
//     console.log(`${i + 1} - ${friends[i]}`);
//   }
// }

// const friends = ["Mango", "Poly", "Ajax"];
// console.log(logItems(friends));

// function calculateEngravingPrice(message, pricePerWord) {
//   const arrayWords = message.split(" ");
//   const price = arrayWords.length * pricePerWord;
//   return price;
// }

// let word = "I love You";
// const pricePerWord = 10;
// console.log(calculateEngravingPrice(word, pricePerWord));

// console.log(undefined); // Це щоб розрізняти де які завдання в консолі

// // console.log(friends[2].length);

// function findLongestWord(string) {
//   const arrayString = string.split(" ");
//   let longWord = "";
//   for (let i = 0; i < arrayString.length; i++) {
//     if (longWord.length < arrayString[i].length) {
//       longWord = arrayString[i];
//     }
//   }
//   return longWord;
// }
// const longestWord = "My name is Tymofii";
// console.log(findLongestWord(longestWord));

// console.log(undefined);

// function formatString(string) {
//   if (string.length > 40) {
//     const stringSlice = string.slice(0, 41);
//     return `${stringSlice}...`;
//   }
// }

// const formatingString =
//   "Чого мені тяжко, чого мені нудно, Чого серце плаче, ридає, кричить, Мов дитя голодне? Серце моє трудне, Чого ти бажаєш, що в тебе болить? Чи пити, чи їсти, чи спатоньки хочеш? Засни, моє серце, навіки засни, Невкрите, розбите,— а люд навісний Нехай скаженіє… Закрий, серце, очі.";
// console.log(formatString(formatingString));

// function checkForSpam(message) {
//   const arrayMessage = message.split(" ");
//   for (let i = 0; i < arrayMessage.length; i++) {
//     if (arrayMessage.includes("spam")) {
//       return true;
//     }
//     if (arrayMessage.includes("message")) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const spamMessage = "Hello world i spam message";
// console.log(checkForSpam(spamMessage));

function messageSum(message, array, total) {
  array = message.split(" ");
  for (let i = 0; i < array.length; i++) {
    total = total + Number(array[i]);
  }
  return total;
}

let input = prompt("Ведіть число");
const numbers = [];
let total = 0;
console.log(messageSum(input, numbers, total));
