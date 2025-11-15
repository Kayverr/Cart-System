// Select all Products
// Log all Products

const main = document.querySelector('#main')

const section = main.firstElementChild;
const section1 = section.nextElementSibling;
const section2 = section1.nextElementSibling;
// console.log(section2)

// step 3
const cart = main
    .firstElementChild
    .nextElementSibling
    .nextElementSibling
    .firstElementChild

console.log(cart)

// variable name for section 1
const products = section1.children;
// const cart = section2.children;

// console.log(products);

// Step 2. Convert Html Collections Array
const productsArray = Array.from(products);
// console.log(productsArray)

productsArray.forEach((p)=>{
    p.addEventListener('click',() =>{
        // console.log('you click me!')


// step 4
    const c = document.createElement('p')
        p.innerText = p.firstElementChild.innerText
// console.log(p.innerText)

        // step 4
    cart.appendChild(p)
    })
});

