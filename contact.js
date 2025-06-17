document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetching input values
    const firstName = document.getElementById("ijowk-6").value.trim();
    const lastName = document.getElementById("indfi-4").value.trim();
    const email = document.getElementById("ipmgh-6").value.trim();
    const phone = document.getElementById("imgis-5").value.trim();
    const query = document.getElementById("i5vyy-6").value.trim();

    // You can now log them, send them to a server, or validate as needed
    console.log("Form Data:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Query:", query);

    // Optionally show a confirmation
    alert("Thank you for contacting us, " + firstName + "!");
  });
});