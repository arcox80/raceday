let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrant = Math.floor(Math.random() * 2);
let runnersAge = Math.floor(Math.random() * 76 + 5); 
//console.log(`Race number is ${raceNumber}; Early registration is ${earlyRegistrant}; Age is ${runnersAge}`);

if (runnersAge > 18 && earlyRegistrant == true) {
  raceNumber += 1000;
}

if (runnersAge > 18 && earlyRegistrant == true) {
  console.log(`Thank you for registering early! Your number is ${raceNumber}, and you will race at 9:30am.`);
} else if (runnersAge > 18 && earlyRegistrant == false) {
  console.log(`Your number is ${raceNumber}, and you will race at 11:00am.`);
} else {
  console.log(`Tell your parents your number is ${raceNumber}, and you will race at 12:30pm.`);
}
