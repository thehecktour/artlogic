import React, { useState } from "react";
import { PokemonSlot } from "../pokemon-slot/pokemon-slot";
import { PokemonPanelStructure } from "./pokemon-panel.style";

export function PokemonPanel() {
    const [savedData, setSavedData] = useState<{ name: string, type: string, rank: number }[]>([]);

    const savePokemonData = (id: number, name: string, type: string, rank: number) => {
        localStorage.setItem(`${id}-name`, name);
        localStorage.setItem(`${id}-type`, type);
        localStorage.setItem(`${id}-rank`, rank.toString());
        alert(`Pokemon ${name} salvo no localStorage com rank ${rank}!`);
    };

    const getPokemonData = () => {
        const data = [];
        for (let i = 1; i <= 4; i++) {
            const name = localStorage.getItem(`${i}-name`);
            const type = localStorage.getItem(`${i}-type`);
            const rank = localStorage.getItem(`${i}-rank`);
            if (name && type && rank) {
                data.push({ name, type, rank: parseInt(rank) });
            }
        }
        data.sort((a, b) => a.rank - b.rank);
        setSavedData(data);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        setSavedData([]);
        alert("localStorage limpo!");
    };

    const toggleRank = () => {
        const updatedData = savedData.map((pokemon) => ({
            ...pokemon,
            rank: (pokemon.rank % 4) + 1
        }));

        updatedData.forEach((pokemon, index) => {
            const id = index + 1;
            localStorage.setItem(`${id}-rank`, pokemon.rank.toString());
        });

        updatedData.sort((a, b) => a.rank - b.rank);
        setSavedData(updatedData);
    };

    return (
        <PokemonPanelStructure>
            <PokemonSlot id={1} name="Bulbasaur" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" type="Planta" weight={69} onSave={(name, type) => savePokemonData(1, "name", type, 1)} />
            <PokemonSlot id={2} name="Charizard" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" type="Fogo" weight={905} onSave={(name, type) => savePokemonData(2, "name", type, 2)} />
            <PokemonSlot id={3} name="Venusaur" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" type="Planta" weight={1000} onSave={(name, type) => savePokemonData(3, "name", type, 3)} />
            <PokemonSlot id={4} name="Abra" pokePhoto="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" type="Psiquico" weight={195} onSave={(name, type) => savePokemonData(4, "name", type, 4)} />

            <button onClick={getPokemonData}>Recuperar Dados Salvos</button>
            <button onClick={clearLocalStorage}>Limpar localStorage</button>
            <button onClick={toggleRank}>Alternar Rank</button>

            <div>
                {savedData.length > 0 ? (
                    <ul>
                        {savedData.map((data, index) => (
                            <li key={index}>
                                Nome: {data.name}, Tipo: {data.type}, Rank: {data.rank}
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
