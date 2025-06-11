//adding image, headline ect.
import clearContent from "./tabs"
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