// Get the url of the form
const currentUrl = window.location.href;

// split the form url into 2
const everything = currentUrl.split("?")

// break the form value out into an array
const formData = everything[1].split("&")
console.log(formData)

// function to get only form value from the array
function value(value){
    formData.forEach(element => {
        if(element.startsWith(value)){
            result=element
            .replaceAll("+", " ")
            .replaceAll("%40", "@")
            .replace("%2B", " ")
            .split("=")[1]
        }
    });
    return(result)
}

const timestamp = decodeURIComponent(value("timestamp"));
console.log(timestamp)

// display result on html
const showInfo = document.querySelector("#results")
showInfo.innerHTML = `
<p>Here are you Informations:</p>
<p>Full name: <strong>${value("first")} ${value("last")}</strong></p>
<P>Title: <strong>${value("orgTitle")}</strong></P>
<p>Email: <a href = "mailto:${value("email")}">${value("email")}</a></p>
<p>Phone: <a href = "tel:${value("phone")}">${value("phone")}</a></p>
<P>Organization: <strong>${value("orgName")}</strong></P>
<P>Organization Description: <strong>${value("orgDescription")}</strong></P>
<p>Submission: <strong>${timestamp}</strong></p>
`;