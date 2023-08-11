
const apiUrl = "https://rickandmortyapi.com/api/character/";

export async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let arrayPersons = [];
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            let filtro = {
                nombre: element.name,
                especie: element.species,
                personaje: element.image
            }
            arrayPersons.push(filtro)
        }
        return arrayPersons;
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        throw error;
    }
}

fetchData();