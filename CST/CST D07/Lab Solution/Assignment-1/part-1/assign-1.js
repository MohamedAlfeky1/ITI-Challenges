// a- Find all images in page by two ways
console.log(document.images);
var allImgs = document.getElementsByTagName("img");
console.log(allImgs);

// b- Find all options for City drop down list
console.log(document.getElementsByName("City")[0]);

// c- Find all rows for second table in page
var secondTable = document.querySelectorAll("table.bPink tr");
console.log(secondTable);

// d- Find all elements that contain class name fontBlue
var allFontBlue = document.querySelectorAll(".fontBlue");
console.log(allFontBlue);

// --------------------------------------------------------------------------------------------- //
// a- Get first anchor inside the second table then change its' href property to training.com and it's text to "Training"
var firstAnchor = document.getElementsByTagName("a")[0];
firstAnchor.href = "https://www.training.com";
firstAnchor.innerText = "Training";
console.log(firstAnchor);

// b- Find last image and change its borders to : solid pink 2px
var lastImg = document.getElementsByTagName("img")[1];
lastImg.style.border = "2px solid pink";
console.log(lastImg);

// c- create Javascript function to Find all checkboxes (checked) in userData form and alert their values
function alertCheckedBox() {
  var submitBtn = document.querySelector("#UserData input[type=submit]");
  var userDataForm = document.querySelectorAll(
    "#UserData input[type=checkbox]"
  );

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    for (var i = 0; i < userDataForm.length; i++) {
      if (userDataForm[i].checked) {
        alert("Checked Value Is: " + userDataForm[i].value);
      }
    }
  });
}
alertCheckedBox();

// d- Find element with id value "example" then change it's background color to pink
var exampleIdEles = document.querySelectorAll("#example");
for (var i = 0; i < exampleIdEles.length; i++) {
  exampleIdEles[i].style.background = "pink";
}

// --------------------------------------------------------------------------------------------- //
