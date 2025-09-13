const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
/*
prefer not to use var
becaus of issues in block scope and functional scope
*/
//accountId = 2// not allowed

accountEmail = "hi@google.com";
accountPassword = "123459090";
accountCity = "Jodhpur";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

