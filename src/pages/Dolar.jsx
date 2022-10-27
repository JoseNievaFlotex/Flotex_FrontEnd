import React, { useRef } from "react";

import NotificationSound from "./jaja.mp3";

export const Dolar = () => {

  const audioPlayer = useRef(null);

  function playAudio() {
    audioPlayer.current.play();
  }
  return (
    <React.Fragment>
      <div className="App">
      <h1>Soy notificacion </h1>
      <div>
        <h2>Click boton play</h2>
        <button onClick={playAudio}>Play</button>
        <audio ref={audioPlayer} src={NotificationSound} />
      </div>
    </div>
    </React.Fragment>
  );
};
