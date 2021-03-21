/*
DOM
    getElement
    innerHTML
    onClick
    redirect
    onmouseover
    onchange
    onload
    onmouseover
    onmouseout
*/
function btnClicked() {
    // alert("It was executed successfully")
    document.getElementById("thanksForClick").innerHTML = "<b>Thanks for clicked! Click here to redirect to w3schools</b>";
}

function redirect() {
    window.open("https://www.w3schools.com/js");                //open another tab
    // window.location.href = "https://www.w3schools.com/js";      //open at same tab
}


//without using this keyword, it is necessary to use getElementById(...)
function change() {
    // alert("Change text");
    document.getElementById("mouseMove").innerHTML = "<b>You just passed mouse right here</b>";
}

function back() {
    document.getElementById("mouseMove").innerHTML = "Pass mouse here";
}

//using changeElement(this) at index.html it already pass the element as parameter
function changeElement(element) {
    element.innerHTML = "<b>You just passed mouse right here</b>";
}

function backElement(element) {
    element.innerHTML = "Pass mouse here";
}

function load() {
    alert("page loaded")
}

function changeFunction(element) {
    console.log(element.value);
}