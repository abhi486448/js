const accountId = 14483
let accountEmail = "abhishek@gmail.com"
var accountPasswars = "123@123"

accountCity = "Jabalpur"

// accountId = 2 // Not Allowed

accountEmail = "amit@gmail.com"
accountPasswars = "1243"
accountCity = "Rewa"

console.log(accountId);

let accountState;

/*
Prefer not to use var
bacause of issue in blick and function scope
*/

console.table([accountId, accountEmail, accountPasswars, accountCity, accountState])
