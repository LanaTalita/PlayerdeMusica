

import  {useState, useEffect} from 'react';
import Player from "./Components/Player";

function App() {
  
  const [songs] = useState ([
    {
      title: "Eleven",
      artist: "IVE",
      img_src:"./imagens/ive.jpg",
      src: "./musica/X2Download.com - IVE 아이브 'ELEVEN' MV (320 kbps).mp3"
    },

    {
      title: "Graçinha",
      artist:"Manu Gavassi, Tim Bernardes e Amaro Freitas",
      img_src:"./imagens/manu.jpg",
      src: "./musica/X2Download.com - Manu Gavassi, Tim Bernardes, Amaro Freitas - GRACINHA (128 kbps).mp3"
    },

    {
      title: "You Can't Sit With Us",
      artist: "Sunmi",
      img_src: "./imagens/sunmi.jpg",
      src: "./musica/X2Download.com - [BE ORIGINAL] SUNMI (선미) 'You can't sit with us' (4K) (128 kbps).mp3"
    },

    {
      title: "You Need to Calm Down",
      artist: "Taylor Swift",
      img_src: "./imagens/taylor.jpg",
      src: "./musica/X2Download.com - Taylor Swift - You Need To Calm Down (128 kbps).mp3"
    },

    {
      title: "Na Tela",
      artist: "Pitty",
      img_src: "./imagens/pitty.jpg",
      src:"./musica/X2Download.com - Pitty - Na Tela (Videoclipe Oficial) (320 kbps).mp3"
    }
  ]);


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
 
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1);

  useEffect (() => {
    setNextSongIndex(() => {
if (currentSongIndex +1 > songs.length - 1) {
  return 0;
}
else {
  return currentSongIndex +1;
}  
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);

  return (
    <div className="App">
     <Player
     currentSongIndex={currentSongIndex}
     setCurrentSongIndex={setCurrentSongIndex}
     nextSongIndex={nextSongIndex}
     songs={songs}
      />
      
    </div>
  );
}


export default App;
