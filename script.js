var username = prompt("What is your name?");

var agecheck;

var above18 = confirm("Are you 18 and above?");

if (above18) {
    agecheck = "Yay! I am an adult"
} else {
    agecheck = "Nay I am still a baby"
}

console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5 ** 3);
console.log("I am the best" * 3);

var checkVariable = "Ibrahim";
checkVariable = 3;
checkVariable = true;
console.log(checkVariable);

var num = 0
console.log(num) //0
num++
console.log(num); //1
num--
console.log(num);

var countdown = 10;
for (countdown > 0; countdown--;) {
    console.log(countdown)
}

console.log {"Musa went to market and bought $(5 + 5}"};

console.log("Hello and welcome " + username + "! " + agecheck);
console.log('The present sum is ${sum} and it adds ${numbers[i] when the loop runs ${i} times')


<body>
<form name ="loginForm" onsubmit="return validateForm(event) ">
    <label for="Name">Name:</label>
    <input type="text" name="name" placeholder="example@example.com" />
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="********" />
    <button type="submit">Login </button>
    <button type="reset">cancel</button>
    </form>
</body>

