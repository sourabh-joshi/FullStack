window.setTimeout(function() {
  console.log("CONNECTED!");

  var todos = [];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      console.log(todos);
    }
    if (input === "new") {
      todos.push(prompt("Whats on your mind?"));
    }
    input = prompt("What would you like to do?");
  }
}, 500);
