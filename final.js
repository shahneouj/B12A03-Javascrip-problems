/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here

console.log(area / 2);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
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
    console.log(i + " " + "- medicine");
  } else {
    console.log(i + " " + "- rest");
  }

}


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var charArray = fileName.split('')[0];
var fileFormat = fileName.split('.')[1];
var fileFormatName = [".pdf", ".docx"]

if (charArray == "#" || fileFormatName.includes("." + fileFormat)) {
  console.log("Store");
} else {
  console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var email = student.name.concat(student.roll).concat(".").concat(student.department).concat("@ph.ac.bd")
console.log(email);


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