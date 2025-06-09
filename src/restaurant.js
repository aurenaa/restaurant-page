//adding image, headline ect.

let isHeaderCreated = false;

function createRestaurantHomePage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant";
    pageContent.appendChild(headline);

    const image = document.createElement("img");
    image.src = "/interior.jpg";
    image.height = "300";
    image.width = "300";
    pageContent.appendChild(image);

    const paragraph = document.createElement("p");
    paragraph.textContent = "New restaurant in the Bay area come and visit.";
    pageContent.appendChild(paragraph);

    const pageHeader = document.createElement("div");
    pageHeader.classList.add("page-header");
    pageContent.classList.add("page-content");

    const restaurantLogo = document.createElement("img");
    restaurantLogo.classList.add("logo");
    restaurantLogo.src = "/logo.png";
    pageHeader.appendChild(restaurantLogo);

    if (!isHeaderCreated) {
        content.appendChild(pageHeader);
    }
    
    content.appendChild(pageContent);
    isHeaderCreated = true;
}

export default createRestaurantHomePage;