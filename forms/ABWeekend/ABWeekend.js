
let Weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let Weekend = ["Saturday", "Sunday"]

let Day = prompt("Please enter day of the week");

if (Weekday.includes(Day)) {
  alert("That is a weekday");
} else if (Weekend.includes(Day)) {
  alert("That day is a weekend");
} else {
  alert(`Your input ${Day} was not a capitalized, full name of day.`)
}