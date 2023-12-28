// GET BY ID
document.getElementById("first_ghost").style.fill = "orange";

// GET BY CLASS
const secondWave = document.getElementsByClassName("second_wave");

for (const ghost of secondWave) {
  ghost.style.fill = "blue";
}

// GET BY TAG NAME AND DRILL DOWN

const area51 = document.getElementById("area-51");
// console.log('area51', area51);
const aliens = area51.getElementsByTagName("svg");

for (const alien of aliens) {
  alien.style.fill = "green";
}

// querySelector nth-child
const penultimateGhost = document.querySelector(
  "#area-51 svg:nth-last-child(2)"
);

// penultimateGhost.style.fill = "yellow";
penultimateGhost.style.stroke = "red";
penultimateGhost.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
penultimateGhost.closest("div").style.border = "5px dashed";

// querySelectorAll
const oldSchoolGhosts = document.querySelectorAll("#area-50 svg");

for (const ghost of oldSchoolGhosts) {
  ghost.style.fill = "red";
}
