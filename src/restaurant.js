//adding image, headline ect.

function createRestauranHomePage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content"); //for adding and removing things

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
    content.appendChild(pageContent);
}

export default createRestauranHomePage;