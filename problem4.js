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

