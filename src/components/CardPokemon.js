import React from 'react';

export default class CardPokemon extends React.Component {
  componentDidMount () {
        this.props.observer.observe(this.image)
    }
  render(){
    return(
      // <div className="">
      //   //su foto, nombre, número y tipo (o tipos)
      //     <h2>{this.props.namePokemon}</h2>
      // </div>
      <li className="">
        <img data-src={this.props.sprite} ref={node => { this.image = node }} width={96} height={96} />
      </li>
    )
  }
}
