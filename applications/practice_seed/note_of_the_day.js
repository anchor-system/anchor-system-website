// document.getElementById("tone_collection").innerHTML = generateRandomToneCollection().join(" ");
var now = new Date();
var fullDaysSinceEpoch = Math.floor(now/8.64e7);
document.getElementById("note_of_the_day").innerHTML = (fullDaysSinceEpoch % 12) + "*"
