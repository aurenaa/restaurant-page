function createMenuPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const menuHead = document.createElement("div");
    menuHead.classList.add("menu-head");
    content.appendChild(menuHead);

    //const ourMenu = document.createElement("div");
    //ourMenu.classList.add(our-menu);
    //menuHead.appendChild(ourMenu);

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

    const menuList = document.createElement("ul");
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Carbonara";

    menuList.appendChild(menuItem1);
    pageContent.appendChild(headline);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;