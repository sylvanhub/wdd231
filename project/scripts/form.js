document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve values from the form
    const serviceType = document.getElementById('serviceType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Display a thank-you message
    const thankYouMessage = `
        Thank you for booking with us, ${name}!
        Here are your appointment details:
        Service: ${serviceType}
        Date: ${date}
        Time: ${time}
        Phone: ${phone}
        Email: ${email}
    `;
    
    window.alert(thankYouMessage); // Use window.alert for a prompt

    // Optionally, you can redirect to the confirmation page
    // window.location.href = 'confirmation.html';
});
