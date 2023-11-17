# Pokemon Stats Comparator

Pokemon Stats Comparator is an npm package that allows you to compare the stats of two Pokémon based on their base values. Whether you're a Pokémon trainer or a developer building a Pokémon-related application, this package can help you analyze and compare the power of different Pokémon.

## Installation

To install the Pokemon Stats Comparator package, use the following command:

```bash
npm install pokemon-stats-comparator
```

## Usage
```bash
const { generateRandomPokemon, getPokemonById ,comparePokemonStats, getPokemonByName } = require('pokemon-stats-comparator');

// Example usage
const randomPokemon = generateRandomPokemon();
const result = comparePokemonStats('Bulbasaur', 'Charmander');
console.log(randomPokemon, result);
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
