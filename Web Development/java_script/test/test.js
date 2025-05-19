const menu = document.getElementById("menu");
const formButton = document.getElementById("form");
const feature = document.getElementById("feature");
const formSection = document.getElementById("formSection");

let menuCounter = 0;
let hoverCounter = 0;
let clickCounter = 0;

menu.onclick = function () {
    menuCounter++;
    clickCounter++;

    if (menuCounter % 2 !== 0) {
        document.getElementById("About").innerHTML = "About";
        document.getElementById("Services").innerHTML = "Services";
    } else {
        document.getElementById("About").innerHTML = "";
        document.getElementById("Services").innerHTML = "";
    }

    document.getElementById("clicks").innerHTML = `Menu Clicks: ${clickCounter} | Link Hovers: ${hoverCounter}`;
};

document.getElementById("About").onmouseover = function () {
    hoverCounter++;
    updateHoverCount();
};
document.getElementById("Services").onmouseover = function () {
    hoverCounter++;
    updateHoverCount();
};

formButton.onclick = function () {
    formSection.style.display = "block";
    document.getElementById("first").innerHTML = '<label>First Name: <input type="text" id="Firstname"></label>';
    document.getElementById("last").innerHTML = '<label>Last Name: <input type="text" id="Lastname"></label>';
    document.getElementById("pass").innerHTML = '<label>Password: <input type="password" id="Password"></label>';
    document.getElementById("validation").innerHTML = '<button type="submit">Submit</button>';
};

function updateHoverCount() {
    document.getElementById("clicks").innerHTML = `Menu Clicks: ${clickCounter} | Link Hovers: ${hoverCounter}`;
}

function checkScript() {
    const firstName = document.getElementById("Firstname").value;
    const lastName = document.getElementById("Lastname").value;
    const password = document.getElementById("Password").value;

    if (firstName === "") {
        document.getElementById("msg").innerHTML = "First Name is required.";
        return false;
    } else {
        document.getElementById("msg").innerHTML = "";
    }

    if (lastName === "") {
        document.getElementById("msg2").innerHTML = "Last Name is required.";
        return false;
    } else {
        document.getElementById("msg2").innerHTML = "";
    }

    if (password === "") {
        document.getElementById("msg3").innerHTML = "Password is required.";
        return false;
    } else {
        document.getElementById("msg3").innerHTML = "";
    }

    alert("Form submitted successfully!");
    return true;
}
