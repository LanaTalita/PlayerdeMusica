
import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails  from './PlayerDetails';
import PlayerControls from './PlayerControls';

 

export default function Player(props) {
    const audioEl=useRef(null);
    const[isPlaying, setIsPlaying]=useState(false);


    useEffect (() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else {
            audioEl.current.pause();
        }
    });

    const SkipSong= (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length -1) {
                    temp=0;

                }

                return temp;

            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length -1;
                }

                return temp;

            });

        }

    }


    return (
        <div className="c-player">
<audio></audio>
<h4>Tocando agora</h4>
<audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
<PlayerDetails song={props.songs[props.currentSongIndex]}/>
<PlayerControls 
isPlaying={isPlaying} 
setIsPlaying={setIsPlaying}
SkipSong={SkipSong}/>
<p><strong>Próxima Música: </strong> 
{props.songs[props.nextSongIndex].title}  <br></br>
  {props.songs[props.nextSongIndex].artist} </p>
            </div>

    )
}
