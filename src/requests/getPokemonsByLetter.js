import axios from 'axios';

async function getPokemonsByLetter(letter){
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/pokemons/search/${letter}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}
export default getPokemonsByLetter;