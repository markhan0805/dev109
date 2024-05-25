function validateForm() {
    let errorMessages = '';
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.warning').forEach(function(div) {
        div.innerHTML = '';
    });

    // First Name Validation
    var firstName = document.getElementById("FirstName").value;
    if (firstName === "" || firstName.length > 20) {
        document.getElementById("fname").innerHTML = "<p>The firstname is required and cannot be greater than 20 characters.</p>";
        isValid = false;
    }

    // Last Name Validation
    var lastName = document.getElementById("LastName").value;
    if (lastName === "" || lastName.length > 50) {
        document.getElementById("lname").innerHTML = "<p>The lastname is required and cannot be greater than 50 characters.</p>";
        isValid = false;
    }

    // Email Validation
    var email = document.getElementById("Email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailerror").innerHTML = "<p>Invalid email format.</p>";
        isValid = false;
    }

    // Phone Validation
    var phone = document.getElementById("Phone").value;
    var phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phone.match(phoneRegex)) {
        document.getElementById("phoneerror").innerHTML = "<p>Invalid phone number.</p>";
        isValid = false;
    }

    // Username Validation
    var username = document.getElementById("Username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("usernameerror").innerHTML = "<p>Username is required and cannot exceed 12 characters.</p>";
        isValid = false;
    }

    // Password Validation
    var password = document.getElementById("Password").value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,7}$/;
    if (!password.match(passwordRegex)) {
        document.getElementById("passworderror").innerHTML = "<p>Password must be 1-7 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.</p>";
        isValid = false;
    }

    // Address Validation
    var address = document.getElementById("Address").value;
    if (address === "") {
        document.getElementById("addresserror").innerHTML = "<p>Address is required.</p>";
        isValid = false;
    }

    // City Validation
    var city = document.getElementById("City").value;
    if (city === "") {
        document.getElementById("cityerror").innerHTML = "<p>City is required.</p>";
        isValid = false;
    }

    // State Validation
    var state = document.getElementById("State").value;
    if (state === "") {
        document.getElementById("stateerror").innerHTML = "<p>Please select a state.</p>";
        isValid = false;
    }

    // Country and Zip Code Validation
    var country = document.getElementById("Country").value;
    var zipCode = document.getElementById("ZipCode").value;
    if (country === "USA" && (zipCode === "" || !/^\d{5}$/.test(zipCode))) {
        document.getElementById("zipcodeerror").innerHTML = "<p>Zip Code is required and must be 5 digits.</p>";
        isValid = false;
    }

    return isValid;
}
