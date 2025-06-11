import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

function createTabs() {
    const pageHeader = document.querySelector(".page-header");
    const divButtons = document.createElement("div");
    const div1 = document.createElement("button");
    const div2 = document.createElement("button");
    const div3 = document.createElement("button");

    //for styling
    divButtons.setAttribute("class", "buttons")
    div1.setAttribute("id", "home-btn");
    div2.setAttribute("id", "menu-btn");
    div3.setAttribute("id", "contact-btn");

    const restaurantLogo = document.createElement("img");
    restaurantLogo.classList.add("logo");
    restaurantLogo.src = "/logo.png";
    pageHeader.appendChild(restaurantLogo);

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    pageHeader.appendChild(divButtons);
    divButtons.appendChild(div1);
    divButtons.appendChild(div2);
    divButtons.appendChild(div3);

    restaurantLogo.addEventListener("click", () => {
        clearContent();
        createRestaurantHomePage();
    })

    div1.addEventListener("click", () => {
        clearContent();
        createRestaurantHomePage();
    })

    div2.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    })

    div3.addEventListener("click", () => {
        clearContent();
        createContactPage();
    })
}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs; clearContent;