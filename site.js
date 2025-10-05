const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const secretKey = "It's a secret to everybody.";
const secretMessage = "Brewers in 5"

document,addEventListener('DOMContentLoaded', () => {
  try {
    localStorage.setItem(secretKey, secretMessage);
    console.log('Secret message stored! Key: "${secretKey}"');
    console.log('Message: "${secretMessage}" ');
  } catch (e) {
    console.error("Error:", e);
  }
   
})
 
if (isMorning) {
  console.log("Good morning! ");
} else if (isAfternoon) {
  console.log("Good afternoon! ");
} else if (isEvening) {
  console.log("Good evening! ");
} else {
  console.log("Hello!");
}
