import { useState, useRef, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import './App.scss';
import { LoadingSpinner } from 'video-react';

function App() {
  const videoRef= useRef(null);
  const videoList = ['https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'http://www.w3schools.com/html/mov_bbb.mp4'];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [playerData, updatePlayerData] = useState('');
  const [showData, updateShowData] = useState(false);

  const getData = () => updatePlayerData(videoRef.current.getState().player);
  
  // useEffect(() => {
    
  //   const startIterval = (cb) => setInterval(cb, 500);
  //   const fetchPlayerData = () => {
  //     getData();
  //     if(playerData.ended){
  //       clearInterval(timer);
  //       LoadingSpinner()
  //     }
  //   };
  //   const timer = startIterval(fetchPlayerData);

  //   return () => clearInterval(timer);
  // });



  return (
    <div className="App">
      <div className="VideoPlayer">
        <VideoPlayer src={videoList[currentVideo]} videoRef={videoRef}/>
      </div>
      <div className="PlayerData">
        <table>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>

        {showData ? Object.keys(playerData).map(key => {
          const value = playerData[key];
          if (typeof value !== "object"){
            return (<tr key={key}>
              <td>{key}</td>
              <td>{String(playerData[key]).slice(0,20)}</td>
              </tr>
            );
          }
        }) : null} 
        <button onClick={() => updateShowData(!showData)}>showData</button>
        </table>
      </div>
    </div>
  );
}

export default App;
