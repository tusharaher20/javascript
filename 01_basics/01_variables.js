const UserId = 32323;
let UserName = "Tushar Aher";
var UserEmail = "tusharaher@google.com";
userEmail = "tushar@outlook.com";
let UserState; //the variable whose values are not set are stored as undefined

console.log(
    UserId
)
console.table([UserId, UserName, UserEmail, userEmail, UserState])

/*Prefer not to use var, because of issue in block scope and functional scope */