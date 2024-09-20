import React from "react";
import { PokemonSlot } from "../pokemon-slot/pokemon-slot";

export function PokemonPanel(){
    return(
        <div>
            <h1>Pokemon Panel</h1>
            <div>
                <PokemonSlot name="Pikachu" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" type="Planta" weight={12}/>
                <PokemonSlot name="Pikachu" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" type="Planta" weight={12}/>
                <PokemonSlot name="Pikachu" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" type="Planta" weight={12}/>
                <PokemonSlot name="Pikachu" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" type="Planta" weight={12}/>
            </div>
        </div>
    )
}