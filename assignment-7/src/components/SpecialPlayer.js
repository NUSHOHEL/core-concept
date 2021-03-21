import React from "react";

const SpecialPlayer = (props) => {
  const player = props.player;
  console.log(player);

  return (
    <div>
      {player.map((player) => (
        <div>
          <h3>Name: {player.name}</h3>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SpecialPlayer;
