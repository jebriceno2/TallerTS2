// src/main.ts
import { dataSeries } from "./data.js";
const seriesTbody = document.getElementById("series");
const avgSeasonsSpan = document.getElementById("avgSeasons");
// Renderiza las series en la tabla
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        const trElement = document.createElement("tr");
        // Reemplazamos la celda Name por un link:
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>
        <a href="${serie.webpage}" target="_blank">
          ${serie.name}
        </a>
      </td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        seriesTbody.appendChild(trElement);
    });
}
// Calcula el promedio de temporadas
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((serie) => (totalSeasons += serie.seasons));
    return totalSeasons / series.length;
}
// Llamamos las funciones
renderSeriesInTable(dataSeries);
const avgSeasons = getAverageSeasons(dataSeries);
avgSeasonsSpan.innerText = avgSeasons.toFixed(2);
