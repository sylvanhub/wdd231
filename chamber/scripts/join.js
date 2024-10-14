const memberLevelsUrl = "https://adiquatech.github.io/wdd231/chamber/data/company-member-level.json";
const memberLevelsCard = document.querySelector("#member-card");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#dialog-title");
const myinfo = document.querySelector("#dialog-content");
const myclose = document.querySelector("#close-dialog");


myclose.addEventListener("click", () => mydialog.close());

// Fetch JSON data
fetch(memberLevelsUrl)
  .then(response => response.json())
  .then(data => displayMemberLevels(data['memberLevels']));

// Function to display membership levels as cards
function displayMemberLevels(memberLevels) {
  memberLevels.forEach(level => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = level.level;

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Show More";

    detailsButton.addEventListener("click", () => {
      mytitle.textContent = level.level;
      
      const benefitsList = level.benefits.map(benefit => `• ${benefit}`).join('\n');
      myinfo.textContent = benefitsList;

      mydialog.showModal();
    });
    card.appendChild(title);
    card.appendChild(detailsButton);
    memberLevelsCard.appendChild(card);
  });
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var min = today.getMinutes();
  var ss = today.getSeconds();

  // Format the date and time properly
  if (dd < 10) { dd = '0' + dd; }
  if (mm < 10) { mm = '0' + mm; }
  if (hh < 10) { hh = '0' + hh; }
  if (min < 10) {min = '0' + min}
  if (ss < 10) {ss = '0' + ss}

  // var formattedDate = "Date:" + yyyy + "/" + mm + "/" + dd + "-" + hh + "-" + min + "-" + ss;
  var formattedDate = `Date: ${yyyy}/${mm}/${dd} Time: ${hh}:${min}:${ss}`;
  var timestamp = formattedDate;

  document.getElementById("timestamp").value = timestamp;
  console.log(timestamp);
}
getDate();
