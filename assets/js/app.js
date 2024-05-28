const randomImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sulphur_Mining_at_Kawah_Ijen_3.jpg/800px-Sulphur_Mining_at_Kawah_Ijen_3.jpg";
const randomImg2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC81acfwB_-m2moaWkG9oplFBE5u_M3OxGrg&s";

const pricingInformation = {
  hardware: [
    {
      type: "Motion platform",
      options: [
        { select: "none", price: 0 },
        { select: "3 degrees", price: 100, display: randomImg2 },
        { select: "6 degrees", price: 200, display: randomImg },
      ],
    },
    {
      type: "Base",
      options: [
        { select: "adaptable", price: 100, display: randomImg },
        { select: "standard", price: 200, display: randomImg2 },
      ],
    },
    {
      type: "Base size",
      options: [
        { select: "1.5mx2m", price: 100, display: randomImg },
        { select: "2mx3m", price: 200, display: randomImg2 },
      ],
    },
    {
      type: "Weight",
      options: [
        { select: "standard", price: 100, display: randomImg },
        { select: "heavy", price: 200, display: randomImg2 },
      ],
    },
    {
      type: "Seat",
      options: [
        { select: "standard", price: 100, display: randomImg },
        { select: "suspension", price: 200, display: randomImg2 },
        { select: "OEM", price: 200, display: randomImg },
      ],
    },
    {
      type: "Pedals",
      options: [
        { select: "standard", price: 100, display: randomImg },
        { select: "industrial", price: 200, display: randomImg2 },
        { select: "OEM", price: 200, display: randomImg },
      ],
    },
    {
      type: "Steering wheel",
      options: [
        { select: "standard", price: 100, display: randomImg },
        { select: "force feedback", price: 200, display: randomImg2 },
        { select: "OEM", price: 200, display: randomImg },
      ],
    },
    {
      type: "Seat",
      options: [
        { select: "7 inch", price: 100, display: randomImg },
        { select: "10 inch", price: 200, display: randomImg2 },
      ],
    },
    {
      type: "Joysticks",
      options: [
        { select: "standard", price: 100, display: randomImg },
        { select: "force feedback", price: 200, display: randomImg2 },
        { select: "OEM", price: 200, display: randomImg },
      ],
    },
    {
      type: "Panels",
      options: [
        { select: "stands", price: 100, display: randomImg },
        { select: "sheets", price: 200, display: randomImg2 },
      ],
    },
    {
      type: "Buttons",
      options: [
        { select: "rocker", price: 100, display: randomImg },
        { select: "on/off", price: 200, display: randomImg2 },
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

//assign total to the HTML element
const priceTotalDisplay = document.getElementById("total");
let total = 0;

// Get the HTML elements
const hardwareSection = document.getElementById("hardware-section");
const softwareSection = document.getElementById("software-section");

// Loop through all the pricing information
Object.keys(pricingInformation).forEach((key) => {
  //check the section name and assign the types to the containers of the section name
  const sectionName = key;
  const section =
    sectionName === "hardware" ? hardwareSection : softwareSection;

  //make all the section heading an h2 HTML element
  const sectionHeadingDisplay = document.createElement("h2");
  sectionHeadingDisplay.innerText = sectionName;
  sectionHeadingDisplay.classList.add("section-heading");
  section.appendChild(sectionHeadingDisplay);

  //loop through the section arrays
  pricingInformation[key].forEach((element) => {
    const productName = element.type;
    const productChoice = element.options;

    //Append product type
    const productType = document.createElement("h3");
    productType.innerText = productName;
    section.appendChild(productType);

    //for each type, create a label and custom input container within a div
    const productOptionsContainer = document.createElement("div");
    productOptionsContainer.classList.add("product-options");
    productChoice.forEach((option, index) => {
      const container = document.createElement("label");
      container.classList.add("custom-input-container");

      //make sure that hardware's input is a radio button, otherwise make it a checkbox
      const productOption = document.createElement("input");
      productOption.type = sectionName === "hardware" ? "radio" : "checkbox";
      productOption.name =
        sectionName === "hardware" ? productName : option.select;
      productOption.value = option.price;
      //make sure all the names of the classes are in lower case and have a "-" where spaces are
      productOption.id = option.select.replace(" ", "-").toLowerCase();

      //the layout for the HTML is:  div (product options)
      // --> EACH HAS THIS: label (custom input container), input (checkbox/radio), span (checkmark) ,span (product option label)
      const checkmark = document.createElement("span");
      checkmark.classList.add("checkmark");
      const productOptionLabel = document.createElement("span");
      productOptionLabel.innerText = option.select;
      productOptionLabel.classList.add("product-option-label");

      // Add hidden image only if option.display exists
      if (option.display) {
        const hiddenImage = document.createElement("div");
        hiddenImage.classList.add("hidden-image");

        const imgElement = document.createElement("img");
        imgElement.src = option.display;
        hiddenImage.appendChild(imgElement);

        container.appendChild(hiddenImage);
      }

      //logic for adding and removing money by checking if the box is checked or unchecked
      productOption.onchange = function () {
        total = 0;
        document
          .querySelectorAll(
            'input[type="radio"]:checked, input[type="checkbox"]:checked'
          )
          .forEach((input) => {
            total += Number(input.value);
          });
        priceTotalDisplay.innerText = total;
      };

      //put all the elements into the containers
      container.appendChild(productOption);
      container.appendChild(checkmark);
      container.appendChild(productOptionLabel);
      productOptionsContainer.appendChild(container);
    });

    section.appendChild(productOptionsContainer);
  });
});
