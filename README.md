# Pokemon Stats Comparator

Pokemon Stats Comparator is an npm package that allows you to compare the stats of two Pokémon based on their base values. Whether you're a Pokémon trainer or a developer building a Pokémon-related application, this package can help you analyze and compare the power of different Pokémon.

## Installation

To install the Pokemon Stats Comparator package, use the following command:

```bash
npm install random-pokemon-generator
```

## Usage
```bash
const { generateRandomPokemon, getPokemonById ,comparePokemonStats, getPokemonByName } = require('random-pokemon-generator');

// Example usage

// Example: Generate a random Pokemon
const randomPokemon = generateRandomPokemon();
console.log('Random Pokemon:', randomPokemon);

// Example: Get Pokemon by name
const pokemonDetailByName = getPokemonByName("Charizard");
console.log(pokemonDetail);

// Example: Get Pokemon by id
const pokemonDetailById = getPokemonById(6);
console.log(pokemonDetail);

// Example: Compare the stats of two Pokemon
const result = comparePokemonStats('Bulbasaur', 'Charmander');
console.log('Comparison Result:', result);
```
## Functions
comparePokemonStats(pokemonName1, pokemonName2)
Compares the stats of two Pokémon and determines the winner based on their base values.

pokemonName1: Name of the first Pokémon.
pokemonName2: Name of the second Pokémon.
Returns an object with the comparison result, including the winner, total points, and individual base values.

getPokemonByName(pokemonName)
Fetches Pokémon details by name from the Pokédex.

pokemonName: Name of the Pokémon.
Returns an object with Pokémon details, including name, type, and base values.

## License
ISC.

## Contributing
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## Acknowledgments
This package uses data from the Pokémon Data repository. Special thanks to the contributors.
Author
Shubham Kakkar

## Version History
1.0.0 (2023-11-17): Initial release.
1.0.5 (2023-11-17): Readme updated.
