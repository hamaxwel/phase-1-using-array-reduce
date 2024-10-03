const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Use reduce to sum up all the values in the array
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // accumulate the sum of the batteries
}, 0); // initial value for the accumulator is 0

console.log(totalBatteries); // Should log 36

