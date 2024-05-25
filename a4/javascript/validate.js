function validateForm() {
    let errorMessages = '';
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.warning').forEach(function(div) {
        div.innerHTML = '';
    });

    // First Name Validation
    var firstName = document.getElementById("FirstName").value;
    if (firstname === "" || firstname.length > 20 || !/^[A-Za-z]+$/.test(firstname)) {
        document.getElementById("fname").innerHTML = "<p>The firstname is required and cannot be greater than 20 characters.</p>";
        isValid = false;
    }

    // Last Name Validation
    var lastName = document.getElementById("LastName").value;
    if (lastname === "" || lastname.length > 50 || !/^[A-Za-z]+$/.test(lastname)) {
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
    if (!phone || isNaN(phone) || phone.length > 15 || !/^\d+$/.test(phone)) {
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
    if (password.length < 1 || password.length > 7) {
        document.getElementById("passworderror").innerHTML = "<p>Password must be between 1 to 7 characters.</p>";
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
