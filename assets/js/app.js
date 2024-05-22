const pricingInformation = {
  hardware: [
    {
      type: "Motion platform",
      options: [
        { select: "none", price: 0 },
        { select: "3 degrees", price: 100 },
        { select: "6 degrees", price: 200 },
      ],
    },
    {
      type: "Base",
      options: [
        { select: "adaptable", price: 100 },
        { select: "standard", price: 200 },
      ],
    },
    {
      type: "Base size",
      options: [
        { select: "1.5mx2m", price: 100 },
        { select: "2mx3m", price: 200 },
      ],
    },
    {
      type: "Weight",
      options: [
        { select: "standard", price: 100 },
        { select: "heavy", price: 200 },
      ],
    },
    {
      type: "Seat",
      options: [
        { select: "standard", price: 100 },
        { select: "suspension", price: 200 },
        { select: "OEM", price: 200 },
      ],
    },
    {
      type: "Pedals",
      options: [
        { select: "standard", price: 100 },
        { select: "industrial", price: 200 },
        { select: "OEM", price: 200 },
      ],
    },
    {
      type: "Steering wheel",
      options: [
        { select: "standard", price: 100 },
        { select: "force feedback", price: 200 },
        { select: "OEM", price: 200 },
      ],
    },
    {
      type: "Seat",
      options: [
        { select: "7 inch", price: 100 },
        { select: "10 inch", price: 200 },
      ],
    },
    {
      type: "Joysticks",
      options: [
        { select: "standard", price: 100 },
        { select: "force feedback", price: 200 },
        { select: "OEM", price: 200 },
      ],
    },
    {
      type: "Panels",
      options: [
        { select: "stands", price: 100 },
        { select: "sheets", price: 200 },
      ],
    },
    {
      type: "Buttons",
      options: [
        { select: "rocker", price: 100 },
        { select: "on/off", price: 200 },
      ],
    },
  ],
  software: [
    {
      type: "software to include",
      options: [
        { select: "Preuse inspection", price: 100 },
        { select: "Emergency scenarios", price: 100 },
        { select: "startup procedures", price: 200 },
        { select: "warmup procedures", price: 100 },
        { select: "Machine prientation", price: 100 },
        { select: "Driving/Tramming", price: 200 },
        { select: "fault finding", price: 100 },
        { select: "VR tutorial", price: 200 },
      ],
    },
  ],
};

const priceTotalDisplay = document.getElementById("total");
let total = 0;
let selectedProduct;
let selectedProductPrice;

//get the HTML elemen
const hardwareSection = document.getElementById("hardware-section");
const softwareSection = document.getElementById("software-section");

//Loop through all the pricing information (json object above)
Object.keys(pricingInformation).forEach((key) => {
  //get the section names (hardware, software)
  const sectionName = key;
  console.log(sectionName);

  //check to see what section the elements must render in
  const section =
    sectionName === "hardware" ? hardwareSection : softwareSection;

  //make an HTML heading
  const sectionHeadingDisplay = document.createElement("h2");
  sectionHeadingDisplay.innerText = sectionName;
  //Add css to make the sections with a capital letter
  sectionHeadingDisplay.classList.add("section-heading");
  //Append to the HTML element (display the information)
  section.appendChild(sectionHeadingDisplay);

  // Create a container for all software product options
  const softwareProductOptionsContainer = document.createElement("div");
  softwareProductOptionsContainer.classList.add("software-product-options");

  //loop through all the section arrays
  pricingInformation[key].forEach((element) => {
    const productName = element.type;
    const productChoice = element.options;

    //Append product type
    const productType = document.createElement("h3");
    productType.innerText = productName;
    section.appendChild(productType);

    // Container for product options
    const productOptionsContainer = document.createElement("div");
    productOptionsContainer.classList.add("product-options");

    // Append product options
    productChoice.forEach((option) => {
      // For each select option, make a container, label, and input
      const container = document.createElement("label");
      container.classList.add("custom-checkbox-container");

      const productOption = document.createElement("input");
      productOption.type = "checkbox";
      productOption.value = option.price;
      productOption.id = option.select.replace(" ", "-").toLowerCase();

      const checkmark = document.createElement("span");
      checkmark.classList.add("checkmark");

      const productOptionLabel = document.createElement("span");
      productOptionLabel.innerText = option.select;
      productOptionLabel.classList.add("product-option-label");

      productOption.onchange = function () {
        if (productOption.checked) {
          total += Number(productOption.value);
        } else {
          total -= Number(productOption.value);
        }
        priceTotalDisplay.innerText = total;
      };

      container.appendChild(productOption);
      container.appendChild(checkmark);
      container.appendChild(productOptionLabel);
      productOptionsContainer.appendChild(container);
    });

    section.appendChild(productOptionsContainer);
  });
});
