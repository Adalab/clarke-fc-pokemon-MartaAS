import React from 'react';
import CardPokemon from './CardPokemon';

export default class PokemonList extends React.Component {
  render(){
    let allEvolutions = this.props.evolutions;
    //allEvolutions = allEvolutions.filter(p => p.name.toLowerCase(name.toLowerCase()));
    //allEvolutions.map(p => p.evolves_from_species);

    return(
      <ul className="containerPoke">
        {
          this.props.poke.map(({ id, sprites, name, types, height, weight}) =>
            <CardPokemon evolution={allEvolutions.filter(p => p.name.toLowerCase(name.toLowerCase()))}  key={id} number={id} sprite={sprites.front_default} name={name} height={height} weight={weight} observer={this.props.observer}
            types= {types.sort((typeNumber) => typeNumber.slot).map((typeNumber) => typeNumber.type.name)} />
          )
        }
      </ul>
    )
  }
}
