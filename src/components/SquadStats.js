import React from 'react';
import {useSelector} from 'react-redux';

const SquadStats = (props) => {
    const heroes = useSelector(state => state.heroes);

    const strength = () => {
        let totalStrength = 0;
        heroes.forEach(item => {
            totalStrength += item.strength
        });
        return totalStrength;
    }

    const speed = () => {
        let totalSpeed = 0;
        heroes.forEach(item => {
            totalSpeed += item.speed
        });
        return totalSpeed;
    }

    const intelligence = () => {
        let totalIntelligence = 0;
        heroes.forEach(item => {
            totalIntelligence += item.intelligence
        });
        return totalIntelligence;
    }

    return ( 
        <div>
            <h4>SquadStats</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <b>Overall Strength:</b> {strength()}
                </li>
                <li className="list-group-item">
                    <b>Overall Speed:</b> {speed()}
                </li>
                <li className="list-group-item">
                    <b>Overall intelligence:</b> {intelligence()}
                </li>
            </ul>
        </div>
     );
}
 
export default SquadStats;