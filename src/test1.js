fetch("https://www.cheapshark.com/api/1.0/games?id=612")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));