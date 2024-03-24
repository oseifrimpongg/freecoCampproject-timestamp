// Unix timestamp as a string
const unixTimestampString = "555-555-555"

// Creating a Date object using a Unix timestamp string
const dateFromTimestampString = new Date(unixTimestampString);

// Displaying the created date
console.log(dateFromTimestampString.toString()); // Outputs a human-readable format of the date


console.log(Number(unixTimestampString))
console.log(Math.floor(new Date(unixTimestampString).getTime()))
