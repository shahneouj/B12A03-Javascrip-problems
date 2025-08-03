/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var increaseRate = 5;
for (var i = 1; i <= experience; i++) {
  var startingSalary = startingSalary + startingSalary * (increaseRate / 100);
  var newSalary = startingSalary;

}
console.log(newSalary.toFixed(2));
