// index.js
const pokedex = require("./pokedex.json"); // Add this line to require the pokedex.json file

function getPokemonById(id) {
  const pokemonData = pokedex.find((p) => p.id === id);

  if (!pokemonData) {
    console.error(`Pokémon with id ${id} not found in the Pokédex.`);
    return null;
  }

  const pokemon = {
    name: pokemonData.name.english,
    base: {
      HP: pokemonData.base.HP,
      Attack: pokemonData.base.Attack,
      Defense: pokemonData.base.Defense,
      "Sp. Attack": pokemonData.base["Sp. Attack"],
      "Sp. Defense": pokemonData.base["Sp. Defense"],
      Speed: pokemonData.base.Speed,
    },
    type: pokemonData.type, // Assuming your Pokémon data has a "type" field
  };

  return pokemon;
}

async function generateRandomPokemon() {
  const randomId = Math.floor(Math.random() * 151) + 1; // Assuming you have data for the first 151 Pokémon
  return getPokemonById(randomId);
}

function getPokemonByName(name) {
  const pokemonData = pokedex.find(
    (p) => p.name.english.toLowerCase() === name.toLowerCase()
  );
  return pokemonData || null;
}

function comparePokemonStats(pokemonName1, pokemonName2) {
  const pokemon1 = getPokemonByName(pokemonName1);
  const pokemon2 = getPokemonByName(pokemonName2);

  if (!pokemon1 || !pokemon1?.base) {
    return `${pokemonName1} not found in the Pokédex.`;
  }

  if (!pokemon2 || !pokemon2?.base) {
    return `${pokemonName2} not found in the Pokédex.`;
  }

  const comparisonResult = {
    pokemon1: {
      name: pokemonName1,
      base: pokemon1.base,
    },
    pokemon2: {
      name: pokemonName2,
      base: pokemon2.base,
    },
  };

  let points1 = 0;
  let points2 = 0;

  // Define the order of stats
  const statOrder = [
    "HP",
    "Attack",
    "Defense",
    "Sp. Attack",
    "Sp. Defense",
    "Speed",
  ];

  // Compare each base stat and assign points based on the order
  statOrder.forEach((stat) => {
    if (pokemon1.base[stat] > pokemon2.base[stat]) {
      points1 += 1;
    } else if (pokemon1.base[stat] < pokemon2.base[stat]) {
      points2 += 1;
    }
  });

  comparisonResult.totalPoints = {
    [pokemonName1]: points1,
    [pokemonName2]: points2,
  };

  if (points1 > points2) {
    comparisonResult.winner = pokemonName1;
    comparisonResult.message = `${pokemonName1} is more powerful than ${pokemonName2}!`;
  } else if (points1 < points2) {
    comparisonResult.winner = pokemonName2;
    comparisonResult.message = `${pokemonName2} is more powerful than ${pokemonName1}!`;
  } else {
    comparisonResult.message = `${pokemonName1} and ${pokemonName2} have equal power!`;
  }

  return comparisonResult;
}

module.exports = {
  generateRandomPokemon,
  getPokemonById,
  getPokemonByName,
  comparePokemonStats,
};
