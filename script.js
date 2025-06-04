function isDate(input) {
  if (Object.prototype.toString.call(input) === '[object Date]') {
    return !isNaN(input.getTime());
  }
  if (typeof input === 'string' || typeof input === 'number') {
    const d = new Date(input);
    return !isNaN(d.getTime());
  }
  return false;
}


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
