import React from 'react';
export default async function fetchPokemons () {
    return await Array.apply(null, { length: 2 })
        .map((item, index) => {
            return {
                id: index + 1
                //sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }
        })
}
