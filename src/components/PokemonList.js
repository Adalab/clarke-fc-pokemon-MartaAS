import React from 'react';
import CardPokemon from './CardPokemon';

export default class PokemonList extends React.Component {
  render(){

console.log(this.props.poke)
    return(
      <ul className="">
      {
        // this.props.poke.map(
        //   infoPokemons =><li>
        //   //menos su foto, nombre, número y tipo (o tipos)
        //     <CardPokemon namePokemon={infoPokemons.name}
        //       // photoPokemon={infoPokemons.}
        //       // numberPokemon={infoPokemons}
        //       // typePokemon={infoPokemons}
        //       />
        //     </li>
        // )
        this.props.poke.map(({ id, sprite }) =>
          <CardPokemon key={id} sprite={sprite} observer={this.props.observer} />
        )
      }
      </ul>
    )
  }
}
