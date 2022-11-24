let challenge = "30 Days Of JavaScript";
let lengthChallenge = challenge.length;
let upperChallenge = challenge.toUpperCase();
let lowerChallenge = challenge.toLowerCase();
let firstStringChallenge = challenge.substr(0, 2);
let cutChallenge = challenge.substr(3, challenge.length - 1);
let includeChallenge = cutChallenge.includes("Script");
let arrayCutChallenge = cutChallenge.split("");
let arrayChallenge = challenge.split("");
let newString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let newArray = newString.split(",");
let challengePython = challenge.replace("JavaScript", "Python");
let charCodeIndex = challenge.charAt(15);
let charCodeAtIndex = challenge.charCodeAt("J");
let indexFirstA = challenge.indexOf("a");
let indexLastA = challenge.lastIndexOf("a");
let nextString =
  "You cannot end a sentence with because because because is a conjunction";
let lastIndexBecause = nextString.indexOf("because");
let searchWord = nextString.search("because");
let trimChallenge = challenge.trim();
let startWithChallenge = challenge.startsWith("30 Days Of JavaScript");
let endWithChallenge = challenge.endsWith("30 Days Of JavaScript");
let matchChallenge = challenge.match("a");
let concatChallenge = "30 Days of".concat("JavaScript");
let repeatChallenge = challenge.repeat(2);

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(+"10" == 10);
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("on".includes("python") && "on".includes("jargon"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.random(100));
console.log(Math.floor(Math.random() * 50) + 50);
console.log(
  "1 1 1 1 1 \n" +
    "2 1 2 4 8 \n" +
    "3 1 3 9 27 \n" +
    "4 1 4 16 64 \n" +
    "5 1 5 25 125 \n"
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    31,
    23
  )
);

function countWords() {
  let str =
    "Love is the best thing in this world. Some found their love and some are still looking for their love.".toLowerCase();
  let arr = str.split(" ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "love" || arr[i] == "love.") {
      count++;
    }
  }
  return count;
}

function matchWords() {
  let str =
    "You cannot end a sentence with because because because is a conjunction";
  let arr = str.split(" ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match("because")) {
      count++;
    }
  }
  return count;
}

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let replaceSentence = sentence.replace(/[%$@&;#]/g, "");

let numberStr =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let numbers = numberStr.match(/\d+/g).map(Number);
let count = 0;

for (let key in numbers) {
    count += numbers[key];
}
console.log(count);
