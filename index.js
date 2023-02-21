import { html, render } from "lit-html";

// Fetch data from jsonplaceholder's "users" endpoint
fetch("https://jsonplaceholder.typicode.com/users")
  // Then convert the response to JSON
  .then((response) => response.json())

  // Then do something with the JSON data
  .then((data) => {
    let users = data;

    // Use .map to create an array of html templates to render to the DOM
    let userList = users.map(function (user) {
      return html`<div class="user-entry">
        <h2>${user.name}</h2>
        <span>${user.email}</span>
      </div>`;
    });

    // Render the userList array to the user-list div
    render(userList, document.getElementById("user-list"));
  });
