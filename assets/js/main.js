let selectField = document.querySelector("#selectField");
let selectFlag = document.querySelector("#selectFlag");
let flagList = document.querySelectorAll('.icon-flag-list')
let options = document.querySelectorAll(".options");
let list = document.querySelector("#list");
let arrowIcon = document.querySelector("#arrow-icon");


selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (let i = 0; i < options.length; i++) {
  options[i].onclick = function () {
    console.log(options[i]);
    console.log(selectFlag)
    console.log(flagList[i].currentSrc)

    selectFlag.setAttribute('src', `${flagList[i].currentSrc}`)
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

