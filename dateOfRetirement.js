// Given date of birth in "dd-mm-yy" format
const dobString = "02-04-1999";
const dobParts = dobString.split("-");
const dob = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]); // Months are 0-indexed

// Retirement age of sixty
const retirementAge = 60;

// Calculate retirement date
const retirementDate = new Date(dob);
retirementDate.setFullYear(dob.getFullYear() + retirementAge);

// Format retirement date in "dd-mm-yy" format
const retirementDateString = `${(retirementDate.getDate()-1).toString().padStart(2, '0')}-${(retirementDate.getMonth() + 1).toString().padStart(2, '0')}-${retirementDate.getFullYear().toString().slice(-2)}`;

console.log(`Employee's retirement date: ${retirementDateString}`);