import { rgbColor, World } from "./helper.js";

let myTitle = document.getElementById("title");
let wraper = document.querySelector("#root");

let myForm = document.createElement("form");
myForm.setAttribute("method", "get");
wraper.appendChild(myForm);

let iRed = document.createElement("input");
iRed.setAttribute("type", "number");
iRed.setAttribute("placeholder", "RED value");
iRed.id = "red";

let iGreen = document.createElement("input");
iGreen.setAttribute("type", "number");
iGreen.setAttribute("placeholder", "GREEN value");
iGreen.id = "green";

let iBlue = document.createElement("input");
iBlue.setAttribute("type", "number");
iBlue.setAttribute("placeholder", "BLUE value");
iBlue.id = "blue";

myForm.append(iRed, iGreen, iBlue);

let submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "button");
submitBtn.setAttribute("value", "Submit");
myForm.appendChild(submitBtn);

submitBtn.addEventListener("click", () => {
  myTitle.style.backgroundColor = rgbColor();

  iRed.value = "";
  iGreen.value = "";
  iBlue.value = "";
});

let select = document.createElement("select");
myForm.appendChild(select);
select.after(submitBtn);

for (let i = 0; i < World.length; i++) {
  select.innerHTML += `<option value = "${World[i].toLowerCase}">${World[i]}</option>`;
}

myTitle.innerHTML += ` <span> Israel </span>`;
let country = document.querySelector("span");
select.addEventListener("change", () => {
  country.textContent = select.options[select.selectedIndex].text;
});
