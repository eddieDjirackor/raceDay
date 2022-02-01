let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && isEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isEarly) {
  console.log(`Your race number is ${raceNumber} and your race starts at 9:30am`);
} else if (runnerAge > 18 && !isEarly) {
  console.log(`Your race number is ${raceNumber} and your race starts at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your race starts at 12:30am`);
} else {
  console.log('Visit the registrattion desk');
}