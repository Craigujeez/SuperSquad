import characters_json from '../Data/characters.json';
import {ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';

function addHeroes(id) {
    let newState = characters_json.find((item) => item.id === id);
    return newState
}

export function heroes(state = [], action) {
    switch(action.type){
        case ADD_CHARACTER:
            const heroes = [...state, addHeroes(action.id)]
            return heroes;
        case REMOVE_CHARACTER:
            const Remainingheroes = state.filter(item => item.id !== action.id)
            return Remainingheroes;
        default:
            return state;
    }
}

export default heroes;