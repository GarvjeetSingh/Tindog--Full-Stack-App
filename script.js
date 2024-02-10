document.getElementById("signupBtn").addEventListener("click", function() {
  document.getElementById("signupModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("signupModal").style.display = "none";
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  
  // Simple form validation
  if (!username || !email) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate sending form data to backend server
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email })
  })
  .then(response => response.json())
  .then(data => {
    alert(`Welcome, ${data.username}! You have successfully signed up.`);
    document.getElementById("signupModal").style.display = "none";
  })
  .catch(error => console.error("Error:", error));
});
