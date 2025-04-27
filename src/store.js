export const initialStore=()=>{
  return{
      pokemons: [],
			items: [],
			types: [],

			unPokemon: [],
			unItem: [],
			unType: [],

			favorito: [],
   
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_pokemon': 
    return {
      ...store,
      pokemons: action.payload
    }
    case 'load_item': 
    return {
      ...store,
      items: action.payload
    }
    case 'load_type': 
    return {
      ...store,
      types: action.payload
    }
    case 'get_pokemon':
      return {
        ...store,
        unPokemon: action.payload
      }
      case 'get_item':
      return {
        ...store,
        unItem: action.payload
      }
      case 'get_type':
      return {
        ...store,
        unType: action.payload
      }
      case 'añadir_favoritos':
        return {
          ...store,
          favorito: [
            ...store.favorito,
          {
            id: action.payload.id,
            name: action.payload.name,
            category: action.payload.category
          }
          ]
        }
        case 'delete_favoritos':
          return {
            ...store,
            favorito: store.favorito.filter(fav => !(fav.id === action.payload.id && fav.category === action.payload.category))
          }
      
    default:
      throw Error('Unknown action.');
  }    
}
