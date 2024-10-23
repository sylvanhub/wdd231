const year = document.querySelector("#currentyear");
const todaysDate = new Date();

year.innerHTML = `${todaysDate.getFullYear()}`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last date page was modified ${document.lastModified}`;