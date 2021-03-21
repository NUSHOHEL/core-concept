import React from "react";
import './SelectedPlayer.css'
import SpecialPlayer from "./SpecialPlayer";

const TeamPlayer = (props) => {
  const player = props.teamPlayer;
  console.log(props);
  let total = player.reduce((total, player) => total + player.salary, 0);
  return (
    <div>
      <div className="count-info">
        <h1>Selected Player: {player.length}</h1>
        <h5>Total budget:${total} </h5>
      </div>
      <div>
            <SpecialPlayer player={player} ></SpecialPlayer>
      </div>
    </div>
  );
};

export default TeamPlayer;
