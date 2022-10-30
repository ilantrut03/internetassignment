function validateForm() {
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const username = document.querySelector("[name == username]").value;
    const password = document.querySelector("[name == pswd]").value;
    const email = document.querySelector("[name == email]").value;
    if (firstName.match(/[-a-zA-Z]{1,16}/) == null){
        alert("first name doesn't match regex!");
    }
    if (lastName.match(/[-a-zA-Z]{1,16}/) == null) {
        alert("last name doesn't match regex!");
    }
    if (username.match(/^[a-zA-Z0-9_.]{6,16}$/) == null) {
        alert("username doesn't match regex!");
    }
    if (password.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z!?.\d]{8,16}$/) == null) {
        alert("password doesn't match regex!");
    }
    if (email.match(/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,15}@[a-zA-Z0-9]{1,16}$[a-zA-Z][a-zA-Z0-9\.]{1,22}[a-zA-Z]$(\.com|\.ca|\.qc\.ca)/) == null) {
        alert("email doesn't match regex!");
    }
}


function getName() {
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const username = document.querySelector("[name == username]").value;
    const password = document.querySelector("[name == pswd]").value;
    const email = document.querySelector("[name == email]").value;
    const gender = document.querySelector('[name== gender]').value;
    const pets = document.querySelector('.messageCheckbox:checked').value;
    const placeholder = document.querySelector("[name == comments]").placeholder;
    const name = document.querySelector("[name=age]").value;

    console.log(firstName);
    console.log(lastName);
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(gender);
    console.log(pets);
    console.log(placeholder);
    console.log(name);
}