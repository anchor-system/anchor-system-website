// document.getElementById("tone_collection").innerHTML = generateRandomToneCollection().join(" ");
var now = new Date();
var numStrings = 6
var fullDaysSinceEpoch = Math.floor(now/8.64e7);
document.getElementById("string_of_the_day").innerHTML = (fullDaysSinceEpoch % numStrings) + 1
