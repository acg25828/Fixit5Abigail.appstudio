let spring = ["Mar", "Apr", "May"]
let summer = ["Jun", "Jul", "Aug"]
let fall = ["Sept", "Oct", "Nov"]
let winter = ["Dec", "Jan", "Feb"]

let month = prompt("Enter the first three letters of a month, capitalized.");
if (spring.includes(month)) {
  alert("That month is Spring");
} else if (summer.includes(month)) {
  alert("That month is Summer");
} else if (fall.includes(month)) {
 
  alert("That month is Fall");
} else if (winter.includes(month)) {
  alert("That month is Winter");
} else {
  alert("Try again")
}