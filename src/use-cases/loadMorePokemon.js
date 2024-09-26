import { PokemonServices } from "../services/PokemonServices";
import { Store } from "../store/store";
import { renderPokemonList } from "../presentation/pokemonList";

const pokemonService = new PokemonServices("https://pokeapi.co/api/v2");
const store = new Store();

export const loadMorePokemon = async (element) => {
  // Incrementamos la pagina actual en el store
  const currentPage = store.getState().currentPage + 1;
  store.setState({ currentPage: currentPage });

  // Mostramos un mensaje de carga
  element.innerHTML += "<p>Cargando mas pokemon</p>";

  try {
    // obtener la siguiente pagina de pokemon
    const newpokemonList = await pokemonService.getPokemonList(
      10,
      currentPage * 10
    );

    // Actualizamos el estado agregando los nuevos pokemon a la lista existente
    const allPokemon = [...store.getState().pokemonList, ...newpokemonList];

    store.setState({ pokemonList: allPokemon });

    // renderizamos la lista actualizada de pokemon
    renderPokemonList(allPokemon, element);
  } catch (error) {
    console.log("Error al cargar mas pokemon: ", error);
    element.innerHTML += "<p>Error al cargar mas pokemon</p>";
  }
};
