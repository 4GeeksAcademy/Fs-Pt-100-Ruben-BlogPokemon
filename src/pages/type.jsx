import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import storeService from "../services/flux"
import "../styles/vista_particular.css"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Type = () => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        storeService.getOneType(id).then(data =>

            dispatch({ type: 'get_type', payload: data })
        )
    }, [])

    const effectEntries = store.unItem.effect_entries?.find(e => e.language.name === "en")

    return (

        <div className="contenerdor">
            <div className="vista-detallada m-3 row">
                <div className="divimagenType col-12 col-sm-6 col-lg-6">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${id}.png`}
                        className="img-detalle-type"
                        alt={'imagen Item'}
                    />
                </div>

                <div className="card-body p-3 col-12 col-sm-6 col-lg-6">
                    <h1 className="card-title"> {store.unType.name}</h1>
                    <p>Pokémon of the {store.unType.name} type have an advantage in battle against {store.unType.damage_relations?.doble_damage_from?.name}-type Pokémon, meaning their attacks deal double damage to them. 
                        
                        However, they are less effective or even completely ineffective against {store.unType.damage_relations?.no_damage_to?.name}-type Pokémon.

                        Some of their most common moves include: {store.unType.moves?.[Math.floor(Math.random()*store.unType.moves.length)]?.name}.
                    </p>
                </div>
            </div>
            <div className="estadisticas-type">
                <div>
                    <div className="vista-detallada-texto"> <strong className="text-danger">Double Damage:</strong>
                    <ul className="vista-detallada-texto">
                        {store.unType.damage_relations?.double_damage_from?.map((at, i) => (
                            <li key={i}>{at.name}</li>
                        ))}

                    </ul></div>
                <div className="vista-detallada-texto"> <strong className="text-danger">Half Damage:</strong>
                    <ul className="vista-detallada-texto">
                        {store.unType.damage_relations?.half_damage_to?.map((at, i) => (
                            <li key={i}>{at.name}</li>
                        ))}

                    </ul></div>
                <div className="vista-detallada-texto"> <strong className="text-danger">No Damage:</strong>
                    <ul className="vista-detallada-texto">
                        {store.unType.damage_relations?.no_damage_to?.map((at, i) => (
                            <li key={i}>{at.name}</li>
                        ))}

                    </ul></div>
                </div>
                
                <div className="vista-detallada-texto"> <strong className="text-danger">Moves:</strong>
                    <ul className="scroll_list">
                        {store.unType.moves?.map((mo, i) => (
                            <li key={i}>{mo.name}</li>
                        ))}

                    </ul></div>
                <div className="vista-detallada-texto"> <strong className="text-danger">Pokemons:</strong>
                    <ul className="scroll_list">
                        {store.unType.pokemon?.map((mo, i) => (
                            <li key={i}>{mo.pokemon.name}</li>
                        ))}

                    </ul></div>

            </div>


        </div>
    )

}