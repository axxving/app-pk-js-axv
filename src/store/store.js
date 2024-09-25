export class Store {
  constructor() {
    // Estado inicial de la alicacion
    this.state = {
      pokemonList: [],   //  lista de pokemones
      currentPage: 0,    //  pagina actual (offset)
      isLoading: false,  //  Estado de carga
      error: null,       //  Manejo de errores
    };
  }

  // Obtener el estado actual
  getState() {
    return this.state;
  }

  // Actualizar el estado (mezcla el nuevo estado con el existente)
  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  // Restablecer el estado a su valor inicial
  resetState() {
    this.state = {
      pokemonList: [],   //  lista de pokemones
      currentPage: 0,    //  pagina actual (offset)
      isLoading: false,  //  Estado de carga
      error: null,       //  Manejo de errores
    };
  }
}
