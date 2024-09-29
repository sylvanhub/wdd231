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
  
      console.log(gridButton); // Should log the grid button
      console.log(listButton); // Should log the list button
      console.log(cards);      // Should log the cards container
    
      listButton?.addEventListener("click", () => {
        cards.classList.add("list");
        cards.classList.remove("grid");
      });
    
      gridButton?.addEventListener("click", () => {
        cards.classList.remove("list");
        cards.classList.add("grid");
      });
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
  
  
  
    // Company Members
    const url = "https:/https://sylvanhub.github.io/wdd231/chamber/data/members.json";
  const cards = document.getElementById("cards");
  
  async function getMemberData() {
      try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          displayMembers(data.members);
      } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
      }
  }
  
  getMemberData();
  
  const displayMembers = (members) => {
      members.forEach(member => {
          const card = document.createElement("section");
          const name = document.createElement("h3");
          const image = document.createElement("img");
          const info = document.createElement("div");
  
          info.textContent = `${member.phone} || ${member.email} || ${member.address}`;
          name.textContent = member.name;
  
          image.setAttribute("src", member.img);
          image.setAttribute("alt", `The brand icon of ${member.name}`);
          image.setAttribute("loading", "lazy");
          image.setAttribute("width", "200");
          image.setAttribute("height", "auto");
  
          card.appendChild(name);
          card.appendChild(image);
          card.appendChild(info);
          cards?.appendChild(card);
      });
  };
  