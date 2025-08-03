/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here

console.log(area / 2);


/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here

if (money <= 9999) {
  console.log("Chocolate");

} else if (money <= 10000) {
  console.log("Cycle");
} else {
  console.log("Laptop");

}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (let i = 1; i <= lastDay; i++) {
  if (i % 3 == 0) {
    console.log(`${i}-medicine`);
  } else {
    console.log(`${i}-rest`);
  }

}
