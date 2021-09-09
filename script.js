let skojigt= ['rita','resa','shoppa', 'fika', 'baka']; //arrayen

// Här gör vi listan

let list = document.createElement("ul");

for (let i of skojigt) {
  let item = document.createElement("li");
  item.innerHTML = i;
  list.appendChild(item);
}

// skriver ut listan
document.getElementById("kulSaker").appendChild(list);
