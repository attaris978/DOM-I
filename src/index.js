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
//Note on image locations: my images were inaccessible at the locations listed in the site data JSON simulation thing, so I entered them manually
const navAnchors = Array.from(document.querySelectorAll("nav a"));
navAnchors.forEach((val,ind) => {
  val.classList.add('italic');
  let navItems = Object.values(siteContent.nav);
  val.innerText = navItems[ind];
} );

const logoImage = document.querySelector("#logo-img");
logoImage.src = "../mocks/img/logo.png";

const headlineOne = document.querySelector("h1");
headlineOne.innerText = Object.values(siteContent.cta)[0];

const butText = document.querySelector(".cta-text button");
butText.innerText=Object.values(siteContent.cta)[1];

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = "../mocks/img/cta.png";

const contentHeadlines = document.querySelectorAll(".text-content h4");
contentHeadlines.forEach( (val,ind) => {
  let navArray = Object.values(siteContent["main-content"]).filter( (val,ind) => ind % 2 === 0);
  val.innerText = navArray[ind];
} );

const contentPars = document.querySelectorAll(".text-content p");
contentPars.forEach( (val,ind) => {
  let contentArray = Object.values(siteContent["main-content"]).filter( (val,ind) => ind % 2 === 1);
  val.innerText = contentArray[ind];
} );

const middleImage = document.querySelector("#middle-img");
middleImage.src = "../mocks/img/accent.png";

const contactText = document.querySelector(".contact h4");
contactText.innerText = siteContent.contact["contact-h4"];

const contactInfo = Array.from(document.querySelectorAll(".contact p"));
contactInfo.forEach( (val,ind) => {
  let contactArray = Object.values(siteContent.contact);
  val.innerText = contactArray[ind + 1];
} );

const footerAnchor = document.querySelector("footer a");
footerAnchor.classList.add('bold');
footerAnchor.innerText = "Copyright Great Idea! 2021";

console.log('project wired!')
