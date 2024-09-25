export class Pokemon {
  constructor({ name, url }) {
    this.name = name;
    this.url = url;
    // Extrae el id del pokemon a partir de su URL (opcional para mostrar imagenes, etc.)
  }

  // Metodo para extraer el id de la URL
  extractIdFromUrl(url) {
    const parts = url.split("/");
    // Retornar el id que viene de la URL
    return parts[parts.length - 2];
  }
}
