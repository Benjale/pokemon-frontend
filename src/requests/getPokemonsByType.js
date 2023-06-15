import axios from 'axios';

async function getPokemonsByTypes(type){
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/pokemons/types/${type}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}
export default getPokemonsByTypes;