window.addEventListener("load", async function () {
  // Load sections with fetch function
  const sections = document.querySelectorAll("[data-src]");
  for (const section of sections) {
    const RESPONSE = await fetch(section.dataset.src);
    const MAIN_CONTENT = await RESPONSE.text();
    section.outerHTML = MAIN_CONTENT;
  }

  // Validate email
  function validateEmail() {
    const inputEmail = document.getElementById("mail");
    // Check for valid email address, and not from gmail
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailPattern.test(inputEmail.value)) {
      alert("Please, enter a valid email address.");
      return false;
    } else if (inputEmail.value.endsWith("@gmail.com")) {
      alert(
        "Gmail is not allowed as a mail provider. Please, enter a valid email address."
      );
      return false;
    }
    return true;
  }

  // Validate phone
  function validatePhone() {
    const inputPhone = document.getElementById("phone");
    // Check that the phone number has nine digits, starting with 6, 7, or 9
    const phonePattern = /^\d{9}(\s.+)?$/;
    if (!phonePattern.test(inputPhone.value)) {
      alert("Please, insert a valid phone number. Example: 915467843 Ext. 34");
      return false;
    } else if (
      !(
        inputPhone.value.startsWith("6") ||
        inputPhone.value.startsWith("7") ||
        inputPhone.value.startsWith("9")
      )
    ) {
      alert(
        "Please, insert a phone number of 9 digits starting with 6, 7 or 9. Example: 915467843 Ext. 34"
      );
      return false;
    }
    return true;
  }

  // Attach submit event listener to the form
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    // Validate email and phone
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();

    // If either validation fails, prevent form submission
    if (!isEmailValid || !isPhoneValid) {
      event.preventDefault();
    } else {
      alert("Form submitted successfully");
    }
  });
});
