Ang Captcha Shortener ay para sa madaling paglagay ng captcha.
Para hindi ka mapapagod dahil sa pag type ng data- tuoad ng data-sitekey.
Eto ay compatible sa reCAPTCHA v2, hCaptcha, Cloudflare Turnstile at Friendly Captcha.

Paano gamitin:
* Copy mo itong koda na ito
```HTML
<script src="https://cdn.jsdelivr.net/gh/Bahay-Tren/Captcha-Shortener-@main/main.js"></script>
<captcha-shortener type="h-captcha" frontkey="key">
```
* O pwede din self hosted
```JavaScript
class CaptchaShortener extends HTMLElement{
  connectedCallback(){
    const type =
    this.getAttribute("type") || "null";
    const frontkey =
    this.getAttribute("frontkey") || "ERROR";
    const callnormal =
    this.getAttribute("callnormal") || "myFunction";
    const callerror =
    this.getAttribute("callerror") || "myErrorFunction";
    const size =
    this.getAttribute("size") || "normal";
    const lang = 
    this.getAttribute("lang") || "en";
    const theme = 
    this.getAttribute("theme") || "dark";
    
    this.innerHTML = `
    <div class="${type}" data-sitekey="${frontkey}" data-theme="${theme}" data-callback="${callnormal}" data-error-callback="${callerror}" data-size="${size}" data-language="${lang}"></div>`;
  }
}
customElements.define("captcha-shortener", 
CaptchaShortener);
```
----------------------------
Glossary sa shortener na ito

* Type = ay ang type ng captcha mo halimbawa: h-captcha 

* Frontkey = ang sitekey mo

* Callnormal = callback mo

* Callerror = callback error mo

* Size = Pwede normal, flexible, o compact

* Lang = language (pero sa Turnstile ito para sa reCAPTCHA o hCaptcha dapat gainto: ?hl=tl)

* Theme = Dark o Light