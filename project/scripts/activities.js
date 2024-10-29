const url = "https://sylvanhub.github.io/wdd231/project/data/activities.json";
const container = document.querySelector("#hair-materials-container");
const modal = document.querySelector("#myModal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const closeModalButton = document.querySelector(".close");

// Close modal event listener
closeModalButton.addEventListener("click", () => modal.style.display = 'none');

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Async function to fetch JSON data and display item cards
async function fetchHairMaterials() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayHairMaterials(data.hairMaterials);
  } catch (error) {
    console.error('Error fetching hair Materials:', error);
  }
}

// Function to display hairMaterials as cards
function displayHairMaterials(hairMaterials) {
  hairMaterials.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("item");

    const image = document.createElement("img");
    image.src = item.image || "https://via.placeholder.com/200";
    image.alt = item.name;

    const name = document.createElement("h2");
    name.textContent = item.name;

    const shortDescription = document.createElement("p");
    shortDescription.textContent = item.description;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `₦${item.price}`;

    const category = document.createElement("p");
    category.classList.add("price");
    category.textContent = item.category;

    const stock = document.createElement("p");
    stock.classList.add("price");
    stock.textContent = `${item.stock} in Stock`;

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Show More";
    detailsButton.setAttribute("data-index", index);

    // Add click event to show modal with full item description
    detailsButton.addEventListener("click", () => {
      modalTitle.textContent = item.name;
      modalDescription.textContent = item.fullDescription;
      modal.style.display = 'block';
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(category);
    card.appendChild(shortDescription);
    card.appendChild(stock);
    card.appendChild(detailsButton);

    container.appendChild(card);
  });
}

// Call the fetch function
fetchHairMaterials();
