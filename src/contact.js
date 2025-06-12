function createContactPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);

    const headline = document.createElement("h1");
    headline.classList.add("headline");
    headline.textContent = "Visit us or call us today";
    pageContent.appendChild(headline);

    const contact = document.createElement("div");
    contact.classList.add("contact");
    pageContent.appendChild(contact);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    contact.appendChild(contactInfo);

    const contactUs = document.createElement("h3");
    contactUs.textContent = "Contact information:";
    contactInfo.appendChild(contactUs);

    const address = document.createElement("p");
    address.textContent = "Address: 82 Iroquois Road Brooklyn, NY 11213";
    contactInfo.appendChild(address);

    const phone = document.createElement("p");
    phone.textContent = "Phone number: +646-708-7615";
    contactInfo.appendChild(phone);

    const email = document.createElement("p");
    email.textContent = "Email: slicehaven@gmail.com";
    contactInfo.appendChild(email);

    const hoursParOne = document.createElement("h3");
    hoursParOne.textContent = "WORK HOURS";
    contactInfo.appendChild(hoursParOne);

    const hoursParTwo = document.createElement("p");
    hoursParTwo.textContent = "Monday - Friday: 9am - 23pm";
    contactInfo.appendChild(hoursParTwo);

    const hoursParThree = document.createElement("p");
    hoursParThree.textContent = "Sunday - Saturday: 10am - 23pm";
    contactInfo.appendChild(hoursParThree);

    const formDiv = document.createElement("div");
    formDiv.classList.add("form-div");
    const form = document.createElement("form");
    form.classList.add("contact-form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name*";
    nameLabel.setAttribute("for", "name");
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "John Smith";
    nameInput.id = "name";
    form.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email*";
    emailLabel.setAttribute("for", "email");
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "someone@example.com";
    emailInput.id = "email";
    form.appendChild(emailInput);

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message*";
    messageLabel.setAttribute("for", "message");
    form.appendChild(messageLabel);

    const messageInput = document.createElement("textarea"); // koristi textarea za poruke
    messageInput.id = "message";
    form.appendChild(messageInput);

    formDiv.appendChild(form);
    contact.appendChild(formDiv);

    const submitButton = document.createElement("input");
    submitButton.classList.add("submit-btn");
    submitButton.type = "submit";
    formDiv.appendChild(submitButton);
}

export default createContactPage;