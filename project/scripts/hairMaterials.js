// fetchHairMaterials.js

// Function to fetch hair materials from JSON file
async function fetchhairMaterials() {
    try {
        const response = await fetch('C:\Users\SYLVESTER\Documents\byu C1\third semester\WDD231(WEB FRONTEND1)\wdd231\project\data\activities.json'); // Update the path as needed
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
fetchhairMaterials();
