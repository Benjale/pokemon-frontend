import axios from 'axios';

async function getPokemonTypes(){
  console.log(`${process.env.REACT_APP_API_URL}/pokemons/types`)
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/pokemons/types`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}
export default getPokemonTypes;
