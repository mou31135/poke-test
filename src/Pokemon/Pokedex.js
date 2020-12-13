import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = (c_tpye) => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {listPokemons({
            pokemons: capturedPokemons,
            onClick: release,
            buttonLabel: '-',
            cTpye:c_tpye.c_tpye

          })}
        </tbody>
      </table>
    </div>
  )
}

export default Pokedex;
