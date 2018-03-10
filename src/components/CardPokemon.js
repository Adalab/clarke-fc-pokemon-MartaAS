import React from 'react';

export default class CardPokemon extends React.Component {
  componentDidMount () {
        this.props.observer.observe(this.image)
    }
  render(){
    let types = this.props.types;
    types = types.join(' - ');

    return(
      <li className="">
        <p>{this.props.name}</p>
        <img data-src={this.props.sprite} ref={node => { this.image = node }} width={96} height={96} />
        <span>{this.props.number}</span>
        <p>{types}</p>
      </li>
    )
  }
}
