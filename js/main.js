document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    // Basic validation
    if (!firstName || !lastName || !phone || !email) {
      alert("Please fill out all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number format (basic check for numbers only)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // If all validations pass
    document.getElementById("message").textContent =
      "Form submitted successfully!";
    console.log("Form Data:", { firstName, lastName, phone, email });

    // Optionally, reset the form
    document.getElementById("contactForm").reset();
  });
