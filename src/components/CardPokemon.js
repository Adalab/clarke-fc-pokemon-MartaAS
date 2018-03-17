import React from 'react';

export default class CardPokemon extends React.Component {
  componentDidMount () {
        this.props.observer.observe(this.image)
    }
  render(){
    let types = this.props.types;
    types = types.join(' - ');
    let valor = this.props.evolution;
    let nombre2 = this.props.name;
    let valor2 = '';
    let nombre = '';
    //valor.filter(p => p.name.toLowerCase().includes(this.props.name.toLowerCase()));
    if(valor.length > 0)
    {
      valor2 = valor.filter(p => p.name.toLowerCase().includes(nombre2.toLowerCase()));
      if(valor2.length > 0)
      {
        if(valor2[0].evolves_from_species != null)
          nombre = 'Evolution from: ' + valor2[0].evolves_from_species.name;
      }

    }

    return(
      <li className="cardPoke">
      <span className="id_poke">#{this.props.number}</span>
        <img className="img--poke" data-src={this.props.sprite} ref={node => { this.image = node }} width={150} height={150} />
        <p className="infoName">{this.props.name}</p>
        <div className="pokemon__type">
					{this.props.types.map((types) =>
						<div className={`type--container types--${types}`}> </div>)}
				</div>
        <span className="evolutionFrom">{nombre}</span>
        <p>height: {this.props.height}</p>
        <p>weight: {this.props.weight} lbs</p>
      </li>
    )
  }
}
