function createMenuPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";
    pageContent.appendChild(headline);

    const menuList = document.createElement("ul");
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Carbonara";

    menuList.appendChild(menuItem1);
    pageContent.appendChild(headline);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;