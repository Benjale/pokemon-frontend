import axios from 'axios';

async function getPokemonLocations(pokemonName){
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/pokemons/${pokemonName}/locations`);
    console.log(response)
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}
export default getPokemonLocations;