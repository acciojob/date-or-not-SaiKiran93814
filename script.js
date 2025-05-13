var isDate = function (input) {
  //   write your code here
return (input instanceof Date && !isNaN(input)) ||
         ((typeof input === "string" || typeof input === "number") && !isNaN(new Date(input)));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
