# Pokemon Frontend Project

## Install Dependecies
    $ npm install

## Running the App
    $ npm run start

## Litsen Port 
 http://localhost:3000 

## Description
- It uses the backend found in the following repository: [pokemon-backend](https://github.com/Benjale/pokemon-backend). So, the backend must be running for the features of this system to work correctly. 
- You must create a file. env containing REACT_APP_API_URL={backend_path}
- The application only contains one page: The landing page which has 3 parts.
- This aplication This application uses react, bootsrap and axios
  
## Features
#### 1 Pokemon Counter

You can count the number of pokemons that contain a letter, some letters or a word in their name. You are prompted to type the letter(s) you want and it returns the number of pokemon that have it. This part consumes the following backend endpoint: _/pokemons/search/{letter}_
#### 2 Locations Counter

You can count the number of places a pokemon could be found. It asks you to type the full name of a pokemon and returns the number of places it can be. This part consumes the following backend endpoint: _/pokemons/{pokemonName}/locations_.

#### 3 Pokemon Filter

You can filter the pokemons according to their type. You are prompted to select a pokemon type and all pokemon of that type are returned. The following backend endpoints are consumed in this part: _/pokemons/types_ and _/pokemons/types/{type}_
