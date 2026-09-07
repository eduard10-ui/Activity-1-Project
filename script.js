
const loginForm = document.getElementById("loginForm"); 
const signupForm = document.getElementById("signupForm"); 
const loginDiv = document.getElementById("loginDiv"); 
const signupDiv = document.getElementById("signupDiv"); 
const loginButton = document.getElementById("login_button"); 
const signupButton = document.getElementById("signup_button"); 
const messageModal = document.getElementById("messageModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const modalClose = document.getElementById("modalClose");

function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    messageModal.style.display = "flex";
}

modalClose.addEventListener("click", function() {
    messageModal.style.display = "none";
});

messageModal.addEventListener("click", function(event) {
    if (event.target === messageModal) {
        messageModal.style.display = "none";
    }
});

signupForm.addEventListener("submit", function(event) { 
    event.preventDefault(); 

    const username = document.getElementById("signupUsername").value; 
    const email = document.getElementById("signupEmail").value; 
    const password = document.getElementById("signupPassword").value; 
    const confirmPassword = document.getElementById("confirmPassword").value; 
 
    if (username === "" || email === "" || password === "" || confirmPassword === "") { 
        showModal("Oops!","Please complete all fields."); 
        return; 
    } 

    if (username.length < 3) {
        showModal("Invalid Username","Username must be at least 3 characters.");
        return;
    }

    if (username.includes(" ")) {
        showModal("Invalid Username","Username cannot contain spaces.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showModal("Invalid Email","Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        showModal("Invalid Password","Password must be at least 8 characters.");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        showModal("Invalid Password","Password must contain at least one uppercase letter.");
        return;
    }

    if (!/[0-9]/.test(password)) {
        showModal("Invalid Password","Password must contain at least one number.");
        return;
    }
 
    if (password !== confirmPassword) { 
        showModal("Invalid Password","Passwords do not match."); 
        return; 
    } 

    const savedUsername = localStorage.getItem("username");

    if (username === savedUsername) {
        showModal("Username already exists.","Please choose a different username.");
        return;
    }
 
    localStorage.setItem("username", username); 
    localStorage.setItem("email", email); 
    localStorage.setItem("password", password); 
 
    showModal("Sign up successful!", "You have been signed up successfully!"); 
 
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
        showModal("Oops!","Please enter your username and password.");
        return;
    }

    if (savedUsername === null || savedPassword === null) {
        showModal("No account found", "Please sign up first.");
        return;
    }
 
    if (username === savedUsername && password === savedPassword) { 
        showModal("Login successful!", "Welcome, " + username + "!"); 
        loginForm.reset(); 
    } else { 
        showModal("Error", "Invalid username or password."); 
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

function togglePassword(inputId, button) {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        button.textContent = "Show";
    }
}