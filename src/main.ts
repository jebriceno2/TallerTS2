// src/main.ts

import { dataSeries } from "./data.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById("series")!; 
const avgSeasonsSpan: HTMLElement = document.getElementById("avgSeasons")!;
const cardContainer: HTMLElement = document.getElementById("card-container")!;

// Renderiza las series en la tabla
function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>
      <a href="#">
          ${serie.name}
        </a>
      </td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    trElement.addEventListener("click", () => {
      showCardDetail(serie);
    });
    seriesTbody.appendChild(trElement);
  });
}
function showCardDetail(serie: Serie): void {
  // Documentación: https://getbootstrap.com/docs/4.3/components/card/

  cardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${serie.poster}" alt="Poster of ${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">
          ${serie.description}
        </p>
        <a href="${serie.webpage}"target="_blank">
        ${serie.webpage}
        </a>
      </div>
    </div>
  `;
}
// Calcula el promedio de temporadas
function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => (totalSeasons += serie.seasons));
  return totalSeasons / series.length;
}

// Llamamos las funciones
renderSeriesInTable(dataSeries);
avgSeasonsSpan.innerText = getAverageSeasons(dataSeries).toFixed(2);
