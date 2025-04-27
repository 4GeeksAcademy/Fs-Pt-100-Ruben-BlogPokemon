import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import storeService from "../services/flux"
import "../styles/vista_particular.css"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Items = () => {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        storeService.getOneItem(id).then(data =>

            dispatch({ type: 'get_item', payload: data })
        )
    }, [])

    const effectEntries = store.unItem.effect_entries?.find(e=>e.language.name === "en" )

    return (

        <div className="contenerdor">
            <div className="vista-detallada m-3 row">
                <div className="divimagenItem col-12 col-sm-6 col-lg-6">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${store.unItem.name}.png`}
                        className="img-detalle"
                        alt={'imagen Item'}
                    />
                </div>

                <div className="card-body p-3 col-12 col-sm-6 col-lg-6">
                    <h1 className="card-title"> {store.unItem.name}</h1>
                    <p>The item <strong>"{store.unItem.name}"</strong> belongs to the "{store.unItem.category?.name}" category and is known for its {store.unItem.attributes?.[Math.floor(Math.random()*store.unItem.attributes.length)]?.name} attributes.

                        It costs {store.unItem.cost} Pokédollars and can be used to {effectEntries?.short_effect} <br/>

                        This item is a valuable tool for trainers looking to enhance their performance in and out of battle.
                    </p>
                </div>
            </div>
            <div className="estadisticas">
                <div className="vista-detallada-texto"> <strong className="text-danger">Attributes:</strong>
                    <ul className="vista-detallada-texto">
                        {store.unItem.attributes?.map((at, i) => (
                            <li key={i}>{at.name}</li>
                        ))}

                    </ul></div>
                <div>
                    <div className="vista-detallada-texto"> <strong className="text-danger">Category:</strong> {store.unItem.category?.name}</div>
                    <br/>
                    <div className="vista-detallada-texto"> <strong className="text-danger">Cost:</strong> {store.unItem.cost} PokéDollars</div>
                </div>
               
                <div className="vista-detallada-texto"> <strong className="text-danger">Effects Entries:</strong>
                    <ul className="scroll_list">
                        {store.unItem.effect_entries?.map((mo, i) => (
                            <li key={i}> <strong className="text-danger-emphasis">Effect:</strong> {mo.effect}</li>
                        ))}
                        {store.unItem.effect_entries?.map((mo, i) => (
                            <li key={i}> <strong className="text-danger-emphasis">Short Effect:</strong> {mo.short_effect}</li>
                        ))}
                    </ul></div>
            </div>

        </div>
    )

}