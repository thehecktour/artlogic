import React from "react";
import { PokemonSlotInterface } from "../../interfaces/PokemonSlotInterface";
import { PokemonSlotStyle } from "./pokemon-slot.style";

export function PokemonSlot({ name, photo, type, weight }: PokemonSlotInterface){
    return (
        <PokemonSlotStyle>
            <img src={photo} alt="Photo do Pokemon"/>
            <h1>{name}</h1>
            <h1>{type}</h1>
            <h1>{weight}kg</h1>
        </PokemonSlotStyle>
    )
}