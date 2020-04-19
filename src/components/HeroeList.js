import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_CHARACTER} from '../actions';

const CharacterList = (props) => {
    const heroes = useSelector(state => state.heroes);
    const dispatch = useDispatch();
    return ( 
        <div>
            <h4>Heroes</h4>
            <ul className="list-group">
                {heroes.map(item => {
                    return (
                        <li key={item.id} className="list-group-item"> 
                            <div className="list-item">{item.name}</div>
                            <div className="list-item right-button" onClick={() => dispatch({ type: REMOVE_CHARACTER, id: item.id })}> x </div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default CharacterList;