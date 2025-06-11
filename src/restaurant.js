//adding image, headline ect.
let isHeaderCreated = false;

function createRestaurantHomePage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");

    const restaurantImg = document.createElement("div");
    restaurantImg.setAttribute("class", "restaurant-images");
    pageContent.appendChild(restaurantImg);

    const restaurantFront = document.createElement("img");
    restaurantFront.src = "/1.png";
    restaurantFront.classList.add("restaurant-front");
    restaurantImg.appendChild(restaurantFront);

    const arrows = document.createElement("div");
    arrows.setAttribute("class", "arrows");
    restaurantImg.appendChild(arrows);

    const leftArrow = document.createElement("button");
    leftArrow.setAttribute("class", "left-arrow");
    leftArrow.textContent = "<-";
    arrows.appendChild(leftArrow);

    const rightArrow = document.createElement("button");
    rightArrow.setAttribute("class", "right-arrow");
    rightArrow.textContent = "->";
    arrows.appendChild(rightArrow);

    const sliders = document.createElement("div");
    sliders.setAttribute("class", "sliders");
    restaurantImg.appendChild(sliders);

    const imageSliderOne = document.createElement("button");
    const imageSliderTwo = document.createElement("button");
    const imageSliderThree = document.createElement("button");
    imageSliderOne.setAttribute("class", "slider-one");
    imageSliderTwo.setAttribute("class", "slider-two");   
    imageSliderThree.setAttribute("class", "slider-three");
    sliders.appendChild(imageSliderOne);
    sliders.appendChild(imageSliderTwo);
    sliders.appendChild(imageSliderThree);

    const images = ["/1.png", "/2.jpg", "/3.jpg"];
    let currentIndex = 0;

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        restaurantFront.src = images[currentIndex];
    });

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        restaurantFront.src = images[currentIndex];
    });

    imageSliderOne.addEventListener("click", () => {
        restaurantFront.src = images[0];        
    });

    imageSliderTwo.addEventListener("click", () => {
        restaurantFront.src = images[1];        
    });

    imageSliderThree.addEventListener("click", () => {
        restaurantFront.src = images[2];        
    });

    const reservation = document.createElement("p");
    reservation.textContent = "Call us today to make a reservation: +646-708-7615";
    reservation.classList.add("reservation");
    pageContent.appendChild(reservation);

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");
    pageContent.appendChild(menuSection);

    const menuTab = document.createElement("div");
    menuTab.classList.add("menu-tab");
    const menuPictures = document.createElement("div");
    menuPictures.classList.add("menu-pictures");
    menuSection.appendChild(menuTab);
    menuSection.appendChild(menuPictures);

    const menuGraphic = document.createElement("img");
    menuGraphic.classList.add("menu-graphic");
    menuGraphic.src = "/forkknife.png";
    menuTab.appendChild(menuGraphic);

    const menuParagraph = document.createElement("p")
    menuParagraph.classList.add("menu-paragraph");
    menuParagraph.textContent = "Here you can view the complete menu.";
    menuTab.appendChild(menuParagraph);

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.textContent = "Menu";
    menuTab.appendChild(menuButton);

    const oneOne = document.createElement("img");
    oneOne.classList.add("oneOne");
    oneOne.src = "/1.1.png";
    const oneTwo = document.createElement("img");
    oneTwo.classList.add("oneTwo");
    oneTwo.src = "/3.jpg";
    const twoOne = document.createElement("img");
    twoOne.classList.add("twoOne");
    twoOne.src = "/7.jpg";
    const twoTwo = document.createElement("img");
    twoTwo.classList.add("twoTwo");
    twoTwo.src = "/2.jpg";
    const threeOne = document.createElement("img");
    threeOne.classList.add("threeOne");
    threeOne.src = "/6.jpg";
    const threeTwo = document.createElement("img");
    threeTwo.classList.add("threeTwo");
    threeTwo.src = "/1.png";
    const fourOne = document.createElement("img");
    fourOne.classList.add("fourOne");
    fourOne.src = "/5.jpg";
    const fourTwo = document.createElement("img");
    fourTwo.classList.add("fourTwo");
    fourTwo.src = "/4.jpg";
    menuPictures.appendChild(oneOne);
    menuPictures.appendChild(oneTwo);
    menuPictures.appendChild(twoOne);
    menuPictures.appendChild(twoTwo);
    menuPictures.appendChild(threeOne);
    menuPictures.appendChild(threeTwo);
    menuPictures.appendChild(fourOne);
    menuPictures.appendChild(fourTwo);

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");
    pageContent.appendChild(aboutSection);

    const aboutImage = document.createElement("img");
    const aboutText = document.createElement("div");
    aboutImage.classList.add("about-img");
    aboutText.classList.add("about-text");
    aboutSection.appendChild(aboutImage);
    aboutSection.appendChild(aboutText);

    aboutImage.src = "/9.jpg";

    const about = document.createElement("h1");
    about.textContent = "About Us";
    aboutText.appendChild(about);

    const aboutParOne = document.createElement("p");
    aboutParOne.textContent = "Welcome to Slice Haven — your local slice joint in the heart of NYC! We’re a family-owned pizzeria that’s all about great pizza, good vibes, and making everyone feel at home. Whether you're a long-time New Yorker or visiting for the first time, we’ve got a slice for you. From our cheesy classics to our creative specials, each pizza is made with love and a whole lot of flavor. Come on in, kick back, and enjoy the best slice in town!";
    aboutText.appendChild(aboutParOne);

    const aboutParTwo = document.createElement("p");
    aboutParTwo.textContent = "In addition to our mouth-watering pizzas, we also offer a variety of delectable desserts and a selection of craft beers to complement your meal. From creamy tiramisu to rich chocolate lava cakes, our desserts are the perfect sweet ending to your slice. And whether you’re a beer connoisseur or just looking to try something new, our craft beer menu features local brews that pair perfectly with any dish. So, whether you're here for a quick bite or a leisurely evening with friends, we've got everything to satisfy your cravings and elevate your experience!";
    aboutText.appendChild(aboutParTwo);

    const pageHeader = document.createElement("div");
    pageHeader.classList.add("page-header");
    pageContent.classList.add("page-content");

    if (!isHeaderCreated) {
        content.appendChild(pageHeader);
    }
    
    content.appendChild(pageContent);
    isHeaderCreated = true;
}

export default createRestaurantHomePage;