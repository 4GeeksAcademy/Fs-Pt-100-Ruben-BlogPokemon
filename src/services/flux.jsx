const storeService= {}

storeService.getPokemons = async () => {

    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

storeService.getItems = async () => {

    try {
        const resp = await fetch('https://pokeapi.co/api/v2/item')
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

storeService.getType = async () => {

    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type?limit=19&offset=0')
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

storeService.getOnePokemon = async (id) => {

    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

storeService.getOneItem = async (id) => {

    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/item/${id}`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

storeService.getOneType = async (id) => {

    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
        if(!resp.ok) throw new Error('Error fetch data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}


export default storeService