import { Link } from "react-router-dom";
import "../styles/vista_particular.css"
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const handleDeleteFavorito = (id, category) => {
		dispatch({ 
			type: 'delete_favoritos', 
			payload: { id, category } 
		})
	}

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<img className="imagePoke" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt={`foto pokemon ${name}`} />
				</Link>
				<div className="m-3 dropdown-center me-3">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites!! <span className="fa-solid fa-heart"></span>
					</button>
					<ul className="dropdown-menu dropdown-menu-lg-end">
						{store.favorito.length === 0 ? (
							<li className="dropdown-item text-muted">Without Favorites Yet!!!</li>
						) : (
						store.favorito?.map((favorito, index) => (
							<li className="listadefavoritos" key={index}>
								<Link 
									to={`/${favorito.category}/${favorito.id}`}
								  	className="dropdown-item flex-grow-1 " 
									
									>
									{favorito.name}
								</Link>
								<button
									className="btn btn-sm text-danger"
									onClick={() => handleDeleteFavorito(favorito.id, favorito.category)}
									aria-label={`Eliminar ${favorito.name} de favoritos`}
								>
									<i className="fa-solid fa-trash"></i>
								</button>
							</li>
						)))}
					</ul>
				</div>
			</div>
		</nav>
	);
};