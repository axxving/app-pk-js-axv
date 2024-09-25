import { PokemonServices } from "./services/PokemonServices";
import { Store } from "./store/store";
import { renderPokemonList } from "./presentation/pokemonList";

// Inicializar el servicio y el store
const pokemonService = new PokemonServices("https://pokeapi.co/api/v2");
const store = new Store();

export const pokemonApp = async (element) => {
  // Actualizamos el estado para indicar que estamos cargando
  store.setState({ isLoading: true });
  element.innerHTML = "Cargando pokemons...";

  try {
    // Llamamos al servicio para obtener la primera pagina de los pokemon
    const pokemonList = await pokemonService.getPokemonList(
      10,
      store.getState().currentPage * 10
    );

    // Actualizamos el estado con la lista de pokemons obtenida y cambiamos el estado de carga
    store.setState({
      pokemonList: pokemonList,
      isLoading: false,
    });

    // Renderizamos la lista de pokemon en el DOM
    renderPokemonList(pokemonList, element);
  } catch (error) {
    // Actualizamos el estado en caso de obtener un error
    store.setState({
      isLoading: false,
      error: "Error al cargar los pokemons",
    });

    console.log("error al obtener los pokemon: ", error);

    element.innerHTML = "<p>Error al cargar los pokemons.</p>";
  }
};
