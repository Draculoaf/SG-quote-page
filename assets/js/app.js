const pricingInformation = {
    "hardware": [
        {"type":"Motion platform", "options":[{"select":"none","price": 0},{"select":"3 degrees","price": 100},{"select":"6 degrees","price": 200}] },
        {"type":"Base", "options":[{"select":"none","price": 0},{"select":"3 degrees","price": 100},{"select":"6 degrees","price": 200}] },
        
    ],
    "software": [
        {"type":"Preuse inspection", "options":[{"select":"no","price": 0},{"select":"yes","price": 100}]},
    ]
};

const priceTotalDisplay = document.getElementById("total");

let total = 0;
let selectedProduct;
let selectedProductPrice;

//get the HTML element
const pricingCalculatorDisplay = document.getElementById("pricing-calculator");

//Loop through all the pricing information (json object above)
Object.keys(pricingInformation).forEach(key => {

    //get the section names (hardware, software)
    const sectionName = key;
    console.log(sectionName);

    //make an HTML heading
    const sectionHeadingDisplay = document.createElement("h2");
    sectionHeadingDisplay.innerText = sectionName;
    //Add css to make the sections with a capital letter
    sectionHeadingDisplay.classList.add("section-heading");
    //Append to the HTML element (display the information)
    pricingCalculatorDisplay.appendChild(sectionHeadingDisplay);

    //loop through all the section arrays 
    pricingInformation[key].forEach(element => {
        const productName = element.type
        const productChoice = element.options

        //Append product type
        const productType = document.createElement("h3");
        productType.innerText = productName;
        pricingCalculatorDisplay.appendChild(productType);

        //Append product options
        const productOptions = document.createElement("select");
        productOptions.id = productName.replace(" ", "-").toLowerCase();
        //Detect when a product is chosen and then show the value
        productOptions.onchange = function(){
            let productPrice = productOptions.value;
            let productName = productOptions.id;

            total = Number(total) + Number(productPrice);
            console.log(total)

            priceTotalDisplay.innerText = total
        }
        
        //create select options
        productChoice.forEach(option => {
            console.log(option)
            let productOption = document.createElement("option")
            productOption.value = option.price;
            productOption.innerText = option.select;
            productOption.id = option.select.replace(" ", "-").toLowerCase()
            productOption.dataset.price = option.price;
            productOptions.appendChild(productOption)
            pricingCalculatorDisplay.appendChild(productOptions)
        });
    });


});