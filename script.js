const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginDiv = document.getElementById("loginDiv");
const signupDiv = document.getElementById("signupDiv");
const loginButton = document.getElementById("login_button");
const signupButton = document.getElementById("signup_button");
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please complete all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Sign up successful!");

    signupForm.reset();
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";

});


loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("Login successful! Welcome, " + username + "!");
    } else {
        alert("Invalid username or password.");
    }
});


signupButton.addEventListener("click", function() {

    loginDiv.style.display = "none";
    signupDiv.style.display = "block";

});

loginButton.addEventListener("click", function() {

    signupDiv.style.display = "none";
    loginDiv.style.display = "block";

});