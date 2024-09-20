import React from "react";
import { PokemonSlot } from "../pokemon-slot/pokemon-slot";
import { PokemonPanelStructure } from "./pokemon-panel.style";

export function PokemonPanel() {
    return (
        <PokemonPanelStructure>
            <PokemonSlot name="Bulbasaur" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" type="Planta" weight={69} />
            <PokemonSlot name="Charizard" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" type="Fogo" weight={905} />
            <PokemonSlot name="Venusaur" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" type="Planta" weight={1000} />
            <PokemonSlot name="Abra" photo="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" type="Psiquico" weight={195} />
        </PokemonPanelStructure>
    )
}