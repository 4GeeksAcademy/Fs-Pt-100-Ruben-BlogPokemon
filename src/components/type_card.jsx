import { useNavigate, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "../styles/card.css"
import storeService from "../services/flux"

export const TypeCard = ({ name, url }) => {

    let idAux = url.split('/')
    let id = idAux[6]
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/type/${id}`)
    }

    const handleFav = () => {
        const like = store.favorito.find(fav => fav.name === name);

        if ( esFavorito ) {
            dispatch({ type: 'delete_favoritos', payload: {id: like.id, category: like.category} })
        }else {
            storeService.getOneType(id).then(data => {
                const favorito = {
                    id: data.id,
                    name: data.name,
                    category: 'type'
                };
                dispatch({ type: 'añadir_favoritos', payload: favorito })
            })
        }}



    const esFavorito = store.favorito.some(fav => fav.name === name)


    return (

        <div className="card-ball" >
            <img className="card-img-top mt-1" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png`} alt={`foto Type ${name}`} />
            <div className="card-body mt-4">
                <h5 className="card-title mb-1">{name}</h5>
                <div className="moreAndFav">
                    <button onClick={handleClick} className="btn btn-primary m-2">Learn More</button>
                    <button
                        onClick={handleFav}
                        className={`btn ${esFavorito ? 'btn-danger' : 'btn-warning'}`}

                    >
                        <i className={`fa-heart ${esFavorito ? 'fa-solid' : 'fa-regular'}`}></i>
                    </button>
                </div>

            </div>
        </div>
    )
}