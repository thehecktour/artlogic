import React from "react";
import { PokemonSlotInterface } from "../../interfaces/PokemonSlotInterface";

export function PokemonSlot({ name, photo, type, weight }: PokemonSlotInterface){
    return (
        <div>
            <h1>{name}</h1>
            <img src={photo} alt="Photo do Pokemon"/>
            <h1>{type}</h1>
            <h1>{weight}</h1>
        </div>
    )
}