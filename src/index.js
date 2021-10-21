/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数の上書き";
// console.log(val1);

// //var変数は際宣言可能
// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数の上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "letの再宣言";

// const val3 ="const変数";
// console.log(val3);

//const変数は上書き不可能
// val3 = "const変数の上書き";

// const val3 = "const変数の再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "Yuta",
//   age : 24
// };
// val4.name = "グー";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "chicken";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name ="Yuta";
//  const age = 24;
// 私の名前はYutaです。年齢は２4歳です

//従来の方法
// const massage1 = "私の名前は"+ name +"です。年齢は" + age + "歳です";
// console.log(massage1);

//テンプレート文字列を用いた方法
// const massage2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(massage2);

/**
 * アロー関数
 */
//従来の関数
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile ={
//   name : "Yuta",
//   age : 24
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["Yuta", 24];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello("Yuta");
