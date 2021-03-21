import React from 'react';
import './Player.css'

const Player = (props) => {
    const {name, img, salary}= props.player;
    return (
        <div className="player-card">
            <img src={img} alt='Profile pic'/>
            <h5>Name: {name}</h5>
            <p>Income: {salary}</p>
            <button onClick={()=>props.addPlayer(props.player)}>Add Player</button>
        </div>
    );
};


export default Player;