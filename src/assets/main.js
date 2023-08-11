import { fetchData } from "./controllers/controller.js";
let root = document.getElementById("posters")


async function fetchAndDisplay() {
    try {
        const data = await fetchData();
        let html = "";
        data.forEach((data) => {
            console.log("dadas", data.imagen)
            let mappData = `<div class="card">
                                <img  class="card-image" src="${data.personaje}">
                                <br>
                                <h2 class="descript">${data.nombre}</h2>
                                <h2 class="descript">${data.especie}</h2>
                            </div>`
            html = root.innerHTML += mappData;
        });
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
    }
}

fetchAndDisplay();