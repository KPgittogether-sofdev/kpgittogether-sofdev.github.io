const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
 
if (isMorning) {
  console.log("Good morning! ");
} else if (isAfternoon) {
  console.log("Good afternoon! ");
} else if (isEvening) {
  console.log("Good evening! ");
} else {
  console.log("Hello!");
}