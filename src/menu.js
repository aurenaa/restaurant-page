function createMenuPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const menuHead = document.createElement("div");
    menuHead.classList.add("menu-head");
    content.appendChild(menuHead);

    const menuImage = document.createElement("img");
    menuImage.classList.add("menu-img");
    menuImage.src = "/menu-img.jpeg";
    menuHead.appendChild(menuImage);

    const menuUnderline = document.createElement("img");
    menuUnderline.classList.add("under-line");
    menuUnderline.src = "/underline.png";
    menuHead.appendChild(menuUnderline);

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    headline.classList.add("head-line");
    menuHead.appendChild(headline);

    const foodSection = document.createElement("div");
    foodSection.classList.add("food-section");
    pageContent.appendChild(foodSection);

    const pizzaRow = document.createElement("div");
    pizzaRow.classList.add("menu-row");
    foodSection.appendChild(pizzaRow);

    const pizzaImg = document.createElement("img");
    pizzaImg.classList.add("menu-img-left");
    pizzaImg.src = "/3.jpg";
    pizzaRow.appendChild(pizzaImg);

    const pizzaDetails = document.createElement("div");
    pizzaDetails.classList.add("menu-details");

    // Pepperoni Pizza
    const pepperoni = document.createElement("div");
    pepperoni.classList.add("pepperoni");
    pizzaDetails.appendChild(pepperoni);

    const pepperoniInfo = document.createElement("div");
    pepperoniInfo.classList.add("pepperoni-info");
    pepperoni.appendChild(pepperoniInfo);

    const pepperoniName = document.createElement("h3");
    pepperoniName.textContent = "Pepperoni -";
    pepperoniInfo.appendChild(pepperoniName);

    const pepperoniPrices = document.createElement("p");
    pepperoniPrices.classList.add("pepperoni-price");
    pepperoniPrices.textContent = "Per slice: $3.50, Whole pie: $20.00";
    pepperoniInfo.appendChild(pepperoniPrices);

    const pepperoniIngredients = document.createElement("p");
    pepperoniIngredients.textContent = "(Pizza sauce, mozzarella, pepperoni)";
    pepperoni.appendChild(pepperoniIngredients);

    pizzaRow.appendChild(pizzaDetails);

    const calzoneRow = document.createElement("div");
    calzoneRow.classList.add("menu-row-reverse");
    foodSection.appendChild(calzoneRow);

    const calzoneDetails = document.createElement("div");
    calzoneDetails.classList.add("menu-details");
    calzoneDetails.innerHTML = "<strong>Calzone:</strong> $12";
    calzoneRow.appendChild(calzoneDetails);

    const calzoneImg = document.createElement("img");
    calzoneImg.classList.add("menu-img-right");
    calzoneImg.src = "/8.jpg";
    calzoneRow.appendChild(calzoneImg);

    const dessertRow = document.createElement("div");
    dessertRow.classList.add("menu-row");
    foodSection.appendChild(dessertRow);

    const dessertImg = document.createElement("img");
    dessertImg.classList.add("menu-img-left");
    dessertImg.src = "/7.jpg";
    dessertRow.appendChild(dessertImg);

    const dessertDetails = document.createElement("div");
    dessertDetails.classList.add("menu-details");
    dessertDetails.innerHTML = "<strong>Dessert:</strong> $5";
    dessertRow.appendChild(dessertDetails);

    content.appendChild(pageContent);
}

export default createMenuPage;