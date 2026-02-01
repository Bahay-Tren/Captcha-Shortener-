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
