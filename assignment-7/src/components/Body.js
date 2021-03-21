import React, { useEffect, useState } from 'react';
import Player from './Player';
import TeamPlayer from './SelectedPlayer';
import './Body.css'

const Body = () => {
    const [player, setPlayer] = useState([]);
    const [teamPlayer, setTeamPlayer] = useState([]);
    console.log(player);
    useEffect(()=>{
        fetch('https://api.mocki.io/v1/f0878c67')
        .then(res => res.json())
        .then(data => setPlayer(data) )
    },[])
    const addPlayer =(player) => {
            const newPlayer = [...teamPlayer, player];
            setTeamPlayer(newPlayer);

    }

    return (
        <div className="player-container">
            <div className="random-player">
                {
                   player.map( player => <Player addPlayer={addPlayer} player={player}></Player>)         

                }
            </div>
            <div className="selected-player">
                <TeamPlayer teamPlayer ={teamPlayer}></TeamPlayer>
            </div>
        </div>
    );
};

export default Body;