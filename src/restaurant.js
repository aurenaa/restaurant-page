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
    threeTwo.src = "/5.jpg";
    const fourOne = document.createElement("img");
    fourOne.classList.add("fourOne");
    fourOne.src = "/1.png";
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