// hamberger
const menubtn = document.querySelector("#menubtn");
const mobilmenue = document.querySelector("#mobilmenue");
menubtn.addEventListener("click", () => {
 mobilmenue.classList.toggle("hidden");
});
mobilmenue;
//

const namee = document.querySelector("#name");
const khnvadgeerror = document.querySelector("#khnvadgeerror");
const khnvadge = document.querySelector("#khnvadge");
const codmlierror = document.querySelector("#codmlierror");
const codmili = document.querySelector("#codmili");
const hamraherror = document.querySelector("#hamraherror");
const shomaretl = document.querySelector("#shomaretl");
const passworderror = document.querySelector("#passworderror");
const inputpassword = document.querySelector("#password");
const reptpassword = document.querySelector("#reptpassword");
const repaterror = document.querySelector("#repaterror");
const nameerror = document.querySelector("#nameerror");
const imgbutten = document.querySelector("#imgbutten");
const submitBtn = document.querySelector("#submitBtn");
const userpassworderror = document.querySelector("#userpassworderror");
const tellerror = document.querySelector("#tellerror");
// ***********************
submitBtn.addEventListener("click", function (event) {
 event.preventDefault();
 if (namee.value.trim() === "") {
  nameerror.classList.remove("hidden");
  namee.classList.add("border-red-500");
 } else {
  nameerror.classList.add("hidden");
  namee.classList.remove("border-red-500");
 }
});
// ****************************
submitBtn.addEventListener("click", function (event) {
 event.preventDefault();
 if (khnvadge.value.trim() === "") {
  khnvadgeerror.classList.remove("hidden");
  khnvadge.classList.add("border-red-500");
 } else {
  khnvadgeerror.classList.add("hidden");
  khnvadge.classList.remove("border-red-500");
 }
});
// ******************* error cod mil*****************
submitBtn.addEventListener("click", function (event) {
 event.preventDefault();
 if (codmili.value.trim() === "") {
  codmlierror.classList.remove("hidden");
  codmili.classList.add("border-red-500");
 } else {
  codmlierror.classList.add("hidden");
  codmili.classList.remove("border-red-500");
 }
});
// *************************

submitBtn.addEventListener("click", function (event) {
 event.preventDefault();
 if (repetpassword.value.trim() === "") {
  userpassworderror.classList.remove("hidden");
  repetpassword.classList.add("border-red-500");
 } else {
  userpassworderror.classList.add("hidden");
  repetpassword.classList.remove("border-red-500");
 }
});
// **********************

submitBtn.addEventListener("click", function (event) {
 event.preventDefault();
 if (userpassword.value.trim() === "") {
  repaterror.classList.remove("hidden");
  userpassword.classList.add("border-red-500");
 } else {
  repaterror.classList.add("hidden");
  userpassword.classList.remove("border-red-500");
 }
});
// **************************

submitBtn.addEventListener("click", function (event) {
 event.preventDefault();
 if (shomaretl.value.trim() === "") {
  tellerror.classList.remove("hidden");
  shomaretl.classList.add("border-red-500");
 } else {
  shomaretl.classList.remove("border-red-500");
  tellerror.classList.add("hidden");
 }
});
// ***************************eye input password********************
const imgbaze = document.querySelector("#imgbaze");
const imgbaste = document.querySelector("#imgbaste");
const toggle = document.querySelector("#toggle");
const userpassword = document.querySelector("#userpassword");
// ****************repetpassword
const togglerept = document.querySelector("#togglerept");
const repetpassword = document.querySelector("#repetpassword");
const imgbaze2 = document.querySelector("#imgbaze2");
const imgbaste2 = document.querySelector("#imgbaste2");
// ***************************88
toggle.addEventListener("click", function () {
 const ispassword = userpassword.type === "password";
 userpassword.type = ispassword ? "text" : "password";
 if (ispassword) {
  imgbaste.classList.add("hidden");
  imgbaze.classList.remove("hidden");
 } else {
  imgbaste.classList.remove("hidden");
  imgbaze.classList.add("hidden");
 }
});
// ****************************
togglerept.addEventListener("click", function () {
 const ispassword = repetpassword.type === "password";
 repetpassword.type = ispassword ? "text" : "password";
 if (ispassword) {
  imgbaste2.classList.add("hidden");
  imgbaze2.classList.remove("hidden");
 } else {
  imgbaste2.classList.remove("hidden");
  imgbaze2.classList.add("hidden");
 }
});
// *******passwor===repatpassword*********
const yesspan = document.querySelector("#yesspan");
const nospan = document.querySelector("#nospan");
submitBtn.addEventListener("click", function () {
 const ispassword1 = userpassword.value.trim();
 const ispassword2 = repetpassword.value.trim();
 yesspan.textContent = "";
 nospan.textContent = "";
 if (ispassword1 === "" || ispassword2 === "") {
  //   nospan.textContent = "  ";
 } else if (ispassword1 === ispassword2) {
  yesspan.textContent = "!پسوردها یکسان هستن";
 } else {
  nospan.textContent = "پسوردها یکسان نیستن";
  repetpassword.classList.add("border-red-500");
  userpassword.classList.add("border-red-500");
 }
});
//  clic buttn
