const date = new Date(); // 正しくnew Date()を使う
const year = date.getFullYear();
const month = date.getMonth(); // 月は0から始まるので注意
const day = date.getDate();

console.log(`${year}年${month + 1}月${day}日`); // 書式を指定して出力ß