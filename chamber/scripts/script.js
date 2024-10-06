// Last Modified date 
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.querySelector(".currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.querySelector(".lastModified").textContent = `Last Modified: ${lastModified}`;
    });
  
    // Hamburger button
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navLinks");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  
    // Grid and List buttons
    document.addEventListener("DOMContentLoaded", () => {
      const gridButton = document.querySelector("#gridView");
      const listButton = document.querySelector("#listView");
      const cards = document.getElementById("cards");
    
      if (gridButton &&listButton) {
        listButton.addEventListener("click", () => {
        cards.parentElement.classList.add("list");
        cards.parentElement.classList.remove("grid");
        });
    
        gridButton.addEventListener("click", () => {
        cards.parentElement.classList.add("grid");
        cards.parentElement.classList.remove("list");
        });
      }
  });
    
  
  // Active page
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navLinks a');
    const currentLocation = window.location.href;
  
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.parentElement.classList.add('current-menu-item');
        }
    });
  });
  
  