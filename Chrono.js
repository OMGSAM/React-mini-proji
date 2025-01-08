import React, { useState, useRef } from 'react';

const Chrono = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [running, setRunning] = useState(false); // Tracks if the chrono is running
  const [laps, setLaps] = useState([]); // List of lap times
  const intervalRef = useRef(null); // Reference to store the interval

  // Start or pause the chronometer
  const handleStartPause = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10 ms
      }, 10);
    }
    setRunning(!running);
  };

  // Add a lap
  const handleLap = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };

  // Reset the chronometer
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  // Format the time to mm:ss:ms
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };
 
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Chronometer</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStartPause} style={{ marginRight: '10px' }}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleLap} style={{ marginRight: '10px' }} disabled={!running}>
        TOUR
      </button>
      <button onClick={handleReset}>Reset</button>
      {laps.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>TOURS</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                TOUR {index + 1}: {formatTime(lap)}
              </li>
            ))} 
          </ul>
        </div>
      )}

      <hr></hr>
        <hr></hr>
    </div>
  );
};

export default Chrono;
