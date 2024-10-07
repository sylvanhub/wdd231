async function fetchMembers() {
    try {
        const response = await fetch('https://sylvanhub.github.io/wdd231/chamber/data/members.json'); // Using the provided path
        const data = await response.json();
        const members = data.members; // Access the members array

        // Randomly select 2-3 members
        const selectedMembers = getRandomMembers(members, 2, 3);

        // Display the selected members
        displayMembers(selectedMembers);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function getRandomMembers(members, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayMembers(members) {
    const container = document.getElementById('members-container'); // Ensure you have a container in your HTML
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.image}" alt="${member.name} logo" style="width: 100px; height: auto;">
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        `;
        container.appendChild(memberDiv);
    });
}

// Call the function to fetch and display members
fetchMembers();
