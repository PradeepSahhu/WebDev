

alert("This page is activated");
console.log("Console is working very perfectly");

let mainForm = document.getElementById("main");
// let button = document.getElementById("submit");



mainForm.addEventListener('submit', (event) => {
    // event.preventDefault();
    let username = document.getElementsByName("username");
    let firstName = document.getElementsByName("firstName");
    let lastName = document.getElementsByName("lastName");
    let mobileNumber = document.getElementsByName("mobileNumber")[0].value;

    console.log("The Entered username is : "+ username[0].value);
    console.log("The firstName is : "+ firstName[0].value);
    console.log("The last Name is : "+ lastName[0].value);

    let welcomeMessage = document.getElementById('welcome');
    welcomeMessage.innerText = "welcome " + username[0].value + " your name is "+ firstName[0].value + " "+lastName[0].value + " and your mobile numbr is : "+ mobileNumber;
    
// to pass one value...
    // localStorage.setItem('Data',username[0].value);


    // to pass multiple values as in object in form of JSON STring.
    const object = { name: username[0].value,first : firstName[0].value, last: lastName[0].value, mobile: mobileNumber};
    const JsonString = JSON.stringify(object);
    localStorage.setItem("Data",JsonString);


    },false

    

);
