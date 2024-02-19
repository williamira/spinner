const spinnerKeys = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let timerCount = 100;

for (const keys of spinnerKeys) { // to loop through the spinnerKeys array
  timerCount += 200; // increment 200 milliseconds every loop
  setTimeout(() => {
    process.stdout.write(`\r${keys}  `); // print out each key to loop
  }, timerCount); // increments each loop to run function 200 milliseconds later than the one previous
}

// setTimeout(() => {
//   process.stdout.write('\r/  ')
// }, 300);


// setTimeout(() => {
//   process.stdout.write('\r-  ')
// }, 500);


// setTimeout(() => {
//   process.stdout.write('\r\\  ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  ')
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/  ')
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  ')
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ')
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|  ')
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\n')
// }, 1750);