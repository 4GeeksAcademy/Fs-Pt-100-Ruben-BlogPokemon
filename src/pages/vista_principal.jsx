
import { ItemCard } from "../components/item_card.jsx";
import { PokemonCard } from "../components/pokemon_card.jsx";
import { TypeCard } from "../components/type_card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../styles/vista_principal.css"

export const VistaPrincipal = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="fondoPrincipal text-center">
			<h1><span className="fa-solid fa-dragon"></span> <span className="fa-solid fa-fire"></span> Pokemon World!! <span className="fa-solid fa-fire"></span> <span className="fa-solid fa-dragon fas fa-arrow-right fa-flip-horizontal"></span></h1>

			<h2> Pokemons!! </h2>
			<div className="fondoListas">
				{store.pokemons?.results?.map((el, i) => (
					<PokemonCard
						key={i}
						name={el.name}
						url={el.url}
					/>
				))}
			</div>

			<h2> Items!! </h2>
			<div className="fondoListas">
				{store.items?.results?.map((el, i) => (
					<ItemCard
						key={i}
						name={el.name}
						url={el.url}
					/>
				))}
			</div>

			<h2> Type!! </h2>
			<div className="fondoListas">
				{store.types?.results?.map((el, i) => (
					<TypeCard
						key={i}
						name={el.name}
						url={el.url}
					/>
				))}
			</div>
		</div>
	);
}; 