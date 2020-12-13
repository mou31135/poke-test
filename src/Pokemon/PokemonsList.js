import React, {useState,useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';
import datapoke from '../mock/cards.json';


const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = (c_tpye) => {
  const { pokemons, capture, addPokemons,capturedPokemons} = useContext(PokemonContext);
  var result_pokemons = pokemons.filter(e => !capturedPokemons.find(a => e.name == a.name));

  const countCaptured = capturedPokemons.length;

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(datapoke.cards);
    };

    fetchPokemons();
  }, [addPokemons]);

  const [count, setCount] = useState(result_pokemons);



  const handleNameOnChange = (e) => {
      if(e){
        const key_word = e.target.value;
            let query = key_word.toLowerCase();
            const result =  pokemons.filter(item => item.name.toLowerCase().indexOf(query) >= 0);
            const cap_pokemons = result.filter(e => !capturedPokemons.find(a => e.name == a.name));
            setCount(cap_pokemons);
      }

  }

  let rr= ''
  if(count.length > 0){
    const cap_pokemons = count.filter(e => !capturedPokemons.find(a => e.name == a.name));
    rr= cap_pokemons;
  }else{
    rr= result_pokemons;
  }

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />

      <table>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Capture</th>
          </tr>
        </thead>
        <tbody style={{verticalAlign: '-webkit-baseline-middle'}}>
        {listPokemons({
          pokemons: rr,
          onClick: capture,
          buttonLabel: '+',
          cTpye:c_tpye.c_tpye
        })}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonsList;
