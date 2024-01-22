      // This is just a placeholder. In a real application, these would be fetched from a server.
      var jokes = [
        { id: 1, joke: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", rating: 0 },
        { id: 2, joke: "Why did the chicken go to the seance?", punchline: "To talk to the other side!", rating: 0 },
      ];

      var jokeTable = document.getElementById("jokeTable");
      jokes.forEach(function (joke) {
        var row = jokeTable.insertRow();
        row.insertCell().innerText = joke.joke;
        row.insertCell().innerText = joke.punchline;
        var ratingCell = row.insertCell();
        ratingCell.innerText = joke.rating;
        ratingCell.className = "rating";
        ratingCell.onclick = function () {
          joke.rating++;
          ratingCell.innerText = joke.rating;
        };
      });

      var submitJokeButton = document.getElementById("submitJokeButton");
      // This is just a placeholder. In a real application, this would check if the user is a Pro user.
      var isProUser = false;
      submitJokeButton.disabled = !isProUser;