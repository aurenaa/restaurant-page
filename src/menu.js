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
    pepperoni.classList.add("item");
    pizzaDetails.appendChild(pepperoni);

    const pepperoniInfo = document.createElement("div");
    pepperoniInfo.classList.add("item-info");
    pepperoni.appendChild(pepperoniInfo);

    const pepperoniName = document.createElement("h3");
    pepperoniName.textContent = "PEPPERONI -";
    pepperoniInfo.appendChild(pepperoniName);

    const pepperoniPrices = document.createElement("p");
    pepperoniPrices.classList.add("item-price");
    pepperoniPrices.textContent = "Per slice: $3.50, Whole pie: $20.00";
    pepperoniInfo.appendChild(pepperoniPrices);

    const pepperoniIngredients = document.createElement("p");
    pepperoniIngredients.textContent = "(Pizza sauce, mozzarella, pepperoni)";
    pepperoni.appendChild(pepperoniIngredients);

    // Supreme pizza
    const supreme = document.createElement("div");
    supreme.classList.add("item");
    pizzaDetails.appendChild(supreme);

    const supremeInfo = document.createElement("div");
    supremeInfo.classList.add("item-info");
    supreme.appendChild(supremeInfo);

    const supremeName = document.createElement("h3");
    supremeName.textContent = "SUPREME -";
    supremeInfo.appendChild(supremeName);

    const supremePrices = document.createElement("p");
    supremePrices.classList.add("item-price");
    supremePrices.textContent = "Per slice: $4, Whole pie: $22.00";
    supremeInfo.appendChild(supremePrices);

    const supremeIngredients = document.createElement("p");
    supremeIngredients.textContent = "(Pizza sauce, mozzarella, bacon, onion, beef mince, capsicum, pepperoni, mushroom, olives)";
    supreme.appendChild(supremeIngredients);   

    // Hawaiian 
    const hawaiian = document.createElement("div");
    hawaiian.classList.add("item");
    pizzaDetails.appendChild(hawaiian);

    const hawaiianInfo = document.createElement("div");
    hawaiianInfo.classList.add("item-info");
    hawaiian.appendChild(hawaiianInfo);

    const hawaiianName = document.createElement("h3");
    hawaiianName.textContent = "HAWAIIAN -";
    hawaiianInfo.appendChild(hawaiianName);

    const hawaiianPrices = document.createElement("p");
    hawaiianPrices.classList.add("item-price");
    hawaiianPrices.textContent = "Per slice: $4.5, Whole pie: $22.50";
    hawaiianInfo.appendChild(hawaiianPrices);

    const hawaiianIngredients = document.createElement("p");
    hawaiianIngredients.textContent = "(Pizza sauce, mozzarella, ham, pineapple)";
    hawaiian.appendChild(hawaiianIngredients); 
    
    //Garlic butter prawns and chilli
    const garlicPrawnsChilli = document.createElement("div");
    garlicPrawnsChilli.classList.add("item");
    pizzaDetails.appendChild(garlicPrawnsChilli);

    const garlicPrawnsChilliInfo = document.createElement("div");
    garlicPrawnsChilliInfo.classList.add("item-info");
    garlicPrawnsChilli.appendChild(garlicPrawnsChilliInfo);

    const garlicPrawnsChilliName = document.createElement("h3");
    garlicPrawnsChilliName.textContent = "GARLIC BUTTER PRAWNS HOT -";
    garlicPrawnsChilliInfo.appendChild(garlicPrawnsChilliName);

    const garlicPrawnsChilliPrices = document.createElement("p");
    garlicPrawnsChilliPrices.classList.add("item-price");
    garlicPrawnsChilliPrices.textContent = "Per slice: $4.5, Whole pie: $22.50";
    garlicPrawnsChilliInfo.appendChild(garlicPrawnsChilliPrices);

    const garlicPrawnsChilliIngredients = document.createElement("p");
    garlicPrawnsChilliIngredients.textContent = "(Pizza sauce, mozzarella, garlic butter prawns, capsicum, onion, chilli, rocket)";
    garlicPrawnsChilli.appendChild(garlicPrawnsChilliIngredients);    

    //Margherita
    const margherita = document.createElement("div");
    margherita.classList.add("item");
    pizzaDetails.appendChild(margherita);

    const margheritaInfo = document.createElement("div");
    margheritaInfo.classList.add("item-info");
    margherita.appendChild(margheritaInfo);

    const margheritaName = document.createElement("h3");
    margheritaName.textContent = "MARGHERITA -";
    margheritaInfo.appendChild(margheritaName);

    const margheritaPrices = document.createElement("p");
    margheritaPrices.classList.add("item-price");
    margheritaPrices.textContent = "Per slice: $2, Whole pie: $18";
    margheritaInfo.appendChild(margheritaPrices);

    const margheritaIngredients = document.createElement("p");
    margheritaIngredients.textContent = "(Pizza sauce, buffalo mozzarella, basil, olive oil, salt)";
    margherita.appendChild(margheritaIngredients);  
    
    //Quattro Formaggio
    const fourCheese = document.createElement("div");
    fourCheese.classList.add("item");
    pizzaDetails.appendChild(fourCheese);

    const fourCheeseInfo = document.createElement("div");
    fourCheeseInfo.classList.add("item-info");
    fourCheese.appendChild(fourCheeseInfo);

    const fourCheeseName = document.createElement("h3");
    fourCheeseName.textContent = "QUATTRO FORMAGGIO -";
    fourCheeseInfo.appendChild(fourCheeseName);

    const fourCheesePrices = document.createElement("p");
    fourCheesePrices.classList.add("item-price");
    fourCheesePrices.textContent = "Per slice: $2.5, Whole pie: $19.50";
    fourCheeseInfo.appendChild(fourCheesePrices);

    const fourCheeseIngredients = document.createElement("p");
    fourCheeseIngredients.textContent = "(Mozzarella, parmesan, provolone, blue cheese)";
    fourCheese.appendChild(fourCheeseIngredients);  

    //prosciutto 
    const prosciutto = document.createElement("div");
    prosciutto.classList.add("item");
    pizzaDetails.appendChild(prosciutto);

    const prosciuttoInfo = document.createElement("div");
    prosciuttoInfo.classList.add("item-info");
    prosciutto.appendChild(prosciuttoInfo);

    const prosciuttoName = document.createElement("h3");
    prosciuttoName.textContent = "PROSCIUTTO AND ROCKET -";
    prosciuttoInfo.appendChild(prosciuttoName);

    const prosciuttoPrices = document.createElement("p");
    prosciuttoPrices.classList.add("item-price");
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
    calzoneRow.appendChild(calzoneDetails);

    const calzoneImg = document.createElement("img");
    calzoneImg.classList.add("menu-img-right");
    calzoneImg.src = "/8.jpg";
    calzoneRow.appendChild(calzoneImg);

    //three cheese caprese
    const cheeseCaprese = document.createElement("div");
    cheeseCaprese.classList.add("item");
    calzoneDetails.appendChild(cheeseCaprese);

    const cheeseCapreseInfo = document.createElement("div");
    cheeseCapreseInfo.classList.add("item-info");
    cheeseCaprese.appendChild(cheeseCapreseInfo);

    const cheeseCapreseName = document.createElement("h3");
    cheeseCapreseName.textContent = "THREE CHEESE CAPRESE -";
    cheeseCapreseInfo.appendChild(cheeseCapreseName);

    const cheeseCapresePrices = document.createElement("p");
    cheeseCapresePrices.classList.add("item-price");
    cheeseCapresePrices.textContent = "Per calzone: $8.50";
    cheeseCapreseInfo.appendChild(cheeseCapresePrices);

    const cheeseCapreseIngredients = document.createElement("p");
    cheeseCapreseIngredients.textContent = "(Balsamic glaze, ricotta cheese, parmesan cheese, mozzarella cheese, heirloom tomatoes, basil, tomato sauce)";
    cheeseCaprese.appendChild(cheeseCapreseIngredients);  
    
    //Turkey, Pesto and Veggie Calzones
    const turkeyPestoVeggie = document.createElement("div");
    turkeyPestoVeggie.classList.add("item");
    calzoneDetails.appendChild(turkeyPestoVeggie);

    const turkeyPestoVeggieInfo = document.createElement("div");
    turkeyPestoVeggieInfo.classList.add("item-info");
    turkeyPestoVeggie.appendChild(turkeyPestoVeggieInfo);

    const turkeyPestoVeggieName = document.createElement("h3");
    turkeyPestoVeggieName.textContent = "TURKEY, PESTO AND VEGGIE -";
    turkeyPestoVeggieInfo.appendChild(turkeyPestoVeggieName);

    const turkeyPestoVeggiePrices = document.createElement("p");
    turkeyPestoVeggiePrices.classList.add("item-price");
    turkeyPestoVeggiePrices.textContent = "Per calzone: $7.50";
    turkeyPestoVeggieInfo.appendChild(turkeyPestoVeggiePrices);

    const turkeyPestoVeggieIngredients = document.createElement("p");
    turkeyPestoVeggieIngredients.textContent = "(Mushrooms, broccoli, mozzarella cheese, turkey, milk ricotta, pesto)";
    turkeyPestoVeggie.appendChild(turkeyPestoVeggieIngredients);   
    
    //Chiken Spinich Calzone
    const chickenSpinach = document.createElement("div");
    chickenSpinach.classList.add("item");
    calzoneDetails.appendChild(chickenSpinach);

    const chickenSpinachInfo = document.createElement("div");
    chickenSpinachInfo.classList.add("item-info");
    chickenSpinach.appendChild(chickenSpinachInfo);

    const chickenSpinachName = document.createElement("h3");
    chickenSpinachName.textContent = "CHICKEN SPINACH -";
    chickenSpinachInfo.appendChild(chickenSpinachName);

    const chickenSpinachPrices = document.createElement("p");
    chickenSpinachPrices.classList.add("item-price");
    chickenSpinachPrices.textContent = "Per calzone: $9";
    chickenSpinachInfo.appendChild(chickenSpinachPrices);

    const chickenSpinachIngredients = document.createElement("p");
    chickenSpinachIngredients.textContent = "(Chicken, mozzarella cheese, spinach, red peppers, marinara sauce)";
    chickenSpinach.appendChild(chickenSpinachIngredients);  

    //Smoky Pork Calzones
    const smokyPork = document.createElement("div");
    smokyPork.classList.add("item");
    calzoneDetails.appendChild(smokyPork);

    const smokyPorkInfo = document.createElement("div");
    smokyPorkInfo.classList.add("item-info");
    smokyPork.appendChild(smokyPorkInfo);

    const smokyPorkName = document.createElement("h3");
    smokyPorkName.textContent = "SMOKY PORK -";
    smokyPorkInfo.appendChild(smokyPorkName);

    const smokyPorkPrices = document.createElement("p");
    smokyPorkPrices.classList.add("item-price");
    smokyPorkPrices.textContent = "Per calzone: $8.50";
    smokyPorkInfo.appendChild(smokyPorkPrices);

    const smokyPorkIngredients = document.createElement("p");
    smokyPorkIngredients.textContent = "(Ground pork, smoked paprika, red bell pepper, mozzarella cheese, mixed greens)";
    smokyPork.appendChild(smokyPorkIngredients);

    //Prosciutto and Eggplant
    const prosciuttoEggplant = document.createElement("div");
    prosciuttoEggplant.classList.add("item");
    calzoneDetails.appendChild(prosciuttoEggplant);

    const prosciuttoEggplantInfo = document.createElement("div");
    prosciuttoEggplantInfo.classList.add("item-info");
    prosciuttoEggplant.appendChild(prosciuttoEggplantInfo);

    const prosciuttoEggplantName = document.createElement("h3");
    prosciuttoEggplantName.textContent = "PROSCIUTTO AND EGGPLANT -";
    prosciuttoEggplantInfo.appendChild(prosciuttoEggplantName);

    const prosciuttoEggplantPrices = document.createElement("p");
    prosciuttoEggplantPrices.classList.add("item-price");
    prosciuttoEggplantPrices.textContent = "Per calzone: $10";
    prosciuttoEggplantInfo.appendChild(prosciuttoEggplantPrices);

    const prosciuttoEggplantIngredients = document.createElement("p");
    prosciuttoEggplantIngredients.textContent = "(Prosciutto, eggplant, garlic, ricotta cheese, parmesan cheese, pine nuts)";
    prosciuttoEggplant.appendChild(prosciuttoEggplantIngredients);    

    //Artichoke and olive
    const artichokeOlive = document.createElement("div");
    artichokeOlive.classList.add("item");
    calzoneDetails.appendChild(artichokeOlive);

    const artichokeOliveInfo = document.createElement("div");
    artichokeOliveInfo.classList.add("item-info");
    artichokeOlive.appendChild(artichokeOliveInfo);

    const artichokeOliveName = document.createElement("h3");
    artichokeOliveName.textContent = "ARTICHOKE AND OLIVE -";
    artichokeOliveInfo.appendChild(artichokeOliveName);

    const artichokeOlivePrices = document.createElement("p");
    artichokeOlivePrices.classList.add("item-price");
    artichokeOlivePrices.textContent = "Per calzone: $9";
    artichokeOliveInfo.appendChild(artichokeOlivePrices);

    const artichokeOliveIngredients = document.createElement("p");
    artichokeOliveIngredients.textContent = "(Artichoke, ricotta cheese, garlic, green olives, mozzarela cheese)";
    artichokeOlive.appendChild(artichokeOliveIngredients);       

    //Regular
    const calzoneReg = document.createElement("div");
    calzoneReg.classList.add("item");
    calzoneDetails.appendChild(calzoneReg);

    const calzoneRegInfo = document.createElement("div");
    calzoneRegInfo.classList.add("item-info");
    calzoneReg.appendChild(calzoneRegInfo);

    const calzoneRegName = document.createElement("h3");
    calzoneRegName.textContent = "REGULAR CALZONE -";
    calzoneRegInfo.appendChild(calzoneRegName);

    const calzoneRegPrices = document.createElement("p");
    calzoneRegPrices.classList.add("item-price");
    calzoneRegPrices.textContent = "Per calzone: $8";
    calzoneRegInfo.appendChild(calzoneRegPrices);

    const calzoneRegIngredients = document.createElement("p");
    calzoneRegIngredients.textContent = "(Parma ham, sundried tomatoes, mozzarella cheese, garlic, tomato sauce)";
    calzoneReg.appendChild(calzoneRegIngredients);    

    //calzone end

    const dessertRow = document.createElement("div");
    dessertRow.classList.add("menu-row");
    foodSection.appendChild(dessertRow);

    const dessertImg = document.createElement("img");
    dessertImg.classList.add("menu-img-dessert");
    dessertImg.src = "/7.jpg";
    dessertRow.appendChild(dessertImg);

    const dessertDetails = document.createElement("div");
    dessertDetails.classList.add("menu-details");
    dessertRow.appendChild(dessertDetails);

    //Classic brownie
    const brownie = document.createElement("div");
    brownie.classList.add("item");
    dessertDetails.appendChild(brownie);

    const brownieInfo = document.createElement("div");
    brownieInfo.classList.add("item-info");
    brownie.appendChild(brownieInfo);

    const brownieName = document.createElement("h3");
    brownieName.textContent = "CHEWY CHOCOLATE BROWNIE -";
    brownieInfo.appendChild(brownieName);

    const browniePrices = document.createElement("p");
    browniePrices.classList.add("item-price");
    browniePrices.textContent = "Per piece: $4.5";
    brownieInfo.appendChild(browniePrices);

    const brownieIngredients = document.createElement("p");
    brownieIngredients.textContent = "";
    brownie.appendChild(brownieIngredients);    

    //sticky date pudding
    const datePudding = document.createElement("div");
    datePudding.classList.add("item");
    dessertDetails.appendChild(datePudding);

    const datePuddingInfo = document.createElement("div");
    datePuddingInfo.classList.add("item-info");
    datePudding.appendChild(datePuddingInfo);

    const datePuddingName = document.createElement("h3");
    datePuddingName.textContent = "STICKY DATE PUDDING -";
    datePuddingInfo.appendChild(datePuddingName);

    const datePuddingPrices = document.createElement("p");
    datePuddingPrices.classList.add("item-price");
    datePuddingPrices.textContent = "Per piece: $6";
    datePuddingInfo.appendChild(datePuddingPrices);

    const datePuddingIngredients = document.createElement("p");
    datePuddingIngredients.textContent = "";
    datePudding.appendChild(datePuddingIngredients);  

    //carrot cake
    const carrotCake = document.createElement("div");
    carrotCake.classList.add("item");
    dessertDetails.appendChild(carrotCake);

    const carrotCakeInfo = document.createElement("div");
    carrotCakeInfo.classList.add("item-info");
    carrotCake.appendChild(carrotCakeInfo);

    const carrotCakeName = document.createElement("h3");
    carrotCakeName.textContent = "CARROT CAKE -";
    carrotCakeInfo.appendChild(carrotCakeName);

    const carrotCakePrices = document.createElement("p");
    carrotCakePrices.classList.add("item-price");
    carrotCakePrices.textContent = "Per piece: $7.50";
    carrotCakeInfo.appendChild(carrotCakePrices);

    const carrotCakeIngredients = document.createElement("p");
    carrotCakeIngredients.textContent = "";
    carrotCake.appendChild(carrotCakeIngredients);

    //Lemon slice
    const lemonSlice = document.createElement("div");
    lemonSlice.classList.add("item");
    dessertDetails.appendChild(lemonSlice);

    const lemonSliceInfo = document.createElement("div");
    lemonSliceInfo.classList.add("item-info");
    lemonSlice.appendChild(lemonSliceInfo);

    const lemonSliceName = document.createElement("h3");
    lemonSliceName.textContent = "LEMON SLICE -";
    lemonSliceInfo.appendChild(lemonSliceName);

    const lemonSlicePrices = document.createElement("p");
    lemonSlicePrices.classList.add("item-price");
    lemonSlicePrices.textContent = "Per piece: $7";
    lemonSliceInfo.appendChild(lemonSlicePrices);

    const lemonSliceIngredients = document.createElement("p");
    lemonSliceIngredients.textContent = "";
    lemonSlice.appendChild(lemonSliceIngredients);

    //Apple crumble
    const appleCrumble = document.createElement("div");
    appleCrumble.classList.add("item");
    dessertDetails.appendChild(appleCrumble);

    const appleCrumbleInfo = document.createElement("div");
    appleCrumbleInfo.classList.add("item-info");
    appleCrumble.appendChild(appleCrumbleInfo);

    const appleCrumbleName = document.createElement("h3");
    appleCrumbleName.textContent = "APPLE CRUMBLE + ICE CREAM -";
    appleCrumbleInfo.appendChild(appleCrumbleName);

    const appleCrumblePrices = document.createElement("p");
    appleCrumblePrices.classList.add("item-price");
    appleCrumblePrices.textContent = "Per piece: $10";
    appleCrumbleInfo.appendChild(appleCrumblePrices);

    const appleCrumbleIngredients = document.createElement("p");
    appleCrumbleIngredients.textContent = "";
    appleCrumble.appendChild(appleCrumbleIngredients);    

    content.appendChild(pageContent);
}

export default createMenuPage;