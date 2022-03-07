const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
Array.from(document.querySelectorAll("nav a")).forEach((val,ind) => {
  val.class = "italic";
  let navItems = Object.values(siteContent.nav);
  val.innerText = navItems[ind];
} );
document.querySelector("#logo-img").src = "../mocks/img/logo.png";
document.querySelector("h1").innerText = Object.values(siteContent.cta)[0];
document.querySelector(".cta-text button").innerText=Object.values(siteContent.cta)[1];
document.querySelector("#cta-img").src = "../mocks/img/cta.png";
document.querySelectorAll(".text-content h4").forEach( (val,ind) => {
  let navArray = Object.values(siteContent["main-content"]).filter( (val,ind) => ind % 2 === 0);
  val.innerText = navArray[ind];
} );
document.querySelectorAll(".text-content p").forEach( (val,ind) => {
  let contentArray = Object.values(siteContent["main-content"]).filter( (val,ind) => ind % 2 === 1);
  val.innerText = contentArray[ind];
} );
document.querySelector("#middle-img").src = "../mocks/img/accent.png";
document.querySelector(".contact h4").innerText = siteContent.contact["contact-h4"];
Array.from(document.querySelectorAll(".contact p")).forEach( (val,ind) => {
  let contactArray = Object.values(siteContent.contact);
  val.innerText = contactArray[ind + 1];
} );
document.querySelector("footer a").class = "bold";
document.querySelector("footer a").innerText = "Copyright Great Idea! 2021";

console.log('project wired!')
