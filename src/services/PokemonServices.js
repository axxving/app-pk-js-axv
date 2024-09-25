import { Pokemon } from "../models/Pokemon.js";

export class PokemonServices {
  constructor(apiUrl) {
    // URL base de la API de Pokémon
    this.apiUrl = apiUrl;
  }

  /**
   * Metodo para obtener la lista de los pokemon
   * @param {number} limit - Numero de pokemons a recuperer
   * @param {number} offset - Offset para paginacion (de donde empezar)
   * @returns {Promise<Array>} - Lista de pokemons obtenidos de la API
   */
  async getPokemonList(limit = 10, offset = 0) {
    try {
      /** Hacemos una llamada a la API para obtener la lista de los pokemon */
      const response = await fetch(
        `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`
      );
      /** Pasando la respuesta en formato JSON */
      const data = await response.json();
      console.log(data.results);
      return data.results.map((pokemonData) => new Pokemon(pokemonData));
    } catch (error) {
      console.error("Error al obtener la lista de pokemon:", error);
      return [];
    }
  }
}
