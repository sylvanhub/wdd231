// Function to fetch hair materials from JSON file
async function fetchHairMaterials() {
    try {
        const url = "https://sylvanhub.github.io/wdd231/project/data/activities.json";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const hairMaterials = await response.json();
        displayHairMaterials(hairMaterials);
    } catch (error) {
        console.error('Error fetching hair materials:', error);
    }
}

// Function to display hair materials
function displayHairMaterials(hairMaterials) {
    const container = document.getElementById("hair-materials-container");
    
    // Clear any existing content in the container
    container.innerHTML = "";

    hairMaterials.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("hair-item");
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Description: ${item.description}</p>
        `;
        container.appendChild(itemDiv);
    });
}

// Call the function to fetch and display hair materials
fetchHairMaterials();
