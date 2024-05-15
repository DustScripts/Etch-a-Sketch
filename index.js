const container = document.getElementById("container");

for (i = 0; i < 256; i++) {
  let gridDiv = document.createElement("div");
  gridDiv.classList.add("divGrid");
  gridDiv.textContent = `${i}`;
  container.appendChild(gridDiv);
  console.log(gridDiv);
}
