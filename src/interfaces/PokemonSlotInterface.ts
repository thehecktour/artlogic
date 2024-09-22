export interface PokemonSlotInterface {
    id: number;
    name: string;
    pokePhoto: string;
    type: string;
    weight: number;
    onSave: (id: number, name: string, type: string) => void;
}
