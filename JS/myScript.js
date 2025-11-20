



    function validateForm(event) {
      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let reason = document.getElementById("reason").value;
      let message = document.getElementById("message").value.trim();

      let errorBox = document.getElementById("error-message");
      errorBox.innerHTML = "";

      if (!name || !email || !message) {
        errorBox.innerHTML = "Please fill out all required fields.";
        return;
      }

      let emailCheck = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailCheck.test(email)) {
        errorBox.innerHTML = "Please enter a valid email address.";
        return;
      }

      alert("Your message has been sent!");
      document.getElementById("contactForm").reset();
    }