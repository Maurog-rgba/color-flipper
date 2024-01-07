document.querySelector(".container").addEventListener("submit", function (event) {
  event.preventDefault();

  const api_url = "http://localhost:3000";

  let uname = document.querySelector('input[name="uname"]').value;
  let psw = document.querySelector('input[name="psw"]').value;

  fetch(`${api_url}/auth/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: uname, password: psw }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem('token', data.token);
      window.location.href = '../../home/home.html'
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Usuário ou senha incorretos");
    });
});
