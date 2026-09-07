
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

    if (username.length < 3) {
        alert("Username must be at least 3 characters.");
        return;
    }

    if (username.includes(" ")) {
        alert("Username cannot contain spaces.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return;
    }

    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        return;
    }
 
    if (password !== confirmPassword) { 
        alert("Passwords do not match."); 
        return; 
    } 

    const savedUsername = localStorage.getItem("username");

    if (username === savedUsername) {
        alert("Username already exists.");
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
 
    if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
    }

    if (savedUsername === null || savedPassword === null) {
        alert("No account found. Please sign up first.");
        return;
    }
 
    if (username === savedUsername && password === savedPassword) { 
        alert("Login successful! Welcome, " + username + "!"); 
        loginForm.reset(); 
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

