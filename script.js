const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const menuIconClass = menuIcon.querySelector('i');

menuIcon.addEventListener('click', () => {
nav.classList.toggle('open');
nav.classList.toggle('hidden');

 // Toggle between menu and close icons
if (menuIconClass.classList.contains('bx-menu')) {
    menuIconClass.classList.remove('bx-menu');
    menuIconClass.classList.add('bx-x');
} else {
    menuIconClass.classList.remove('bx-x');
    menuIconClass.classList.add('bx-menu');
    }
});


document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});

//seaech bar

// const itemList = [
//     "Bralette",
// ];

// const resultBox = document.querySelector(
//     ".results"
// );

// const inputBox = document.querySelector(
//     ".search-bar"
// );

// const displayResults = function (result) {
//     const resultHTML = result.map(function (country) {
//         return `<li onclick=selectInput(this)>
//         ${items, products}
//         </li>`;
//     });

//     resultBpx.innerHTML = '<ul>' + resultHTML.join("") +   '</ul>';
// }

// inputBox.onkeyup = function (e) {
//     let result = [];

//     const input = input.value.toLowerCase();

//     if (input.length === 0) {
//         resultBox.innerHTML = "";
//     }

//     if (input.length === 0) {
//         result = itemList.filter((item) => {
//             return country.toLowerCase() .includes(input);
//         });

//         displayResults(result);
//     }
// }

// function selectInput(item) {
//     inputBox.value = country.innerText;
//     resultBox.innerHTML = "";
// };

// // let Day = 11;

// //public class (name of the opened file)
// //let pin = "";
// //public class void main (String [] args)
// // System.out.printIn("")


// // if (Day < 14) {
// //     window.alert("Good Afternoon");
// // } else {
// //     window.alert("Good Morning");
// // }










