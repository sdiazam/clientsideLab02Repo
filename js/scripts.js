// constants for query selector
const mystudentId = document.getElementById("myStudentId");
const myBody = document.getElementById("myBody");


// function to change bg color from user input and add student id
function changeCustomColor() {
    var customNumber = parseInt(document.getElementById("customNumber").value);

    mystudentId.textContent = 1226379;
    console.log(customNumber);

    if (customNumber < 0 || customNumber > 100) {
        myBody.style.backgroundColor = "red";
    } else if (customNumber >= 0 && customNumber <= 20) {
        myBody.style.backgroundColor = "green";
    } else if (customNumber > 20 && customNumber <= 40) {
        myBody.style.backgroundColor = "blue";
    } else if (customNumber > 40 && customNumber <= 60) {
        myBody.style.backgroundColor = "orange";
    } else if (customNumber > 60 && customNumber <= 80) {
        myBody.style.backgroundColor = "purple";
    } else if (customNumber > 80 && customNumber <= 100) {
        myBody.style.backgroundColor = "yellow";
    }


}

// function to change bg color from random no.
function changeRandomColor() {
    var randomColor = Math.floor(Math.random() * 100);
    if (randomColor < 0 || randomColor > 100) {
        myBody.style.backgroundColor = "red";
    } else if (randomColor >= 0 && randomColor <= 20) {
        myBody.style.backgroundColor = "green";
    } else if (randomColor > 20 && randomColor <= 40) {
        myBody.style.backgroundColor = "blue";
    } else if (randomColor > 40 && randomColor <= 60) {
        myBody.style.backgroundColor = "orange";
    } else if (randomColor > 60 && randomColor <= 80) {
        myBody.style.backgroundColor = "purple";
    } else if (randomColor > 80 && randomColor <= 100) {
        myBody.style.backgroundColor = "yellow";
    }
}

// Array to store image src locations
var imageSource = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];


// function to generate options for select list
function addList() {
    var selectList = document.getElementById("imageSelect");

    // Loop through the imageSource array
    for (var i = 0; i < imageSource.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = "Image " + (i + 1);
        selectList.appendChild(option);
    }
}


// function to change image
function changeImage() {
    var selectList = document.getElementById("imageSelect");
    var selectedIndex = selectList.selectedIndex;

    if (selectedIndex != 0) {
        var selectedImage = imageSource[selectedIndex - 1]; // Adjusting for the "choose bitch…" option
        document.getElementById("images").src = selectedImage;
    }
}

// event listeners for on click event of buttons and select
document.querySelector(".custColor").addEventListener("click", changeCustomColor);
document.querySelector(".randColor").addEventListener("click", changeRandomColor);

// event listeners for on change event of select
document.getElementById("imageSelect").addEventListener("change", changeImage);
addList();