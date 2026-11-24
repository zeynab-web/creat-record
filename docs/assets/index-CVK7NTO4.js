(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/creat-record/assets/hero-CLDdwZDr.png`,t=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20width='32'%20height='32'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'/%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'/%3e%3c/svg%3e`,n=`/creat-record/assets/vite-BF8QNONU.svg`;function r(e){let t=0,n=n=>{t=n,e.innerHTML=`Count is ${t}`};e.addEventListener(`click`,()=>n(t+1)),n(0)}document.querySelector(`#app`).innerHTML=`
<section id="center">
  <div class="hero">
    <img src="${e}" class="base" width="170" height="179">
    <img src="${t}" class="framework" alt="JavaScript logo"/>
    <img src="${n}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${n}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${t}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`,r(document.querySelector(`#counter`));var i=document.querySelector(`#menubtn`),a=document.querySelector(`#mobilmenue`);i.addEventListener(`click`,()=>{a.classList.toggle(`hidden`)});var o=document.querySelector(`#name`),s=document.querySelector(`#khnvadgeerror`),c=document.querySelector(`#khnvadge`),l=document.querySelector(`#codmlierror`),u=document.querySelector(`#codmili`);document.querySelector(`#hamraherror`);var d=document.querySelector(`#shomaretl`);document.querySelector(`#passworderror`),document.querySelector(`#password`),document.querySelector(`#reptpassword`);var f=document.querySelector(`#repaterror`),p=document.querySelector(`#nameerror`);document.querySelector(`#imgbutten`);var m=document.querySelector(`#submitBtn`),h=document.querySelector(`#userpassworderror`),g=document.querySelector(`#tellerror`);m.addEventListener(`click`,function(e){e.preventDefault(),o.value.trim()===``?(p.classList.remove(`hidden`),o.classList.add(`border-red-500`)):(p.classList.add(`hidden`),o.classList.remove(`border-red-500`))}),m.addEventListener(`click`,function(e){e.preventDefault(),c.value.trim()===``?(s.classList.remove(`hidden`),c.classList.add(`border-red-500`)):(s.classList.add(`hidden`),c.classList.remove(`border-red-500`))}),m.addEventListener(`click`,function(e){e.preventDefault(),u.value.trim()===``?(l.classList.remove(`hidden`),u.classList.add(`border-red-500`)):(l.classList.add(`hidden`),u.classList.remove(`border-red-500`))}),m.addEventListener(`click`,function(e){e.preventDefault(),S.value.trim()===``?(h.classList.remove(`hidden`),S.classList.add(`border-red-500`)):(h.classList.add(`hidden`),S.classList.remove(`border-red-500`))}),m.addEventListener(`click`,function(e){e.preventDefault(),b.value.trim()===``?(f.classList.remove(`hidden`),b.classList.add(`border-red-500`)):(f.classList.add(`hidden`),b.classList.remove(`border-red-500`))}),m.addEventListener(`click`,function(e){e.preventDefault(),d.value.trim()===``?(g.classList.remove(`hidden`),d.classList.add(`border-red-500`)):(d.classList.remove(`border-red-500`),g.classList.add(`hidden`))});var _=document.querySelector(`#imgbaze`),v=document.querySelector(`#imgbaste`),y=document.querySelector(`#toggle`),b=document.querySelector(`#userpassword`),x=document.querySelector(`#togglerept`),S=document.querySelector(`#repetpassword`),C=document.querySelector(`#imgbaze2`),w=document.querySelector(`#imgbaste2`);y.addEventListener(`click`,function(){let e=b.type===`password`;b.type=e?`text`:`password`,e?(v.classList.add(`hidden`),_.classList.remove(`hidden`)):(v.classList.remove(`hidden`),_.classList.add(`hidden`))}),x.addEventListener(`click`,function(){let e=S.type===`password`;S.type=e?`text`:`password`,e?(w.classList.add(`hidden`),C.classList.remove(`hidden`)):(w.classList.remove(`hidden`),C.classList.add(`hidden`))});var T=document.querySelector(`#yesspan`),E=document.querySelector(`#nospan`);m.addEventListener(`click`,function(){let e=b.value.trim(),t=S.value.trim();T.textContent=``,E.textContent=``,e===``||t===``||(e===t?T.textContent=`!پسوردها یکسان هستن`:(E.textContent=`پسوردها یکسان نیستن`,S.classList.add(`border-red-500`),b.classList.add(`border-red-500`)))});