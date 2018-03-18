import React from 'react';

export default class CardPokemon extends React.Component {
  componentDidMount () {
        this.props.observer.observe(this.image)
    }
  render(){
    let types = this.props.types;
    types = types.join(' - ');
    //evolucion de cada pokemon array evoluciones
    let infoEvolution = this.props.evolution;
    //nombre pokemon array pokemon
    let pokeName = this.props.name;
    //sera el pokemon que vamos a mostrar evoluciones
    let evolutionPokemon = '';
    //nombre de la evolucion
    let nameEvolution = '';

    //compruebo que no es un campo vacio, filtramos el array de evoluciones para asegurar que nos devuleve la info de la evolucion
    //del pokemon que mostramos, una vez que tengo la info de la evolucion del pokemon compruebo que no sea null, en este caso
    //accedo al nombre de la evolucion
    if(infoEvolution.length > 0)
    {
      evolutionPokemon = infoEvolution.filter(p => p.name.toLowerCase().includes(pokeName.toLowerCase()));
      if(evolutionPokemon.length > 0)
      {
        if(evolutionPokemon[0].evolves_from_species != null)
          nameEvolution = 'Evolution from: ' + evolutionPokemon[0].evolves_from_species.name;
      }

    }

    return(
      <li className="cardPoke">
      <span className="id_poke">#{this.props.number}</span>
        <img className="img--poke" data-src={this.props.sprite} ref={node => { this.image = node }} width={150} height={150} />
        <p className="infoName">{this.props.name}</p>
        <div className="pokemon__type">
					{this.props.types.map((types) =>
						<div className={`type--container types--${types}`} title={types}> </div>)}
				</div>
        <span className="evolutionFrom">{nameEvolution}</span>
        <p>height: {this.props.height}</p>
        <p>weight: {this.props.weight} lbs</p>
      </li>
    )
  }
}
