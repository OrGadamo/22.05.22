function getRandomUntillTen() {
  return Math.floor(Math.random() * 11);
}
function getRandomUntillNum(scope) {
  return Math.floor(Math.random() * (scope + 1));
}
function getPrompt(text) {
  return prompt("please enter " + text);
}
function checkUserGuess() {
  var correct = getRandomUntillTen();
  if (+getPrompt("a number from 0 to 10") == correct) {
    alert("your guess is right");
  } else {
    alert("too bad, maybe next time :)");
  }
  alert("the correct number is " + correct);
}
// checkUserGuess();
function getRandomArray(length, limit) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (limit + 1)));
  }
  return arr;
}
// console.log(getRandomArray(10, 100));
function getMaxWithRandom() {
  return Math.max(+getPrompt("number"), Math.floor(Math.random() * 11));
}
// console.log(getMaxWithRandom());
function getMinFromUser(promptnum) {
  var minnum = "";
  for (var i = 0; i < promptnum; i++) {
    minnum = Math.min(minnum, +getPrompt("number"));
  }
  return minnum;
}
// console.log(getMinFromUser(5));
function getMinMaxByRandom() {
  var myrandom = getRandomUntillNum(100);
  //   console.log(myrandom);
  if (myrandom % 2 == 0) {
    return Math.min(+getPrompt("number"), myrandom);
  }
  return Math.max(+getPrompt("number"), myrandom);
}
// console.log(getMinMaxByRandom());
function popRandomArayWithRandomLength() {
  var length = Math.floor(Math.random() * 365);
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 874));
  }
  return arr;
}
// console.log(popRandomArayWithRandomLength());
function printRandomEntry(arr) {
  console.log(arr[Math.floor(Math.random() * arr.length)]);
}
// printRandomEntry(getRandomArray(5, 10));
function getRandomCharUpper(myname) {
  var index = Math.floor(Math.random() * myname.length);
  return (
    myname.substring(0, index) +
    myname[index].toUpperCase() +
    myname.substring(index + 1)
  );
}
// console.log(getRandomCharUpper("gadamo"));
function weirdTask() {
  var username = [];
  var ages = [];
  for (var i = 0; i < 2; i++) {
    username.push(getPrompt("name"));
    ages.push(+getPrompt("his age"));
  }
  if (username[0][0] == username[1][0]) {
    console.log("The random number is " + Math.floor(Math.random() * 10));
  }
  if (
    username[0][username[0].length - 1] == username[1][username[1].length - 1]
  ) {
    console.log(username[0][username[0].length - 1]);
  } else {
    console.log(ages[0], ages[1]);
  }
}
// weirdTask();
function printPartTextFromRandom(text) {
  console.log(text.substring(0, Math.floor(Math.random() * 6)));
}
// printPartTextFromRandom("Hello World");
function printWithRandom() {
  var usernum = +getPrompt("number");
  var myrandom = Math.floor(Math.random() * (usernum + 1));
  if (usernum % 3 == 0) {
    for (var i = 0; i < myrandom; i++) {
      console.log(myrandom);
    }
  } else {
    console.log(myrandom * Math.PI);
  }
}
// printWithRandom();
