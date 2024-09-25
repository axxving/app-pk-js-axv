/**
 *
 * @param {Array} pokemonList - Lista de instancias de pokemon a renderizar
 * @param {HTMLDivElement} element - Elemento donde se insertara la lista
 * @returns
 */
export const renderPokemonList = (pokemonList, element) => {
  // Si no hay Pokemons, mostramos un mensaje alternativo
  if (pokemonList === 0) {
    element.innerHTML = `<p>No hay pokemons en la lista</p>`;
    return;
  }

  // Generamos el HTML para cada pokemon
  const pokemonHtml = pokemonList
    .map((pokemon) => `<h2>${pokemon.name}</h2>`)
    .join("");

  // Insertamos el HTML generado en el elemento
  element.innerHTML = `
    <div class="pokemon-list">
        ${pokemonHtml}
    </div>
  `;
};
