import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_CHARACTER} from '../actions';

const CharacterList = (props) => {
    const characters = useSelector(state => state.characters);
    const dispatch = useDispatch();
    return ( 
        <div>
            <h4>Characters</h4>
            <ul className="list-group">
                {characters.map(item => {
                    return (
                        <li key={item.id} className="list-group-item"> 
                            <div className="list-item">{item.name}</div>
                            <div className="list-item right-button" onClick={() => dispatch({ type: ADD_CHARACTER, id: item.id })}> +</div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default CharacterList;