function isDate(input) {
  if (input instanceof Date) {
    // Check if it's a valid Date object
    return !isNaN(input.getTime());
  } else if (typeof input === 'string' || typeof input === 'number') {
    // Try to parse string or number as date
    const date = new Date(input);
    return !isNaN(date.getTime());
  }
  // For all other types, return false
  return false;
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
