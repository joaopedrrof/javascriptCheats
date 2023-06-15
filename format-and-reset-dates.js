// Split date into an array
let next_sent_date = "03/05/2023"
var dateSplit = next_sent_date.split("/");
console.log([{DD: dateSplit[0],MM: dateSplit[1],YYYY: dateSplit[2]}])

let DD = dateSplit[0];
let MM = dateSplit[1];
let YYYY = dateSplit[2];

//If the current month is December, we have to switch year as well
//If the current month is NOT December, we can keep the same year and move to the next month

if (MM == "12") {
MM = "01";
var yearOutput = +YYYY + 1;
} else {
// Fixing # digits issue
MM = +MM + 1;
  if (MM < 10) {
MM = "0"+MM;
} else {
MM = MM;
}
var yearOutput = YYYY;
}

console.log([{nextMonth: MM, yearOutput: yearOutput}]);
let finalDate = `${DD}/${MM}/${yearOutput}`;
console.log([{finalDate}]);