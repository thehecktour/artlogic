import React from "react";
import { PokemonSlotInterface } from "../../interfaces/PokemonSlotInterface";
import { PokemonSlotStyle } from "./pokemon-slot.style";

export function PokemonSlot({ name, pokePhoto, type, weight }: PokemonSlotInterface){
    return (
        <PokemonSlotStyle>
            <img src={pokePhoto} alt={name}/>
            <h1>{name}</h1>
            <h1>{type}</h1>
            <h1>{weight}kg</h1>
        </PokemonSlotStyle>
    )
}