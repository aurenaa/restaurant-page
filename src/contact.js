function createContactPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const headline = document.createElement("h1");
    headline.textContent = "Visit us or call us today";
    pageContent.appendChild(headline);

    const openingHours = document.createElement("h2");
    openingHours.textContent = "Opening Hours";
    pageContent.appendChild(openingHours);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Mon - Sat: 8am - 12pm";
    pageContent.appendChild(paragraph);
    content.appendChild(pageContent);

    const form = document.createElement("form");
    form.classList.add("contact-form");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    form.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.placeholder = "Email";
    form.appendChild(emailInput);

    const messageInput = document.createElement("input");
    messageInput.type = "text";
    messageInput.placeholder = "Message";
    form.appendChild(messageInput);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
}

export default createContactPage;