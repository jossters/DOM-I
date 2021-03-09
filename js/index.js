const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header Nav
const link = document.querySelectorAll('nav a');
link[0].textContent = siteContent["nav"]["nav-item-1"];
link[1].textContent = siteContent["nav"]["nav-item-2"];
link[2].textContent = siteContent["nav"]["nav-item-3"];
link[3].textContent = siteContent["nav"]["nav-item-4"];
link[4].textContent = siteContent["nav"]["nav-item-5"];
link[5].textContent = siteContent["nav"]["nav-item-6"];

//Cta image
const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

//Title
const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

//Button
const butt = document.querySelector("button")
butt.textContent = siteContent["cta"]["button"];

//All H4 Tags
const allh4 = document.querySelectorAll("h4")
allh4[0].textContent = siteContent["main-content"]["features-h4"];
allh4[1].textContent = siteContent["main-content"]["about-h4"];
allh4[2].textContent = siteContent["main-content"]["services-h4"];
allh4[3].textContent = siteContent["main-content"]["product-h4"];
allh4[4].textContent = siteContent["main-content"]["vision-h4"];
allh4[5].textContent = siteContent["contact"]["contact-h4"]

// All P Tags
const allp = document.querySelectorAll("p")
allp[0].textContent = siteContent["main-content"]['features-content'];
allp[1].textContent = siteContent["main-content"]['about-content'];
allp[2].textContent = siteContent["main-content"]['services-content'];
allp[3].textContent = siteContent["main-content"]['product-content'];
allp[4].textContent = siteContent["main-content"]['vision-content'];
allp[5].textContent = siteContent["contact"]["address"]
allp[6].textContent = siteContent["contact"]["phone"]
allp[7].textContent = siteContent["contact"]["email"]
allp[8].textContent = siteContent["footer"]["copyright"]


// Middle image
const middleimg = document.getElementById("middle-img")
middleimg.setAttribute("src",siteContent ["main-content"]["middle-img-src"])

// Contact
