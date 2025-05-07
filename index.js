const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");
const options = document.querySelectorAll(".options");

selectField.onclick = function () {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
};

options.forEach(option => {
    option.onclick = function () {
        const name = this.querySelector("p").textContent;
        selectText.textContent = name;
        list.classList.add("hide");
        arrowIcon.classList.remove("rotate");
    };
});
