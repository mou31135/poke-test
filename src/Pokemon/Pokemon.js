import React from 'react';

const get_color=()=>{
  return ''
}

export const Pokemon = ({ pokemon, onClick, buttonLabel,cTpye }) =>  {
  const get_attack = (affack) => {
  let str = 0;
  let len = 0;
    if(affack){
      len =   affack.length;
      for (var i = 0; i < affack.length; i++) {
        if(affack[i].damage){
          str += parseInt(affack[i].damage);
        }
      }
    }
    return str ;
  }

  const get_weak = (weakn) => {
  let weak = 0;
  if(weakn){
    let len =   weakn.length;
    for (var i = 0; i < len; i++) {
      weak = parseInt(weakn[i].value);
      if(weak = 2){
        weak = 100;
      }
    }
  }
  // let len = 0;
  //   if(weakn.value){
  //     weak = parseInt(weak[0].value);
  //     if(weak == 2){
  //       weak = 100 ;
  //     }
  //   }
    return weak ;
  }

  const get_star = (hp,str,weakn) => {
      let r_str =get_attack(str);
      let r_weakn =get_weak(weakn);
      let star = ((hp / 10) + (r_str /10 ) + 10 - (r_weakn)) /5;
      let rs_star = Math.abs(Math.round(star));
      let show_star = '';
      if(rs_star){
        for (var i = 0; i < rs_star; i++) {
          show_star += '*';
        }

      }

     return show_star;
  }


  return (
    <tr key={pokemon.name} style={{backgroundColor: cTpye[pokemon.type]}}>
          <td class="td-poke"><img src={pokemon.imageUrl} width="50%" height="" /></td>
          <td width="50%" style={{padding:  '15px'}}>
          <div style={{textAlign: '-webkit-right'}} >
            <button onClick={onClick(pokemon)}>{buttonLabel}</button>
           </div>
            <div>
              <span>{pokemon.name}</span>
                <div>HP:</div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: pokemon.hp+'%'}} aria-valuenow={pokemon.hp} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div>STR:</div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: get_attack(pokemon.attacks)+'%'}} aria-valuenow={pokemon.hp} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div>WEAK:</div>
                <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: get_weak(pokemon.weaknesses)+'%'}} aria-valuenow={pokemon.hp} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div>LEVEL:</div>
                  <i class="poke-star" >  {get_star(pokemon.hp,pokemon.attacks,pokemon.weaknesses)}</i>
              </div>
          </td>
    </tr>
  )
}

export default Pokemon;
