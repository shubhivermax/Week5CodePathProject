import { useState, useEffect } from 'react';
import './App.css';

const TVMAZE_MAX_ID = 30000; // TVMaze has IDs up to ~30,000

function getRandomShowId() {
  return Math.floor(Math.random() * TVMAZE_MAX_ID) + 1;
}

function attributeIsBanned(show, banList) {
  // Check if any attribute value is in the ban list
  if (!show) return false;
  const { genres, language, network } = show;
  if (genres && genres.some(g => banList.includes(g))) return true;
  if (language && banList.includes(language)) return true;
  if (network && network.name && banList.includes(network.name)) return true;
  return false;
}

export default function App() {
  const [show, setShow] = useState(null);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRandomShow() {
    setLoading(true);
    setError(null);
    let tries = 0;
    while (tries < 10) {
      const id = getRandomShowId();
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        if (!data.image || attributeIsBanned(data, banList)) {
          tries++;
          continue;
        }
        setShow(data);
        setLoading(false);
        return;
      } catch (e) {
        tries++;
      }
    }
    setError('Could not find a show. Try again!');
    setLoading(false);
  }

  useEffect(() => {
    fetchRandomShow();
    // eslint-disable-next-line
  }, [banList]);

  function handleBan(attr) {
    if (!banList.includes(attr)) setBanList([...banList, attr]);
  }
  function handleUnban(attr) {
    setBanList(banList.filter(a => a !== attr));
  }

  return (
    <div className="App">
      <div className="main-content">
        <h1>Discover a TV Show!</h1>
        <button onClick={fetchRandomShow} disabled={loading}>
          {loading ? 'Loading...' : 'Discover'}
        </button>
        {error && <p style={{color:'red'}}>{error}</p>}
        {show && (
          <div className="show-card">
            <img src={show.image.medium} alt={show.name} style={{borderRadius:'8px'}} />
            <h2>{show.name}</h2>
            <div className="attributes">
              <div>
                <strong>Genres:</strong> {show.genres.map(g => (
                  <span key={g} className="attr" onClick={() => handleBan(g)}>{g} </span>
                ))}
              </div>
              <div>
                <strong>Language:</strong> <span className="attr" onClick={() => handleBan(show.language)}>{show.language}</span>
              </div>
              {show.network && (
                <div>
                  <strong>Network:</strong> <span className="attr" onClick={() => handleBan(show.network.name)}>{show.network.name}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="ban-list">
        <h3>Ban List</h3>
        {banList.length === 0 && <p>No bans yet. Click an attribute to ban it!</p>}
        {banList.map(attr => (
          <span key={attr} className="ban-item" onClick={() => handleUnban(attr)}>{attr} ❌ </span>
        ))}
      </div>
    </div>
  );
}
