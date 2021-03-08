// Returns the day of the week for the given date
function dayName(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                     "Thursday", "Friday", "Satday"];
	return daysOfTheWeek[date.getDay()];                 
}

// Returns a greeting for the given date
function greeting(date) {
	return `Welcome! today is ${dayName(date)}`;
}