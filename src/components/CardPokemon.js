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
          nombre = valor2[0].evolves_from_species.name;
      }

    }

    return(
      <li className="cardPoke">
      <span># {this.props.number}</span>
        <img data-src={this.props.sprite} ref={node => { this.image = node }} width={96} height={96} />
        <p className="infoName">{this.props.name}</p>
        <div className="pokemon__type">
					{this.props.types.map((types) =>
						<span className={`type--container types--${types}`}> {types} </span>)}
				</div>
        <span>{nombre}</span>
      </li>
    )
  }
}
