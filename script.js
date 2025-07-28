form.addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill out all fields.");
  } else {
    e.preventDefault(); // still prevent real submit since no backend
    alert(" Your message has been 'sent' (demo mode)");
    form.reset();
  }
});

