document.addEventListener("DOMContentLoaded", function() {
    // Create the form element
    const form = document.createElement('form');
    form.setAttribute('id', 'complaintForm');

    // Create and append form elements
    // Name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', 'required');
    form.appendChild(nameInput);

    form.appendChild(document.createElement('br'));

    // Email
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('required', 'required');
    form.appendChild(emailInput);

    form.appendChild(document.createElement('br'));

    // Complaint
    const complaintLabel = document.createElement('label');
    complaintLabel.setAttribute('for', 'complaint');
    complaintLabel.textContent = 'Complaint:';
    form.appendChild(complaintLabel);

    const complaintTextarea = document.createElement('textarea');
    complaintTextarea.setAttribute('id', 'complaint');
    complaintTextarea.setAttribute('name', 'complaint');
    complaintTextarea.setAttribute('required', 'required');
    form.appendChild(complaintTextarea);

    form.appendChild(document.createElement('br'));

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Append form to the container
    document.getElementById('form-container').appendChild(form);

    // Toggle form visibility
    const toggleFormButton = document.getElementById('toggleFormButton');
    const complaintFormContainer = document.getElementById('complaint-form-container');

    toggleFormButton.addEventListener('click', function() {
        if (complaintFormContainer.style.display === 'none' || complaintFormContainer.style.display === '') {
            complaintFormContainer.style.display = 'block';
        } else {
            complaintFormContainer.style.display = 'none';
        }
    });
});
