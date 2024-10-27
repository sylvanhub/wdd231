// main.js

// Module imports (for future scalability)
import { toggleComplaintForm } from './complainform.js';
import { logInUser } from './login.js';

// Global variables and constants
const complaintFormContainer = document.getElementById('complaint-form-container');
const toggleFormButton = document.getElementById('toggleFormButton');
const gallerySection = document.querySelector('.gallery');
const lastModified = document.getElementById('lastModified');
const apiEndpoint = 'https://jsonplaceholder.typicode.com/users'; // Example JSON data source

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayLastModified();
    setupEventListeners();
    loadGalleryItems();
});

// 1. Toggle Complaint Form
function setupEventListeners() {
    toggleFormButton.addEventListener('click', () => toggleComplaintForm(complaintFormContainer));
}

// 2. Fetch API Data and Populate Gallery
async function loadGalleryItems() {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error('Network response was not ok');
        const users = await response.json();
        
        // Display gallery items dynamically
        displayGallery(users.slice(0, 15)); // Show only first 15 items for performance
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 3. Display Gallery Items in Modal
function displayGallery(users) {
    gallerySection.innerHTML = ''; // Clear any existing items
    users.forEach(user => {
        const item = document.createElement('figure');
        item.classList.add('gallery-item');
        
        item.innerHTML = `
            <img src="images/sample.jpg" alt="${user.name}" loading="lazy">
            <figcaption>${user.name}</figcaption>
        `;
        
        // Add modal event listener
        item.addEventListener('click', () => showModal(user));
        
        gallerySection.appendChild(item);
    });
}

// 4. Show Modal with User Info
function showModal(user) {
    const modalContent = `
        <div class="modal">
            <h2>${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
            <button onclick="closeModal()">Close</button>
        </div>
    `;
    complaintFormContainer.innerHTML = modalContent;
    complaintFormContainer.style.display = 'block';
}

function closeModal() {
    complaintFormContainer.style.display = 'none';
    complaintFormContainer.innerHTML = '';
}

// 5. Local Storage for Visit Count
function incrementVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    console.log(`You have visited this page ${visitCount} times.`);
}

// 6. Display Last Modified Date
function displayLastModified() {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// Execute Local Storage Function
incrementVisitCount();

