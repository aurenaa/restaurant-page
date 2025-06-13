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
    pepperoni.classList.add("pizza");
    pizzaDetails.appendChild(pepperoni);

    const pepperoniInfo = document.createElement("div");
    pepperoniInfo.classList.add("pizza-info");
    pepperoni.appendChild(pepperoniInfo);

    const pepperoniName = document.createElement("h3");
    pepperoniName.textContent = "PEPPERONI -";
    pepperoniInfo.appendChild(pepperoniName);

    const pepperoniPrices = document.createElement("p");
    pepperoniPrices.classList.add("pizza-price");
    pepperoniPrices.textContent = "Per slice: $3.50, Whole pie: $20.00";
    pepperoniInfo.appendChild(pepperoniPrices);

    const pepperoniIngredients = document.createElement("p");
    pepperoniIngredients.textContent = "(Pizza sauce, mozzarella, pepperoni)";
    pepperoni.appendChild(pepperoniIngredients);

    // Supreme pizza
    const supreme = document.createElement("div");
    supreme.classList.add("pizza");
    pizzaDetails.appendChild(supreme);

    const supremeInfo = document.createElement("div");
    supremeInfo.classList.add("pizza-info");
    supreme.appendChild(supremeInfo);

    const supremeName = document.createElement("h3");
    supremeName.textContent = "SUPREME -";
    supremeInfo.appendChild(supremeName);

    const supremePrices = document.createElement("p");
    supremePrices.classList.add("pizza-price");
    supremePrices.textContent = "Per slice: $4, Whole pie: $22.00";
    supremeInfo.appendChild(supremePrices);

    const supremeIngredients = document.createElement("p");
    supremeIngredients.textContent = "(Pizza sauce, mozzarella, bacon, onion, beef mince, capsicum, pepperoni, mushroom, olives)";
    supreme.appendChild(supremeIngredients);   

    // Hawaiian 
    const hawaiian = document.createElement("div");
    hawaiian.classList.add("pizza");
    pizzaDetails.appendChild(hawaiian);

    const hawaiianInfo = document.createElement("div");
    hawaiianInfo.classList.add("pizza-info");
    hawaiian.appendChild(hawaiianInfo);

    const hawaiianName = document.createElement("h3");
    hawaiianName.textContent = "HAWAIIAN -";
    hawaiianInfo.appendChild(hawaiianName);

    const hawaiianPrices = document.createElement("p");
    hawaiianPrices.classList.add("pizza-price");
    hawaiianPrices.textContent = "Per slice: $4.5, Whole pie: $22.50";
    hawaiianInfo.appendChild(hawaiianPrices);

    const hawaiianIngredients = document.createElement("p");
    hawaiianIngredients.textContent = "(Pizza sauce, mozzarella, ham, pineapple)";
    hawaiian.appendChild(hawaiianIngredients); 
    
    //Garlic butter prawns and chilli
    const garlicPrawnsChilli = document.createElement("div");
    garlicPrawnsChilli.classList.add("pizza");
    pizzaDetails.appendChild(garlicPrawnsChilli);

    const garlicPrawnsChilliInfo = document.createElement("div");
    garlicPrawnsChilliInfo.classList.add("pizza-info");
    garlicPrawnsChilli.appendChild(garlicPrawnsChilliInfo);

    const garlicPrawnsChilliName = document.createElement("h3");
    garlicPrawnsChilliName.textContent = "GARLIC BUTTER PRAWNS HOT -";
    garlicPrawnsChilliInfo.appendChild(garlicPrawnsChilliName);

    const garlicPrawnsChilliPrices = document.createElement("p");
    garlicPrawnsChilliPrices.classList.add("pizza-price");
    garlicPrawnsChilliPrices.textContent = "Per slice: $4.5, Whole pie: $22.50";
    garlicPrawnsChilliInfo.appendChild(garlicPrawnsChilliPrices);

    const garlicPrawnsChilliIngredients = document.createElement("p");
    garlicPrawnsChilliIngredients.textContent = "(Pizza sauce, mozzarella, garlic butter prawns, capsicum, onion, chilli, rocket)";
    garlicPrawnsChilli.appendChild(garlicPrawnsChilliIngredients);    

    //Margherita
    const margherita = document.createElement("div");
    margherita.classList.add("pizza");
    pizzaDetails.appendChild(margherita);

    const margheritaInfo = document.createElement("div");
    margheritaInfo.classList.add("pizza-info");
    margherita.appendChild(margheritaInfo);

    const margheritaName = document.createElement("h3");
    margheritaName.textContent = "MARGHERITA -";
    margheritaInfo.appendChild(margheritaName);

    const margheritaPrices = document.createElement("p");
    margheritaPrices.classList.add("pizza-price");
    margheritaPrices.textContent = "Per slice: $2, Whole pie: $18";
    margheritaInfo.appendChild(margheritaPrices);

    const margheritaIngredients = document.createElement("p");
    margheritaIngredients.textContent = "(Pizza sauce, buffalo mozzarella, basil, olive oil, salt)";
    margherita.appendChild(margheritaIngredients);  
    
    //Quattro Formaggio
    const fourCheese = document.createElement("div");
    fourCheese.classList.add("pizza");
    pizzaDetails.appendChild(fourCheese);

    const fourCheeseInfo = document.createElement("div");
    fourCheeseInfo.classList.add("pizza-info");
    fourCheese.appendChild(fourCheeseInfo);

    const fourCheeseName = document.createElement("h3");
    fourCheeseName.textContent = "QUATTRO FORMAGGIO -";
    fourCheeseInfo.appendChild(fourCheeseName);

    const fourCheesePrices = document.createElement("p");
    fourCheesePrices.classList.add("pizza-price");
    fourCheesePrices.textContent = "Per slice: $2.5, Whole pie: $19.50";
    fourCheeseInfo.appendChild(fourCheesePrices);

    const fourCheeseIngredients = document.createElement("p");
    fourCheeseIngredients.textContent = "(Mozzarella, parmesan, provolone, blue cheese)";
    fourCheese.appendChild(fourCheeseIngredients);  

    //prosciutto 
    const prosciutto = document.createElement("div");
    prosciutto.classList.add("pizza");
    pizzaDetails.appendChild(prosciutto);

    const prosciuttoInfo = document.createElement("div");
    prosciuttoInfo.classList.add("pizza-info");
    prosciutto.appendChild(prosciuttoInfo);

    const prosciuttoName = document.createElement("h3");
    prosciuttoName.textContent = "PROSCIUTTO AND ROCKET -";
    prosciuttoInfo.appendChild(prosciuttoName);

    const prosciuttoPrices = document.createElement("p");
    prosciuttoPrices.classList.add("pizza-price");
    prosciuttoPrices.textContent = "Per slice: $3.5, Whole pie: $20.50";
    prosciuttoInfo.appendChild(prosciuttoPrices);

    const prosciuttoIngredients = document.createElement("p");
    prosciuttoIngredients.textContent = "(Pizza sauce, mozzarella, prosciutto, rocket/arugula, extra virgin olive oil)";
    prosciutto.appendChild(prosciuttoIngredients);  

    pizzaRow.appendChild(pizzaDetails);
    // Pizza end

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