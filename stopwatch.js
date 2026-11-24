let minuts = document.querySelector("#minutsspan");
let second = document.querySelector("#secondspan");
let milisecond = document.querySelector("#milisecondspan");
// #########
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const end = document.querySelector("#end");
const reset = document.querySelector("#reset");
// 888888888888888888
let minutsspan = 0;
let secondspan = 0;
let milisecondspan = 0;
let interval;
// *************
start.addEventListener("click", starttimer);
stop.addEventListener("click", stoptimer);
end.addEventListener("click", endtimer);
reset.addEventListener("click", resettimer);
// ########3
function starttimer() {
 updatetimer();
 start.disabled = true;
}
function stoptimer() {}
function endtimer() {}
function resettimer() {}
// *************
function updatetimer() {
 milisecondspan++;
 if (milisecondspan === 1000) {
  milisecondspan = 0;
  secondspan++;
  if (secondspan === 60) {
   secondspan = 0;
   minutsspan++;
  }
 }
 displaytimer();
}
//
console.log("مقدلرالمنت تو", minutsspan);
function displaytimer() {
 milisecondspan.textContent = milisecond;
 secondspan.textContent = second;
 minutsspan.textContent = minuts;
}
