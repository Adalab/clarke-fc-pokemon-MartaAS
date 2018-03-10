import React, { Component } from 'react';
import CardPokemon from './CardPokemon';
import PokemonList from './PokemonList';
import lazyLoadImage, { config } from './lazyLoadImage';
import fetchPokemons from './fetchPokemons';

//const url = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

  //const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      arrayPokemons: [],
      filterName: ''
    }
  }

    observer = new window.IntersectionObserver(lazyLoadImage, config)

  async componentDidMount () {
    const pokemons = await fetchPokemons()
    this.setState({ arrayPokemons : pokemons})
  }
  // componentDidMount(){
  //   fetch('https://pokeapi.co/api/v2/pokemon/1/')
  //   .then(response => response.json())
  //   .then(json =>{
  //     this.setState({
  //       arrayPokemons: json
  //     });
  //   })
  // }

  //hacemos filtro y pintamos
  drawPokemons(){
    let allPokemons = this.state.arrayPokemons;
    //let allPokemonss = allPokemons.results;

      //allPokemons = allPokemons.filter(element => element.name.toLowerCase().includes(this.state.filterName.toLowerCase())
    //);

    return(
      <section className="container">
        <div className="">{allPokemons.length}</div>
        <PokemonList poke={allPokemons} observer={this.observer} />
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
          <h1 className="">pokemons</h1>
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
