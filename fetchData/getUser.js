const userDiv = document.getElementById("user");

fetch("https://reqres.in/api/users/2").then((response) => {
  response.json().then((data) => {
    console.log(data);
    userDiv.innerHTML = `<h1>${data}</h1>`;
    console.log(data);
  });
});
