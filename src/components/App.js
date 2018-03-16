import React, { Component } from 'react';
import CardPokemon from './CardPokemon';
import PokemonList from './PokemonList';
import lazyLoadImage, { config } from './lazyLoadImage';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      arrayPokemons: [],
      arrayEvolutions: [],
      filterName: ''
    }
  }

  observer = new window.IntersectionObserver(lazyLoadImage, config)

  //recorremos array y parsear a json
    async componentDidMount () {

    for (let i = 3; i <= 6; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then(response => response.json())

      .then(json => {
        this.setState({
          arrayPokemons: this.state.arrayPokemons.concat([json])
        })
      })

    }
    for (let i = 3; i <= 6; i++) {

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
    .then(response => response.json())

    .then(json => {
      this.setState({
        arrayEvolutions: this.state.arrayEvolutions.concat([json])
      })
    })
  }

  }

  drawPokemons(){
    let allPokemons = this.state.arrayPokemons;
    let allEvolutions = this.state.arrayEvolutions;

    allPokemons = allPokemons.filter(element => element.name.toLowerCase().includes(this.state.filterName.toLowerCase())
    );
    /* después de filtrar el array, lo ordenamos */
    allPokemons = allPokemons.sort(function (a, b){
      return a.id - b.id;
    })

    return(
      <section className="container">
         <div className="">{allPokemons.length}</div>
        <PokemonList poke={allPokemons} observer={this.observer} evolutions={allEvolutions} />
      </section>
    );
  }

  handleClick(event){
    const valueText = event.target.value; //recogemos el valor introducido del input

      this.setState({
        filterName : valueText
      })
  }

  render() {
    return (
      <div className="">
        <header className="header">
          <h1 className="">Pokédex</h1>
        </header>
        <div>
          <input className="" type="text" placeholder="Encuentra a tu pokemon favorito" onChange={this.handleClick}>
          </input>
        </div>
          {this.drawPokemons()}
      </div>
    );
  }
}
