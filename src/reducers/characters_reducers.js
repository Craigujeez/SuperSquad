import characters_json from '../Data/characters.json';
import {ADD_CHARACTER, REMOVE_CHARACTER} from '../actions';

function addCharacterById(id){
    let newState = characters_json.find((item) => item.id === id);
    return newState;
}

function characters(state = characters_json, action) {
    switch(action.type){
        case ADD_CHARACTER:
            const newState = state.filter((item) => item.id !== action.id);
            return newState;
        case REMOVE_CHARACTER:
            const ExtraState = [...state, addCharacterById(action.id)]
            return ExtraState;
        default:
            return state;
    }
}

export default characters;