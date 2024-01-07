document.querySelector(".container").addEventListener("submit", function (event) {
  event.preventDefault();

  const api_url = "http://localhost:3000";

  let userData = {};

  userData.username = document.querySelector('input[name="username"]').value;
  userData.email = document.querySelector('input[name="email"]').value;
  userData.name = document.querySelector('input[name="name"]').value;
  userData.password = document.querySelector('input[name="password"]').value;

  fetch(`${api_url}/auth/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem("token", data.token);
      window.location.href = "../../home/home.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
