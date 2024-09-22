import React, { useState } from "react";
import { PokemonSlot } from "../pokemon-slot/pokemon-slot";
import { PokemonPanelStructure } from "./pokemon-panel.style";

export function PokemonPanel() {
    const [savedData, setSavedData] = useState<{name: string, type: string}[]>([]);

    const savePokemonData = (id: number, name: string, type: string) => {
        localStorage.setItem(`${id}-name`, name);
        localStorage.setItem(`${id}-type`, type);
        alert(`Pokemon ${name} salvo no localStorage!`);
    };

    const getPokemonData = () => {
        const data = [];
        for (let i = 1; i <= 4; i++) {
            const name = localStorage.getItem(`${i}-name`);
            const type = localStorage.getItem(`${i}-type`);
            if (name && type) {
                data.push({ name, type });
            }
        }
        setSavedData(data);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        setSavedData([]);
        alert("localStorage limpo!");
    };

    return (
        <PokemonPanelStructure>
            <PokemonSlot id={1} name="Bulbasaur" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" type="Planta" weight={69} onSave={savePokemonData} />
            <PokemonSlot id={2} name="Charizard" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" type="Fogo" weight={905} onSave={savePokemonData} />
            <PokemonSlot id={3} name="Venusaur" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" type="Planta" weight={1000} onSave={savePokemonData} />
            <PokemonSlot id={4} name="Abra" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" type="Psiquico" weight={195} onSave={savePokemonData} />

            <button onClick={getPokemonData}>Recuperar Dados Salvos</button>
            <button onClick={clearLocalStorage}>Limpar localStorage</button>

            <div>
                {savedData.length > 0 ? (
                    <ul>
                        {savedData.map((data, index) => (
                            <li key={index}>
                                Nome: {data.name}, Tipo: {data.type}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum dado salvo.</p>
                )}
            </div>
        </PokemonPanelStructure>
    );
}
