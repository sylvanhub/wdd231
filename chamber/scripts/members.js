// Company Members
const url = "https://sylvanhub.github.io/wdd231/chamber/data/members.json";
const cards = document.getElementById("cards");
const membershipContainer = document.getElementById("membership-container"); // New container for memberships

async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        console.log('Fetched members:', data.members); // Log fetched members for debugging
        displayMembers(data.members);
        displayRandomMemberships(data.members);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
getMemberData();

// Function to display the fetched members on the webpage
const displayMembers = (members) => {
    cards.innerHTML = ""; // Clear previous cards
    members.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const info = document.createElement("div");
        const line = document.createElement("hr");

        info.textContent = `${member.phone} || ${member.email} || ${member.address}`;
        name.textContent = `${member.name}  `;

        const image = new Image();
        image.src = member.img;
        image.alt = `The brand icon of ${member.name}`;

        image.onload = function () {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            image.setAttribute("width", width);
            image.setAttribute("height", height);
        };

        card.appendChild(name);
        card.appendChild(line);
        card.appendChild(image);
        card.appendChild(info);
        cards?.appendChild(card);
    });
};

// Function to filter
function filterGoldSilver(members) {
    return members.filter(member => member.membership === "Gold" || member.membership === "Silver");
}

// Function to shuffle
function getRandomMemberships(members) {
    const filteredMembers = filterGoldSilver(members);
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// Function to display memberships
function displayRandomMemberships(members) {
    const randomMemberships = getRandomMemberships(members);
    membershipContainer.innerHTML = ""; // Clear previous memberships

    randomMemberships.forEach(member => {
        const card = document.createElement("section");

        // Create name heading element
        const name = document.createElement("h3");
        name.textContent = `${member.name}`;
        const line = document.createElement("hr");

        // Create a container for image and details
        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details-container");

        // Create image element
        const image = new Image();
        image.src = member.img;
        image.alt = `The brand icon of ${member.name}`;
        image.onload = function () {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            image.setAttribute("width", width);
            image.setAttribute("height", height);
        };

        // Create a div for the member details
        const details = document.createElement("div");
        details.classList.add("details");

        const phone = document.createElement("div");
        const phoneLabel = document.createElement("span");
        phoneLabel.textContent = "Phone: ";
        phoneLabel.style.fontWeight = "bold"; // Make the label bold
        phone.appendChild(phoneLabel);
        phone.appendChild(document.createTextNode(member.phone));

        const email = document.createElement("div");
        const emailLabel = document.createElement("span");
        emailLabel.textContent = "Email: ";
        emailLabel.style.fontWeight = "bold"; // Make the label bold
        email.appendChild(emailLabel);
        email.appendChild(document.createTextNode(member.email));

        const address = document.createElement("div");
        const addressLabel = document.createElement("span");
        addressLabel.textContent = "Address: ";
        addressLabel.style.fontWeight = "bold"; // Make the label bold
        address.appendChild(addressLabel);
        address.appendChild(document.createTextNode(member.address));

        details.appendChild(phone);
        details.appendChild(email);
        details.appendChild(address);

        // Append image and details to the detailsContainer
        detailsContainer.appendChild(image);
        detailsContainer.appendChild(details);

        // Append the name, line, and detailsContainer to the card
        card.appendChild(name);
        card.appendChild(line);
        card.appendChild(detailsContainer);

        // Append the card to the container
        membershipContainer.appendChild(card);
    });
}
